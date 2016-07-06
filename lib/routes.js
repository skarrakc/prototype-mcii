Accounts.onLogin(() => {
  FlowRouter.go('goal-book');
});

Accounts.onLogout(() => {
  FlowRouter.go('home');
});

FlowRouter.route('/', {
  name: 'home',
  action() {
    if (Meteor.userId()) {
      FlowRouter.go('goal-book');
    }
    BlazeLayout.render('HomeLayout');
  },
});

FlowRouter.route('/goal-book', {
  name: 'goal-book',
  action() {
    if (!Meteor.userId()) {
      FlowRouter.go('home');
    }
    BlazeLayout.render('MainLayout', { main: 'goals' });
  },
});

FlowRouter.route('/menu', {
  name: 'menu',
  action() {
    BlazeLayout.render('MainLayout', { main: 'menu' });
  }
});

FlowRouter.route('/mcii-list', {
  name: 'mcii-list',
  action() {
    BlazeLayout.render('MainLayout', { main: 'mciiList' });
  }
});