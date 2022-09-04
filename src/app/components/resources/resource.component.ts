import { Component, OnInit } from '@angular/core';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Project, attributesMapping } from './resource';

@Component({
    selector: 'resource-component',
    templateUrl: './resource.component.html',
    styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {

    projectObserver$!: Observable<Project[]>

    resources: any = []
    searchText: string = ''
    gridColumns = 3

    constructor(private googleSheetsDbService: GoogleSheetsDbService) {
        this.getData()
    }

    ngOnInit(): void {
    }

    private getData() {

        this.projectObserver$ = this.googleSheetsDbService.get<Project>(
            environment.project.spreadsheetId,
            environment.project.worksheetName,
            attributesMapping
        )

        this.projectObserver$.subscribe(data => {
            this.resources = data
        })
    }
}
