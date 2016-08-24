import {Component, Output, EventEmitter} from "@angular/core";
import {ColorPicker} from "./color-picker";

@Component({
    selector: 'note-creator',
    templateUrl: 'app/ui/note-creator.html',
    styleUrls: ['app/ui/note-creator.css'],
    directives: [ColorPicker]
})
export class NoteCreator {
    @Output() createNote = new EventEmitter;
    colors: Array<string> = ['#2ecc71', '#9b59b6', '#34495e', '#e74c3c', '#f39c12', '#ffffff'];
    newNote = {
        title: '',
        value: '',
        color: 'white'
    };
    fullForm: boolean = false;

    onColorSelect(color: string) {
        this.newNote.color = color;
    }

    onCreateNote() {
        const {title, value, color} = this.newNote;
        if(title && value) {
            this.createNote.next({title, value, color});
            this.reset();
        }
    }
    reset() {
        this.newNote = {
            title: '',
            value: '',
            color: 'white'
        };
    }

    toggle(value: boolean) {
        this.fullForm = value;
    }
}