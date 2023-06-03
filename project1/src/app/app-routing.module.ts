import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutisetComponent } from './aboutiset/aboutiset.component';
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
import { ErasmusComponent } from './erasmus/erasmus.component';
import { NationalpComponent } from './nationalp/nationalp.component';
import { InternationalpComponent } from './internationalp/internationalp.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'about', component: AboutisetComponent },
  { path: 'orgchart', component: OrgchartComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'team', component: TeamComponent },
  { path: 'it', component: ItComponent },
  { path: 'eco', component: EcoComponent },
  { path: 'mec', component: MecComponent },
  { path: 'elec', component: ElecComponent },
  { path: 'gcivil', component: GCivilComponent },
  { path: 'clubs', component: ClubsComponent },
  { path: 'sportsActivites', component: SportActivitiesComponent },
  { path: 'culturalActivities', component: CulturalActivitiesComponent },
  { path: 'erasmus', component: ErasmusComponent },
  { path: 'nationalp', component: NationalpComponent },
  { path: 'internationalp', component: InternationalpComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
