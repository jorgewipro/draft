import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

let player = Ember.Object.create({
  firstname: 'test',
  lastname: 'test',
  age: 8,
  position: 'test',
  averagepositionagediff: 3,
  namebrief: 'test',
  league: 'test'
});

moduleForComponent('player-listing', 'Integration | Component | player listing', {
  integration: true
});

test('should display player details', function(assert) {
  this.set('playerObj', player);
  this.render(hbs`{{player-listing player=playerObj}}`);
  assert.equal(this.$('.col-md-4 h4').text(), 'test test', 'firstname: test')
});
