import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ContentProviderIndividual, ContentProviderInstitute } from '../../../../../model/content-provider.model';


@Component({
    selector: 'content-provider',
    templateUrl: './content-provider.component.html',
    styleUrls: ['./content-provider.component.css']

})
export class ContentProviderComponent implements OnInit {

    public contentProviderIndividual: ContentProviderIndividual; //create the object

    public applicantType: string = "individual";

    public contentProviderForm: FormGroup;
    public contentProviderInstituteForm: FormGroup;

    public cpNameErrorMessage: string = "Full Name is required";

    constructor(private formBuilder: FormBuilder) {
        this.initializeContentProviderForm();
    }

    ngOnInit(): void {
        this.initializeEmptyObject();
    }

    // Click Events
    public submitForm(): void {
        console.log(this.contentProviderIndividual);
        console.log(this.contentProviderIndividual.cpName);
    }

    private initializeEmptyObject(): void {
        this.contentProviderIndividual = new ContentProviderIndividual();
    }

    private initializeContentProviderForm(): void {
        this.contentProviderForm = this.formBuilder.group({
            'cpName': [null, [Validators.required]],
            "cpFullName": [null, [Validators.required]],
            "gender": [null, [Validators.required]],
            "cpNic": [null, [Validators.required]],
            "cpDesignation": [null, Validators.required],
            "cpDob": [null, Validators.required],
            "cpEmail": [null, Validators.required],
            "cpMobile": [null, Validators.required]

        });

        this.contentProviderInstituteForm = this.formBuilder.group({

        });

    }

    public isFieldValidIndividual(field: string) {
        return !this.contentProviderForm.get(field).valid && this.contentProviderForm.get(field).touched;
    }

    public displayFieldCssIndividual(field: string) {
        return {
            'is-invalid': this.isFieldValidIndividual(field),
            'is-valid': this.isFieldValidIndividual(field)
        };
    }

    public isFieldValidInstitute(field: string) {
        return !this.contentProviderInstituteForm.get(field).valid && this.contentProviderInstituteForm.get(field).touched;
    }

    public displayFieldCssInstitute(field: string) {
        return {
            'is-invalid': this.isFieldValidInstitute(field),
            'is-valid': this.isFieldValidInstitute(field)
        };
    }





}