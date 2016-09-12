import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import 'rxjs/Rx'; // get everything from Rx, including 'map'

const URL_FRIENDS = 'app/friend/friends.json';

@Injectable()
export class FriendService {
    constructor(private _http: Http) { }

    getPeople() {
        return this._http.get(URL_FRIENDS)
            .map((response: Response) => response.json())
            .catch(this._handlerError);
    }

    _handlerError(err: any) {
        console.log(err); // TODO: log this somewhere...
        return Observable.throw(err);
    }
}