import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { AboutisetComponent } from './aboutiset/aboutiset.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OrgchartComponent } from './orgchart/orgchart.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TeamComponent } from './team/team.component';
import { ItComponent } from './it/it.component';
import { EcoComponent } from './eco/eco.component';
import { MecComponent } from './mec/mec.component';
import { ElecComponent } from './elec/elec.component';
import { GCivilComponent } from './g-civil/g-civil.component';
import { ClubsComponent } from './clubs/clubs.component';
import { SportActivitiesComponent } from './sport-activities/sport-activities.component';
import { CulturalActivitiesComponent } from './cultural-activities/cultural-activities.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ErasmusComponent } from './erasmus/erasmus.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NationalpComponent } from './nationalp/nationalp.component';
import { InternationalpComponent } from './internationalp/internationalp.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutisetComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    OrgchartComponent,
    ContactusComponent,
    TeamComponent,
    ItComponent,
    EcoComponent,
    MecComponent,
    ElecComponent,
    GCivilComponent,
    ClubsComponent,
    SportActivitiesComponent,
    CulturalActivitiesComponent,
    ErasmusComponent,
    NationalpComponent,
    InternationalpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
