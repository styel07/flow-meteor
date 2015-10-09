//Add event listemer to newTickets
//Once clicked invoke a function that pushes ticket information to our db
Template.newTicket.events({
  'click #Submit' : function(event, template) {
    Tickets.insert({
      title : template.find('#title').value,
      description : template.find('#description').value,
      columnId : 0
    });
  }
});

Template.ticketItem.events({
  'click #delete_ticket' : function(event,template) {
    event.preventDefault();
    console.log('HERE!!!!!!!!!!!: ', this._id);
    Tickets.remove( { _id : this._id } );
  }
});