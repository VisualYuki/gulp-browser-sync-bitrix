const gulp = require("gulp");
const server = require("browser-sync").create();

gulp.task("browser-sync", function () {
   server.init({
      proxy: "http://",
		port: 4000,
		open: false
   });
});

browserSync.watch(['public_html/css/style.css'], function (event, file) {
    if (event === "change" || event === "add") {
      browserSync.reload();
    }
  });

gulp.task("watch", function () {
    browserSync.watch(['public_html/css/style.css'], function (event, file) {
        if (event === "change" || event === "add") {
          browserSync.reload();
        }
      });
      
   gulp.watch("").on("change", server.reload);
});

gulp.task("default", gulp.parallel("browser-sync", "watch"));
