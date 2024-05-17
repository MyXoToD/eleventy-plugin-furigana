const furigana = require('./src/furigana');

module.exports = (eleventyConfig, options) => {
  eleventyConfig.addFilter('furigana', (content) => {
    const f = new furigana(content, options);

    return f.parse();
  });
}