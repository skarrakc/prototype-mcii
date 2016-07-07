FlowRouter.route('/', {
  name: 'home',
  action() {
    if (Meteor.userId()) {
      FlowRouter.go('goal-book');
    }
    BlazeLayout.render('HomeLayout');
  },
});

FlowRouter.route('/new-goal', {
  name: 'new-goal',
  subscriptions() {
    this.register('Goals', Meteor.subscribe('Goals'));
  },
  action() {
    if (!Meteor.userId()) {
      FlowRouter.go('home');
    }
    BlazeLayout.render('MainLayout', { main: 'newGoal' });
  },
});

FlowRouter.route('/goal-book', {
  name: 'goal-book',
  subscriptions() {
    this.register('Goals', Meteor.subscribe('Goals'));
  },
  action() {
    if (!Meteor.userId()) {
      FlowRouter.go('home');
    }
    BlazeLayout.render('MainLayout', { main: 'goals' });
  },
});

FlowRouter.route('/mcii-list', {
  name: 'mcii-list',
  subscriptions() {
    this.register('Goals', Meteor.subscribe('Goals'));
  },
  action() {
    BlazeLayout.render('MainLayout', { main: 'mciiList' });
  }
});