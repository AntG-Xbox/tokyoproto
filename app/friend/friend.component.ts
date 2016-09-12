import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-friend',
    templateUrl: 'app/friend/friend.component.html'
})

export class FriendComponent implements OnInit {
    @Input() friend: {xuid: number, gamertag: string};

    myColor = 'orange';

    constructor() { }

    ngOnInit() { }
}