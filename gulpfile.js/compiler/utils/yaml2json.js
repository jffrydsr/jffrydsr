const { task } = require("gulp");
const jaml = require('gulp-yaml');


function convertYaml(opts, cb) {

    let { src, destination } = opts;

    try {
        gulp.src(src || './data/*.yaml')
            .pipe(jaml({ schema: 'DEFAULT_SAFE_SCHEMA' }))
            .pipe(gulp.dest(destination || './docs/.data'));
    }
    
    catch (e) {
        console.error(cb().toString());
    }
}

task(convertYaml);
task.displayName = "convert:yaml";