export class BreadcrumbsService {

    private routeFriendlyNames = {};

    addFriendlyNameForRoute(route: string, name: string): void {
        this.routeFriendlyNames[route] = decodeURI(name);
    }

    getFriendlyNameForRoute(route: string): string {
        let val = this.routeFriendlyNames[route];
        if (!val) {
            val = route.substr(1, route.length);
        }
        return val;
    }
}
