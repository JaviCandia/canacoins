import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardModule } from 'src/app/components/dashboard/dashboard.module';
import { ScanModule } from 'src/app/components/scan/scan.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    DashboardModule,
    ScanModule
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
