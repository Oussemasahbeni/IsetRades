import { Component, OnInit } from '@angular/core';
import { IsetService } from '../iset.service';
@Component({
  selector: 'app-internationalp',
  templateUrl: './internationalp.component.html',
  styleUrls: ['./internationalp.component.css']
})
export class InternationalpComponent implements OnInit {
  result: any;


  constructor(private service: IsetService) { }
  ngOnInit(): void {
    this.service.getProjects().subscribe(
      (result: any) => {
        console.log(result)
        this.result = result.data;

      }
    )
  }

}
