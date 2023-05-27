import { Component } from '@angular/core';
import { Organization } from 'src/app/types/models/Organization';

@Component({
  selector: 'app-view-organization',
  templateUrl: './view-organization.component.html',
  styleUrls: ['./view-organization.component.sass']
})
export class ViewOrganizationComponent {
  public org: Organization;
  constructor() {
    this.org = {
      id: 1,
      business_name: 'Organização 1',
      trading_name: 'ONG 1',
      description: 'Descrição da organização 1',
      active: true,
      causes: [
        {
          id: 1,
          name: 'Causa 1',
          description: 'Descrição da causa 1',
          active: true
        },
        {
          id: 2,
          name: 'Causa 2',
          description: 'Descrição da causa 2',
          active: true
        }
      ],
    }
  }
}
