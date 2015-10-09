Router.configure({
  layoutTemplate : 'ApplicationLayout'
});

Router.route('/', function() {
  this.render('LoginPage');
});

Router.route('/dashboard', function() {
  this.render('dashboard');
});

Router.route('/ticket', { name : 'newTicket'});

Router.route('/profile', { name : 'userProfile'});