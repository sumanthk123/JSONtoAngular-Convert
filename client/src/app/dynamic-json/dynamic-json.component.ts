import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {formStructure} from "../dynamic-json/extension.js"

@Component({
  selector: 'app-dynamic-json',
  templateUrl: './dynamic-json.component.html',
  styleUrls: ['./dynamic-json.component.css']
})
export class DynamicJsonComponent implements OnInit {

  dynamicForm = this.formBuilder.group({});;
  formStructure = formStructure;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    let formGroup = {};
    this.formStructure.forEach(element => {
      formGroup[element.name] = [element.value || ''];
    });
    this.dynamicForm = this.formBuilder.group(formGroup);
  }
  onSubmit() {
    console.log(this.dynamicForm.value);
  }

}
