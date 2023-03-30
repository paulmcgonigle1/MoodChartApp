import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PlaylistmoodsComponent } from './pages/playlistmoods/playlistmoods.component';
import { SongsComponent } from './pages/songs/songs.component';
// import { MoodAnalysisComponent } from './pages/mood-analysis/mood-analysis.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'home', component:HomeComponent},
  {path: 'songs', component:SongsComponent},
  {path: 'moods', component:PlaylistmoodsComponent},
  
  
  // {path:'mood-analysis', component:MoodAnalysisComponent}
];
// const routes: Routes = [
//   {path: '', component: HomeComponent, },
//   {path: 'home', component:HomeComponent},
//   {path: 'login', component: LoginComponent}
// ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
