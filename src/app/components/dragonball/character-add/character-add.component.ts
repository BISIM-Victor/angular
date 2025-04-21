import {Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';
import id from '@angular/common/locales/id';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  name =signal('');
  power =signal(0);

  newCharacter = output<Character>();

addCharacter() {
  if(this.name() || this.power() || this,this.power() <= 0){
    return
}
const newCharacter: Character = {
  id: Math.floor(Math.random() * 1000),
  name: this.name(),
  power: this.power()
};

this.newCharacter.emit(newCharacter);
console.log({newCharacter});
this.resetCharacter();

}
  resetCharacter() {
    throw new Error('Method not implemented.');
  }

resetFelds() {
  this.name.set('');
  this.power.set(0);
}
}
