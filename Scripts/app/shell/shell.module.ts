import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../@shared/shared.module';
import { ShellComponent } from './shell.component';

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule],
  declarations: [ShellComponent],
})
export class ShellModule {}
