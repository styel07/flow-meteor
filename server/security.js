Posts.allow({
  'insert': function (userId,doc) {
    /* user and doc checks ,
    return true to allow insert */
    return (userId === Meteor.userId);
  },
  'update': function (userId,doc) {
    /* user and doc checks ,
    return true to allow update */
    return (userId === Meteor.userId);
  }
});

Meteor.users.allow({
  'update' : function(userId, doc) {
    return (userId === doc._id);
  }
});