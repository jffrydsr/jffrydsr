/*
  Mach: 1.0.0
  Date: 1.4.2021
*/

const { task } = require('gulp');
const run = require('gulp-run');

const command = 'echo ✅ default task executed!';

function generateReadme(cb, opts) {
    cb();
    return run('@appnest/readme generate' + opts);
}

task(generateReadme);
task.displayName = "generate:readme";

function defaultTask(cb) {
    cb();
    return run(command).exec();
}
