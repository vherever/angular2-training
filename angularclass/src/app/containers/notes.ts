import {Component} from '@angular/core';
import {NoteCard} from "../ui/note-card";

@Component({
    moduleId: module.id,
    selector: 'notes-container',
    templateUrl: 'app/containers/notes.html',
    styleUrls: ['app/containers/notes.css'],
    directives: [NoteCard]
})
export class Notes {
    note = { title: 'new note', value: 'note here', color: 'lightblue' }
}