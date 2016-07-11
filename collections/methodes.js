Meteor.methods({
    toggleMenuItem: function(id, currentstate) {
        Goals.update(id, {
            $set: {
                inList: !currentstate,
            }
        });
    },
    
/*    notifyMe: function(options) { 

        perm = notify.permissionLevel();
        if (perm == notify.PERMISSION_DEFAULT) {
           notify.requestPermission();    
        } else if (perm == notify.PERMISSION_GRANTED) {
            var notif = new Notification('GoalBook',options);;
        }
    }
*/
});