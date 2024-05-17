const Furigana = require('../src/furigana');

test('Passing HTML string', () => {
  const f = new Furigana('<p>私[わたし]</p>');

  expect(f.parse()).toBe(`<p><ruby${f.options.class != '' ? ' class="'+f.options.class+'"' : ''}>私 <rp>(</rp><rt>わたし</rt><rp>)</rp></ruby></p>`);
});

test('Passing HTML string without kanji and hiragana', () => {
  const f = new Furigana('<p>Hello World</p>');

  expect(f.parse()).toBe('<p>Hello World</p>');
});

test('Passing no options, check defaultOptions present', () => {
  const f = new Furigana('Hello World');

  expect(f.options).toEqual(f.defaultOptions);
});

test('Check verbose option', () => {
  const f = new Furigana('Hello World', {
    verbose: true
  });

  expect(f.options).toEqual(
    expect.objectContaining({
      verbose: true
    })
  );
});

test('Passing an empty string', () => {
  const f = new Furigana('');

  expect(f.parse()).toBe('');
});

test('Passing an object as the content', () => {
  const f = new Furigana({});

  expect(f.parse()).toBe('');
});

test('Add custom class via options', () => {
  const f = new Furigana('私[わたし]', {
    class: 'foobar'
  });

  expect(f.parse()).toBe('<ruby class="foobar">私 <rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>');
});

test('Add empty custom class via options', () => {
  const f = new Furigana('私[わたし]', {
    class: ''
  });

  expect(f.parse()).toBe('<ruby>私 <rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>');
});