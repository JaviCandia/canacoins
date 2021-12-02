import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardModule } from 'src/app/components/dashboard/dashboard.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    DashboardModule
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
