import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './shared/components/error/error.component';
import { RegistrationComponent } from './auth/components/registration/registration.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'main',
        loadChildren: () =>
          import('./youtube/youtube.module').then((m) => m.YoutubeModule),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./auth/auth.module').then((m) => m.AuthModule),
      },
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'error', component: ErrorComponent },
      { path: 'registration', component: RegistrationComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class MainRoutingModule {}
