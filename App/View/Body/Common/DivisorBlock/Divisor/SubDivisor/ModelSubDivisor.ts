import { ModelItem } from './../../../item/ModelItem';
import { ModelImage } from './../../../image/ModelImage';
import { ModelVideoLink } from './../../../videoLink/ModelVideoLink';

export class ModelSubDivisor {
    item: ModelItem;
    image: ModelImage;
    videoLink: ModelVideoLink;
    toBottom:boolean;
    float:string;
    width:string;
    arrayPadding: Array<number>;//px
}
