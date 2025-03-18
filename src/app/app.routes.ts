import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },  
    { path: 'layout', component: LayoutComponent}, 
    {path:'addedit', component:AddEditComponent}
];
