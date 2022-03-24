import { Component, OnInit } from '@angular/core';4
import * as $ from "jquery";


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  
  
  }
  
  closeModal(){
    $("#videoHeader").trigger('pause');
  }

}
