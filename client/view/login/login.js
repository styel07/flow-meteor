// logs user out and redirects them to login page
Template.userProfile.events({
  'click #logout' : function() {
    Router.go('/');
    Meteor.logout();
  }
});

// on login redirects the user to the dashboard
Accounts.onLogin(function() {
  Router.go('/dashboard');
});


// Template.posts.rendered = function(){

// };

// Template.posts.created = function(){

// };

// Template.posts.destroyed = function(){

// };

//adds event to logout button that allows users to logout

// Template.login.events({
//   'submit form' : function (e, t) {
//     e.preventDefault();

//     username = $(e.target).find('#accounts-username').val(),
//     password = $(e.target).find('#accounts-password').val()

//     Meteor.loginWithPassword(username, password, function(error) {
//       if (error) {
//         console.log('error', error);
//         throwError(error.reason);
//       } else {
//         if (Meteor.user().profile.role === "admin") {
//           // console.log("admin login");
//           Router.go("adminChoice");
//         } else if (Meteor.user().profile.role === "tester") {
//           console.log("tester login");
//           Router.go("agentInfo");
//         }
//       };

//     });

//   }
// });

// Template.posts.helpers({
//   postings : function(){
//     return Posts.find({}, {sort: {score: -1, name: 1}});
//   }
// });

//binds data to text html
// Template.loginButtons.helpers({
//   postings : function() {
//     return Posts.find({}, {sort: {score: -1, name: 1}});
//   }
// });

// Template.post.events({
//   'click a.upvote' : function(event, template) {
//     event.preventDefault();
//     Posts.update(this._id, {$inc : {score: 1}});
//   },
//   'click a.downvote' : function(event, template) {
//     event.preventDefault();
//     Posts.update(this._id, {$inc : {score: -1}});
//   }
// });