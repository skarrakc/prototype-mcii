Meteor.publish('Goals', function() {
    return Goals.find({ author: this.userId });
});