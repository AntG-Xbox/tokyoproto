import { Component, OnInit } from '@angular/core'
import { FriendService } from './friend.service'
import { Observable } from 'rxjs/Rx'

@Component({
    selector: 'app-friends',
    templateUrl: 'app/friend/friends.component.html'
})

export class FriendsComponent implements OnInit {
    friends: Observable<any[]>;

    constructor(private _friendService: FriendService) { }

    ngOnInit() { 
        this.friends = this._friendService.getPeople()
            .catch((err) => {
                console.log(err); // TODO: show the user a nice mesage
                return Observable.of(true);
            })
    }
}