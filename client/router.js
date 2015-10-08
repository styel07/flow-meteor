Router.configure({
  layoutTemplate : 'ApplicationLayout'
});

Router.route('/', function() {
  this.render('LoginPage');
});

Router.route('/dashboard', function() {
  this.render('dashboard');
});
