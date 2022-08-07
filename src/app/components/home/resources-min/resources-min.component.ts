import { Component, OnInit } from '@angular/core';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment.prod';
import { Project, attributesMapping } from '../../resources/resource';

@Component({
  selector: 'resources-min',
  templateUrl: './resources-min.component.html',
  styleUrls: ['./resources-min.component.css']
})
export class ResourcesMinComponent implements OnInit {

    projectObserver$!: Observable<Project[]>

    resources!: any
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
            this.resources = data.slice(-3).reverse()
        })
    }
}
