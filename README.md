
character-map
=============

[![npm version][npm-image]][npm-url]

A simple command line tool for dumping a UTF-8 string of characters supported by a font file.


# Motivation

Unicode fonts are usually too large to be embedded as webfont: subsetting is necessary to get them into a reasonable size, especially for CJK fonts.

But which ones do you subset to ensure your design look consistent? There are 2 major approaches:

- **Dynamic subsetting**: using javascript and server-side api to generate a dynamic subset of your font, covering all characters on your webpage.
- **Static subsetting**: prepare a list common characters, subset them manually, and use such font only for certain elements on webpage.

I prefer the latter approach, because it's a lot easier to optimize and has less of an impact to performance.

And Apple agrees, their sites for [China Mainland](http://www.apple.com/cn/environment/), [Hong Kong](http://www.apple.com/hk/environment/) and [Japan](http://www.apple.com/jp/environment/) all use this approach.

But I wonder what characters they pick for their CJK subsets?

`character-map` to the rescue!


# Install

`npm install character-map -g`


# Usage

TrueType, OpenType, WOFF v1 files are supported at the moment.

```
$ character-map -f my.ttf > map.txt
```

`map.txt` will contain a list of characters found in the font. Now you can use this result with a subsetting tool like [fontmin](https://github.com/ecomfe/fontmin).

```
$ fontmin -t `cat map.txt` other.ttf > subset.ttf
```

Of course you can verify the result with `character-map` again.


# License

MIT


# Acknowledgement

Inspired by [CharacterMap](https://github.com/bluejamesbond/CharacterMap) and uses [opentype.js](https://github.com/nodebox/opentype.js).


[npm-image]: https://img.shields.io/npm/v/character-map.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/character-map
