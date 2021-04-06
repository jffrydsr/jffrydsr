const child = require("child_process");
const browserSync = require("browser-sync").create();
const gutil = require("gulp-util");
const siteRoot = "_site";

const { parallel, series } = require("gulp");

async function Jekyll(cb) {
  cb();
  const jekyll = child.spawn("bundle", [
    "exec",
    "jekyll",
    "build",
    "--watch",
    "--incremental",
    "--trace",
  ]);
}

const jekyllLogger = (buffer) => {
  buffer
    .toString()
    .split(/\n/)
    .forEach((message) => gutil.log("[Jekyll]: " + message));

  jekyll.stdout.on("data", jekyllLogger);
  jekyll.stderr.on("data", jekyllLogger);
};

async function Serve(cb) {
  cb();
  browserSync.init({
    files: [siteRoot + "/**"],
    open: false,
    port: 4000,
    server: {
      baseDir: siteRoot,
    },
  });
}

exports.serve = Serve;
exports.jekyll = Jekyll;
exports.default = series(Jekyll, Serve);
