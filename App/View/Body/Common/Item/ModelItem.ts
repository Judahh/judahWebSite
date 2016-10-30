import { ModelAnimationEffect } from './AnimationEffect/ModelAnimationEffect';

export class ModelItem {
  id: number;
  routerLink: string;
  animationEffect: ModelAnimationEffect;
  colorEffect: string;
  font: string;
  info: Array<string>;
  verticalAlign: string;
  width: string;
  size: number;
  padding: Array<number>;
}
