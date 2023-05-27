import { Component, HostListener, OnInit } from '@angular/core';
import { Cause } from 'src/app/types/models/Cause';
import { Organization } from 'src/app/types/models/Organization';

@Component({
  selector: 'app-organizations-list',
  templateUrl: './organizations-list.component.html',
  styleUrls: ['./organizations-list.component.sass']
})
export class OrganizationsListComponent implements OnInit {
  public orgs: Organization[] = [
  ];

  public innerWidth: number = 0;
  public cardWidth: number = 500;
  public cols: number = 3;
  ngOnInit() {
    this.onResize(null);
    this.carregarOrganizacoes();
  }

  @HostListener('window:resize', ['$event'])
  onResize(_: any) {
    this.innerWidth = window.innerWidth;
    this.cols = Math.floor(this.innerWidth / this.cardWidth);
  }

  carregarOrganizacoes() {
    let maxIdOrgs = this.orgs.reduce((max, org) => org.id > max ? org.id : max, 0);
    for (let i = 0; i < 9; i++) {
      let pegaCausas = () => {
        let causes: Cause[] = [];
        let r1 = Math.ceil(Math.random() * 3);
        let ids : number[] = [];
        for (let j = 0; j < r1; j++) {
          let r2 = 0;
          while(ids.includes(r2) || r2 === 0) {
            r2 = Math.ceil(Math.random() * 9);
          }
          ids.push(r2);
          causes.push({
            id: r2,
            name: `Causa ${r2}`,
            description: `Descrição da causa ${r2}`,
            active: true
          });
        }
        return causes;
      }
      this.orgs.push({
        id: maxIdOrgs + i + 1,
        business_name: `Organização ${maxIdOrgs + i + 1}`,
        trading_name: `ONG ${maxIdOrgs + i + 1}`,
        description: `Descrição da organização ${maxIdOrgs + i + 1}`,
        active: true,
        causes: pegaCausas()
      });
    }
  }
}
