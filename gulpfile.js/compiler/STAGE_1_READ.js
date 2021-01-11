const { task } = require('gulp');
const run = require('gulp-run');


function STAGE_1_READ(cb, opts) {
    return run('@appnest/readme generate' + opts);
    cb();
}

task(STAGE_1_READ);
STAGE_1_READ.displayName = "stage:1";