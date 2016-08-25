import {Component, OnDestroy} from '@angular/core';
import {NoteCard, NoteCreator} from "../ui";
import {NoteService} from '../services';

@Component({
    selector: 'notes-container',
    templateUrl: 'app/containers/notes.html',
    styleUrls: ['app/containers/notes.css'],
    directives: [
        NoteCard,
        NoteCreator
    ]
})
export class Notes implements OnDestroy {
    notes = [];
    ngOnDestroy() {}

    constructor(private noteService: NoteService) {
        this.noteService.getNotes()
            .subscribe(res => this.notes = res.data);
    }


    onNoteChecked(note, i) {
        this.noteService.completeNote(note)
            .subscribe(note => {
                const i = this.notes.findIndex(localNote => localNote.id === note.id);
                this.notes.splice(i, 1);
            })
    }

    onCreateNote(note) {
        this.noteService.createNote(note)
            .subscribe(note => this.notes.push(note));
    }
}