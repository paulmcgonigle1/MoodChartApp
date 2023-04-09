import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PlaylistmoodsComponent } from './pages/playlistmoods/playlistmoods.component';
import { SongsComponent } from './pages/songs/songs.component';
import { AuthGuard } from './guards/auth-guard/auth-guard.component';
// import { MoodAnalysisComponent } from './pages/mood-analysis/mood-analysis.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'login', component:LoginComponent,title:"Login"},
  {path: 'home', component:HomeComponent,title:"Home"},
  {path: 'songs', component:SongsComponent,canActivate:[AuthGuard],title:"Songs"},
  {path: 'moods', component:PlaylistmoodsComponent, canActivate:[AuthGuard],title:"Moods"},
  
  
  // {path:'mood-analysis', component:MoodAnalysisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
