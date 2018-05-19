import Component from '@ember/component';

export default Component.extend({
  classNames: ['list-filter'],
  value: '',

  init() {
    this._super(...arguments);
    this.get('filter')('').then(allResults => this.set('results', allResults.results));
  },

  actions: {
    handlerFilterEntry() {
      let filterInputValue = this.get('value');
      let filterAction = this.get('filter');

      filterAction(filterInputValue)
        .then(filteredResults => {
          if (filteredResults.query === this.get('value'))
            this.set('results', filteredResults.results);
        });
    }
  }
});
