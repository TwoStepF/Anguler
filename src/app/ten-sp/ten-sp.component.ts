import { Component, OnInit } from '@angular/core';

class form{
  name: string = '';
  anh: string = '';
  gia: number = 0;
  count: number = 1;
}
@Component({
  selector: 'app-ten-sp',
  templateUrl: './ten-sp.component.html',
  styleUrls: ['./ten-sp.component.css']
})
export class TenSPComponent implements OnInit {
  count: number = 1;
  products: form[] = [
    {
      name: 'iphone 4',
      anh: 'https://cf.shopee.vn/file/5b06e215239effc3ec4b33cd454a147c',
      gia: 1000,
      count: 1
    },
    {
      name: 'iphone 5',
      anh: 'https://cdn.tgdd.vn/Products/Images/42/60549/iphone-5s-64gb-1-1.jpg',
      gia: 2000,
      count: 1
    },
    {
      name: 'iphone 6',
      anh: 'https://chuyenphanphoi.vn/upload/product/533087753449.png',
      gia: 3000,
      count: 1
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  remove(prot: string): void{
    const index = this.products.findIndex(products => products.anh === prot);
    this.products.splice(index, 1);
  }

  caculator(ten: string): void{
    const index = this.products.findIndex(products => products.name === ten);
    this.products[index].gia = this.products[index].count*this.products[index].gia
  }  
}
