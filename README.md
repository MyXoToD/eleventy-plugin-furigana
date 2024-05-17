# eleventy-plugin-furigana

[Eleventy](https://11ty.dev) plugin that adds a filter to parse content for kanji followed by `[]`-brackets containing hiragana and converts it to furigana.

![NPM Version](https://img.shields.io/npm/v/@myxotod/eleventy-plugin-furigana.svg) ![NPM Downloads](https://img.shields.io/npm/d18m/%40myxotod%2Feleventy-plugin-furigana) ![npm bundle size (scoped version)](https://img.shields.io/bundlephobia/min/%40myxotod/eleventy-plugin-furigana/1.0.0)

## Usage

Install this package

```sh
npm install --save-dev @myxotod/eleventy-plugin-furigana
```

Add and register the plugin inside your `.eleventy.js` config file

```js
// .eleventy.js
const furigana = require("@myxotod/eleventy-plugin-furigana");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(furigana);
};
```

Finally use it in your code with the `furigana`-filter

```html
{{ content | furigana | safe }}
```

## Example

```html
{{ '<p>私[わたし]<p>' | furigana | safe }}

<!-- will become -->

<p><ruby>私 <rp>(</rp><rt>わたし</rt><rp>)</rp></ruby></p>
```

## Options

You can pass several options when adding the plugin in your eleventy config file like so:

```js
eleventyConfig.addPlugin(furigana, {
  verbose: false
});
```

|Option|Default|Type|Description|
|---|---|---|---|
|`class`|`furigana`|String|Provide a custom class for the surrounding `<ruby>` tag|
|`regex`|`/([\u4E00-\u9FAF\u3040-\u3096\u30A1-\u30FA\uFF66-\uFF9D\u31F0-\u31FF]{1})\[(.*?)\]/g`|Regex Pattern|Pattern to parse kanji|
|`verbose`|`false`|Boolean|Output additional data to your terminal when an eleventy build happens|

## License

[MIT](https://github.com/MyXoToD/eleventy-plugin-readingtime/blob/main/LICENSE) @ [Maximilian Boll](https://www.makkusu.dev)