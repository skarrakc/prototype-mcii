
Template.mciiList.helpers ({
    mciiOption: ()=> { 
        return Goals.find({ inList: true });
    }
});
