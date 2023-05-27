import { Component, OnInit } from '@angular/core';
import { Cause } from 'src/app/types/models/Cause';

@Component({
  selector: 'app-causes-list',
  templateUrl: './causes-list.component.html',
  styleUrls: ['./causes-list.component.sass']
})
export class CausesListComponent implements OnInit {
  public causes: Cause[] = [];
  
  ngOnInit(): void {
    this.carregarCausas();
  }

  carregarCausas() {
    let maxIdCauses = this.causes.reduce((max, cause) => cause.id > max ? cause.id : max, 0);
    for (let i = 0; i < 9; i++) {
      this.causes.push({
        id: maxIdCauses + i + 1,
        name: `Causa ${maxIdCauses + i + 1}`,
        description: `Descrição da causa ${maxIdCauses + i + 1}`,
        active: true,
        helper_organization_count: Math.ceil(Math.random() * 9)
      });
    }
  }
}
