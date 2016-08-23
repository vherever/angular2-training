import {Component} from "@angular/core";

@Component({
    selector: 'note-creator',
    templateUrl: 'app/ui/note-creator.html',
    styleUrls: ['app/ui/note-creator.css']
})
export class NoteCreator {
    newNote = {title: '', value: ''}
}