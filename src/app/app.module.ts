import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { topbar } from './Directives/Topbar.dir';
import { DestinationCompComponent } from './Pages/destination-comp/destination-comp.component';
import { PackagesComponent } from './Pages/packages/packages.component';
import { ThemeHolidayComponent } from './Pages/theme-holiday/theme-holiday.component';
import { OffersComponent } from './Pages/offers/offers.component';
import { BlogsComponent } from './Pages/blogs/blogs.component';
import { CommunityComponent } from './Pages/community/community.component';
import { SimplecardComponent } from './Reusable/simplecard/simplecard.component';
import { ImagecarouselComponent } from './Reusable/imagecarousel/imagecarousel.component';
import { CaptioncarouselComponent } from './Reusable/captioncarousel/captioncarousel.component';
import { HrScrolaableCardComponent } from './Reusable/hr-scrolaable-card/hr-scrolaable-card.component';
import { CruisesComponent } from './Pages/cruises/cruises.component';
import { ShowblogComponent } from './ChildPages/showblog/showblog.component';
import { CreateblogComponent } from './ChildPages/createblog/createblog.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    topbar,
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
    CaptioncarouselComponent,
    HrScrolaableCardComponent,
    CruisesComponent,
    ShowblogComponent,
    CreateblogComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    RouterModule,ReactiveFormsModule,
    HttpClientModule, AngularEditorModule, BrowserAnimationsModule 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
  
 }
