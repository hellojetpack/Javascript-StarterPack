import test from 'tape';
import jsdom from 'jsdom';
import fs from 'fs';

test('First test', (assert) => {
  const msg = 'Should pass';
  const expected = true;
  const actual = true;
  assert.same(actual, expected, msg);
  assert.end();
});

test('Hmtl', (assert) => {
  const msg = 'Should say Starter Pack presented by HelloJetpack';
  const index = fs.readFileSync('./src/index.html', 'utf-8');

  jsdom.env(index, (err, window) => {
    const actual = window.document.getElementsByTagName('h1')[0].innerHTML;
    const expected = 'Starter Pack presented by HelloJetpack';
    assert.same(actual, expected, msg);
    window.close();
    assert.end();
  });
});
