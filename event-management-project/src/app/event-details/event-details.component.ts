import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {

  eventDetails: any[] = [
    {
      name: 'YOUTH PARLIAMENT',
      description: 'Register yourself in this event to experience the power of being a member of parliament and put your debating skills to test.',
      brochureLink: 'https://www.google.co.in'
    },
    {
      name: 'MODUL UNITED NATIONS',
      description: 'Register yourself in this even to give a voice to the country you want to make a difference to and see its progress.',
      brochureLink: 'https://www.google.co.in'
    },
    {
      name: 'PUBLIC FORUM DEBATE',
      description: 'Register yourselves in this event to demonstrate your sharp thinking and speaking skills as a group.',
      brochureLink: 'https://www.google.co.in'
    },
    {
      name: 'JUST A MINUTE',
      description: 'Register yourself in this event if you think you can put down your standpoint in a minute without stammering.',
      brochureLink: 'https://www.google.co.in'
    },
    {
      name: 'SPEAKING TO PERSUADE',
      description: 'Register yourself in this event if you think you can persuade the audience and sell your idea like a pro.',
      brochureLink: 'https://www.google.co.in'
    },
    {
      name: 'SPEAKING TO INFORM',
      description: 'Register yourself in this event to prove your knowledge dissemination and clarity of thoughts.',
      brochureLink: 'https://www.google.co.in'
    },
    {
      name: 'POLICY DEBATING',
      description: 'Register yourselves in this event if you think you can unravel the harms in the current system through your constructive plan or policy action.',
      brochureLink: 'https://www.google.co.in'
    },
    {
      name: '1 VS 1 STYLE OF DEBATING',
      description: 'Register yourself in this event to encounter the invention of The Federation, which involves debating on every and any topic you can think of.',
      brochureLink: 'https://www.google.co.in'
    },
    {
      name: 'BLOCK AND TACKLE',
      description: 'Register yourself in this event to speak for and against your standpoint. Sounds contradicting, doesn’t it?',
      brochureLink: 'https://www.google.co.in'
    },
    {
      name: 'OPEN CATEGORY',
      description: 'Register yourself in this event if you want to prove yourself as the Best Public Speaker by conquering every event of this summit.',
      brochureLink: 'https://www.google.co.in'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  DownloadBrochure(eventDetail: any) {
    console.log(eventDetail);
  }
}
