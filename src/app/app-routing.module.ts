import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'game-builder',
        loadChildren: () => import('./views/game-builder/game-builder.module').then(m => m.GameBuilderModule)
    },
    {
        path: 'game',
        loadChildren: () => import('./views/game/game.module').then(m => m.GameModule)
    },
    {
        path: 'credits',
        loadChildren: () => import('./views/credits/credits.module').then(m => m.CreditsModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
