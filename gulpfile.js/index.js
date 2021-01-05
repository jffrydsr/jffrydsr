/*
  Title: Controller.Main
  Mach: 1.0.0
  Date: 1.4.2021
*/

const { task } = require("gulp");



function defaultTask(cb) {
    cb();
}

task(defaultTask); 
task.displayName = "";