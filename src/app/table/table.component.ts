import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  movie=[{Name:'Gilli',Actor:'Vijay'},
  {Name:'Leo',Actor:'Vijay'},
  {Name:'ps-1',Actor:'Chiyan'}]
  
  heading="true"
  
}
