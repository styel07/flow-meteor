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

