import { Component } from '@angular/core';
import { SlideImage } from 'src/app/types/SlideImage';
import { Cause } from 'src/app/types/models/Cause';
import { Organization } from 'src/app/types/models/Organization';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.sass']
})
export class MainMenuComponent {
  public slides: SlideImage[] = [
    { src: 'https://picsum.photos/1920/480?random=1', url: "/organizacoes/visualizar/1", header: 'Organização 1', subheader: 'Subheader 1' },
    { src: 'https://picsum.photos/1920/480?random=2', url: "/organizacoes/visualizar/2", header: 'Organização 2', subheader: 'Subheader 2' },
    { src: 'https://picsum.photos/1920/480?random=3', url: "/organizacoes/visualizar/3", header: 'Organização 3', subheader: 'Subheader 3' },
  ]

  public orgs: {name: string, position: google.maps.LatLng}[] = [
    { name: 'Organização 1', position: new google.maps.LatLng(-23.5505199, -46.6333094) },
    { name: 'Organização 2', position: new google.maps.LatLng(-23.5505199, -46.6333094) },
    { name: 'Organização 3', position: new google.maps.LatLng(-23.5505199, -46.6333094) },
    { name: 'Organização 4', position: new google.maps.LatLng(-23.5505199, -46.6333094) },
    { name: 'Organização 5', position: new google.maps.LatLng(-23.5505199, -46.6333094) },
    { name: 'Organização 6', position: new google.maps.LatLng(-23.5505199, -46.6333094) }, 
  ]

  public causes: Cause[] = [
    { id: 1, name: 'Causa 1', description: 'Descrição da causa 1', created_at: '2021-08-01T00:00:00.000Z', active: true },
    { id: 2, name: 'Causa 2', description: 'Descrição da causa 2', created_at: '2021-08-01T00:00:00.000Z', active: true },
    { id: 3, name: 'Causa 3', description: 'Descrição da causa 3', created_at: '2021-08-01T00:00:00.000Z', active: true },
    { id: 4, name: 'Causa 4', description: 'Descrição da causa 4', created_at: '2021-08-01T00:00:00.000Z', active: true },
    { id: 5, name: 'Causa 5', description: 'Descrição da causa 5', created_at: '2021-08-01T00:00:00.000Z', active: true },
    { id: 6, name: 'Causa 6', description: 'Descrição da causa 6', created_at: '2021-08-01T00:00:00.000Z', active: true },
    { id: 7, name: 'Causa 7', description: 'Descrição da causa 7', created_at: '2021-08-01T00:00:00.000Z', active: true },
    { id: 8, name: 'Causa 8', description: 'Descrição da causa 8', created_at: '2021-08-01T00:00:00.000Z', active: true }
  ]
}
