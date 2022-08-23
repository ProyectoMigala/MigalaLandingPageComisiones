import { Component, OnInit, Input } from '@angular/core';
import { GoogleCalendarService } from '../generics/services/home.service';
import { environment } from '../../../environments/environment.prod'

@Component({
    selector: 'nosotrxs-component',
    templateUrl: './nosotrxs.component.html',
    styleUrls: ['./nosotrxs.component.css']
})
export class NosotrxsComponent implements OnInit {

    @Input() sizeImages = 0;
    organigrama: string = ''
    orgranigramaCompleto = environment.organigramaCompleto;

    constructor(private googleCalendarService: GoogleCalendarService) {
    }

    ngOnInit() {
        this.googleCalendarService.getOrganigrama().subscribe((data: any) => {
            this.organigrama = data.thumbnailLink
        })
    }
}
