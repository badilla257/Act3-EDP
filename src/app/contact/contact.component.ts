import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  contact= [
    
    {'id':1,'name':'Facebook Account','description':'Username:Dariel Gie Badilla','image':'../../assets/fb.png'},
    {'id':2,'name': 'Instagram Account','description':'Username:Dariel0903','image':'../../assets/insta.jfif'},
    
    

  
  ]

}
