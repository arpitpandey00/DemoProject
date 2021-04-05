import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tshirt-demo',
  templateUrl: './tshirt-demo.component.html',
  styleUrls: ['./tshirt-demo.component.css']
})
export class TshirtDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Choose t-shirt';
  a=200;
  b=200;
  imgSource ='../assets/front.jpg';
  changeTshirtMouseEnter():void{
    this.imgSource ='../assets/front.jpg';
  }
  changeTshirtMouseExit():void{
    this.imgSource ='../assets/back.jpg';
  }
  SetWidth():void
  {
    this.a=100;
    this.b=50;
  }
}
