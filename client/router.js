Router.configure({
  layoutTemplate : 'ApplicationLayout'
});

Router.route('/', function() {
  this.render('LandingPageLayout');
});

// Router.route('/', function() {
//   this.redirect('Login');
// });

// Router.route('Login', function() {
//   this.render('Login');
// });