// import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
// import { Observable } from 'rxjs';
// import { FileUploaderService } from '../file-uploader.service';

// @Component({
//   selector: 'app-try',
//   templateUrl: './try.component.html',
//   styleUrls: ['./try.component.css']
// })
// export class TryComponent implements OnInit {
//   @Output() onCompleteItem = new EventEmitter();

//   @ViewChild('fileInput') fileInput;
//   queue: Observable<FileQueueObject[]> | undefined;

//   constructor(public uploader: FileUploaderService) { }

//   ngOnInit() {
//     this.queue = this.uploader.queue;
//     this.uploader.onCompleteItem = this.completeItem;
//   }

//   completeItem = (item: FileQueueObject, response: any) => {
//     this.onCompleteItem.emit({ item, response });
//   }

//   addToQueue() {
//     const fileBrowser = this.fileInput.nativeElement;
//     this.uploader.addToQueue(fileBrowser.files);
//   }

  
// }
