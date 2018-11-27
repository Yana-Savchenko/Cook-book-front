import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '../../../environments/environment';
import { RecipeHttpService, RecipeDetails } from '../../core/services/recipe-http.service';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  @Input() recipe:RecipeDetails;
  @Input() recipeId:number;
  @Output() isEdit = new EventEmitter<boolean>();
  @Output() isUpd = new EventEmitter<boolean>();

  private foto: string = '';
  private file = null;
  private currentRate = 1;
  private servUrl = environment.serverUrl;
  newRecipeForm: FormGroup;

  constructor(private sanitizer: DomSanitizer, config: NgbRatingConfig, private httpService:RecipeHttpService) {
    config.readonly = false;
  }

  ngOnInit() {
    this.newRecipeForm = new FormGroup({
      "title": new FormControl(this.recipe.title, Validators.required),
      "content": new FormControl(this.recipe.content, Validators.required),
      "dish_photo": new FormControl(""),
      "cooking_time": new FormControl(this.recipe.cookingTime, Validators.required),
      "category_id": new FormControl(this.recipe.category_id, Validators.required),
    });
    this.currentRate = this.recipe.complexity;
    this.foto = `${this.servUrl}${this.recipe.dishPhoto.path}`;
  }

  sanitize() {
    return this.sanitizer.bypassSecurityTrustUrl(this.foto);
  }

  change(e) {
    const file = e.currentTarget.files[0];
    this.file = file;
    this.foto = URL.createObjectURL(file);
  }

  cancelChanges() {
    this.isEdit.emit(false);
  }

  submit() {
    const formData = new FormData();
    formData.append("title", this.newRecipeForm.value.title);
    formData.append("content", this.newRecipeForm.value.content);
    formData.append("cooking_time", this.newRecipeForm.value.cooking_time);
    formData.append("category_id", this.newRecipeForm.value.category_id);
    formData.append("complexity", String(this.currentRate));
    if (this.file) {
      formData.append("dish_photo", this.file)
    }
    this.httpService.updateRecipeDetails(this.recipeId, formData).subscribe(
        (data: any) => {
          console.log(data);
          this.isUpd.emit(false);
        },
        error => console.log(error)
      );
    }
}
