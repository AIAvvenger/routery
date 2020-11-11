import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { GroupComponent } from './group/group.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [UserComponent, GroupComponent, DashboardComponent],
  exports : [UserComponent, GroupComponent,DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
})
export class AdminmoduleModule { }
