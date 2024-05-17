module.exports = class Furigana {
  content = '';
  options = {};
  defaultOptions = {
    class: 'furigana',
    regex: /([\u4E00-\u9FAF\u3040-\u3096\u30A1-\u30FA\uFF66-\uFF9D\u31F0-\u31FF]{1})\[(.*?)\]/g,
    verbose: false
  };
  pluginName = 'Eleventy-Plugin-Furigana';
  logPrefix = `[\x1b[32m${this.pluginName}\x1b[0m]`;

  constructor(content, options = {}) {
    this.content = content;
    this.options = options;

    this.initOptions();

    this.log('Initialized.');
  }

  log(message) {
    if (this.options.verbose) {
      console.log(this.logPrefix, message);
    }
  }

  initOptions() {
    this.options = Object.assign({}, this.defaultOptions, this.options);
  }
  
  parse() {
    if (typeof this.content !== 'string') {
      return '';
    }
    this.log('Content parsed.');
    return this.content.replace(this.options.regex, `<ruby${this.options.class != '' ? ' class="'+this.options.class+'"' : ''}>$1 <rp>(</rp><rt>$2</rt><rp>)</rp></ruby>`);
  }
}