var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Portifolio = new keystone.List('Portifolio', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Portifolio.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	heroImage: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 400 },
	},
});

Portifolio.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Portifolio.defaultColumns = 'title, heroImage';
Portifolio.register();
