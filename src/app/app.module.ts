import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { DestinationCompComponent } from './Pages/destination-comp/destination-comp.component';
import { PackagesComponent } from './Pages/packages/packages.component';
import { ThemeHolidayComponent } from './Pages/theme-holiday/theme-holiday.component';
import { OffersComponent } from './Pages/offers/offers.component';
import { BlogsComponent } from './Pages/blogs/blogs.component';
import { CommunityComponent } from './Pages/community/community.component';
import { SimplecardComponent } from './Reusable/simplecard/simplecard.component';
import { ImagecarouselComponent } from './Reusable/imagecarousel/imagecarousel.component';
import { HrScrolaableCardComponent } from './Reusable/hr-scrolaable-card/hr-scrolaable-card.component';
import { CruisesComponent } from './Pages/cruises/cruises.component';
import { ShowblogComponent } from './ChildPages/showblog/showblog.component';
import { CreateblogComponent } from './ChildPages/createblog/createblog.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TopbarDirComponent } from './Directives/topbar-dir/topbar-dir.component';
import { MytripsComponent } from './OfterLoginContents/mytrips/mytrips.component';
import { MytripdiscComponent } from './OfterLoginContents/mytripdisc/mytripdisc.component';
import { ProfilemainComponent } from './OfterLoginContents/profilemain/profilemain.component';
import { ProfileeditComponent } from './OfterLoginContents/profileedit/profileedit.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { WrongRouteComponentComponent } from './ChildPages/wrong-route-component/wrong-route-component.component';
import { AuthGuardGuard } from './Services/auth-guard.guard';
import { HoneymoonPackagesComponent } from './Destinations/Honeymoon/honeymoon-packages/honeymoon-packages.component';

import { MainNavComponent } from './Directives/main-nav/main-nav.component';
import { FamilyPackagesComponent } from './Destinations/Familypackage/family-packages/family-packages.component';

import { ListViewComponent } from './Reusable/list-view/list-view.component';
import { FiltersComponent } from './Reusable/filters/filters.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ShowdestinationComponent } from './ChildPages/showdestination/showdestination.component';
import { CheckoutComponent } from './ChildPages/checkout/checkout.component';
import { PaymentComponent } from './ChildPages/payment/payment.component';
import { CovidsafetyComponent } from './Reusable/covidsafety/covidsafety.component';
import { SubnavbarComponent } from './Directives/subnavbar/subnavbar.component';
import { CruisedestinationsComponent } from './CruiseChildpages/cruisedestinations/cruisedestinations.component';
import { CruisecheckoutComponent } from './CruiseChildpages/cruisecheckout/cruisecheckout.component';
import { CruisedestinationdetailsComponent } from './CruiseChildpages/cruisedestinationdetails/cruisedestinationdetails.component';
import { ThemeshowcardComponent } from './Reusable/themeshowcard/themeshowcard.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DestinationCompComponent,
    PackagesComponent,
    ThemeHolidayComponent,
    OffersComponent,
    BlogsComponent,
    CommunityComponent,
    SimplecardComponent,
    ImagecarouselComponent,
    HrScrolaableCardComponent,
    CruisesComponent,
    ShowblogComponent,
    CreateblogComponent,
    TopbarDirComponent,
    MytripsComponent,
    MytripdiscComponent,
    ProfilemainComponent,
    ProfileeditComponent,
    WrongRouteComponentComponent,
    HoneymoonPackagesComponent,
    MainNavComponent,
    FamilyPackagesComponent,
    ListViewComponent,
    FiltersComponent,
    ShowdestinationComponent,
    CheckoutComponent,
    PaymentComponent,
    CovidsafetyComponent,
    SubnavbarComponent,
    CruisedestinationsComponent,
    CruisecheckoutComponent,
    CruisedestinationdetailsComponent,
    ThemeshowcardComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,  NgxPaginationModule,
    RouterModule,ReactiveFormsModule,NgxIntlTelInputModule,
    HttpClientModule, AngularEditorModule, BrowserAnimationsModule 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
 
  
 }
