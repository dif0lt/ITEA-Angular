import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  items: string[] = [
    "Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"
  ]

  arrToSort: any[] = [
    {id: 1, firstName: 'John', lastName: 'Smith'},
    {id: 3, firstName: 'Albert', lastName: 'Ainstain'},
    {id: 4, firstName: 'Merri', lastName: 'Popins'},
    {id: 2, firstName: 'Mike', lastName: 'Webber'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
