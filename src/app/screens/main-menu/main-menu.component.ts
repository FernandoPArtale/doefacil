import { Component } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { Cause } from 'src/app/types/models/Cause';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.sass']
})
export class MainMenuComponent {
  public orgs: { id: number, name: string, position: google.maps.LatLng, bannerUrl: string }[] = [
    { id: 1, name: 'Organização 1', position: new google.maps.LatLng(-23.5505199, -46.6333094), bannerUrl: 'https://picsum.photos/1600/240?random?=1' },
    { id: 2, name: 'Organização 2', position: new google.maps.LatLng(-23.5505199, -46.6333094), bannerUrl: 'https://picsum.photos/1600/240?random?=2' },
    { id: 3, name: 'Organização 3', position: new google.maps.LatLng(-23.5505199, -46.6333094), bannerUrl: 'https://picsum.photos/1600/240?random?=3' },
    { id: 4, name: 'Organização 4', position: new google.maps.LatLng(-23.5505199, -46.6333094), bannerUrl: 'https://picsum.photos/1600/240?random?=4' },
    { id: 5, name: 'Organização 5', position: new google.maps.LatLng(-23.5505199, -46.6333094), bannerUrl: 'https://picsum.photos/1600/240?random?=5' },
    { id: 6, name: 'Organização 6', position: new google.maps.LatLng(-23.5505199, -46.6333094), bannerUrl: 'https://picsum.photos/1600/240?random?=6' },
  ]

  public causes: Cause[] = [
    { id: 1, name: 'Causa 1', description: 'Descrição da causa 1', created_at: '2021-08-01T00:00:00.000Z', active: true },
    { id: 2, name: 'Causa 2', description: 'Descrição da causa 2', created_at: '2021-08-01T00:00:00.000Z', active: true },
    { id: 3, name: 'Causa 3', description: 'Descrição da causa 3', created_at: '2021-08-01T00:00:00.000Z', active: true },
    { id: 4, name: 'Causa 4', description: 'Descrição da causa 4', created_at: '2021-08-01T00:00:00.000Z', active: true },
    { id: 5, name: 'Causa 5', description: 'Descrição da causa 5', created_at: '2021-08-01T00:00:00.000Z', active: true },
    { id: 6, name: 'Causa 6', description: 'Descrição da causa 6', created_at: '2021-08-01T00:00:00.000Z', active: true },
    { id: 7, name: 'Causa 7', description: 'Descrição da causa 7', created_at: '2021-08-01T00:00:00.000Z', active: true },
    { id: 8, name: 'Causa 8', description: 'Descrição da causa 8', created_at: '2021-08-01T00:00:00.000Z', active: true },
    { id: 9, name: 'Causa 9', description: 'Descrição da causa 9', created_at: '2021-08-01T00:00:00.000Z', active: true },
    { id: 10, name: 'Causa 10', description: 'Descrição da causa 10', created_at: '2021-08-01T00:00:00.000Z', active: true },
    { id: 11, name: 'Causa 11', description: 'Descrição da causa 11', created_at: '2021-08-01T00:00:00.000Z', active: true },
    { id: 12, name: 'Causa 12', description: 'Descrição da causa 12', created_at: '2021-08-01T00:00:00.000Z', active: true },
    { id: 13, name: 'Causa 13', description: 'Descrição da causa 13', created_at: '2021-08-01T00:00:00.000Z', active: true },
    { id: 14, name: 'Causa 14', description: 'Descrição da causa 14', created_at: '2021-08-01T00:00:00.000Z', active: true },
    { id: 15, name: 'Causa 15', description: 'Descrição da causa 15', created_at: '2021-08-01T00:00:00.000Z', active: true },
  ]

  public carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    interval: {timing: 40000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2
  }
}
