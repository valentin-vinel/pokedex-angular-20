import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular !');
  name = 'Pikachu';
  life = 21;

  incrementLife(){
    this.life = this.life + 1;
  }

  decrementLife(){
    this.life = this.life - 1;
  }
}
