import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

export class KidsMathStrategy extends RouteReuseStrategy {

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
        return null;
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return true;
    }

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        return false;
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        //return future.routeConfig === curr.routeConfig;
        return false;
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    }
}