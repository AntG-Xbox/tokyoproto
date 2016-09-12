import { NgModule }      from '@angular/core';
import { HttpModule, JsonpModule }          from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

import { FriendsComponent } from './friend/friends.component'
import { FriendComponent } from './friend/friend.component'
import { FriendService } from './friend/friend.service'

@NgModule({
imports: [ BrowserModule, FormsModule, HttpModule, JsonpModule ],
  declarations: [ AppComponent, FriendsComponent, FriendComponent ],
  bootstrap: [ AppComponent ],
  providers: [ FriendService ]
})

export class AppModule { }