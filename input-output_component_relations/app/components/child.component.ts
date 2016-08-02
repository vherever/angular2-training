import { Component, EventEmitter, Output } from '@angular/core';

@Component ({
    selector: 'child',
    templateUrl: 'app/templates/child.component.html',
    inputs: ['parentValue:passedValue'],
})

export class ChildComponent {
    parentValue: string;
    @Output() childChanged = new EventEmitter<string>();

    onChange(value: string) {
        this.childChanged.emit(value);
    }
}
