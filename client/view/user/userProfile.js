// On click the user sends his edit and updates the data on the DB
Template.userProfile.events({
  'click #userSubmit' : function(event, template) {
    event.preventDefault();
    //Updates the profile information based on the email and password input
    console.log('HELO',template.find('#emails').value);
    Meteor.users.update(
      Meteor.userId(),
        { $set :
          {
            'emails.0.address' : template.find('#emails').value
          }
          //  password : template.find('#password').value
        });
    Router.go('/dashboard');

  }
});

Template.userProfile.helpers({
  userEmail : function() {
    return Meteor.user().emails[0].address;
  }
});

Template.userProfile.events({
  'click #logout' : function() {
    Router.go('/');
  }
})