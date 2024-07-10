import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {formStructure} from "../dynamic-json/extension.js"

@Component({
  selector: 'app-dynamic-json',
  templateUrl: './dynamic-json.component.html',
  styleUrls: ['./dynamic-json.component.css']
})
export class DynamicJsonComponent implements OnInit {

  dynamicForm: FormGroup = this.formBuilder.group({});;
  formStructure = formStructure;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    let formGroup = {};
    this.formStructure.forEach(element => {
      let val;
      if (element.type == 'checkbox') {
        const val = this.formBuilder.array(
          element.options.map(() => this.formBuilder.control(false))
        );
        formGroup[element.label] = val;
      } else {
        val = element.value;
        formGroup[element.label] = val;
      }

    });
    this.dynamicForm = this.formBuilder.group(formGroup);
  }
  onSubmit() {
    // console.log(event);
    console.log(this.dynamicForm.value);
  }
  onChange(event) {
    if (event.target.type == "radio") {
      console.log(event.target.value);
      // return event.target.value;
    }
    if (event.target.type == "checkbox") {
      console.log(event.target);
      this.dynamicForm.get(event.target.id).value[event.target.value] = event.target.checked
    }
  }

}
