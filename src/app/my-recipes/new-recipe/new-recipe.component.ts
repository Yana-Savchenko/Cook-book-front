import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { NewRecipeHttpService } from '../../core/services/new-recipe-http.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent implements OnInit {

  private headerText: string = 'New recipe';
  private foto: string = '';
  private file = null;
  private currentRate = 1;
  newRecipeForm: FormGroup;

  constructor(private router: Router, private sanitizer: DomSanitizer, private httpService: NewRecipeHttpService) {

    this.newRecipeForm = new FormGroup({
      "title": new FormControl("", Validators.required),
      "content": new FormControl("", Validators.required),
      "dish_photo": new FormControl("",),
      "cooking_time": new FormControl("", Validators.required),
      "category_id": new FormControl("", Validators.required),
    });

  }

  ngOnInit() {
  }
  submit() {
    console.log(this.newRecipeForm.value);
    const formData = new FormData();
    formData.append("title", this.newRecipeForm.value.title);
    formData.append("content", this.newRecipeForm.value.content);
    formData.append("cooking_time", this.newRecipeForm.value.cooking_time);
    formData.append("category_id", this.newRecipeForm.value.category_id);
    formData.append("complexity", String(this.currentRate));
    formData.append("dish_photo", this.file)
    this.httpService.postNewRecipe(formData).subscribe(
      (data: any) => {
        console.log(data);
      },
      error => console.log(error)
    );
    }
  sanitize() {
    return this.sanitizer.bypassSecurityTrustUrl(this.foto);
  }

  change(e) {
    const file = e.currentTarget.files[0];
    this.file = file;
    this.foto = URL.createObjectURL(file);
  }
}
