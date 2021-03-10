import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateblogComponent } from './ChildPages/createblog/createblog.component';
import { ShowblogComponent } from './ChildPages/showblog/showblog.component';
import { ProfilemainComponent } from './OfterLoginContents/profilemain/profilemain.component';
import { BlogsComponent } from './Pages/blogs/blogs.component';

import { CommunityComponent } from './Pages/community/community.component';
import { CruisesComponent } from './Pages/cruises/cruises.component';
import { DestinationCompComponent } from './Pages/destination-comp/destination-comp.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { OffersComponent } from './Pages/offers/offers.component';
import { PackagesComponent } from './Pages/packages/packages.component';
import { ThemeHolidayComponent } from './Pages/theme-holiday/theme-holiday.component';


const routes: Routes = [
  {path: "",component:LandingPageComponent},
  {path: "Destination",component:DestinationCompComponent},
  {path: "Blogs",component:BlogsComponent},
  {path: "Community",component:CommunityComponent},
  {path: "Offers",component:OffersComponent},
  {path: "Packages",component:PackagesComponent},
  {path: "ThemeHoliday",component:ThemeHolidayComponent},
  {path: "Cruises",component:CruisesComponent},
  {path: "showBlog",component:ShowblogComponent},
  {path: "createBlog",component:CreateblogComponent},
  {path: "Profile",component:ProfilemainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
