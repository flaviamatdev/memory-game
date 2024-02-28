import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'builder',
        loadChildren: () => import('./views/game-builder/game-builder.module').then(m => m.GameBuilderModule)
    },
    {
        path: 'game',
        loadChildren: () => import('./views/game/game.module').then(m => m.GameModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
