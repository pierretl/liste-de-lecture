const gulp =  require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const mode = require('gulp-mode')();
const browserSync = require('browser-sync').create();


// compilation pour la dev
function dev(){
    // Emplacement des fichiers .scss
    return gulp.src('./scss/style.scss')
    // Source map
        .pipe(mode.development( sourcemaps.init() ))
    // Passer ces fichiers au compilateur + si erreur affiche les log
        .pipe(sass().on('error', sass.logError))
    // Préfixer automatiquement les propriétés nécessaire
        .pipe(prefix('last 2 versions'))
    // Minifier
        .pipe(minify())
    // Source map
        .pipe(mode.development( sourcemaps.write() ))
    // Emplacement du fichier .css généré
        .pipe(gulp.dest('./'))
    // changements de flux pour tous les navigateurs
        .pipe(mode.development( browserSync.stream() ));
}

// watch
function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', dev);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

// Compilation pour la prod
function build(){
    // Emplacement des fichiers .scss
    return gulp.src('./scss/style.scss')
    // Passer ces fichiers au compilateur + si erreur affiche les log
        .pipe(sass().on('error', sass.logError))
    // Préfixer automatiquement les propriétés nécessaire
        .pipe(prefix('last 2 versions'))
    // Minifier
        .pipe(minify())
    // Emplacement du fichier .css généré
        .pipe(gulp.dest('./'));
}


exports.watch = watch;
exports.build  = build;