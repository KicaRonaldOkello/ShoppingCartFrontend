import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireUploadTask, AngularFireStorageReference, AngularFireStorage } from 'angularfire2/storage';
import { finalize, map } from 'rxjs/operators';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  uploadState: Observable<string>;
  @Output() imageUrl = new EventEmitter();
  // @Input() imageReceived: boolean;

  public imagePath;
  imgFireBaseURLs = [];
  images = [];
  public message: string;

  constructor(private afStorage: AngularFireStorage) { }

  ngOnInit() {
  }

  upload(file, imageIndex) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(file);
    this.uploadProgress = this.task.percentageChanges();
    this.images[imageIndex].uploadProgress = this.uploadProgress;
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = this.ref.getDownloadURL();
        this.sendImageUrl(imageIndex);
      })
   )
  .subscribe();
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
  }

  sendImageUrl(imageIndex) {
    this.downloadURL.subscribe(url => {
      this.imgFireBaseURLs.push(url);
      if (imageIndex === (this.images.length - 1)) {
        this.imageUrl.emit(this.imgFireBaseURLs);
      }
    });
  }

  preview(files) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.images.push({url: reader.result, file: files[0]});
    };
  }

  uploadAllImages() {
    this.images.forEach(({file}, i) => {
      this.upload(file, i);
    });
  }
}
