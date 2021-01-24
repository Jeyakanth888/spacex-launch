import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpacexLaunchProgramsComponent } from './components/spacex-launch-programs/spacex-launch-programs.component';
import { SpacexFiltersComponent } from './components/spacex-filters/spacex-filters.component';
import { TileCardComponent } from './components/tile-card/tile-card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SpacexDataService } from './services/spacex-data.service';

@NgModule({
  declarations: [
    AppComponent,
    SpacexLaunchProgramsComponent,
    SpacexFiltersComponent,
    TileCardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollingModule
  ],
  providers: [SpacexDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
