let gulp = require('gulp');
let ts = require('gulp-typescript');
let tsProject = ts.createProject('tsconfig.json');
const less = require('gulp-less');
const merge = require('merge2');
const rename = require("gulp-rename");
const LessAutoprefix = require('less-plugin-autoprefix');
const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });


// gulp.task('default', function () {
//   return gulp.src('./radioAbandon/*.tsx')
//     .pipe(tsProject())
//     .js.pipe(gulp.dest('lib/radioAbandon'))
//     .dts.pipe(gulp.dest('lib/radioAbandon'))
// });

const tsConfig = {
    module: 'esnext',
    target: 'es5',
    lib: [
        'es6',
        'dom'
    ],
    sourceMap: false,
    jsx: 'react',
    moduleResolution: 'node',
    forceConsistentCasingInFileNames: true,
    noImplicitReturns: true,
    noImplicitThis: true,
    noImplicitAny: false,
    strictNullChecks: false,
    suppressImplicitAnyIndexErrors: false,
    noUnusedLocals: false,
    allowSyntheticDefaultImports: true,
    experimentalDecorators: true,
    noImplicitUseStrict: true,
    alwaysStrict: false,
    declaration: true,
}
gulp.task('default', function () {
    var tsResult = gulp.src('./radioAbandon/*.tsx')
        .pipe(ts(tsConfig));

    return merge([
        tsResult.dts.pipe(gulp.dest('lib/radioAbandon')),
        tsResult.js.pipe(gulp.dest('lib/radioAbandon'))
    ]);
});

gulp.task('index', function () {
    var tsResult = gulp.src('index.ts')
        .pipe(ts(tsConfig));

    return merge([
        tsResult.dts.pipe(gulp.dest('lib/')),
        tsResult.js.pipe(gulp.dest('lib/'))
    ]);
})

gulp.task('less', function () {
    return gulp.src('./radioAbandon/*.less')
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(gulp.dest('lib/radioAbandon'))
})