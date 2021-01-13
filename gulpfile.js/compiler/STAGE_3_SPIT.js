/*
 Title: Compiler.Stage_3.SPITconst 
 Mach: 0.0.1 
 */

const { task } = require('gulp');
const run = require('gulp-run');



// upddate or create docs file & compile using @appnest/readme generate.
function STAGE_3_SPIT(cb, opts) {

    return run('@appnest/readme generate' + opts);

    cb();
}

task(STAGE_3_SPIT);
STAGE_3_SPIT.displayName = "stage:3";