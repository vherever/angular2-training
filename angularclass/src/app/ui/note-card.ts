import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'note-card',
    templateUrl: 'app/ui/note-card.html',
    styleUrls: ['app/ui/note-card.css']
})
export class NoteCard {
    @Input() note = {};
    @Output() checked = new EventEmitter();

    showCheck: boolean = false;
    toggle() {
        this.showCheck = !this.showCheck;
    }
    onChecked() {
        this.checked.next(this.note);
    }
}