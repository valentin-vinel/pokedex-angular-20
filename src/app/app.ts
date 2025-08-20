import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = signal('Pikachu'); 
  life = signal(21);

  size = computed(() => {
    if(this.life() <= 15) {
      return 'Petit';
    }

    if(this.life() >= 25) {
      return 'Grand';
    }

    return 'Moyen';
  })

  incrementLife(){
    this.life.update((life) => life + 1);
  }

  decrementLife(){
    this.life.update((life) => life - 1);
  }
}
