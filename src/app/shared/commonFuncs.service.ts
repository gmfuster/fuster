import { ElementRef, QueryList} from "@angular/core"


export class CommonFuncs{

    
    public getIdsFromHeadingSubTopicElements(list : QueryList<ElementRef>): string[]
    {
        var IdsArray: string[] = [];
        //this gets elements that have the HeadingSubTopic class, using directive just to be able to retrieve, not really a directive
        list.forEach(i => 
            {                
                if (i !== null && i!== undefined && i.nativeElement !== null && i.nativeElement !== undefined && 
                    i.nativeElement.id !== null && i.nativeElement.id !== undefined && i.nativeElement.id !== "")
                {
                    IdsArray.push(i.nativeElement.id) 
                }               
            }
        );
        return IdsArray;
    }

    public getRandom1ToN(n:number) {
        return Math.floor(Math.random() * n) + 1
    }  

       
}

