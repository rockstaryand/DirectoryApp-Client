import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: "pages",
    loadChildren: () => import("./pages/pages.module")
      .then(m => m.PagesModule)
  },
  { path: "", redirectTo: "pages/dashboard", pathMatch: "full" },
  { path: "**", redirectTo: "pages/dashboard" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppRoutingModule { }
