import { Component, OnInit } from '@angular/core';
import { MessengerService} from 'src/app/services/messenger.service';
import {Product} from 'src/app/models/product'
//import{status} from 'src/app/components/shopping-cart/product-list/product-item/product-item.component'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit 
{

  cartItems = [
    //{id: 1, productId:1, productName:'Test 1', qty: 4, price: 100},
    //{id: 2, productId:2, productName:'Test 2',qty: 5, price: 200},
    //{id: 3, productId:3, productName:'Test 3',qty: 3, price: 300},
    //{id: 4, productId:4, productName:'Test 4',qty: 2, price: 400}
  ];

  cartTotal = 0
  constructor(private msg: MessengerService) { }

  ngOnInit(): void 
  {
    this.msg.getAddMsg().subscribe((product: Product)=>
    {  
      this.addProductToCart(product);
    }) ;   

    this.msg.getRemoveMsg().subscribe((product: Product)=>
    {
      this.removeProductToCart(product);
    })      
  }

addProductToCart(product:Product)
{    
    let productExists=false;
    for(let i in this.cartItems)
      {
        if(this.cartItems[i].productId === product.id)
        {          
          this.cartItems[i].qty++;
          productExists=true;
          break;
        }
      }
        
    if(!productExists)
    {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      })
    }
       
    this.cartTotal=0;
    this.cartItems.forEach(item=>{
      this.cartTotal+=(item.qty*item.price)
    })
}

removeProductToCart(product:Product)
{
  
    let productExists=false;
    for(let i in this.cartItems)
      {
        if(this.cartItems[i].productId === product.id && this.cartItems[i].qty>0)
        {          
          this.cartItems[i].qty--;
          productExists=true;  
          if(this.cartItems[i].qty===0){
            this.removeProductToCart.name;
          }        
        }

        
      }      
    
       
    this.cartTotal=0;
    
    this.cartItems.forEach(item=>{
     
      this.cartTotal+=(item.qty*item.price)
      
      
    })
  }
}

  


