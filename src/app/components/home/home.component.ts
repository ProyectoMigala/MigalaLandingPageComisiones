import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { GoogleCalendarService } from '../generics/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  estado = environment.estado
  socialMedia = environment.socialMedia
  calendarUrl = environment.calendarUrl
  nextEvent = {
    title: '',
    time: '',
    description: '',
  }

  constructor(private googleCalendarService: GoogleCalendarService) { }

  ngOnInit(): void {
    this.googleCalendarService.getDataFromDirectory().subscribe((data: any) => {
      let item = data.items[0]

      this.nextEvent = {
        title: item.summary,
        time: new Date(item.start.dateTime).toLocaleString(),
        description: item.description
      }
    })
  }

}
