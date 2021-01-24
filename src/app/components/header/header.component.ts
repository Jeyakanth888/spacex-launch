import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Constant } from 'src/app/shared/constants/constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pageTitle: string = Constant.pageTitle;
  constructor() { }

  ngOnInit(): void {
  }

}
