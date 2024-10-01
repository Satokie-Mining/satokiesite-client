/* eslint-disable prettier/prettier */
import * as semver from 'semver';
import fs from 'fs';
const requiredVersion = '^18';

const currentVersion = process.version;
if (!semver.satisfies(currentVersion, `${requiredVersion}`)) {
  fs.rmSync('node_modules', { recursive: true, force: true });
  fs.rmSync('package-lock.json');
  console.error(
    `Error: Node.js version ${currentVersion} is not compatible with this application. Please install Nodejs version: ${requiredVersion} to install required packages. Exiting install process...`
  );
  process.exit(1);
}
