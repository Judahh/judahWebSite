import { ModelItem } from './../../../Item/ModelItem';
import { ModelImage } from './../../../Image/ModelImage';
import { ModelVideo } from './../../../Video/ModelVideo';

export class ModelSubDivisor {
    item: ModelItem;
    image: ModelImage;
    video: ModelVideo;
    toBottom:boolean;
    float:string;
    width:string;
    arrayPadding: Array<number>;//px
}
