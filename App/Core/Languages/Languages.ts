import { CacheManager } from '../Cache/CacheManager';
import { Utils } from '../Utils/Utils';
import { ModelLanguages } from './ModelLanguages';

export class Languages {

    public static get currentlanguageNamePath(){
        return Utils.getFileName(__filename)+'/'+Utils.getFileSelector(Utils.getFileName(__filename));
    }

    public static get currentlanguage() : string {
        var language:string = CacheManager.storage.getItem(Utils.getFileSelector(Utils.getFileName(__filename)));

        if(!language){
            language = navigator.language.toLowerCase().replace("_","-"); 
            Languages.currentlanguage=language;
        }

        return language;
    }

    public static set currentlanguage(language : string) {
        CacheManager.storage.setItem(Utils.getFileSelector(Utils.getFileName(__filename)),
        language);
    }
    
    public static getModelLanguages(arrayModelLanguages:Array<ModelLanguages>){
        for(var index:number=0;index<arrayModelLanguages.length;index++){
            if(arrayModelLanguages[index].code==Languages.currentlanguage){
                return arrayModelLanguages[index];
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