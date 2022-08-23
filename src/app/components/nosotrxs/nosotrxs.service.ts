import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

const apiKey = environment.googleSheetsApiKey
const folderId = environment.driveFolderId

@Injectable()
export class GoogleDriveService {
    constructor(private http: HttpClient) { }

    getDataFromDirectory(): Observable<any[]> {
        return this.http.get<any[]>(`https://www.googleapis.com/drive/v2/files?q='${folderId}'+in+parents&key=${apiKey}`)
    }

}
