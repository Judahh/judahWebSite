import { CacheManager } from '../Cache/CacheManager';
import { Utils } from '../Utils/Utils';

export class Language {

    public static get language() : string {
        var language:string = CacheManager.storage.getItem(Utils.getFileSelector(Utils.getFileName(__filename)));

        if(!language){
            language = navigator.language; 
            Language.language=language;
        }

        return language;
    }
    public static set language(language : string) {
        CacheManager.storage.setItem(Utils.getFileSelector(Utils.getFileName(__filename)),
        language);
    }
    
}