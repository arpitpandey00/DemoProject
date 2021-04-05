import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Angular Demo";
  showDataBindindDemo = true;
  showProductDB = false;
  showPurchaseRec = false;

  showDBDemo(): void {
    this.showDataBindindDemo = true;
    this.showProductDB = false;
    this.showPurchaseRec = false;
  }
  showProducts(): void {
    this.showDataBindindDemo = false;
    this.showProductDB = true;
    this.showPurchaseRec = false;
  }
  showPurchase(): void {
    this.showDataBindindDemo = false;
    this.showProductDB = false;
    this.showPurchaseRec = true;
  }

}
