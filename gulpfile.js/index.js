const html = require("./html");
exports.html_diff = html.html_copy_diff;
exports.html = html.html_copy_all;
exports.ejs_diff = html.ejs_build_diff;
exports.ejs = html.ejs_build_all;

const script = require("./script");
exports.js = script.js;
exports.lib = script.lib;

const css = require("./css");
exports.css_diff = css.build_diff;
exports.css = css.build_all;

const img = require("./img")
exports.img_diff = img.build_diff;
exports.img = img.build_all;

const font = require("./font").font
exports.font = font;

const server = require("./server").server
exports.server = server;

const watch = require("./watch").watch
exports.watch = watch;

const { series } = require('gulp');
exports.all = series(html.html_copy_all, html.ejs_build_all, img.build_all, css.build_all, script.js, font);
exports.default = series(server, watch);