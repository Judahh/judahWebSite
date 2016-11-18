import { ModelItem } from '../item/ModelItem';

export class ModelMenuVertical {
    id: number;
    distance: number; //px
    borderSize: number; //px
    padding: Array<number>;//px
    opacity: number;
    borderColor: string;
    backgroundColor: string;
    boxShadowSize: number;//px
    boxShadowColor: string;
    arrayItem: Array<ModelItem>;
}