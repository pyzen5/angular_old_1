import { Pipe, PipeTransform } from '@angular/core';
import { PurePipe } from './pure.pipe';

// tslint:disable-next-line: use-pipe-transform-interface
@Pipe({
  name: 'impure',
  pure: false
})
export class ImpurePipe extends PurePipe {}
