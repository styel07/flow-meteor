Template.dashboard.helpers({
  getAllTickets : function() {
    return Tickets.find();
  }
});

Template.dashboard.events({
  'click #newTicketButton' : function() {
   Router.go('/ticket');
 }
});