import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.css']
})
export class HomeMenuComponent implements OnInit {

  ngOnInit() {
    const icons = document.querySelectorAll('.icon');
    const contentDiv = document.getElementById('content');

    icons.forEach(icon => {
      icon.addEventListener('click', () => {
        const content = icon.getAttribute('data-content');
        if (content) {
          this.displayContent(content, contentDiv);
        } else {
          this.displayContent('default', contentDiv); // or handle the null case appropriately
        }
      });
    });

    // Display default content
    this.displayContent('lottery', contentDiv);
  }

  displayContent(content: string, contentDiv: HTMLElement | null) {
    if (!contentDiv) return;

    let contentText = '';
    switch (content) {
      case 'lottery':
        contentText = 'This is the Lottery section.';
        break;
      case 'mini-games':
        contentText = 'This is the Mini Games section.';
        break;
      case 'popular':
        contentText = 'This is the Popular section.';
        break;
      case 'slots':
        contentText = 'This is the Slots section.';
        break;
      case 'pvc':
        contentText = 'This is the PVC section.';
        break;
      case 'fishing':
        contentText = 'This is the Fishing section.';
        break;
      case 'casino':
        contentText = 'This is the Casino section.';
        break;
      case 'sports':
        contentText = 'This is the Sports section.';
        break;
      default:
        contentText = 'Click an icon to display content.';
    }
    contentDiv.innerHTML = contentText;
  }
}
