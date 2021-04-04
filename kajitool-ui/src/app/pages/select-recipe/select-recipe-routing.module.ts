import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectRecipePage } from './select-recipe.page';

const routes: Routes = [
  {
    path: '',
    component: SelectRecipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectRecipePageRoutingModule {}
