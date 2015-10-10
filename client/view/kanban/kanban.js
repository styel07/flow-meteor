Template.dashboard.helpers({
  getToDo : function() {
    return Tickets.find({ columnId : 0 });
  }
});

Template.dashboard.helpers({
  getProgress : function() {
    return Tickets.find({ columnId : 1 });
  }
});

Template.dashboard.helpers({
  getDone : function() {
    return Tickets.find({ columnId : 2 });
  }
});

Template.dashboard.helpers({
  userWelcome : function() {
    return Meteor.user().emails[0].address;
  }
});

Template.dashboard.events({
  'click #profileButton' : function() {
    Router.go('/profile');
  }
});

Template.dashboard.events({
  'click #lessThan' : function() {
    // Checks if columnId is out of bound if it is not then decrement id by 1
    if (this.columnId !== 0) {
      Tickets.update(this._id, { $inc : {columnId : -1}});
    }
  }
});

Template.dashboard.events({
  'click #greaterThan' : function() {
    // Checks if columnId is out of bound if it is not then increment id by 1
    if (this.columnId !== 2) {
      Tickets.update(this._id, { $inc : {columnId : 1}});
    }
  }
});

Template.dashboard.events({
  'click #newTicketButton' : function() {
   Router.go('/ticket');
 }
});

// Ticket item Kanban

Template.ticketItem.events({
  'click #btnUpdate' : function(event, template) {
    console.log(template.find('#updatesTextbox').value);
    Tickets.update(this._id,{
        $push :{
          updates : template.find('#updatesTextbox').value,
        }
      }
    );
  },

  'click #delete_ticket' : function(event,template) {
    event.preventDefault();
    console.log('HERE!!!!!!!!!!!: ', this._id);
    Tickets.remove( { _id : this._id } );
  }
});