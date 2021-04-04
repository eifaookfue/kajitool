import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeedMaterialPage } from './need-material.page';

const routes: Routes = [
  {
    path: '',
    component: NeedMaterialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeedMaterialPageRoutingModule {}
