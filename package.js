Package.describe({
summary : "GSGD's jQuery easing plugin for Meteor"
});

Package.on_use(function(api) {
api.use('jquery', 'client');
api.add_files([
	'lib/js/jquery.easing.js'
], 'client');
});
