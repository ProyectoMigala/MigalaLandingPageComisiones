import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu'
import { LoaderService } from '../utils/loader.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    logo_page = "Inicio";

    menuItems: MenuItem[] = [
        {
            label: 'Nosotrxs',
            showOnMobile: false,
            showOnTablet: false,
            showOnDesktop: true,
            path: 'nosotrxs',
        },
        {
            label: 'Actividades',
            showOnMobile: false,
            showOnTablet: false,
            showOnDesktop: true,
            path: 'actividades',
        },
        {
            label: 'Proyectos',
            showOnMobile: false,
            showOnTablet: false,
            showOnDesktop: true,
            path: 'proyectos',
        },
        {
            label: 'Archivo',
            showOnMobile: false,
            showOnTablet: false,
            showOnDesktop: true,
            path: 'archivo',
        }
    ];


    loading!: boolean;
    constructor(private loaderService: LoaderService) {
        this.loaderService.isLoading.subscribe((v: any) => {
            this.loading = v;
        });
    }

    ngOnInit(): void {
    }

}