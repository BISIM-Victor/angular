import { Routes } from '@angular/router';
import { CreateUserComponent } from './pages/counter/create-user.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';
import { CounterHomeComponent } from './pages/counter/counter-home.component';
import { CounterHeroComponent } from './pages/counter/counter-hero.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page.component';

export const routes: Routes = [
{
  path: '',
  component: CounterHomeComponent

},
{
  path: 'hero',
  component: CounterHeroComponent
},

{
  path: 'dragonball',
  component:DragonballPageComponent
},
{
  path: 'dragonball-super',
  component:DragonballSuperPageComponent

},
{
  path: 'usuarios',
  component: CreateUserComponent
}

];
