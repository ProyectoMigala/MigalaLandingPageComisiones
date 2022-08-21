import { Component, OnInit, Input } from '@angular/core';
import { GoogleDriveService } from '../nosotrxs.service';

@Component({
    selector: 'nosotrxs-images-component',
    templateUrl: './nosotrxs-images.component.html',
    styleUrls: ['./nosotrxs-images.component.css']
})
export class NosotrxsImagesComponent implements OnInit {

    @Input() size!: Number;

    constructor(private googleDriveService: GoogleDriveService) {
    }

    ngOnInit() {
        this.googleDriveService.getDataFromDirectory().subscribe((data: any) => {
            console.log(data)
        })

        console.log(this.size)
    }
}
