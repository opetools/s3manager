import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { AlertComponent } from '../alert/alert.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, AlertComponent],
  imports: [CommonModule, ClarityModule, RouterModule, FormsModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
