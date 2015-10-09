Meteor.startup(function () {
  if (Tickets.find().count() === 0) {
    var names = [{title : "What is HTML?",
                  description : "WTF is HTML anyways..."
                 },
                 {title : "Why is the sky blue?",
                  description : "I mean I get people THINK it's blue but who's to say it's not green"
                 },
                 {title : "Does anyone else hate simple get started tutorials?",
                  description : "It seems like everyone of these starter tutorials makes it seems so easy and then I start to build something and can't figure anything out. Am I alone?"
                 }
                ];
    for (var i = 0; i < names.length; i++){
      Tickets.insert({title : names[i].title, description: names[i].description});
    }
  }
});