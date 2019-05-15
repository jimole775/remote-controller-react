var gulp = require('gulp');
var path = require('path');
var del = require('del');
var webpack = require('webpack-stream');
var config = require("./build/webpack.base.js");
// 清理js/css
// gulp.task('clean:webpack', function(done) {
//     del([
//         config.client.output.path,
//         config.server.output.path,
//     ], { force: true });
//     return done && done();
// });

gulp.task('build',function(done) {
        webpack(config, function(err, stats) {
            console.log("webpack runned!");
        });

        // webpack(config.server, function(err, stats) {
        // });

        return done&&done();
});

gulp.task('start',function(done) {

        webpack(config.client, function(err, stats) {
        });

        webpack(config.server, function(err, stats) {
        });

        return done&&done();
});


gulp.task('default',gulp.parallel('build'));