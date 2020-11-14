import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MyValidators } from '../../../utils/validators';

import { ProductsService } from '../../../core/services/products/products.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productService.getProduct(this.id)
      .subscribe(product => {
        this.form.patchValue(product);
      });
    });
  }

  updateProduct(event: Event): void {
    event.preventDefault();
    if (this.form.valid){
      const product = this.form.value;

      this.productService.updateProduct(this.id, product)
      .subscribe(newProduct => {
        this.router.navigate(['./admin/products']);
      });
    }
  }

  private buildForm(): void{
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: [0, [Validators.required, MyValidators.isPriceVal]],
      image: [''],
      description: ['', [Validators.required]]
    });
  }

  // Este get devuelve un AbstractControl
  get priceField(): AbstractControl{
    return this.form.get('price');
  }

}
