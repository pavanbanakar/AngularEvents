import { Component } from "@angular/core";

@Component({
    selector:'events-list',
    template:`
    <div>
    <div>Upcoming Angular Events</div>
    <hr/>
        <events-thumbnail [event]="event1"></events-thumbnail>
    </div>
    `
})

export class EventsListComponent{

    event1 = {
        id:1,
        name :'Angular Connect',
        date:'13/05/2017',
        time:'12:00 PM',
        price: 600,
        imageUrl:'/app/assets/images/angularconnect-shield.png',
        location:{
            address:'1650 De Maisonneve',
            city:'Toronto',
            country:'Canada'
        }}

        }

