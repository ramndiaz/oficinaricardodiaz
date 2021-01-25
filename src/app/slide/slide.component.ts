import { Component, OnInit } from '@angular/core';
import{NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  imagenes: any[]=[
    {name:'MISIÓN',
    img:'assets/penal1.jpg',
    desc:'Ofrecer a cada cliente un trato personalizado de alta calidad y profesional en el asesoramiento jurídico de todas las áreas del derecho.'
    },
    {name:'VISIÓN',
    img:'assets/penal2.jpeg',
    desc:'Mantener los valores desarrollados a lo largo de nuestra historia y ser líder en el mercado ofreciendo soluciones de acuerdo a las necesidades empresariales y jurídicas de nuestros clientes.'
    },
    {name:'OBJETIVO',
    img:'assets/penal3.jpeg',
    desc:'Proporcionar los más altos servicios legales para poder ser una parte instrumental en el éxito de todos y cada uno de nuestros clientes.'
    },
    {name:'VALORES',
    img:'assets/penal4.jpg',
    desc:'Eficiencia, Honestidad, Capacidad, Fidelidad, Confianza'
    }
  ];

  constructor(private_config: NgbCarouselConfig) { }

  ngOnInit(): void {
  }

}
