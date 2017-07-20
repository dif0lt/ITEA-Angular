import { NgModule } from '@angular/core';
import { SortPipe } from '../pipes/sort.pipe';

@NgModule({
  declarations: [SortPipe],
  exports: [SortPipe],
  imports: [],
  providers: [],
  bootstrap: []
})
export class GlobalPipeModule { };