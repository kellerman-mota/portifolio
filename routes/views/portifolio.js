var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'portifolio';

	view.query('portifolios', keystone.list('Portifolio').model.find().sort('sortOrder'));

	// Render the view
	view.render('portifolio');
};
