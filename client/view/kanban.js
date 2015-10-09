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

Template.dashboard.events({
  'click #newTicketButton' : function() {
   Router.go('/ticket');
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