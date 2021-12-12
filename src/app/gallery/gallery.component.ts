import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  gallery=[
    {'id':1,'image':'../../assets/Dariel.jpeg'},
    {'id':2,'image':'../../assets/PIC1.jpeg'},
    {'id':3,'image':'../../assets/PIC2.jpeg'},
    {'id':4,'image':'../../assets/PIC3.jpeg'},
    {'id':5,'image':'../../assets/PIC4.jpeg'},
    {'id':6,'image':'../../assets/PIC2.jpeg'},
    
  ]

}
