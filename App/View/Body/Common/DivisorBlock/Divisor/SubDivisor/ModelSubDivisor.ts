import { ModelBasicForm } from './../../../basicForm/ModelBasicForm';
import { ModelBasicTwoWay } from './../../../basicTwoWay/ModelBasicTwoWay';
import { ModelInputData } from './../../../inputData/ModelInputData';
import { ModelItem } from './../../../item/ModelItem';
import { ModelImage } from './../../../image/ModelImage';
import { ModelVideoLink } from './../../../videoLink/ModelVideoLink';

export class ModelSubDivisor {
    item: ModelItem;
    image: ModelImage;
    videoLink: ModelVideoLink;
    basicForm: ModelBasicForm;
    basicTwoWay: ModelBasicTwoWay;
    inputData: ModelInputData;
    toBottom:boolean;
    float:string;
    width:string;
    arrayPadding: Array<number>;//px
}
