import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-again-button',
    templateUrl: './again-button.component.html',
    styleUrls: ['./again-button.component.scss'],
})
export class AgainButtonComponent {
    @Output() buttonEmitter = new EventEmitter<any>();
}
