import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';

declare var $: any;

@Component({
  selector: 'app-register-events',
  templateUrl: './register-events.component.html',
  styleUrls: ['./register-events.component.css']
})
export class RegisterEventsComponent {
  registrationForm: FormGroup;
  isSubmitted  =  false;

  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];

  eventDetails: any[] = [
    {
      name: 'Youth Parliament',
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

  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.registrationForm  =  this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: [undefined, [Validators.required]],
      category: ['', Validators.required],
      agreeTerms: [false, Validators.required]
    });
  }

  register(){
    console.log("VALID:::", this.registrationForm.valid);
    console.log(this.registrationForm.value);
    this.isSubmitted = true;
    if(this.registrationForm.invalid){
      return;
    }
  }

  resetRegisterForm() {
    this.registrationForm.reset();
  }

  Register(eventDetail: any) {
    console.log(eventDetail);
    this.router.navigate(['/registration', eventDetail.name]);
  }
}
