import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('habit-dashboard', 'Integration | Component | habit dashboard', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{habit-dashboard}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#habit-dashboard}}
      template block text
    {{/habit-dashboard}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
