import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AgainButtonComponent } from './components/again-button/again-button.component';

@NgModule({
    declarations: [AppComponent, GameComponent, DashboardComponent, AgainButtonComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
