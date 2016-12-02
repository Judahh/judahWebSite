import { TextInputType } from './TextInputType';

export class ModelTextInput {
    name:string;
    fontFamily:string;
    fontSize:number;//px
    textInputType:TextInputType;
    placeholder:string;
    arrayOptions:Array<string>;
    required:boolean;
    value:any;
    
    isField(){
        return this.textInputType==TextInputType.field;
    }

    isArea(){
        return this.textInputType==TextInputType.area;
    }

    isDataList(){
        return this.textInputType==TextInputType.dataList;
    }

    getDataListId(){
        return "dataListId" + this.name.charAt(0).toUpperCase() + this.name.slice(1);
    }
}
