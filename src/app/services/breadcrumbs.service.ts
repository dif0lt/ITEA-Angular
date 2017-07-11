export class BreadcrumbsService {

    private routeFriendlyNames = {};

    addFriendlyNameForRoute(route: string, name: string): void {
        this.routeFriendlyNames[route] = name;
    }

    getFriendlyNameForRoute(route: string): string {
        var val = this.routeFriendlyNames[route];
        if (!val) {
            val = route.substr(1, route.length);
        }
        return val;
    }
}
