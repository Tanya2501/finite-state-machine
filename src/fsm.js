class FSM {

    constructor(config) {
this.state=config.initial;
this.config=config.states;
this.count=0;
this.countTrigger=0;
    }

    getState() {
        return this.state;
    }

    changeState(state) {
        this.count++;
       for (var key in this.config){
        if (state===key)
            
return this.state=state;
        }
throw new error('state is not exist');
    }
    

    trigger(event) {
        for (var key in this.config){  
        for (var secondkey in this.config[key]){
            for (var thirtkey in this.config[key][secondkey]){
            if (event===thirtkey){
                this.state=this.config[key][secondkey][thirtkey];
                return this.state;
            }
        }}}
       throw new erro('event is not exist');
    }

  
    reset() {
        return this.state='normal';
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
        if (this.state==='normal'){
            return false;
        }

        for (var i=0; i<this.getStates().length; i++){
        if (this.state===this.getStates()[i]){
              if (this.count>0){
            return this.state=this.getStates()[i-2];
        }
       else {return this.state=this.getStates()[i-1];}
    }
     
}
}

    redo() {
        if (this.state==='normal'){
            return false;
        }

for (var i=0; i<this.getStates().length; i++){
            if (this.state===this.getStates()[i]){
              return  this.state=this.getStates()[i+1];
            }
        }

    }

    clearHistory() {
     this.state="normal";
    }
}

module.exports = FSM;

