const gulp = require("gulp");

// HTML
var minifyInline = require('gulp-minify-inline');
var htmlmin = require('gulp-htmlmin');

// Scale
var imageResize = require('gulp-image-resize');
var rename = require('gulp-rename');
// WebP
const webp = require('gulp-webp');

// Replacements
const replace = require('gulp-string-replace');



gulp.task('html', async function() {
  gulp.src('./*.html')
    .pipe(minifyInline())
    .pipe(htmlmin())
   // .pipe(replace(/\<img(.*?)src\=\"(.*?)\.(jpg|png)\"(.*?)\>/g, function(match, a, b, c, d) {
   //   return `<img${a}src="${b}.${c}" srcset="${b}-mobile.${c} 480w, ${b}.${c}" sizes="(max-width: 600px) 1920px, 3840px"${d}>`
   // }))
    .pipe(replace(/(\.png|\.jpg)/g, '.webp'))
    .pipe(gulp.dest('../'))
});

// gulp.task('scale', function () {
//   return gulp
//     .src('./**/*.png')
//     .pipe(
//       imageResize({
//         width: 960,
//         upscale: false,
//       })
//     )
//     .pipe(rename(function (path) { path.basename += "-mobile"; }))
//     .pipe(gulp.dest('../'))
// })

gulp.task('webp', () =>
    gulp.src('./**/*.{png,jpg}')
        .pipe(webp())
        .pipe(gulp.dest('../images/'))
);
