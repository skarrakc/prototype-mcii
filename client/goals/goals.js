Template.goals.onCreated (function() { 
    this.autorun(()=> {
        this.subscribe('Goals');
    });
});
    
Template.goals.helpers ({
    goalsOption: ()=> { 
        return Goals.find({});
    }
});

Template.goals.events ({ 
   'click .new-goal': function() { 
       Session.set('newGoal', true);
    }
});
    