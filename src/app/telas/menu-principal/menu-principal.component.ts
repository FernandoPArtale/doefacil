import { Component } from '@angular/core';
import { SlideImage } from 'src/app/types/SlideImage';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.sass']
})
export class MenuPrincipalComponent {
  public slides: SlideImage[] = [
    { src: 'https://picsum.photos/1920/480?random=1', url: "/organizacoes/visualizar/1", header: 'Organização 1', subheader: 'Subheader 1' },
    { src: 'https://picsum.photos/1920/480?random=2', url: "/organizacoes/visualizar/2", header: 'Organização 2', subheader: 'Subheader 2' },
    { src: 'https://picsum.photos/1920/480?random=3', url: "/organizacoes/visualizar/3", header: 'Organização 3', subheader: 'Subheader 3' },
  ]
}
