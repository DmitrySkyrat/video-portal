import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './shared/components/error/error.component';
import { RegistrationComponent } from './auth/components/registration/registration.component';
@NgModule({
  imports: [
    RouterModule.forRoot([
    {path: 'youtube', loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule)},
    {path: 'login', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)},
    {path: 'users', loadChildren: () => import('./users/user.module').then((m) => m.UserModule)},
    {path: 'error', component: ErrorComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: '', redirectTo: 'youtube', pathMatch: 'full'}
  ], {relativeLinkResolution: 'legacy', useHash: true}),
  ],
  exports: [RouterModule],
})
export class MainRoutingModule {}
