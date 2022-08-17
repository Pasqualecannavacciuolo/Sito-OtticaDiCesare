import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sito';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("** APP COMPONENT AVVIATO **");
    this.openAndCloseMobileMenu()
  }

  openAndCloseMobileMenu() {
   let navbarToggler = document.getElementById('navbar-toggler');
   let navbarSupportedContent = document.getElementById('navbarSupportedContent');
   let navLink = document.querySelectorAll('.nav-link')

   // Per ogni elemento del menu metto in ascolto su un click per chiudere in automatico il menu
   navLink.forEach(element => {
    element.addEventListener('click', () => {
      setTimeout(() => {
        navbarToggler?.classList.add('collapsed')
        navbarSupportedContent?.classList.remove('show')
      }, 150);
    });
   });
  }

}
