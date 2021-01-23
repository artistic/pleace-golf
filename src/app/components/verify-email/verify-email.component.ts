import { Component, OnInit } from '@angular/core';
import { NgAuthService } from "../../ng-auth.service";
import { UploadFileService } from 'src/app/services/upload-file.service';
import { FileUpload } from 'src/app/models/fileupload.model';
import { Observable } from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators, AbstractControl} from '@angular/forms';


@Component({
	selector: 'app-verify-email',
	templateUrl: './verify-email.component.html',
	styleUrls: ['./verify-email.component.css']
})

export class VerifyEmailComponent implements OnInit {

	selectedFiles?: FileList;
	currentFileUpload?: FileUpload;
	percentage?: number;


	constructor(
		public ngAuthService: NgAuthService,
		private uploadService: UploadFileService
		) { }

	ngOnInit(): void {
	}

	selectFile(event:any) {
		this.selectedFiles = event.target.files;
	}

	upload() {
		const file = this.selectedFiles.item(0);
		this.selectedFiles = undefined;

		this.currentFileUpload = new FileUpload(file);
		this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
			percentage => {
				this.percentage = Math.round(percentage);
			},
			error => {
				console.log(error);
			}
			);
	}



}