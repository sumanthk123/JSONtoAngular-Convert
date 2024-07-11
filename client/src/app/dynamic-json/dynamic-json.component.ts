import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {formStructure} from "../dynamic-json/extension.js"


@Component({
  selector: 'app-dynamic-json',
  templateUrl: './dynamic-json.component.html',
  styleUrls: ['./dynamic-json.component.css'],
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
  onChange(event, type, elabel, checkedval) {
    console.log( event.source)
    if (type == "radio") {
      console.log(event.value);
      // return event.target.value;
    }
    if (type == "checkbox") {
      console.log(checkedval);
      console.log(event.checked);
      this.dynamicForm.get(elabel).value[event.source.value] = event.source.checked;
      console.log(event.checked);
      return event.checked;
    }
  }

}
