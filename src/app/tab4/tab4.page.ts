import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { BrowserMultiFormatReader } from '@zxing/library';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  scannedData: string[]=[];
  aux: boolean=false;

  constructor(private menucontroller: MenuController) { }


  mostrarMenu(){
    this.menucontroller.open('first');
  }
  


  ngOnInit() {
  }

  ionViewWillEnter(){
    this.aux=false;
    console.log(this.aux)
  }

  async scanQr() {
    const image = await Camera.getPhoto({
      quality: 90,
      source: CameraSource.Camera,
      resultType: CameraResultType.Base64,
    });

    // Aquí puedes manejar la imagen obtenida
    const base64Image = 'data:image/jpeg;base64,' + image.base64String;
    console.log(base64Image);
    // Puedes usar base64Image para mostrarlo o procesarlo

    const codeReader = new BrowserMultiFormatReader();
    codeReader.decodeFromImage(undefined, base64Image).then((result) => {
        console.log(result);
        this.scannedData = result.toString().split('\n');
        this.aux=true;
        // Maneja el resultado del escaneo aquí
    }).catch((err) => {
        console.error(err);
        this.scannedData = ['Error al escanear'];
        this.aux=true;
    });
  }

}
