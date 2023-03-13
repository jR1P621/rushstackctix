#!/usr/bin/env node

var exec = require("child_process").exec;

function runCmd(command) {
  let proc = exec(command.cmd);
  return new Promise((resolveFunc) => {
    proc.stdout.on("data", (x) => {
      let xStr = x.toString();
      process.stdout.write(xStr);
      if (!command.stdout) {
        command.stdout = xStr;
      } else {
        command.stdout += xStr;
      }
    });
    proc.stderr.on("data", (x) => {
      let xStr = x.toString();
      if (xStr.toLowerCase().includes(["debugger"])) {
        return;
      }
      process.stderr.write(xStr);
      if (!command.stderr) {
        command.stderr = xStr;
      } else {
        command.stderr += xStr;
      }
    });
    proc.on("exit", (code) => {
      resolveFunc((command.code = code));
    });
  });
}

const commands = [
  { cmd: "rush update" },
  { cmd: 'rush build -o "@this/tools"' },
  { cmd: "rush index" },
  { cmd: "rush build" },
];

function outputResult(command) {
  if (IsGoodResult(command)) {
    console.log(
      "\x1b[42m\x1b[30m%s: %s (%s)\x1b[0m",
      command.cmd,
      "PASSED",
      command.code
    );
  } else {
    console.log(
      "\x1b[41m\x1b[30m%s: %s (%s)\x1b[0m\n\x1b[31m%s\x1b[0m",
      command.cmd,
      "FAILED",
      command.code,
      command.stderr
    );
  }
}

function IsGoodResult(command) {
  return command.code === 0;
}

async function main() {
  for (const command of commands) {
    console.log("\x1b[46m\x1b[30m%s: %s\x1b[0m", "STARTING", command.cmd);

    await runCmd(command);
    outputResult(command);
    if (!IsGoodResult(command)) {
      break;
    }
  }
  console.log("\x1b[46m\x1b[30m%s:\x1b[0m", "RESULTS");
  for (const command of commands) {
    outputResult(command);
  }
}

main();
