import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Store } from "@ngxs/store";
import * as actions from "@store/garage.actions";
import { CrudService } from "@services/crud.service";

@Component({
  selector: "addGarage",
  templateUrl: "./addGarage.html",
  styleUrls: ["./addGarage.scss"],
})
export class AddGarage implements OnInit {
  @Input() data;
  @Input() name;
  @Output() closer = new EventEmitter<any>();

  addGarageForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private store: Store,
    private crud: CrudService
  ) {}

  ngOnInit() {
    this.addGarageForm = this.fb.group({
      name: [this.data?.value?.name || "", Validators.required],
      address: [this.data?.value?.address || "", Validators.required],
      gmapUrl: [this.data?.value?.gmapUrl || "", Validators.required],
      image: [this.data?.value?.image || "", Validators.required],
    });
  }

  submitGarage() {
    const formValue = this.addGarageForm.value;
    const garage = {
      [formValue.name
        .toLowerCase()
        .replace(/[^A-Za-z]/g, " ")
        .replace(/ +/g, "_")]: {
        name: formValue.name,
        address: formValue.address,
        gmapUrl: formValue.gmapUrl,
        image: formValue.image,
      },
    };

    this.store.dispatch(new actions.AddGarage(garage));
    if (formValue.name !== this.data?.value?.name) {
      this.store.dispatch(new actions.DelGarage(this.data?.key));
    }
    this.addGarageForm.reset();
    this.closer.emit();
  }
}
