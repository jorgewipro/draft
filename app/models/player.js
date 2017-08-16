import DS from 'ember-data';

export default DS.Model.extend({
  firstname: DS.attr(),
  lastname: DS.attr(),
  age: DS.attr(),
  position: DS.attr(),
  averagepositionagediff: DS.attr(),
  namebrief: DS.attr(),
  league: DS.attr(),
});
