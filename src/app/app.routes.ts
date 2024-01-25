import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './pages/inventory/inventory.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, title: "HomePage"},
  {path: 'inventory', component: InventoryComponent, title: "Inventory"}
];
