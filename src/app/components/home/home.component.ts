import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  estado = environment.estado;
  socialMedia = environment.socialMedia;

  constructor() { }

  ngOnInit(): void {
  }

}
