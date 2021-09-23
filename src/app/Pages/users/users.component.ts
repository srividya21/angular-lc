import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {
  public list: any[];

   shareCheckedList = new EventEmitter();
   shareIndividualCheckedList = new EventEmitter();

  displayedColumns: string[] = ['name', 'platform', 'dob', 'gender', 'age', 'degree', 'percentage', 'yearofpass', 'menu'];
  dataSource = new MatTableDataSource();
  public preview: string;
  public checkedList: any[];
  public currentSelected: {};
  public showDropDown: boolean = false;
  public filterValues = {};

  public genderList: Array<any> = [
    { name: 'Male', id: 1 },
    { name: 'Female', id: 2 }
  ]

  public rowData: Array<any> = [
    { name: '#Name_2', paltform: '', dateofBirth: '20 Aug 1996', gender: 1, age: '25', degree: 'BCA', percentage: '9.90%', yearofpass: '2015', menu: '...' },
    { name: '#Name_3', paltform: '', dateofBirth: '21 oct 1994', gender: 1, age: '28', degree: 'BSC', percentage: '9.80%', yearofpass: '2016', menu: '...' },
    { name: '#Name_4', paltform: '', dateofBirth: '25 jun 1990', gender: 2, age: '27', degree: 'BE', percentage: '9.70%', yearofpass: '2017', menu: '...' },
    { name: '#Name_5', paltform: '', dateofBirth: '26 sep 1996', gender: 1, age: '23', degree: 'ME', percentage: '9.77%', yearofpass: '2018', menu: '...' },
    { name: '#Name_5', paltform: '', dateofBirth: '27 Aug 1995', gender: 2, age: '23', degree: 'MSC', percentage: '9.87%', yearofpass: '2020', menu: '...' }
  ]

  constructor() {
    this.checkedList = [];
    this.list =
      [
        { name: 'Name', checked: false },
        { name: 'Platform', checked: false },
        { name: 'Date of Birth', checked: false },
        { name: 'Gender', checked: false },
        { name: 'Age', checked: false },
        { name: 'Degree', checked: false },
        { name: 'Percentage', checked: false },
        { name: 'Year of Pass', checked: false }
      ]
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.rowData);
  }

  genderChange(value) {
    this.dataSource = new MatTableDataSource(this.rowData.filter(i => i.gender == value.id));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getSelectedValue(status: Boolean, value: String) {
    if (status) {
      this.checkedList.push(value);
    } else {
      var index = this.checkedList.indexOf(value);
      this.checkedList.splice(index, 1);
    }
    this.currentSelected = { checked: status, name: value };  
    this.shareCheckedlist();  
    this.shareIndividualStatus();
  }

  shareCheckedlist() {
    this.shareCheckedList.emit(this.checkedList);
  }
  shareIndividualStatus() {
    this.shareIndividualCheckedList.emit(this.currentSelected);
  }



}
