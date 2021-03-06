import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminmoduleModule } from './adminmodule/adminmodule.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
