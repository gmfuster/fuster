import { Injectable , EventEmitter} from "@angular/core"



export class MathServices{

    getRandom1ToN(n:number) {
        return Math.floor(Math.random() * n) + 1
    }            
}




Injectable({providedIn: 'root'})
export class StringServices{

    public getAString() {
        var now = new Date();  
        return now.toString();
    }            
}

export class OtherServices{

    public getAHeart() {
        return "♥";
    }       
    
    somethingHappened = new EventEmitter<string>();
    public callMeToEmitEvent(){        
        var now = new Date();          
        this.somethingHappened.emit(now.toString());
    }
}