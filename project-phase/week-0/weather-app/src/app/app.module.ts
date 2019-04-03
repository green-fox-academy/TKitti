import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { SeattleComponent } from './cities/seattle/seattle.component';
import { MiamiComponent } from './cities/miami/miami.component';
import { BarcelonaComponent } from './cities/barcelona/barcelona.component';
import { LondonComponent } from './cities/london/london.component';
import { BudapestComponent } from './cities/budapest/budapest.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    SeattleComponent,
    MiamiComponent,
    BarcelonaComponent,
    LondonComponent,
    BudapestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
