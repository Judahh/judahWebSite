import { ModelColorEffect } from './ColorEffect/ModelColorEffect';
import { ModelTootip } from './ModelTootip';

export class ModelItem {
  id: number;
  routerLink: string;
  routerLinkActive: string;
  colorEffect: ModelColorEffect;
  tootip:ModelTootip;
}
