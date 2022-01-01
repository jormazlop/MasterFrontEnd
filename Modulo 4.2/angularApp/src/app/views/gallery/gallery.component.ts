import { Component, OnInit } from '@angular/core';
import { Imagen } from 'src/app/models/imagen.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  images: Imagen[] = [
    {
      url: "https://mott.pe/noticias/wp-content/uploads/2019/03/phillipe-halsman-fotografo-que-innovo-con-imagenes-surrealistas.jpg",
      title: "“Dalí Atomicus”, una imagen surrealista y divertida",
      description: "Phillipe Halsman, fotógrafo que se especializó en retratos y moda,"
                 + " le dio una característica única y peculiar al aplicar el surrealismo en sus fotos"
    },
    {
      url: "https://mott.pe/noticias/wp-content/uploads/2019/03/el-fotografo-alfred-eisenstaedt-unos-de-los-maestros-de-la-fotografia.jpg",
      title: "Ensayo de fotografía de ciudades devastadas por la Segunda Guerra Mundial",
      description: "El fotógrafo Alfred Eisenstaedt, unos de los maestros de la fotografía"
    },
    {
      url: "https://mott.pe/noticias/wp-content/uploads/2019/03/joel-meyerowits-uno-de-los-fotografos-mas-reconocidos-por-sus-fotografias-callejeras-a-color.jpg",
      title: "Fotografía callejera a color",
      description: "Joel Meyerowits, uno de los fotógrafos más reconocidos en la historia de la fotografía urbana"
    },
    {
      url: "https://mott.pe/noticias/wp-content/uploads/2019/03/david-doubilet-nos-muestra-la-vida-oculta-mejores-fotografias-subacuaticas.jpg",
      title: "Animales en el fondo del mar",
      description: "David Doubilet, es autor de las mejores fotografías subacuáticos de National Geographic"
    },
    {
      url: "https://mott.pe/noticias/wp-content/uploads/2019/03/el-fotografo-steve-mccurry-conocido-por-la-fotografia-la-ni%C3%B1a-afgana-1.jpg",
      title: "Fotografía «La niña afgana»",
      description: "El fotógrafo Steve Mccurry, colaborador de National Geographic, uno de los fotoperiodistas más famosos del planeta"
    },
    {
      url: "https://fototrending.com/wp-content/uploads/grandes-fotos-de-la-historia-768x971.jpg",
      title: "Milk Drop Coronet, Harold Edgerton, 1957",
      description: "El profesor de ingeniería eléctrica Edgerton comenzó una serie de experimentos en su laboratorio del MIT,"
                 + " inventando una cámara que fotografiara un momento fugaz en la oscuridad."
    },
    {
      url: "https://www.salyroca.es/media/salyroca/images/2021/12/13/2021121318205477478.jpg",
      title: "Foto del ciclista Dylan Siggers",
      description: "Bruno Long se llevó la corona por su foto del ciclista Dylan Siggers pedaleando "
                 + "a través de una nube de polvo atravesada por el sol"
    },
    {
      url: "https://www.salyroca.es/media/salyroca/images/2021/12/13/2021121318205415723.jpg",
      title: "Foto del wakeboarder Dominik Hernler",
      description: "Foto del wakeboarder Dominik Hernler montando una corriente de agua de deshielo "
                 + "dentro de un glaciar, para lo que tuvo que pasar más de tres horas en un agua extremadamente fría"
    },
    {
      url: "https://www.salyroca.es/asset/thumbnail,992,558,center,center//media/salyroca/images/2021/12/14/2021121409365025996.jpg",
      title: "Foto del escalador Jake Talley ",
      description: "El ganador del Red Bull Illume de este año ha sido el estadounidense Will Saunders por su "
                 + "espectacular foto del escalador Jake Talley cayendo por una pared de roca en una posición poco habitual"
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
