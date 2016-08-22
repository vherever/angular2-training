import {Component, Input} from '@angular/core';

@Component({
    selector: 'note-card',
    templateUrl: 'app/ui/note-card.html',
    styleUrls: ['app/ui/note-card.css']
})
export class NoteCard {
    @Input() note = {};

    showCheck: boolean = false;
    toggle() {
        this.showCheck = !this.showCheck;
    }
    onChecked() {
        console.log('clicked!');
    }
}