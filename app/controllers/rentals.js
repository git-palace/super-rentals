import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		filterByCity(param) {
			if ( param !== '' ) {
				return this.get('store')
					.query('rental', {'city': param}).then(results => {
						return { query: param, results: results };
					});
			}

			return this.get('store')
				.findAll('rental').then(results => {
					return { query: param, results: results };
				});
		}
	}
});
