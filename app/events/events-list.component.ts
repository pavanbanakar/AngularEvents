import { Component } from "@angular/core";
import {EventService} from "./shared/event.service"
import {ToastrService} from "../common/toastr.service"

@Component({
    template:`
    <div>
    <div>Upcoming Angular Events</div>
    <hr/>
        <div class="row">
            <div class="col-md-5" (click)="handleThumbnailClick(event.name)" *ngFor="let event of events">
                <events-thumbnail [event]="event"></events-thumbnail>
            </div>
        </div>
    </div>
    `
})

export class EventsListComponent {

 events :any[];
 constructor(private eventService :EventService,private toastrService:ToastrService){

 }
 ngOnInit(){
    this.events = this.eventService.getEvents();
 }
 handleThumbnailClick(eventName){
     this.toastrService.success(eventName)
 }

}

