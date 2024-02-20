import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() type: number = 0;
  @Input() title: string | undefined;
  @Input() tasks: number | undefined;
  @Input() completed: number | undefined;
  @Input() todo: number | undefined;
  @Input() limitDate: string | undefined;
  @Input() description: string | undefined;

  constructor(){
  }

  ngOnInit():void{
    console.log('card start');
  }
}
