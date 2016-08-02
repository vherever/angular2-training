import { Component, EventEmitter } from '@angular/core';

@Component ({
    selector: 'child',
    templateUrl: 'app/templates/child.component.html',
    inputs: ['parentValue'],
    outputs: ['childChanged']
})

export class ChildComponent {
    parentValue: string;
    childChanged = new EventEmitter<string>();

    onChange(value: string) {
        this.childChanged.emit(value);
    }
}
