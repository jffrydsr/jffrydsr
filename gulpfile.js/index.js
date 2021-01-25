const { task } = require('gulp');

npm install stachedown



function jekyllServe(cb) {
    run('bundle exec jekyll serve').exec();
    cb();
}

task(jekyllServe);