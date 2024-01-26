import { Component } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    CardModule,
    DropdownModule, ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
    contactForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      category: ['', Validators.required],
      email: ['',[ Validators.required, Validators.email]],
      message: 'message1'
    })

    constructor(
      private formBuilder: FormBuilder
    ){}

    onSubmit(): void {
        console.log("Submitted", this.contactForm.value);

    }
}
