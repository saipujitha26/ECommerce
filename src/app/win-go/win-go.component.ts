import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-win-go',
  templateUrl: './win-go.component.html',
  styleUrls: ['./win-go.component.css']
})
export class WinGoComponent implements OnInit {
  selectedIcon: string | null = null;
  walletBalance: number = 1000; // Initial wallet balance
  selectedGame: string | null = null;
  selectedGameDuration: number = 0;
  selectedGameInfo: string = '';
  showModal: boolean = false;
  howToPlayInstructions: string = 'Here are the instructions to play the game...';
  numbers: number[] = Array.from({ length: 10 }, (_, i) => i); // Numbers 0-9

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Set default game
    this.selectGame('1'); // Change '1' to any other game type if needed
  }

  deposit(): void {
    const amount = prompt("Enter amount to deposit:");
    if (amount) {
      this.walletBalance += parseFloat(amount);
    }
  }

  withdraw(): void {
    const amount = prompt("Enter amount to withdraw:");
    if (amount) {
      this.walletBalance -= parseFloat(amount);
    }
  }

  navigateToTimer(time: string): void {
    this.selectedIcon = time;
    this.router.navigate(['/timer', time]); // Navigate to TimerComponent with parameter
  }

  selectGame(game: string): void {
    this.selectedGame = game;
    this.selectedGameDuration = parseInt(game) * 60;
    this.selectedGameInfo = `Win Go ${game}min`;
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  getBallClass(number: number): string {
    const colors = ['green', 'violet', 'red'];
    return colors[number % colors.length];
  }
}
