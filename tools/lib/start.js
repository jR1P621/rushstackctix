#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process = require("child_process");
console.log("Invoking my-toolchain...");
child_process.execSync("tsc", { stdio: "inherit" });
console.log("Success!");
//# sourceMappingURL=start.js.map