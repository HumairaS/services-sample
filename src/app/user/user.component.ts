import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userData: any;
  constructor(private service: PagesService) { }

  ngOnInit() {
    this.service.getUserTemplates().subscribe((data: any) => {
      this.userData = data.ObjUserTemplateList;
    });
  }
}
