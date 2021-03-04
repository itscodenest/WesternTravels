import { Component } from '@angular/core';

@Component({
    selector: 'topbar',
    template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
    <img src="/assets/skins/western_travellers_1.png" alt="">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="tel:+1123-456-7890"><span><img src="/assets/skins/smartphone_1.png" alt="">&nbsp;&nbsp; </span>+1123-456-7890</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="mailto:westerntravellers@gmail.com" target="_blank"><span><img src="/assets/skins/email__1__1.png" alt="">&nbsp;&nbsp; </span>westerntravellers@gmail.com</a>
      </li>
    </ul>
    <ul class="nav navbar-nav navbar-right mt-2 mt-lg-0">
        <li><a href="#"><span><img src="/assets/skins/user__1__2.png" alt="">&nbsp;&nbsp; </span>Login/Signup</a></li>
    
      </ul>
    
  </div>
</nav>
  `,
    styles: [`
    a { color: #ffffff; }
   
  `]
})

export class topbar {

    constructor() {

    }


    
    

}