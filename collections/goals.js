Goals = new Mongo.Collection('goals');

Goals.allow({
  insert: (userId, doc) => { return !!userId; },
  update: (userId, doc) => { return !!userId; }

});

const Schemas = {};

challenge = new SimpleSchema({
  obstacle: { type: String,
              autoform: { rows:2 },
            },
  intention: { type: String,
               autoform: { rows:2 },
             },
});

Schemas.Goals = new SimpleSchema({

  createdAt: {
    type: Date,
    autoValue: function() {
        return new Date()
    },
    autoform: {
        type: 'hidden',
    },
  },
  author: { 
    type: String,
    autoValue: function() {
        return this.userId
    },
    autoform: {
      type: 'hidden',
    },
  },
  inMenu: {
      type: Boolean,
      defaultValue: false,
      optional: true,
      autoform: {
        type: 'hidden',
      },
  },
  goal_name: { type: String },
  positive_aspects: { type: String },
  challenges: { type: [challenge] },
      
});

Meteor.methods({
    toggleMenuItem: function(id, currentstate) {
        Goals.update(id, {
            $set: {
                inMenu: !currentstate
            }
        })
    },
    deleteGoal: function(id) {
        Goals.remove(id);
    }
});

Goals.attachSchema(Schemas.Goals);

