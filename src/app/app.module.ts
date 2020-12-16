import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfgUIComponent } from './ui/ui.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpIntercepterBasicAuthService } from './service/authentication/http-authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    OfgUIComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS,useClass:HttpIntercepterBasicAuthService ,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
