import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject } from 'rxjs'
import { MatPaginator } from '@angular/material/paginator'
import { ExpenditureService } from '../services/expenditure.service'
import { Expenditure } from '../model/expenditure'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ema-home',
  templateUrl: './ema-home.component.html',
  styleUrls: ['./ema-home.component.css']
})
export class EmaHomeComponent implements OnInit {

  constructor(private changeDetectorRefs: ChangeDetectorRef, private expenditureService: ExpenditureService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getAllDetails();
  }
  expDetails: Expenditure[];
  total: number = 0;
  tableColumns: string[] = ['Date', 'Item', 'Price', 'Quantity', 'Total', 'Action']
  dataSource: any;

  AddExpenditures(myform : NgForm) {
    //let obj = { id: this.dataSource.value.length + 1, date: '02-06-2019', item: myform.value.item, price: myform.value.price, quantity: myform.value.quantity }
    console.log(myform.value);
  }

  calculation() {
    let t = 0;
    for (let p of this.dataSource) {
      t += +(p.price * p.quantity)
    }
    this.total = t;
    return t;
  }

  deleteRow(id:number){
    console.log("id:"+id)
    this.expenditureService.delete(id).subscribe(data=>{
      console.log("data:"+data);
    })
  }

  getAllDetails() {
    this.expenditureService.getAll().subscribe(data => {
      this.dataSource = data;
      this.calculation();
    })
  }
  

}
