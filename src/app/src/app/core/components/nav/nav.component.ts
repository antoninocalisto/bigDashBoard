import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  showText = true;

  orderSelected = false;
  orderHover = true;

  imagePerfilSrc = '../../../../../assets/userPerfil.jpg';
  imageLogoSrc = '../../../../../assets/bigDashBoard.png';
  

  constructor(public router: Router) { }

  ngOnInit(): void {

  }

  setItemSelected(id=0) {

    if (id === 1) {
      this.orderSelected = true;
    }

    if (id === 2) {
      this.orderSelected = false;
    }

    if (id === 3) {
      this.orderSelected = false;
    }

    if (id === 4) {
      this.orderSelected = false;
    }

  }

  getHomeDocSpider(){
    this.router.navigate(['home']);
  }

  getInformationPdf(){
    this.router.navigate(['list-pdfs']);
  }

  getAboutDocSpider(){
    this.router.navigate(['about']);
  }

}
