import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalCadastroComponent } from './pages/animal/animal-cadastro/animal-cadastro.component';
import { AnimalPesquisaComponent } from './pages/animal/animal-pesquisa/animal-pesquisa.component';
import { UsuarioCadastroComponent } from './pages/usuario/usuario-cadastro/usuario-cadastro.component';
import { UsuarioPesquisaComponent } from './pages/usuario/usuario-pesquisa/usuario-pesquisa.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'usuario/cadastro',
    pathMatch:'full'
  },
  {
    path: 'usuario/cadastro', component: UsuarioCadastroComponent
  },
  {
    path: 'usuario/pesquisa', component: UsuarioPesquisaComponent
  },
  {
    path: 'animal/cadastro', component: AnimalCadastroComponent
  },
  {
    path: 'animal/pesquisa', component: AnimalPesquisaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
