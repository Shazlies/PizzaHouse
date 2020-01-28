import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'pizza', loadChildren: './pizza/pizza.module#PizzaPageModule' },
  { path: 'drinks', loadChildren: './drinks/drinks.module#DrinksPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
