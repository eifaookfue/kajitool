import { Injectable } from '@angular/core';
import { Material, MaterialResourceService } from '@kajitool/kajitool-api';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  materials: Material[] = [];

  constructor(
    private materialResource: MaterialResourceService
  ) { }

  async init(): Promise<Material[]> {
    this.materials = await this.materialResource.getAll().toPromise();
    return this.materials;
  }

  getMaterial(id: number): Material {
    return this.materials.find(m => m.id === id);
  }

  getMaterials(): Material[] {
    return this.materials;
  }

}
