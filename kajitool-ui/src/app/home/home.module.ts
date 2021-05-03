import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';

import { HomePage } from './home.page';



const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'select-recipe',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/select-recipe/select-recipe.module').then( m => m.SelectRecipePageModule)
          }
        ]
      },
      {
        path: 'need-material',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/need-material/need-material.module').then( m => m.NeedMaterialPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/select-recipe',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
