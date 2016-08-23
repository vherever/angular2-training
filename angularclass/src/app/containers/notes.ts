import {Component} from '@angular/core';
import {NoteCard} from "../ui/note-card";
import {NoteCreator} from "../ui/note-creator";

@Component({
    moduleId: module.id,
    selector: 'notes-container',
    templateUrl: 'app/containers/notes.html',
    styleUrls: ['app/containers/notes.css'],
    directives: [
        NoteCard,
        NoteCreator
    ]
})
export class Notes {
    notes = [
        { title: 'new note', value: 'note here', color: 'lightblue' },
        { title: 'new note', value: 'note here', color: 'pink' },
        { title: 'new note', value: 'note here', color: 'lightyellow' }
    ];

    onNoteChecked(note, i) {
        this.notes.splice(i, 1);
    }
    onCreateNote(note) {
        this.notes.push(note);
    }
}