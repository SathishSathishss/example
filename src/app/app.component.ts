import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'What is u r name ?...';
  isLeapYear=0;
  li=['mani','pravin','vijay']
 

  
  itemList: string[] = [];
  newItem: string = '';

  addItem() {
    if (this.newItem.trim() !== '') {
      this.itemList.push(this.newItem);
      this.newItem = '';
    }
  }

  name1=['mani','pravin','vijay','prathap'];
  
  tableView=false;
  table="";
  name=0;
  Title="welcom";
  date =new Date();
}


    