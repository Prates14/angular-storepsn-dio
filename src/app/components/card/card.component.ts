import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', './card.responsive.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  gameCover: string = ""
  @Input()
  gameTitle: string = ""
  @Input()
  gameType: string = ""
  @Input()
  gamePrice: string = ""
  @Input()
  gameLabel: string = ""

  constructor() { }

  ngOnInit(): void { }

}
