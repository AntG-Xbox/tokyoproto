import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent { 
    title = 'Friend app';
    name = 'uncontrollabulll';
    nameColor = 'purple';

    changeNameColor() {
        this.nameColor = this.nameColor === 'green' ? 'red' : 'green';
    }
}
