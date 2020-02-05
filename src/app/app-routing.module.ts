import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { S3Component } from './s3/s3.component';
import { S3SidebarComponent } from './s3/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 's3',
  },
  {
    path: 's3',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    data: { side: true },
    children: [
      {
        path: '',
        component: S3SidebarComponent,
        outlet: 'sidebar',
      },
      {
        path: ':bucket',
        component: S3Component,
      },
      {
        path: ':bucket/:prefix',
        component: S3Component,
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
