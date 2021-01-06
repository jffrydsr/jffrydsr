const { task } = require('gulp');
const run = require('gulp-run');


function generateReadme(cb, opts) {
    return run('@appnest/readme generate' + opts);
    cb();
}

task(generateReadme);
task.displayName = "generate:readme";