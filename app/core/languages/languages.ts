import { CacheManager } from '../cache/CacheManager';
import { Utils } from '../utils/Utils';
import { ModelLanguages } from './ModelLanguages';

export class Languages {

    public static get currentLanguageNamePath(){
        return Utils.getFileName(__filename)+'/'+Utils.getFileSelector(Utils.getFileName(__filename));
    }

    public static get currentLanguage() : string {
        var language:string = CacheManager.storage.getItem(Utils.getFileSelector(Utils.getFileName(__filename)));

        if(!language){
            language = navigator.language.toLowerCase().replace("_","-"); 
            Languages.currentLanguage=language;
        }

        return language;
    }

    public static set currentLanguage(language : string) {
        CacheManager.storage.setItem(Utils.getFileSelector(Utils.getFileName(__filename)),
        language);
    }
    
    public static getModelLanguages(arrayModelLanguages:Array<ModelLanguages>){
        for(var index:number=0;index<arrayModelLanguages.length;index++){
            for(var index2:number=0;index2<arrayModelLanguages[index].code.length;index2++){
                if(arrayModelLanguages[index].code[index2]==Languages.currentLanguage){
                    return arrayModelLanguages[index];
                }
            }
        }
        return null;
    }

    public static getPageLanguage(arrayPageLanguage:Array<any>, modelLanguages:ModelLanguages){
        for(var index:number=0;index<arrayPageLanguage.length;index++){
            if(arrayPageLanguage[index].language==modelLanguages.language){
                return arrayPageLanguage[index];
            }
        }
        return null;
    }
}