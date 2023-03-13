#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process = require("child_process");
child_process.execSync("ctix create -p ./tsconfig.json -w --startAt src --noBackup --useComment", { stdio: "inherit" });
console.log("Finished Indexing");
//# sourceMappingURL=index.js.map