#!/usr/bin/env node

import * as child_process from "child_process";

child_process.execSync(
  "ctix create -p ./tsconfig.json -w --startAt src --noBackup --useComment",
  { stdio: "inherit" }
);

console.log("Finished Indexing");
