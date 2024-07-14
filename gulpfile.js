const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');




function styles() {
    return gulp.src('./src/styles/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe (gulp.dest('./dist/css'));
}
function images() {
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe (gulp.dest('./dist/images'));
}
function scripts() {
    return gulp.src('./src/script/*.js') // Seleciona todos os arquivos JS
        .pipe(uglify()) // Comprime os arquivos
        .pipe(rename({ extname: '.min.js' })) // Renomeia para .min.js
        .pipe(gulp.dest('./dist/js')); // Salva na pasta de destino
}

// Exportar a tarefa padrão
exports.default = gulp.parallel(styles, scripts, images);

// Função para observar mudanças
exports.watch = function() {
    gulp.watch('./src/styles/**/*.scss', gulp.parallel(styles));
    gulp.watch('./src/script/**/*.js', gulp.parallel(scripts)); // Adiciona observação para scripts
};