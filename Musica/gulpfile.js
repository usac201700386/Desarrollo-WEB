const {series,parallel, src, dest, watch}=require('gulp');
var sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const notify= require('gulp-notify');
const webp= require('gulp-webp');
const concat=require('gulp-concat')

//Utilidades CSS

const autoprefixer =require('autoprefixer');
const postcss=require('gulp-postcss');
const cssnano=require('cssnano');
const soourcemaps=require('gulp-sourcemaps')

//Utiliades JS
const terser=require('gulp-terser-js');
const rename=require('gulp-rename');
//Funcion que Compila SASS
const paths={
    js:'src/js/**/*.js'
}
function css(){
    return src('./src/scss/app.scss')
    .pipe(soourcemaps.init())// realiza un mapeo de la fuente de archivo de SASS
        .pipe(sass({//outputStyle:'expanded'
    }))
        .pipe(postcss( [autoprefixer(),cssnano()]))
        .pipe(soourcemaps.write('.'))// Escribe la direccion que dio el origen del nuevo archivo
        .pipe(dest('./build/css'))
}

function watchArchivos(){
    watch('./src/scss/**/*.scss',css);
    watch(paths.js,javascript);
    
}
function javascript(){
    return src(paths.js)
        .pipe(soourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(terser())
        .pipe(soourcemaps.write('.'))
        .pipe(rename({suffix:'.min'}))
        .pipe(dest('./build/js'))
    }


function imagenes(){
    return src('./src/img/**/*')
    .pipe(imagemin())
    .pipe(dest('./build/img'))
    .pipe(notify({message: 'Imagen minimizada'}))
}

function versionwebp(){
    return  src('./src/img/**/*')
    .pipe(webp())
    .pipe(dest('./build/img'))
    .pipe(notify({message: 'Versrion WEBP'}))

}
exports.css=css;
exports.imagenes=imagenes;
exports.javascript=javascript;
exports.watchArchivos=watchArchivos;

exports.default=parallel(css,javascript,imagenes,versionwebp,watchArchivos);