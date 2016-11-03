import { ModelItem } from './../../../Item/ModelItem';
import { ModelImage } from './../../../Image/ModelImage';
import { ModelVideoLink } from './../../../VideoLink/ModelVideoLink';

export class ModelSubDivisor {
    item: ModelItem;
    image: ModelImage;
    videoLink: ModelVideoLink;
    toBottom:boolean;
    float:string;
    width:string;
    arrayPadding: Array<number>;//px
}
