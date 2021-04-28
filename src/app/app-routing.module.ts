import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './ChildPages/checkout/checkout.component';
import { CreateblogComponent } from './ChildPages/createblog/createblog.component';
import { PaymentComponent } from './ChildPages/payment/payment.component';
import { ShowblogComponent } from './ChildPages/showblog/showblog.component';
import { ShowdestinationComponent } from './ChildPages/showdestination/showdestination.component';
import { WrongRouteComponentComponent } from './ChildPages/wrong-route-component/wrong-route-component.component';
import { CruisecheckoutComponent } from './CruiseChildpages/cruisecheckout/cruisecheckout.component';
import { CruisedestinationdetailsComponent } from './CruiseChildpages/cruisedestinationdetails/cruisedestinationdetails.component';
import { CruisedestinationsComponent } from './CruiseChildpages/cruisedestinations/cruisedestinations.component';
import { FamilyPackagesComponent } from './Destinations/Familypackage/family-packages/family-packages.component';
import { HoneymoonPackagesComponent } from './Destinations/Honeymoon/honeymoon-packages/honeymoon-packages.component';
import { MytripdiscComponent } from './OfterLoginContents/mytripdisc/mytripdisc.component';
import { MytripsComponent } from './OfterLoginContents/mytrips/mytrips.component';
import { ProfilemainComponent } from './OfterLoginContents/profilemain/profilemain.component';
import { BlogsComponent } from './Pages/blogs/blogs.component';
import { CareerComponent } from './Pages/career/career.component';

import { CommunityComponent } from './Pages/community/community.component';
import { CruisesComponent } from './Pages/cruises/cruises.component';
import { DestinationCompComponent } from './Pages/destination-comp/destination-comp.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { OffersComponent } from './Pages/offers/offers.component';
import { PackagesComponent } from './Pages/packages/packages.component';
import { ThemeHolidayComponent } from './Pages/theme-holiday/theme-holiday.component';


const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "Destination/:Theme/:place",children:[
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
  { path: "Cruises",children:[
    {path: "", component: CruisesComponent},
    {path: "Cruisecheckout/:id", component: CruisecheckoutComponent},
    {path: "Cruisedetails/:id", component: CruisedestinationdetailsComponent}] },
  { path: "showBlog", component: ShowblogComponent },
  { path: "createBlog", component: CreateblogComponent },
  { path: "Profile", component: ProfilemainComponent },
  { path: "MyTrip", component: MytripsComponent },
  { path: "TripStatus", component: MytripdiscComponent },
  { path: "Career", component: CareerComponent },
  //cruise
  {
    path: "Cruisedestinations/:id", children: [
      { path: '', component: CruisedestinationsComponent, pathMatch: 'full' }
    ]
  },
  //destination
  {
    path: "HoneyMoon/:id", children: [
      { path: '', component: HoneymoonPackagesComponent, pathMatch: 'full' }
    ]
  },
  {
    path: "Family/:id", children: [
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
