import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LibraryComponent } from './pages/library/library.component';
import { SerieComponent } from './pages/serie/serie.component';
import { CapViewerComponent } from './pages/cap-viewer/cap-viewer.component';
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'serie', component: SerieComponent },
  { path: 'cap-view', component: CapViewerComponent },
];
