import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';

export class ForCanActivate implements CanActivate , CanActivateChild{
    //could return Promise<boolean> if this is run asyncronously.  Could also return a boolean. Or Observable<boolean>
    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean{
        //could have other code here checking to see if the route can be activated or not
        //could be calling other services or whatever.
        //return false;
        return true;
    }

    canActivateChild(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean{
        //return whatever you need
        //return false;
        return true;
    }
}

export interface ForCanDeActivateInt {
    //could be Promise<boolean> if this is run asyncronously.  Could also be a boolean. Or Observable<boolean>
    canDeactivate: () => boolean;    
}
export class ForCanDeActivate implements CanDeactivate<ForCanDeActivateInt>{
    //will be called when we try to deactivate a route
    canDeactivate(component:ForCanDeActivateInt, route:ActivatedRouteSnapshot,state:RouterStateSnapshot, nextState?:RouterStateSnapshot):Observable<boolean> 
            | boolean | Promise<boolean>{
                return component.canDeactivate();
            }
}