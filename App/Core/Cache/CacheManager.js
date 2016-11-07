"use strict";
var CacheManager = (function () {
    function CacheManager() {
    }
    CacheManager.getStorage = function () {
        var domStorage = window.localStorage || window.sessionStorage;
        return domStorage;
    };
    CacheManager.storage = (function () {
        var uid = new Date;
        var storage;
        var result;
        try {
            (storage = CacheManager.getStorage()).setItem(uid.toString(), uid.toString());
            result = storage.getItem(uid.toString()) == uid.toString();
            storage.removeItem(uid.toString());
            return result && storage;
        }
        catch (exception) { }
    }());
    return CacheManager;
}());
exports.CacheManager = CacheManager;
//# sourceMappingURL=CacheManager.js.map