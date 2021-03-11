import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SharedModule } from './@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellModule } from './shell/shell.module';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: process.env.NODE_ENV === 'production' }),
    // CoreModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    ShellModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
