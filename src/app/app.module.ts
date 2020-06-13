import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { MatDividerModule} from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule} from '@angular/material/list';
import { GamesTableComponent } from './components/games-table/games-table.component';
import { FilterPipe } from './components/games-table/FilterPipe';
import { GenGameComponent } from './selectGame/gen-game/gen-game.component';
import { ObjectComponent } from './selectGame/gen-game/object/object.component';
import { HttpClientModule } from '@angular/common/http';
import { XpAnimationDirective } from './animations/xp-animation-directive.directive';
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {MatFormFieldModule} from '@angular/material/form-field';

// import { routes } from './router/routes';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent,
    GamesTableComponent,
    GenGameComponent,
    ObjectComponent,
    XpAnimationDirective,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatListModule,
    HttpClientModule,
    MatProgressBarModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
