Meteor.methods({
    toggleMenuItem: function(id, currentstate) {
        Goals.update(id, {
            $set: {
                inList: !currentstate
            }
        })
    }
});