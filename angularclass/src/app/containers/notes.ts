import {Component, OnDestroy} from '@angular/core';
import {NoteCard, NoteCreator} from "../ui";
import {NoteService} from '../services';
import {Store} from '../containers/store';
import 'rxjs';
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

    constructor(private noteService: NoteService, private store: Store) {
        this.store.changes.pluck('notes')
            .subscribe((notes: any) => this.notes = notes);

        this.noteService.getNotes()
            .subscribe();
    }


    onNoteChecked(note, i) {
        this.noteService.completeNote(note)
            .subscribe()
    }

    onCreateNote(note) {
        this.noteService.createNote(note)
            .subscribe();
    }
}