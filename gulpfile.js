const gulp = require('gulp');
const rigger = require('gulp-rigger');
const sass = require('gulp-sass');							//sass
const browserSync = require('browser-sync').create();//runtime watcher and changer
const clean = require('gulp-clean');						//cleaner product directory "dev"
const cleanCSS = require('gulp-clean-css');					//CSS minifier
const sourcemaps = require('gulp-sourcemaps');				//SCSS navigation in Chrome inspector
const rename = require('gulp-rename');						//rename files after minify
const concat = require('gulp-concat');						//concat for js
const terser = require('gulp-terser');						//minify for js
const autoprefixer = require('gulp-autoprefixer');			//cross-browser compatibility css
// const imagemin = require('gulp-imagemin');

const fontsFiles = [										//составляем массив переменних с все файлов шрифтов, для переноса в папку разработки
    './src/fonts/**.eot',
    './src/fonts/**.ttf',
    './src/fonts/**.woff',
    './src/fonts/**.woff2',
    './src/fonts/**.otf'
];

const imgFiles = [
    './src/image/**/**.*',
    './src/image/**/**.*'
];
const jsScript = [
    './src/js/jquery-3.4.1.min.js',
    './src/js/bootstrap.min.js',
    './src/js/slick.min.js'
];
const componentCss = [
    './src/scss/components/animate.css',
    './src/scss/components/slick.css',
    './src/scss/components/slick-theme.css',
    './src/scss/components/bootstrap.min.css'
];

function cleandev() {										//модуль отчистки папки перед каждой расспаковкой
    return gulp.src('./dist', {read: false})
        .pipe(clean())
}

function image() {											//модуль переноса картинок
    return gulp.src(imgFiles)
    // .pipe(imagemin())
        .pipe(gulp.dest('./dist/image'))
}

// function fonts() {											//Copy fonts to dir "dev"
//     return gulp.src(fontsFiles)
//         .pipe(gulp.dest('./dist/fonts'))
// }

function css() {
    return gulp.src(componentCss)
        .pipe(gulp.dest('./dist/css'))
}

function buildHtml(done) {
    gulp.src('./src/*.html') //Выберем файлы по нужному пу
        .pipe(rigger()) //Прогоним через rigger
        .pipe(gulp.dest('./'))//Выплюнем их в папку build
        .pipe(browserSync.stream());
    done();
}

function js() {
    return gulp.src(jsScript)
        .pipe(gulp.dest('./dist/js'))
}

function scripts() {
    return gulp.src('src/js/main.js')
        .pipe(terser({											//terser
            toplevel: true
        }))														//minify js
        .pipe(concat('main.js'))									//concat all js files
        .pipe(rename(function (path) {							// function of rename extname for .css
            path.extname = ".min.js";
        }))
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.stream());
}

function forSass() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', console.error.bind(console))
        .pipe(cleanCSS({level: 2}))								// minifyCSS
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],							// для браузеров которые использует 0.1%
            cascade: false
        }))
        .pipe(concat('style.css'))
        .pipe(rename(function (path) {							// function of rename extname for .css
            path.extname = ".min.css";
        }))
        .pipe(sourcemaps.write('./../css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({											// инструмент для live reload
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./src/**/*.html', buildHtml);
    gulp.watch('./src/**/*.scss', forSass);				// ставим watcher для слежения за изменениями в файлах
    gulp.watch('./src/**/*.js', scripts);
}

gulp.task('cleandev', cleandev);
gulp.task('buildHtml', buildHtml);
gulp.task('image', image);
gulp.task('scripts', scripts);
gulp.task('sass', forSass);
gulp.task('watch', watch);
// gulp.task('fonts', fonts);
gulp.task('build', gulp.series('cleandev', gulp.series(image, scripts, js, css, buildHtml, forSass)));
gulp.task('dev', gulp.series('build', watch));