import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';
import { StateDel } from '../state-del';

@Component({
  selector: 'app-pagetypes',
  templateUrl: './pagetypes.component.html',
  styleUrls: ['./pagetypes.component.scss']
})
export class PagetypesComponent implements OnInit {
  dateToday: any;
  pages: any;

  constructor(private pService: PagesService) { }

  ngOnInit() {
    this.dateToday = this.pService.getDate();

    this.pService.getPages().subscribe((data: any) => {
      this.pages = data.ObjTemplateCategoriesList;
    });
  }

  pageType: any;
  pageDescription: any;
  pageClick(p){
    this.pageType = p.categoryName;
    this.pageDescription = p.categoryDescription;
  }

  delState: StateDel={
    action:'',
    userEmailAddres:'',
    stateName:'',
    stateS3Key:''
  };
  
  deleteState(){    
    this.delState.stateName="file";
    this.delState.action="delete";
    this.delState.userEmailAddres="humaira.syed@dharani.co.in";
    this.delState.stateS3Key="";

    this.pService.deleteStateFile(this.delState).subscribe((data: any) => {
      alert(data);
    });
  }

}
