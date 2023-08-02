import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-middle',
  templateUrl: './page-middle.component.html',
  styleUrls: ['./page-middle.component.scss']
})
export class PageMiddleComponent implements OnInit {


  imageFavoriteSrc = '../../../../../assets/favoritos.png';

  constructor() { }

  ngOnInit(): void {
  }

}
