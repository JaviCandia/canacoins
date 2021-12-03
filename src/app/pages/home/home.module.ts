import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommerceModule } from 'src/app/components/commerce/commerce.module';
import { DashboardModule } from 'src/app/components/dashboard/dashboard.module';
import { MapModule } from 'src/app/components/map/map.module';
import { ScanModule } from 'src/app/components/scan/scan.module';
import { UserModule } from 'src/app/components/user/user.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    DashboardModule,
    ScanModule,
    MapModule,
    CommerceModule,
    UserModule
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
