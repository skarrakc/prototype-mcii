Template.goal.events ({
    'click .toggle-menu': function() { 
        Meteor.call('toggleMenuItem', this._id, this.inList);
    },
    'click .notify': function() {    
        var aspects = [];
        _.each(this.positive_aspects, function(asp) {
            aspects.push(asp.name);
        });
        var options = {
            body: `Do not forget that "${this.goal_name}" will allow you to "${aspects[0]}"`,
        };
        Meteor.call('notifyMe', options);
    }
});