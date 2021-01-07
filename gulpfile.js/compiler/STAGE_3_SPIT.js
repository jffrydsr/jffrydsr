/*
 Title: Compiler.Stage_3.SPITconst 
 Mach: 0.0.1 
 */

const { task } = require('gulp');
const run = require('gulp-run');


function STAGE_3_SPIT(cb, opts) {

    return run('@appnest/readme generate' + opts);

    cb();
}

task(STAGE_3_SPIT);
task.displayName = "stage:3";