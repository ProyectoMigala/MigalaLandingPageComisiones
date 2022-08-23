import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.prod';

const apiKey = environment.googleSheetsApiKey
const organigramaID = environment.organigramaID
const calendarEmail = environment.calendarEmail

@Injectable()
export class GoogleCalendarService {
    constructor(private http: HttpClient) { }

    getDataFromDirectory(): Observable<any[]> {
        let timeMin = new Date()
        let timeMax = new Date(timeMin)

        timeMax.setDate(timeMax.getDate() + 7)

        return this.http.get<any[]>(`https://www.googleapis.com/calendar/v3/calendars/${calendarEmail}/events?maxResults=1&orderBy=startTime&showHiddenInvitations=true&singleEvents=true&timeMax=${timeMax.toISOString()}&timeMin=${timeMin.toISOString()}&key=${apiKey}`)
    }

    getOrganigrama(): Observable<any[]> {
        return this.http.get<any[]>(`https://www.googleapis.com/drive/v3/files/${organigramaID}?includeLabels=*&fields=thumbnailLink&key=${apiKey}`)
    }
}
