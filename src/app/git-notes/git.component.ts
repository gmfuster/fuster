import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {
visibleIs:string ="";
  constructor() { }

  ngOnInit(): void {
  }

  setVisibleTo(value:string){
    this.visibleIs = value;
    window.scroll(0,0);
  }

}
