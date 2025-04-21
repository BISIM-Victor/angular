import { NavbarComponent } from './../../components/shared/navbar/navbar.component';
import { Component, signal } from "@angular/core";

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component ({
  templateUrl: './dragonball-page.component.html',
})

export class DragonballPageComponent {

  name = signal('gohan');
  power = signal(100);

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
    {
      id: 3,
      name: 'Piccolo',
      power: 7000
    }

  ]);

  addCharacter() {
    console.log(this.name(), this.power());
  }

}
