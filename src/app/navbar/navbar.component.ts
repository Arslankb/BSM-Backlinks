import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  // Header Scroll

  ngOnInit(): void {
    const nav = document.querySelector(".navbar") as HTMLElement;

    window.onscroll = () => {
      if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
      } else {
        nav.classList.remove("header-scrolled");
      }
    };


    const navBar = document.querySelectorAll(".nav-link");
    const navCollapse = document.querySelector(".navbar-collapse.collapse");
    navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

//     const navLinks = document.querySelectorAll(".nav-link");
//     const navCollapse = document.querySelector(".navbar-collapse.collapse") as HTMLElement;

//     navLinks.forEach(function(linkElement: Element) {
//     linkElement.addEventListener("click", function() {
//         this.navCollapse.classList.remove("show");
//     });
// });
  }

// Navbar Hide







}
