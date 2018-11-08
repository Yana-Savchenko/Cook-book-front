import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent implements OnInit {

  foto:string = '';
  newRecipeForm: FormGroup;

  constructor( private router: Router, private sanitizer:DomSanitizer) {

    this.newRecipeForm = new FormGroup({
      "title": new FormControl("", Validators.required),
      "content": new FormControl("", Validators.required),
      "dishFoto": new FormControl("", Validators.required),
      "cookingTime": new FormControl("", Validators.required),
      "category": new FormControl("", Validators.required),
      "complexity": new FormControl("", Validators.required)
    });

  }

  ngOnInit() {
  }

  sanitize(){
    return this.sanitizer.bypassSecurityTrustUrl(this.foto);
}

  change(e) {
    const file = e.currentTarget.files[0];
    this.foto = URL.createObjectURL(file);
  }
}
