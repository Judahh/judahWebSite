import { ModelItem } from '../item/ModelItem';
import { ModelInputData } from '../inputData/ModelInputData';
import { ModelAuthentication } from '../authentication/ModelAuthentication';

export class ModelMenuVertical {
    id: number;
    distance: number; //px
    position: string; //px
    borderSize: number; //px
    arrayPadding: Array<number>;//px
    opacity: number;
    borderColor: string;
    float: string;
    backgroundColor: string;
    boxShadowSize: number;//px
    boxShadowColor: string;
    arrayItem: Array<ModelItem>;
    arrayInputData: Array<ModelInputData>;
    arrayAuthentication: Array<ModelAuthentication>;
    width:string;
    left: number;
    top: number;
}