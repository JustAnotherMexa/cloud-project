import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/services/category.service';
import { ProductService } from '../../../shared/services/product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
import { UploadService } from 'shared/services/upload.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
 
  categories$;
  product = {};
  id;
  addImages = false;
  
  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private photoService: UploadService) {
    this.categories$ = categoryService.getAll();
    

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.productService.get(this.id).valueChanges().take(1).subscribe(p => this.product = p);
   }

   save(product){
    this.addImages = true;
    if (this.id) this.productService.update(this.id, product);
    else this.id = this.productService.create(product).key;
     
     this.router.navigate(['/admin/products/' + this.id]);
   }

   delete(){
     if (!confirm('Are you sure you wish to delete this product?')) return;
     this.productService.delete(this.id);
     this.router.navigate(['/admin/products']);
   }

   addImage(product){
    this.router.navigate(['/admin/products']);
   }

  ngOnInit() {
  }

}
