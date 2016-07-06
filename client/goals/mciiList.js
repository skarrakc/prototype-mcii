Template.mciiList.onCreated (function() { 
    this.autorun(()=> {
        this.subscribe('Goals');
    });
});
    
Template.mciiList.helpers ({
    mciiOption: ()=> { 
        return Goals.find({ inMenu: true });
    }
});