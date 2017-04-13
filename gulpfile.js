"use strict";

var autoprefixer = require("gulp-autoprefixer");
var browserify = require("browserify");
var buffer = require("vinyl-buffer");
var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sass = require("gulp-sass");
var source = require("vinyl-source-stream");
var sourcemaps = require("gulp-sourcemaps");
var watch = require("gulp-watch");

var paths = {
    src: {
        js: "src/js/**/*",
        scss: "src/scss/main.scss",
    },
    dst: {
        css: "static/css",
        js: "static/js",
    },
    watch: {
        scss: "src/scss/**/*.scss",
        js: "src/js/**/*.js",
    }
};

// Sass

gulp.task("sass", function() {
    return gulp.src(paths.src.scss)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on("error", sass.logError))
        .pipe(autoprefixer({
            browsers: ["> 1%", "ie >= 9"],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.dst.css));
});

gulp.task("watch-sass", [ "build" ], function() {
    gulp.watch(paths.watch.scss, ["sass"]);
});

// JS

gulp.task("js", function() {
    return browserify(paths.src.js.app)
        .bundle()
        .on("error", function(e) {
            gutil.log(e);
            this.emit("end");
        })
        .pipe(source("main.js"))
        .pipe(gulp.dest(paths.dst.js));
});

gulp.task("watch-js", [ "build" ], function() {
    return gulp.watch(paths.watch.js, ["js"]);
});


gulp.task("watch", [ "watch-sass", "watch-js" ]);
gulp.task("build", [ "sass", "js"]);
gulp.task("default", [ "watch" ]);