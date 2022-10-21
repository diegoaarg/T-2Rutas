import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  skills:Array<string>=["Html","Css","JavaScript","React","Node","Aws","Php","Angular","MongoDb"]

  hidden = false;
  src = "/assets/imagenes/team.jpeg"
  imagen(){
    this.hidden = !this.hidden;
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
