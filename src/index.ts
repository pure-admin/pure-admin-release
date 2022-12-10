import inquirer from "inquirer";
import { green } from "picocolors";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const utils = require("@pureadmin/utils");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const args = require("minimist")(process.argv.slice(2));

import simpleGit, { type SimpleGitOptions, type SimpleGit } from "simple-git";

const gitOptions: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
  binary: "git",
  maxConcurrentProcesses: 6
};

const log = (content: string | number | null | undefined) =>
  console.log(green(content));

const message: any = log(`
  🚀 Please select a version to publish: 
    ------------------------------
    | Small  | npm version patch |
    ------------------------------
    | Medium | npm version minor |
    ------------------------------
    |  Big   | npm version major |
    ------------------------------
`);

const getCwd = () => process.cwd();

const spawn = async (...args: any[]) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { spawn } = require("child_process");
  return new Promise<void>(resolve => {
    const proc = spawn(...args);
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
    proc.on("close", () => {
      resolve();
    });
  });
};

const command = async (name: string) => {
  const git: SimpleGit = simpleGit(gitOptions);
  const currentBranch = (await git.branch()).current;
  await spawn("npm", ["run", args._[0] ? args._[0] : "build"], {
    cwd: getCwd()
  });
  await spawn("npm", ["version", name], { cwd: getCwd() });
  await spawn("npm", ["publish", "--access", "public"], { cwd: getCwd() });
  utils.getPackageSize({
    callback: (size: string) => {
      log(
        ` 🎊 Congratulations on the successful release, 🕋 Total Package Size: ${size}`
      );
      spawn("git", ["push", "origin", currentBranch], { cwd: getCwd() });
      process.exit();
    }
  });
};

inquirer
  .prompt({
    type: "list",
    message,
    name: "Version",
    default: "Small",
    choices: ["Small", "Medium", "Big", "Exit"]
  })
  .then(async ({ Version }) => {
    switch (Version) {
      case "Small":
        await command("patch");
      case "Medium":
        await command("minor");
      case "Big":
        await command("major");
      case "Exit":
        process.exit();
    }
  });
