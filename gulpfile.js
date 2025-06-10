const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');  // Para minificar JS
const babel = require('gulp-babel');  // Para transpilar JS com Babel

// Tarefa para processar imagens
gulp.task('images', () => {
    return gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

// Tarefa para compilar SASS
gulp.task('sass', () => {
    return gulp.src('src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

// Tarefa para processar JavaScript
gulp.task('scripts', () => {
    return gulp.src('src/js/**/*.js')  // Alterar se necessário para o diretório correto
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))  // Transpila o JS moderno (se necessário)
        .pipe(uglify())  // Minifica o JavaScript
        .pipe(gulp.dest('dist/js'));
});

// Tarefa para monitorar arquivos
gulp.task('watch', () => {
    gulp.watch('src/styles/**/*.scss', gulp.series('sass'));
    gulp.watch('src/images/**/*', gulp.series('images'));
    gulp.watch('src/js/**/*.js', gulp.series('scripts'));  // Monitorando JS também
});

// Tarefa default
exports.default = gulp.series(
    gulp.parallel('sass', 'images', 'scripts'),  // Adiciona 'scripts' na série de tarefas
    'watch'
);
