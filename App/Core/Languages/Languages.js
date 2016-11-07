"use strict";
var CacheManager_1 = require('../Cache/CacheManager');
var Utils_1 = require('../Utils/Utils');
var Languages = (function () {
    function Languages() {
    }
    Object.defineProperty(Languages, "currentLanguageNamePath", {
        get: function () {
            return Utils_1.Utils.getFileName(__filename) + '/' + Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Languages, "currentLanguage", {
        get: function () {
            var language = CacheManager_1.CacheManager.storage.getItem(Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)));
            if (!language) {
                language = navigator.language.toLowerCase().replace("_", "-");
                Languages.currentLanguage = language;
            }
            return language;
        },
        set: function (language) {
            CacheManager_1.CacheManager.storage.setItem(Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)), language);
        },
        enumerable: true,
        configurable: true
    });
    Languages.getModelLanguages = function (arrayModelLanguages) {
        for (var index = 0; index < arrayModelLanguages.length; index++) {
            for (var index2 = 0; index2 < arrayModelLanguages[index].code.length; index2++) {
                if (arrayModelLanguages[index].code[index2] == Languages.currentLanguage) {
                    return arrayModelLanguages[index];
                }
            }
        }
        return null;
    };
    Languages.getPageLanguage = function (arrayPageLanguage, modelLanguages) {
        for (var index = 0; index < arrayPageLanguage.length; index++) {
            if (arrayPageLanguage[index].language == modelLanguages.language) {
                return arrayPageLanguage[index];
            }
        }
        return null;
    };
    return Languages;
}());
exports.Languages = Languages;
//# sourceMappingURL=Languages.js.map