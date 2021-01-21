
const { task } = require('gulp');
const run = require('gulp-run');
const { readdir } = require('fs');

const getResources = (path, { opts }) => {

    try {
        let data = readdir(path); 
   }
}


function STAGE_2_EVAL(cb, DATA, TEMPLATES) {
    let _TEMPLATES = getResources()
    let _DATA = getResources(); 

    return [_DATA, _TEMPLATES];
}

task(STAGE_1_READ);


