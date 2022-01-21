"use strict";
var gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

var gulp = require("gulp");

gulp.task("sass", function () {
  return gulp
    .src("./src/sass/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./src/css"));
});

gulp.task("sass:watch", function () {
  gulp.watch("./src/sass/**/*.scss", gulp.series("sass"));
});
