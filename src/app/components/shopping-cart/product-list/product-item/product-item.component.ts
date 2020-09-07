import { Component, OnInit, Input } from '@angular/core';
import {Product} from 'src/app/models/product';
import {MessengerService} from 'src/app/services/messenger.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit {

  @Input()productItem: Product

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }
  handleAddToCart(){
    console.log('add message');
    this.msg.sendAddMsg(this.productItem)
  }
  
  handleRemoveToCart(){
    console.log('remove message');
    this.msg.sendRemoveMsg(this.productItem)
  }

}
