import { Component, OnInit } from '@angular/core';
import { IsetService } from '../iset.service';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  result: any
  constructor(private service: IsetService) { }
  ngOnInit(): void {
    this.service.getStaff().subscribe(
      (result: any) => {
        console.log(result)
        this.result = result.data;

      }



    )


  }

}
