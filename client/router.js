Router.configure({
  layoutTemplate : 'ApplicationLayout'
});

Router.route('/', function() {
  if (!Meteor.userId()) {
    // if the user is not logged in, render the Login template
    this.render('LoginPage');
  } else {
    // otherwise don't hold up the rest of hooks or our route/action function
    // from running
 //  this.render('dashboard');
   Router.go('/dashboard');
  }
});

Router.route('/dashboard', function() {
  if (!Meteor.userId()) {
    // if the user is not logged in, render the Login template
    Router.go('/');
  } else {
    // otherwise don't hold up the rest of hooks or our route/action function
    // from running
    this.render('dashboard');
  }
});

Router.route('/ticket', function() {
  if (!Meteor.userId()) {
    // if the user is not logged in, render the Login template
    Router.go('/');
  } else {
    // otherwise don't hold up the rest of hooks or our route/action function
    // from running
    this.render('newTicket');
  }
});

Router.route('/profile', function() {
  if (!Meteor.userId()) {
    // if the user is not logged in, render the Login template
   Router.go('/');
  } else {
    // otherwise don't hold up the rest of hooks or our route/action function
    // from running
    this.render('userProfile');
  }
});

// Router.route('/ticket', { name : 'newTicket'});

// Router.route('/profile', { name : 'userProfile'});

