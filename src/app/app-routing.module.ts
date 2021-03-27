import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './ChildPages/checkout/checkout.component';
import { CreateblogComponent } from './ChildPages/createblog/createblog.component';
import { PaymentComponent } from './ChildPages/payment/payment.component';
import { ShowblogComponent } from './ChildPages/showblog/showblog.component';
import { ShowdestinationComponent } from './ChildPages/showdestination/showdestination.component';
import { WrongRouteComponentComponent } from './ChildPages/wrong-route-component/wrong-route-component.component';
import { FamilyPackagesComponent } from './Destinations/Familypackage/family-packages/family-packages.component';
import { KeralaFamilyComponent } from './Destinations/Familypackage/kerala-family/kerala-family.component';
import { HoneymoonPackagesComponent } from './Destinations/Honeymoon/honeymoon-packages/honeymoon-packages.component';
import { KeralaHoneymoonComponent } from './Destinations/Honeymoon/kerala-honeymoon/kerala-honeymoon.component';
import { MytripsComponent } from './OfterLoginContents/mytrips/mytrips.component';
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
  { path: "", component: LandingPageComponent },
  { path: "Destination",children:[
    { path: "", component: DestinationCompComponent },
    { path: "DestinationDetail", component: ShowdestinationComponent },
    { path: "Checkout", component: CheckoutComponent },
    { path: "Payment", component: PaymentComponent}
  ]  },
  { path: "Blogs", component: BlogsComponent },
  { path: "Community", component: CommunityComponent },
  { path: "Offers", component: OffersComponent },
  { path: "Packages", component: PackagesComponent },
  { path: "ThemeHoliday", component: ThemeHolidayComponent },
  { path: "Cruises", component: CruisesComponent },
  { path: "showBlog", component: ShowblogComponent },
  { path: "createBlog", component: CreateblogComponent },
  { path: "Profile", component: ProfilemainComponent },
  { path: "MyTrip", component: MytripsComponent },
  //destination
  {
    path: "HoneyMoon", children: [
      { path: "Kerala", component: KeralaHoneymoonComponent },
      { path: '', component: HoneymoonPackagesComponent, pathMatch: 'full' }
    ]
  },
  {
    path: "Family", children: [
      { path: "Kerala", component: KeralaFamilyComponent },
      { path: '', component: FamilyPackagesComponent, pathMatch: 'full' }
    ]
  },
  //Wrong route
  { path: '**', component: WrongRouteComponentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
