import { Component, OnInit, Input } from '@angular/core';
import { GoogleDriveService } from '../nosotrxs.service';

@Component({
    selector: 'nosotrxs-images-component',
    templateUrl: './nosotrxs-images.component.html',
    styleUrls: ['./nosotrxs-images.component.css']
})
export class NosotrxsImagesComponent implements OnInit {

    @Input() size!: Number;

    minimalGallery: Array<string> = [
    "https://picsum.photos/200/300?random=1",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=3",
    "https://picsum.photos/200/300?random=4",
    "https://picsum.photos/200/300?random=5",
    "https://picsum.photos/200/300?random=6",
    "https://picsum.photos/200/300?random=7",
    "https://picsum.photos/200/300?random=8",
  ]

    constructor(private googleDriveService: GoogleDriveService) {
    }

    ngOnInit() {
        this.googleDriveService.getDataFromDirectory().subscribe((data: any) => {
            console.log(data)
        })

        console.log(this.size)
    }
}
