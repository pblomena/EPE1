import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  contacto(){
    this.navCtrl.push("ContactoPage")

  } 
  ir_pagina2(){
    this.navCtrl.push("SegundaPage");
    
  } 
  ir_pagina3(){
    this.navCtrl.push("TerceraPage");
    
  } 
  ir_pagina4(){
  	this.navCtrl.push("CuartaPage");
  }
}
