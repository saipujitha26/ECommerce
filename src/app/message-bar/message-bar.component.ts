import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
  selector: 'app-message-bar',
  templateUrl: './message-bar.component.html',
  styleUrls: ['./message-bar.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateY(0)' })),
      state('out', style({ transform: 'translateY(-100%)', display: 'none' })),
      transition('in => out', [
        animate('0.5s ease-in')
      ]),
      transition('out => in', [
        style({ display: 'block', transform: 'translateY(100%)' }),
        animate('0.5s ease-out')
      ])
    ])
  ]
})
export class MessageBarComponent implements OnInit {

  messages: string[] = [
    "This is the first message.",
    "Here comes the second message.",
    "And this is the third message."
  ];
  currentMessageIndex: number = 0;

  fullMessage: string = "This is the full message content that gives more details about the message summary shown.";

  @ViewChild('detailDialog', { static: true }) detailDialog!: TemplateRef<any>;

  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.startMessageRotation();
  }

  startMessageRotation(): void {
    setInterval(() => {
      this.currentMessageIndex = (this.currentMessageIndex + 1) % this.messages.length;
    }, 3000); // Change message every 3 seconds
  }

  openDetail(detailDialog: TemplateRef<any>): void {
    if (this.authService.isAuthenticated()) {
      const dialogRef = this.dialog.open(detailDialog);

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    } else {
      this.router.navigate(['/login']);
    }
  }

  closeDetail(): void {
    this.dialog.closeAll();
  }
}
