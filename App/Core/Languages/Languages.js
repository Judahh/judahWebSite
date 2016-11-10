"use strict";
const CacheManager_1 = require("../cache/CacheManager");
const Utils_1 = require("../utils/Utils");
class Languages {
    static get currentLanguageNamePath() {
        return Utils_1.Utils.getFileName(__filename) + '/' + Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename));
    }
    static get currentLanguage() {
        var language = CacheManager_1.CacheManager.storage.getItem(Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)));
        if (!language) {
            language = navigator.language.toLowerCase().replace("_", "-");
            Languages.currentLanguage = language;
        }
        return language;
    }
    static set currentLanguage(language) {
        CacheManager_1.CacheManager.storage.setItem(Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)), language);
    }
    static getModelLanguages(arrayModelLanguages) {
        for (var index = 0; index < arrayModelLanguages.length; index++) {
            for (var index2 = 0; index2 < arrayModelLanguages[index].code.length; index2++) {
                if (arrayModelLanguages[index].code[index2] == Languages.currentLanguage) {
                    return arrayModelLanguages[index];
                }
            }
        }
        return null;
    }
    static getPageLanguage(arrayPageLanguage, modelLanguages) {
        for (var index = 0; index < arrayPageLanguage.length; index++) {
            if (arrayPageLanguage[index].language == modelLanguages.language) {
                return arrayPageLanguage[index];
            }
        }
        return null;
    }
}
exports.Languages = Languages;
//# sourceMappingURL=Languages.js.map