import * as tslib_1 from "tslib";
import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { SERVER_API_URL_CONFIG } from "@lamis/web-core";
let NdrConverterService = class NdrConverterService {
    constructor(http, serverUrl) {
        this.http = http;
        this.serverUrl = serverUrl;
        this.resourceUrl = '';
        this.resourceUrl = serverUrl.SERVER_API_URL + '/api/ndr';
    }
    convert(ids) {
        let params = new HttpParams();
        ids.forEach(id => params = params.append("ids", id.toString()));
        return this.http.get(`${this.resourceUrl}/run`, { params });
    }
    listFacilities() {
        return this.http.get(`${this.resourceUrl}/list-facilities`);
    }
    download(name) {
        return this.http.get(`${this.resourceUrl}/download/${name}`, { responseType: 'blob' });
    }
    listFiles() {
        return this.http.get(`${this.resourceUrl}/list-files`);
    }
    deduplicate() {
        return this.http.get(`${this.resourceUrl}/remove-duplicates`);
    }
};
NdrConverterService.ctorParameters = () => [
    { type: HttpClient },
    { type: undefined, decorators: [{ type: Inject, args: [SERVER_API_URL_CONFIG,] }] }
];
NdrConverterService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__param(1, Inject(SERVER_API_URL_CONFIG)),
    tslib_1.__metadata("design:paramtypes", [HttpClient, Object])
], NdrConverterService);
export { NdrConverterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmRyLWNvbnZlcnRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGFtaXMtbmRyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL25kci1jb252ZXJ0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQXNCLE1BQU0saUJBQWlCLENBQUM7QUFLNUUsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFHNUIsWUFBb0IsSUFBZ0IsRUFBeUMsU0FBNkI7UUFBdEYsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUF5QyxjQUFTLEdBQVQsU0FBUyxDQUFvQjtRQUZuRyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUdwQixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDO0lBQzdELENBQUM7SUFFRCxPQUFPLENBQUMsR0FBYTtRQUNqQixJQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQzlCLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsTUFBTSxFQUFFLEVBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQTtJQUM3RCxDQUFDO0lBRUQsY0FBYztRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxrQkFBa0IsQ0FBQyxDQUFBO0lBQzNFLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBWTtRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsYUFBYSxJQUFJLEVBQUUsRUFBRSxFQUFDLFlBQVksRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFBO0lBQ3hGLENBQUM7SUFFRCxTQUFTO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLGFBQWEsQ0FBQyxDQUFBO0lBQ3BFLENBQUM7SUFFRCxXQUFXO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLG9CQUFvQixDQUFDLENBQUE7SUFDakUsQ0FBQztDQUNKLENBQUE7O1lBekI2QixVQUFVOzRDQUFHLE1BQU0sU0FBQyxxQkFBcUI7O0FBSDFELG1CQUFtQjtJQUQvQixVQUFVLEVBQUU7SUFJOEIsbUJBQUEsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUE7NkNBQTFDLFVBQVU7R0FIM0IsbUJBQW1CLENBNEIvQjtTQTVCWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgU0VSVkVSX0FQSV9VUkxfQ09ORklHLCBTZXJ2ZXJBcGlVcmxDb25maWcgfSBmcm9tIFwiQGxhbWlzL3dlYi1jb3JlXCI7XG5pbXBvcnQgeyBGYWNpbGl0eSB9IGZyb20gXCIuLi9jb21wb25lbnRzL25kci1jb252ZXJ0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5kckNvbnZlcnRlclNlcnZpY2Uge1xuICAgIHB1YmxpYyByZXNvdXJjZVVybCA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBASW5qZWN0KFNFUlZFUl9BUElfVVJMX0NPTkZJRykgcHJpdmF0ZSBzZXJ2ZXJVcmw6IFNlcnZlckFwaVVybENvbmZpZykge1xuICAgICAgICB0aGlzLnJlc291cmNlVXJsID0gc2VydmVyVXJsLlNFUlZFUl9BUElfVVJMICsgJy9hcGkvbmRyJztcbiAgICB9XG5cbiAgICBjb252ZXJ0KGlkczogbnVtYmVyW10pIHtcbiAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgICAgIGlkcy5mb3JFYWNoKGlkID0+IHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoXCJpZHNcIiwgaWQudG9TdHJpbmcoKSkpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnJlc291cmNlVXJsfS9ydW5gLCB7cGFyYW1zfSlcbiAgICB9XG5cbiAgICBsaXN0RmFjaWxpdGllcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RmFjaWxpdHlbXT4oYCR7dGhpcy5yZXNvdXJjZVVybH0vbGlzdC1mYWNpbGl0aWVzYClcbiAgICB9XG5cbiAgICBkb3dubG9hZChuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEJsb2I+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5yZXNvdXJjZVVybH0vZG93bmxvYWQvJHtuYW1lfWAsIHtyZXNwb25zZVR5cGU6ICdibG9iJ30pXG4gICAgfVxuXG4gICAgbGlzdEZpbGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxzdHJpbmdbXT4oYCR7dGhpcy5yZXNvdXJjZVVybH0vbGlzdC1maWxlc2ApXG4gICAgfVxuXG4gICAgZGVkdXBsaWNhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMucmVzb3VyY2VVcmx9L3JlbW92ZS1kdXBsaWNhdGVzYClcbiAgICB9XG59Il19