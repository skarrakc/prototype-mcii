Template.goal.events ({
    'click .toggle-menu': function() { 
        Meteor.call('toggleMenuItem', this._id, this.inList)
    }
});