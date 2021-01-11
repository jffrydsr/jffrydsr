/*
  Title: Compiler.Index
  Mach: 1.0.0 "MF DOOM"
  Date: 1.7.2021
*/


const { task, series, parallel } = require("gulp");

function defaultTask(cb) {
  console.log(0);
    cb();
}

task(defaultTask); 

defaultTask.displayName = "build:all";