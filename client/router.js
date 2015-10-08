Router.configure({
  layoutTemplate : 'ApplicationLayout'
});

Router.route('/', function() {
  this.render('LandingPageLayout');
});

Router.route('/home', function() {
  this.render('kanbanLayout');
});
