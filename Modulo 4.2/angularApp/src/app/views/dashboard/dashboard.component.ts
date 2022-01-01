import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Section } from 'src/app/models/section.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  gallerySection: Section = {
    imageHover: "https://www.toureiffel.paris/sites/default/files/actualite/image_principale/vue_depuisjardins_webbanner.jpg",
    imageNoHover: "https://cdn.pixabay.com/photo/2020/04/24/06/27/eiffel-tower-5085389_1280.jpg",
    title: "Galeria",
    description: "En esta sección te traemos galerías con increíbles fotografías, tomadas por fotógrafos profesionales y aficionados de todo el mundo."
  }

  aboutSection: Section = {
    imageHover: "https://www.bellanatura.com.pa/wp-content/uploads/2018/10/buen_vendedor_bellanatura.jpg",
    imageNoHover: "https://difusionconcausa.com/wp-content/uploads/2020/09/Fondo-de-Respuesta-Rapida.jpg",
    title: "Acerca de",
    description: "Un poco de información extra sobre quienes somos y a que nos dedicamos."
  }

  faqSection: Section = {
    imageHover: "https://static.vecteezy.com/system/resources/previews/002/240/200/non_2x/light-bulb-icon-glowing-light-bulb-symbol-vector.jpg",
    imageNoHover: "https://www.evolvefish.com/assets/images/Decals/EF-VDC-00035(Black).jpg",
    title: "FAQ",
    description: "Sección con las respuestas a las preguntas mas frecuentes."
  }

  profileSection: Section = {
    imageHover: "https://st3.depositphotos.com/28636338/32091/v/450/depositphotos_320912440-stock-illustration-profile-icon-isolated-abstract-backgroun.jpg",
    imageNoHover: "https://www.kindpng.com/picc/m/21-214439_free-high-quality-person-icon-default-profile-picture.png",
    title: "Profile",
    description: "Accede y gestiona la información de tu perfil."
  }

  adminSection: Section = {
    imageHover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUhZaR4Fo5UA-a3VQDUuCeckocQgk9lnZGGw&usqp=CAU",
    imageNoHover: "https://p.kindpng.com/picc/s/247-2472302_admin-transparent-background-admin-icon-hd-png-download.png",
    title: "Admin",
    description: "Sección exclusiva para los administradores, contiene estadisticas de la página."
  }

  crudSection: Section = {
    imageHover: "https://www.t4franquicias.com/wp-content/uploads/2019/03/proveedores1.png",
    imageNoHover: "https://executive.iqs.edu/sites/default/files/negociacionproveed.jpg",
    title: "Crud",
    description: "Crud que permite gestionar la lista de proveedores de la galeria."
  }

  userAdmin: boolean;

  userSubscription: Subscription;

  constructor(
    private router: Router,
    private authentication: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.userAdmin = false;


    this.userSubscription = this.authentication.currentUserValue.subscribe(user => {
      this.userAdmin = user.type === 'admin'? true: false;
    });
  }

  onClickGallery(): void {
    this.router.navigate(['/gallery']);
  }

  onClickAbout(): void {
    this.router.navigate(['/about']);
  }

  onClickFaq(): void {
    this.router.navigate(['/faq']);
  }

  onClickProfile(): void {
    this.router.navigate(['/profile']);
  }

  onClickAdmin(): void {
    this.router.navigate(['/admin']);
  }

  onClickCrud(): void {
    this.router.navigate(['/crud']);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
