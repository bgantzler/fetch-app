import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { fetch } from 'fetch';

module('Acceptance | fetch', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /fetch', async function(assert) {
    await visit('/fetch');

    await fetch('dummy', {});
    assert.equal(currentURL(), '/fetch');
  });
});
