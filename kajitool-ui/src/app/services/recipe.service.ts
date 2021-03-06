import { Injectable } from '@angular/core';
import { Material, Recipe, RecipeListView, RecipeListViewResourceService, RecipeResourceService } from '@kajitool/kajitool-api';
import { merge, Observable } from 'rxjs';
import { toArray } from 'rxjs/operators';
import { MaterialService } from './material.service';

export interface RecipeListViewModel extends RecipeListView {
  selected: boolean;
  orderQuantity: number;
}

export interface NeedMaterialModel {
  material: Material;
  needQuantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeList: RecipeListViewModel[] = [];
  needMaterial: NeedMaterialModel[] = [];

  constructor(
    private recipeResource: RecipeResourceService,
    private recipeListViewResource: RecipeListViewResourceService,
    private materialService: MaterialService
  ) { }

  async init(): Promise<RecipeListViewModel[]> {
    const list: RecipeListView[] = await this.recipeListViewResource.getAll().toPromise();
    this.recipeList = [];
    list.forEach(recipe => {
      this.recipeList.push({selected: false, orderQuantity: 1, ...recipe});
    });
    return this.recipeList;
  }

  async getNeedMaterial(): Promise<NeedMaterialModel[]> {


    const obRecipes: Observable<Recipe>[] = this.recipeList
      .filter(recipe => recipe.selected && recipe.orderQuantity > 0)
      .map(recipe => {
        return this.recipeResource.get(recipe.id);
      })

    const recipes: Recipe[] = await merge(...obRecipes).pipe(toArray()).toPromise();

    this.needMaterial = this.buildNeedMaterial(recipes);
    return this.needMaterial;
  }

  private buildNeedMaterial(recipes: Recipe[]): NeedMaterialModel[] {

    const needMaterial: NeedMaterialModel[] = [];
    recipes.forEach(recipe => {
      const selectRecipe = this.recipeList.find(r => r.id === recipe.id);
      if (!selectRecipe) {
        return;
      }
      recipe.recipeDetails.forEach(recipeDetail => {
        const material = needMaterial.find(m => m.material.id === recipeDetail.materialId);
        if (material) {
          material.needQuantity += selectRecipe.orderQuantity * recipeDetail.quantity;
        } else {
          needMaterial.push({
            material: this.materialService.getMaterial(recipeDetail.materialId),
            needQuantity: selectRecipe.orderQuantity * recipeDetail.quantity
          });
        }
      });
    });
    return needMaterial;
  }

  newRecipe(): Recipe {
    return {
      id: null,
      name: '',
      recipeDetails: [],
      updatedAt: null,
      version: null
    };
  }

  async get(id: number): Promise<Recipe> {
    return this.recipeResource.get(id).toPromise();
  }

  async create(recipe: Recipe): Promise<any> {
    return await this.recipeResource.create(recipe).toPromise();
  }

  async save(recipe: Recipe): Promise<any> {
    return await this.recipeResource.save(recipe).toPromise();
  }

  async remove(recipe: Recipe): Promise<any> {
    await this.recipeResource.remove(recipe.id, recipe.version).toPromise();
    const index = this.recipeList.findIndex(v => v.id === recipe.id);
    if (index !== -1) {
      this.recipeList.splice(index, 1);
    }
  }

}
