import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { AlbumCardComponent } from './album-card/album-card.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


  const routes: Routes = [
    {
      path: 'library',
      component: HomeComponent
    },
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'new album',
      component: AdminComponent
    },
    
    {
      path: 'albumdetails/:id',
      component: AlbumDetailsComponent
    },
    {
      path: 'albumcard',
      component: AlbumCardComponent
    },
    {
      path: '**',
      component: ErrorComponent
    }
    
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
