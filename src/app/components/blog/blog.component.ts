import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  
  data:any =[
    {title:"Romolu to stay at Real Nadrid?", desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem."},
    {title:" Nadrid?", desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem."},
    {title:" to stay at Real Nadrid?", desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem."},
    {title:"at Real Nadrid?", desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem."},
    {title:"t Real Nadrid?", desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem."},
    {title:"Romolu to stay at Real Nadrid?", desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem."},
    {title:"Romolu to stay at Real Nadrid?", desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem."},
    {title:"Romolu to stay at Real Nadrid?", desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem."},
    {title:"Romolu to stay at Real Nadrid?", desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem."},
    {title:"Romolu to stay at Real Nadrid?", desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem."},
    {title:"Romolu to stay at Real Nadrid?", desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem."},
    {title:"Romolu to stay at Real Nadrid?", desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem."},
    {title:"Romolu to stay at Real Nadrid?", desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem."},
    {title:"Romolu to stay at Real Nadrid?", desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem."},
    {title:"Romolu to stay at Real Nadrid?", desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem."},
    {title:"Romolu to stay at Real Nadrid?", desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem."},
  ];

  p: number[] = [];
    collection: any[] = this.data;  


  constructor() { }

  ngOnInit(): void {
  }



}
