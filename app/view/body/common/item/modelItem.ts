import { ModelColorEffect } from './colorEffect/ModelColorEffect';
import { ModelTooltip } from './ModelTooltip';
import { ModelMenuVertical } from '../menuVertical/ModelMenuVertical';

export class ModelItem {
  id: number;
  routerLink: string;
  routerLinkActive: string;
  colorEffect: ModelColorEffect;
  tooltip:ModelTooltip;
  menuVertical:ModelMenuVertical;
}
