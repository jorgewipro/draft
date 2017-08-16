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
    assert.equal(find('.row').length, 13, 'should see 13 listings');
  });

});

// test('should filter the list of players by name.', function (assert) {
//   visit('/');
//  fillIn('.form-control input', 'Consuelo');
//  keyEvent('.form-control input', 'keyup', 69);
//  andThen(function() {
//    assert.equal(find('.col-md-4 h4').length, 1, 'should show 1 listing');
//    assert.equal(find('.col-md-4 h4 :contains("Consuelo")').length, 1, 'should contain 1 listing with name Consuelo"');
//  });
// });
