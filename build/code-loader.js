/**
 * Created by Viljar on 31.01.2017.
 * Loader to generate code samples of html wrapped in <code> tags
 */


let blockLoader = require("./block-loader");
let options = {
	start: "<code webpack>",
	end: "</code>",
	process: function parsePreBlocks(pre) {
		let realCode = pre
			.replace(options.start, '')   // first, remove the start/end delimiters, then:
			.replace(options.end, '')

		let replaced = trimWhitespace(escapeHtml(realCode));

		// done! return with the delimiters put back in place
		return realCode + "<ig-code>" + replaced + "</ig-code>";
	}
};

let escapeHtml = function escapeHtml(unsafe) {
	return unsafe
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;")
};

let trimWhitespace = function trimWhitespace(code) {
	let lines = code.split('\n');
	if (lines.length && lines[0] == "") {
		lines.splice(0, 1);
	}
	let matches;
	let indentation = (matches = /^\s+/.exec(lines[0])) != null ? matches[0] : null;
	if (!!indentation) {
		lines = lines.map(function (line) {
			return line.replace(indentation, '');
		});
		code = lines.join('\n').trim();
	}
	return code
};

module.exports = blockLoader(options);
