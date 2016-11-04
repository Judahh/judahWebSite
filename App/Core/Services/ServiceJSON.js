"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var ServiceJSON = (function () {
    function ServiceJSON(http) {
        this.http = http;
        this.URL = '/API/JSON/';
    }
    ServiceJSON.prototype.getPromise = function (path) {
        return this.http.get(this.URL + path + ".json").toPromise().then(this.extractData).catch(this.handlePromiseError);
    };
    ServiceJSON.prototype.getObservable = function (path) {
        return this.http.get(this.URL + path + ".json").map(this.extractData).catch(this.handleObservableError);
    };
    ServiceJSON.prototype.addObservable = function (name, path) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.URL, { name: name }, options)
            .map(this.extractData)
            .catch(this.handleObservableError);
    };
    ServiceJSON.prototype.addPromise = function (name, path) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.URL, { name: name }, options)
            .toPromise().then(this.extractData)
            .catch(this.handlePromiseError);
    };
    ServiceJSON.prototype.extractData = function (response) {
        var body = response.json();
        return body;
    };
    ServiceJSON.prototype.handleObservableError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    ServiceJSON.prototype.handlePromiseError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    ServiceJSON = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ServiceJSON);
    return ServiceJSON;
}());
exports.ServiceJSON = ServiceJSON;
//# sourceMappingURL=ServiceJSON.js.map