const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// Função para compilar estilos
function styles() {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

// Função para otimizar imagens
function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

// Função para minificar scripts
function scripts() {
    return gulp.src('./src/script/**/*.js') // Corrigido para observar todos os arquivos JS
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('./dist/js'));
}

// Exportar a tarefa padrão
exports.default = gulp.parallel(styles, scripts, images);

// Função para observar mudanças
exports.watch = function() {
    gulp.watch('./src/styles/**/*.scss', gulp.parallel(styles));
    gulp.watch('./src/script/**/*.js', gulp.parallel(scripts)); // Adiciona observação para scripts
    gulp.watch('./src/images/**/*', gulp.parallel(images)); // Adiciona observação para imagens
};
