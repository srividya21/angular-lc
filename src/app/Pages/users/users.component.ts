import { HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatTableDataSource } from '@angular/material/table';
import { BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {
  @ViewChild('bankDetailsModel', { static: false }) bankDetailsModel: TemplateRef<any>;
  list:any[]; 
    
  @Output() shareCheckedList = new EventEmitter();
  @Output() shareIndividualCheckedList = new EventEmitter();
  
  displayedColumns: string[] = ['name', 'platform', 'dob', 'gender', 'age', 'degree', 'percentage', 'yearofpass', 'menu'];
  dataSource = new MatTableDataSource();
  public preview: string;
  checkedList : any[];
  currentSelected : {};
  public showDropDown:boolean = false;
  shopMenu:boolean = false;
  gender: string;
  filterValues = {};
  public config = {
    keyboard: true,
    ignoreBackdropClick: true,
    class: 'modal-md modal-dialog-centered',
  };



  constructor( private modalService: BsModalService) { 
  
    this.checkedList = [];
    this.list = 
      [
        {name :'Name',checked : false},
        {name :'Platform',checked : false},
        {name :'Date of Birth',checked : false},
        {name :'Gender',checked : false},
        {name :'Age',checked : false},
        {name :'Degree',checked : false},
        {name :'Percentage',checked : false},
        {name :'Year of Pass',checked : false}
      ]
    
  }

  ngOnInit(){
    this.dataSource = new MatTableDataSource( [
      {name :'#Name_1',paltform : 'yes', dateofBirth: '20 Aug 2021', gender: '', age: '21', degree: 'MCA',percentage:'9.99%',yearofpass:'2014',menu:'...'},
      {name :'#Name_2',paltform : 'yes', dateofBirth: '20 Aug 2021', gender: '', age: '25', degree: 'BCA',percentage:'9.90%',yearofpass:'2015',menu:'...'},
      {name :'#Name_3',paltform : 'yes', dateofBirth: '20 Aug 2021', gender: '', age: '28', degree: 'BSC',percentage:'9.80%',yearofpass:'2016',menu:'...'},
      {name :'#Name_4',paltform : 'yes', dateofBirth: '20 Aug 2021', gender: '', age: '27', degree: 'BE',percentage:'9.70%',yearofpass:'2017',menu:'...'},
      {name :'#Name_5',paltform : 'yes', dateofBirth: '20 Aug 2021', gender: '', age: '23', degree: 'ME',percentage:'9.77%',yearofpass:'2018',menu:'...'}

    ]);
   
  }

 

  filterChange(filter, event) {
    //let filterValues = {}
    this.filterValues[
      filter.list
    ] = event.target.value.trim().toLowerCase();
    this.dataSource.filter = JSON.stringify(this.filterValues);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    
  }

  getSelectedValue(status:Boolean,value:String){
    if(status){
      this.checkedList.push(value);  
    }else{
        var index = this.checkedList.indexOf(value);
        this.checkedList.splice(index,1);
    }
    
    this.currentSelected = {checked : status,name:value};

    //share checked list
    this.shareCheckedlist();
    
    //share individual selected item
    this.shareIndividualStatus();
}

shareCheckedlist(){
  this.shareCheckedList.emit(this.checkedList);
}
shareIndividualStatus(){
 this.shareIndividualCheckedList.emit(this.currentSelected);
}
  
users: any[] = [
  { name: 'Kristy', gender: 'female' },
  { name: 'Nick', gender: 'male'  },
  { name: 'Ariana', gender: 'female' },
  { name: 'Joe', gender: 'male' },
  { name: 'Albert', gender: 'male' },
];


}
