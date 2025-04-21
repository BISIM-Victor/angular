import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DragonballService {

  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 10000
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 9000
    },

  ]);

saveToLocalStorage = effect(() =>{

localStorage.setItem('characters', JSON.stringify(this.characters()));

});

  addCharacter(Character: Character) {
    this.characters.update((list) => [...list, Character]);
  }

}
