import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal3',
  templateUrl: './modal3.page.html',
  styleUrls: ['./modal3.page.scss'],
})
export class Modal3Page implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  
  closeModal() {
    this.modalController.dismiss();
  }

}
