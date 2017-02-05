class FSM {

    constructor(config) {
this.state=config.initial;
this.config=config.states;
this.initial=config.initial;
this.helpArray=[];

    }

    getState() {
        return this.state;
    }

    changeState(state) {
        this.helpArray.push(this.state); 
       for (var key in this.config){
        if (state===key){
          
      this.state=state;
        
this.helpArray.push(this.state); 
return this.state;
        }}
        
throw new error('state is not exist');
    }
    

    trigger(event) {   
    this.helpArray.push(this.state); 
        for (var key in this.config[this.state]){  
        for (var secondkey in this.config[this.state][key]){
            
            if (event===secondkey){
                this.state=this.config[this.state][key][secondkey];
                this.helpArray.push(this.state);
                return this.state;
            }
        }}
      throw new error('event is not exist');  
}

  
    reset() {
        return this.state=this.initial;
    }

  
    getStates(event) {
        var tempAr=[];
            
        if (!event){
            for (var key in this.config){  
                tempAr.push(key);  
            }
            return tempAr;
        }
        
            for (var key in this.config){  
        for (var secondkey in this.config[key]){
            for (var thirtkey in this.config[key][secondkey]){
            if (event===thirtkey){
                tempAr.push(key);
            }
        }
        }
    }
        return tempAr;
    }

 
    undo() {
        if (this.state===this.initial){
            return false;
        }
        for (var i=0; i<this.helpArray.length; i++){
        if (this.state===this.helpArray[i]){
           this.state=this.helpArray[i-1];
           return true;
           
        }
        
}
}

    redo() {
        for (var i=this.helpArray.length-2; i>=0; i--){
            if (this.state===this.helpArray[i]){
                this.state=this.helpArray[i+1];
              return true;
          }
      }

        if (this.state===this.initial){
            return false;
        }


    }

    clearHistory() {
     this.state=this.initial;
    }
}

module.exports = FSM;

