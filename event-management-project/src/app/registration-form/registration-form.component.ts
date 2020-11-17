import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';

declare var $: any;

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;
  eventName: string;
  isSubmitted  =  false;

  SearchCountryField = SearchCountryField;
	TooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];

  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.eventName = params['eventId'];
    });
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
}
