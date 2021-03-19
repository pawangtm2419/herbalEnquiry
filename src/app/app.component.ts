import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'File Upload';
  images;

  constructor(private route: Router, private form: FormBuilder, private http: HttpClient, private service: AppService) { }

  ngOnInit(): void { }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    } else {
      alert('Image not found!!');
    }
  }
  upload() {
    const formData = new FormData();
    formData.append('file', this.images);

    this.http.post<any>('http://chetanherbals.com/admin/api/fileupload.php', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  /* onselectedFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const filename = file.name;
      const filesize = file.size / 1024;
      const timestamp = new Date().toDateString();
      if ( filesize <= 1024) {
        this.service.setFile(file, filename, timestamp).subscribe(data => {
          if (data.success) {
            window.alert(data.serect);
          } else {
            window.alert(data.serect);
          }
        });
      } else {
        console.log('File Size is Big');
      }
    }
  } */
}
