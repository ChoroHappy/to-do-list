import { Component, OnInit, Input } from '@angular/core';
import { ProductList } from '../object/productList';
import { ProductLists } from '../object/productLists';

@Component({
  selector: 'app-list-projector',
  templateUrl: './list-projector.component.html',
  styleUrls: ['./list-projector.component.css']
})
export class ListProjectorComponent implements OnInit {

  @Input() headers;
  @Input() productList: ProductList;
  @Input() changeStatus;
  @Input() productLists: ProductLists;


  a = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
