Template.menu.onCreated (function() { 
    this.autorun(()=> {
        this.subscribe('Goals');
    });
});
    
Template.menu.helpers ({
    menuOption: ()=> { 
        return Goals.find({ inMenu: true });
    }
});