import { Component, OnInit, Input } from '@angular/core';
import { FileDetails } from 'src/app/@core/models/files.model';


@Component({
  selector: 'app-folder-tree',
  templateUrl: './folder-tree.component.html',
  styleUrls: ['./folder-tree.component.scss']
})
export class FolderTreeComponent implements OnInit {
  @Input()
  _items: FileDetails;

  _children: FileDetails[];
  constructor() { }

  ngOnInit(): void {
  }
  get items() {
    return this._items;
  }

  set setChildren(child: FileDetails[]) {
    this._children = child;
  }
  get children(){
    return this._children;
  }
}

