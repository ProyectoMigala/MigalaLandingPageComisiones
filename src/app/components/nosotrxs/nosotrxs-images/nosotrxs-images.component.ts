import { Component, OnInit, Input } from '@angular/core';
import { GoogleDriveService } from '../nosotrxs.service';

@Component({
    selector: 'nosotrxs-images-component',
    templateUrl: './nosotrxs-images.component.html',
    styleUrls: ['./nosotrxs-images.component.css']
})
export class NosotrxsImagesComponent implements OnInit {

    @Input() sizeImages = 0;
    minimalGallery: Array<string> = []

    constructor(private googleDriveService: GoogleDriveService) {
    }

    ngOnInit() {
        this.googleDriveService.getDataFromDirectory().subscribe((data: any) => {

            let items = undefined
            if (this.sizeImages > 0) {
                items = data.items.slice(0, this.sizeImages)
            } else {
                items = data.items
            }

            this.minimalGallery = items.map((item: any) => {
                return item.thumbnailLink
            })
        })
    }
}
