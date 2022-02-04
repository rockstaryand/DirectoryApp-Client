import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FileDetails } from 'src/app/@core/models/files.model';
import { ApiService } from 'src/app/@core/services/api.service';
import { NbGetters, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {

  public fileInfo: FileDetails;
  _info: FileDetails[];
  allColumns = [ 'path', 'name', 'size', 'type', 'extension', 'mtime' ];





  constructor(
   protected apiserv: ApiService,
  ) {
    // console.log(this.apiserv);
    this.getFiles();
  }

  ngOnInit() {

  }


  getFiles() {

    this.apiserv.getFiles().subscribe(res => {
      this.fileInfo = res;

    });
  }


  // getDirectory(path){
  //   this.apiserv.getFilesByPath(path).subscribe(res => {
  //     this.fileInfo = res;

  //   })
  // }

  get items(): FileDetails {
    return this.fileInfo;
  }


}
