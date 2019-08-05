var gulp = require('gulp')
var minimist = require('minimist')
const copyFunc = function (from, to) {
  console.log('copy start...')
  const ret = gulp.src(from).pipe(gulp.dest(to))
  console.log('copy finished!')
  return ret
}
gulp.task('newpage', function () {
  // gulp -f xxx.js newpage --name folderName
  // npm run newpage folderName
  const name = minimist(process.argv.slice(2)).name
  console.log('....process.argv', process.argv)
  if (typeof name == 'string') {
    return copyFunc('_template/**', name)
  } else {
    throw new Error(
      'missing param of folder name, plz try use `npm run newpage <your folder name>` again',
    )
  }
})