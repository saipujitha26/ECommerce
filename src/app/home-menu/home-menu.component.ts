import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.css']
})
export class HomeMenuComponent {

 
  title = 'Lottery';
  description = 'Content about Lottery...';

  subCardsForLottery = [
    { header: 'Lottery', content: 'Content for lottery' },
    { header: 'Lottery-2', content: 'Content for lottery' },
  ];
  subCardsForMiniGames = [
    { header: 'Mini games', content: 'Content for mini games' },
    { header: 'Mini games-1', content: 'Content for mini games -2' },
    { header: 'Mini games-2', content: 'Content for mini games -3' },
  ];

  subCardsForPopular = [
    { header: 'popular', content: 'Content for popular' },
    { header: 'popular-2', content: 'Content for popular -2' },
    { header: 'popular-3', content: 'Content forpopular -3' },
    { header: 'popular-4', content: 'Content forpopular -4' }
  ];

  subCardsForPvc = [
    { header: 'pvc', content: 'Content for pvc' },
  ];

  subCardsForSlots = [
    { header: 'slots', content: 'Content for slots' },
    { header: 'slots-2', content: 'Content for slots -2' },
    { header: 'slots-3', content: 'Content for slots -3' },
    { header: 'slots-4', content: 'Content for slots -4' }
  ];

  subCardsForFishing = [
    { header: 'fishing', content: 'Content for fishing' },
    { header: 'fishing-2', content: 'Content for fishing -2' },
    { header: 'fishing-3', content: 'Content for fishing -3' },
    { header: 'fishing-4', content: 'Content for fishing -4' }
  ];

  subCardsForSports = [
    { header: 'Sport', content: 'Content for Sport' },
    { header: 'Sport-2', content: 'Content for Sport -2' }
  ];

  subCardsForCasino = [
    { header: 'Casino', content: 'Content for Casino' },
    { header: 'Casino-2', content: 'Content for Casino -2' },
    { header: 'Casino-3', content: 'Content for Casino -3' }
  ];

  
  expandedCard: string | null = null;

  toggleCard(card: string) {
    this.expandedCard = this.expandedCard === card ? null : card;
  }
}
