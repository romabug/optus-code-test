import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProgressBarModule } from './progress-bar/progress-bar.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import {enableProdMode} from '@angular/core';
// enableProdMode();

@NgModule({
    declarations: [
        AppComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ProgressBarModule,
        NgbModule,
    ],


    bootstrap: [AppComponent]
})
export class AppModule {
}
