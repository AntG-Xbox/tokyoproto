Prototype code for Tokyo project using Angular 2 (RC), Ionic 2 (Beta), and TypeScript 2 (RC)

Getting Started
You'll need to install Node.js in order to get access to NPM:
https://nodejs.org/dist/v6.5.0/node-v6.5.0-x64.msi

Visual Studio Code is the editor I recommend on Windows:
https://code.visualstudio.com/Docs/?dv=win

Install a Git Client for Windows so that you can get access to git.exe at your commandline:
https://github.com/git-for-windows/git/releases/download/v2.10.0.windows.1/Git-2.10.0-64-bit.exe

Clone this repo into a new project folder (e.g., my-proj):
git clone  https://github.com/antg-xbox/tokyoproto  my-proj
cd my-proj

After you clone the repo run the following from the root (with admin privileges):
npm install
npm start

The npm start command first compiles the application, then simultaneously re-compiles and runs the lite-server. Both the compiler and the server watch for file changes.
Shut it down manually with Ctrl-C.

Selenium is required for test automation. You can install it via:
npm run webdriver:update

To commit your changes:
git add .
git commit -m "your commit message"
git push -u origin master