const { task } = require('gulp');
const run = require('gulp-run');

// take Stage_1 data and transform using Stachedown & validate.
function STAGE_2_EVAL(cb, opts) {
    return run('@appnest/readme generate' + opts);
    cb();
}


// single task export. 
task(STAGE_1_READ);
STAGE_1_READ.displayName = "stage:1";