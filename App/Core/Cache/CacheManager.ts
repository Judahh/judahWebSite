export class CacheManager {
    private static getStorage() {
        var domStorage=window.localStorage || window.sessionStorage;
        return domStorage;
    }

    static storage = (function() {
        var uid = new Date;
        var storage:any;
        var result:any;
        try {
            (storage = CacheManager.getStorage()).setItem(uid.toString(), uid.toString());
            result = storage.getItem(uid.toString()) == uid.toString();
            storage.removeItem(uid.toString());
            return result && storage;
        } catch (exception) {}
    }());
}
