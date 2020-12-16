import { Component, OnInit } from '@angular/core';
import { OfgDataService } from '../service/ui-data.service';

export class OfgError {
  constructor(
    public orderId: number,
    public storeId:number,
    public errorStage : string,
    public errorReason : string,
    public exception : string
  ){}
}

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class OfgUIComponent implements OnInit {

  ofgErrors : OfgError[];
  tcode : string;
  viewMessage : string;
  p="";

  constructor(private ofgDataService : OfgDataService) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(){
    console.log("updated code")
    this.ofgDataService.getAllOfgErrors().subscribe(
      response => {
        this.ofgErrors = response;
        console.log(this.ofgErrors);
      }
    )
  }

  getupdatedTodo(){
    if(this.tcode===''){
      this.refreshTodos()
    }else{
      this.ofgDataService.getOfgErrorOnOrderID(this.tcode).subscribe(
        response => {
          this.ofgErrors = response;
          console.log(this.ofgErrors);
        }
      )
    } 
  }

  viewOfgError(id){
    this.viewMessage = `Order ID ${id} OFG Error JSON Downloaded!!`;
  }

}
