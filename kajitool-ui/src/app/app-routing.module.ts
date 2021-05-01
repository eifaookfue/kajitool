import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  // {
  //   path: 'select-recipe',
  //   loadChildren: () => import('./pages/select-recipe/select-recipe.module').then( m => m.SelectRecipePageModule)
  // },
  // {
  //   path: 'need-material',
  //   loadChildren: () => import('./pages/need-material/need-material.module').then( m => m.NeedMaterialPageModule)
  // },
  {
    path: 'edit-recipe',
    loadChildren: () => import('./pages/edit-recipe/edit-recipe.module').then( m => m.EditRecipePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
