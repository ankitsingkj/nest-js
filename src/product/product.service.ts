import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
private products=[
  {id:1, name:"mobile",price:20000},
  {id:2, name:"mobile",price:40000},
  {id:3, name:"mobile",price:80000},
];
getAllProducts(){
  return this.products;
}
getproductById(id:number){
  return this.products.find((product)=>product.id===id 

  )
}
   
}
