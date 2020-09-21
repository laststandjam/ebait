import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  navSlide(){
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll<HTMLElement>('.nav-links li')
    //toggle
    nav.classList.toggle('nav-active')
    //animate
   navLinks.forEach( (link, i)=>{
     link.style.animation= `navLinkFade 0.5s ease forwards${i/7}`
     console.log(link)
   })
  }
  
}
