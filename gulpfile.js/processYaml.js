const { task } = require("gulp");
const jaml = require('gulp-yaml');


function processYaml(opts, cb) {

    let { src, destination } = opts;

    try {
        gulp.src(src || './data/*.yaml')
            .pipe(jaml({ schema: 'DEFAULT_SAFE_SCHEMA' }))
            .pipe(gulp.dest(destination || './docs/'));

    }
    
    catch (e) {
        console.error(cb().toString());
    }
}

task(processYaml);
task.displayName = "process:yaml";