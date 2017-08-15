import { test } from 'qunit';
import moduleForAcceptance from 'draft/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list players');

test('should show players as the home page', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/players', 'should redirect automatically');
  });
});

test('should list available players.', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(find('.listing').length, 12, 'should see 12 listings');
  });

});

test('should filter the list of players by name.', function (assert) {
});

test('should show details for a selected player', function (assert) {
});
