import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MyValidators } from '../../../utils/validators';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

import { ProductsService } from '../../../core/services/products/products.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  image$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  saveProduct(event: Event): void {
    event.preventDefault();
    if (this.form.valid){
      const product = this.form.value;

      this.productService.createProduct(product)
      .subscribe(newProduct => {
        this.router.navigate(['./admin/products']);
      });
    }
  }

  uploadFile(event): void{
    const file = event.target.files[0];
    const dir = 'images';
    const fileRef = this.storage.ref(dir);
    const task = this.storage.upload(dir, file);

    task.snapshotChanges()
    .pipe(
      finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          this.form.get('image').setValue(url);
        });
      })
    )
    .subscribe();
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
