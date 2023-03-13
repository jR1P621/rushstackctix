#!/usr/bin/env node

import * as child_process from "child_process";

console.log("Invoking my-toolchain...");

child_process.execSync("tsc", { stdio: "inherit" });

console.log("Success!");
