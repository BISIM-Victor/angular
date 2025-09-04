import { Routes } from '@angular/router';
import { CreateUserComponent } from './pages/counter/create-user.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';
import { CounterHomeComponent } from './pages/counter/counter-home.component';
import { CounterHeroComponent } from './pages/counter/counter-hero.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page.component';
import { CounterMovilComponent } from './pages/counter/counter-movil.component';
import { CounterDesarrolloComponent } from './pages/counter/counter-desarrollo.component';


export const routes: Routes = [
{
  path: '',
  component: CounterHomeComponent

},
{
  path: 'mantenimiento',
  component: CounterHeroComponent
},

{
  path: 'cableado-estructurado',
  component:DragonballPageComponent
},
{
  path: 'circuito-cerrado',
  component:DragonballSuperPageComponent

},
{
  path: 'limpieza-respaldos',
  component: CreateUserComponent
},
{
  path: 'reparacion-movil',
  component: CounterMovilComponent
},
{
  path: 'desarrollo-software',
  component: CounterDesarrolloComponent
}

];
