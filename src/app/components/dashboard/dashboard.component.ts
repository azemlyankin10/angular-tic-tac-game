import { Component, Input } from '@angular/core';
import { players } from '../game/game.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
    @Input() turn!: players;
    @Input() winner!: string;
}
