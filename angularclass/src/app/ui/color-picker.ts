import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'color-picker',
    templateUrl: 'app/ui/color-picker.html',
    styleUrls: ['app/ui/color-picker.css']
})
export class ColorPicker {
    @Input() colors: Array<string> = [];
    @Output() selected = new EventEmitter;
    isSelectorVisible: boolean = false;

    showSelector(value: boolean) {
        this.isSelectorVisible = value;
    }

    selectColor(color) {
        this.showSelector(false);
        this.selected.next(color);
    }
}