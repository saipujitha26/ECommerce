import { Component } from '@angular/core';

@Component({
  selector: 'app-home-menu-expand',
  templateUrl: './home-menu-expand.component.html',
  styleUrls: ['./home-menu-expand.component.css']
})
export class HomeMenuExpandComponent {


  expandedCard: string | null = null;

  toggleCard(cardName: string) {
    if (this.expandedCard === cardName) {
      this.expandedCard = null;
    } else {
      this.expandedCard = cardName;
    }
  }
  
//   computerList: any[] = [{
//     id: "1",
//     name: "c1",
//     description: "100",
//     price: 10
//   },
//   {
//     id: "1",
//     name: "c1",
//     description: "100",
//     price: 10
//   },
//   {
//     id: "1",
//     name: "c1",
//     description: "100",
//     price: 10
//   },
//   {
//     id: "1",
//     name: "c1",
//     description: "100",
//     price: 10
//   },
//   {
//     id: "1",
//     name: "c1",
//     description: "100",
//     price: 10
//   },
//   {
//     id: "1",
//     name: "c1",
//     description: "100",
//     price: 10
//   },
//   {
//     id: "1",
//     name: "c1",
//     description: "100",
//     price: 10
//   }
// ];


//   constructor (){
// this.computerList;
//   }
//   ngOnInit(): void {
//   }
}
