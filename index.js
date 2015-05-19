#!/usr/bin/env node

/**
 * index.js
 *
 * for `character-map` command
 */

var opts = require('minimist')(process.argv.slice(2));
var opentype = require('opentype.js');

if (!opts.f || typeof opts.f !== 'string') {
	console.log('use -f to specify your font path, TrueType and OpenType supported');
	return;
}

opentype.load(opts.f, function(err, font) {
	if (err) {
		console.log(err);
		return;
	}

	if (!font.glyphs || font.glyphs.length === 0) {
		console.log('no glyphs found in this font');
		return;
	}

	var table = '';
	font.glyphs.forEach(function(glyph) {
		if (!glyph.unicode) {
			return;
		}

		table += String.fromCharCode(glyph.unicode);
	});

	console.log(table);
});
