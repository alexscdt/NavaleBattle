import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {GameComponent} from "./component/game/game.component";
import {HistoriqueComponent} from "./component/historique/historique.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'  },
  { path: 'Home', component: HomeComponent, pathMatch: 'full'  },
  { path: 'Game', component: GameComponent, pathMatch: 'full'  },
  { path: 'History', component: HistoriqueComponent, pathMatch: 'full'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
