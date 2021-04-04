import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectRecipePageRoutingModule } from './select-recipe-routing.module';

import { SelectRecipePage } from './select-recipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectRecipePageRoutingModule
  ],
  declarations: [SelectRecipePage]
})
export class SelectRecipePageModule {}
