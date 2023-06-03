import { Component, OnInit } from '@angular/core';
import { IsetService } from '../iset.service';

@Component({
  selector: 'app-nationalp',
  templateUrl: './nationalp.component.html',
  styleUrls: ['./nationalp.component.css']
})
export class NationalpComponent implements OnInit {
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


