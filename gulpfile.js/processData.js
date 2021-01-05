const { task } = require("gulp");

function processData(cb) {

    return null; 
    cb();
}
task(processData);
task.displayName = "process:data";