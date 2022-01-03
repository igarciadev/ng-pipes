import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

import { AppComponent } from './app.component';

import { CapitalizedPipe } from './pipes/capitalized.pipe';
import { DomseguroPipe } from './pipes/secure-dom.pipe';
import { PasswordPipe } from './pipes/password.pipe';

@NgModule({
    declarations: [
        AppComponent,
        CapitalizedPipe,
        DomseguroPipe,
        PasswordPipe
    ],
    imports: [
        BrowserModule
    ],
    providers: [{ provide: LOCALE_ID, useValue: 'es' }],
    bootstrap: [AppComponent]
})
export class AppModule { }
