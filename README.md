# rushstackctix

* Run `nvm install 16.15.0` to install the appropriate NodeJS version (or use whatever method you want to install correct NodeJS version)
* Run `npm install -g @microsoft/rush` to install rush
* Run `node .\run-all-the-things.js` from the root directory (There's also an included launch config if using VS Code)

ctix outputs empty strings to stderr, which rush interprets as warnings and fails with code 1.
