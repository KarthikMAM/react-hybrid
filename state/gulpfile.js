var gulp = require("gulp");
var babel = require("gulp-babel");
var eslint = require("gulp-eslint");
var shell = require("gulp-shell");

gulp.task("clean", function () {
  return gulp.src("dist", { read: false })
    .pipe(shell("rm -r dist", { ignoreErrors: true, quiet: true }));
});

gulp.task("lint:fix", function () {
  return gulp
    .src("src/**/*.js")
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format())
    .pipe(gulp.dest("src"));
});

gulp.task("build", function () {
  return gulp
    .src("src/**/*.js")
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(babel({ presets: ["es2015"] }))
    .pipe(gulp.dest("dist"));
});

gulp.task("build:clean", ["clean", "build"]);

gulp.task("build:watch", ["build:clean"], function () {
  return gulp
    .watch("src/**/*.js", ["build"]);
});

