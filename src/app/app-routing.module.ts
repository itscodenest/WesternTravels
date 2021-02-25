import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './Pages/blogs/blogs.component';
import { CommunityComponent } from './Pages/community/community.component';
import { DestinationCompComponent } from './Pages/destination-comp/destination-comp.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { OffersComponent } from './Pages/offers/offers.component';
import { PackagesComponent } from './Pages/packages/packages.component';
import { ThemeHolidayComponent } from './Pages/theme-holiday/theme-holiday.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {path: "",component:LandingPageComponent},
  {path: "Destination",component:DestinationCompComponent},
  {path: "Blogs",component:BlogsComponent},
  {path: "Community",component:CommunityComponent},
  {path: "Offers",component:OffersComponent},
  {path: "Packages",component:PackagesComponent},
  {path: "ThemeHoliday",component:ThemeHolidayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
