import { ModelColorEffect } from './ColorEffect/ModelColorEffect';
import { ModelTooltip } from './ModelTooltip';

export class ModelItem {
  id: number;
  routerLink: string;
  routerLinkActive: string;
  colorEffect: ModelColorEffect;
  tooltip:ModelTooltip;
}
