import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioCadastroComponent } from './pages/usuario/usuario-cadastro/usuario-cadastro.component';
import { UsuarioPesquisaComponent } from './pages/usuario/usuario-pesquisa/usuario-pesquisa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
// import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { AnimalCadastroComponent } from './pages/animal/animal-cadastro/animal-cadastro.component';
import { AnimalPesquisaComponent } from './pages/animal/animal-pesquisa/animal-pesquisa.component';
import { OngCadastroComponent } from './pages/ong/ong-cadastro/ong-cadastro.component';
import { OngPesquisaComponent } from './pages/ong/ong-pesquisa/ong-pesquisa.component';
import { OrganizacaoPesquisaComponent } from './pages/organizacao/organizacao-pesquisa/organizacao-pesquisa.component';
import { OrganizacaoCadastroComponent } from './pages/organizacao/organizacao-cadastro/organizacao-cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioCadastroComponent,
    UsuarioPesquisaComponent,
    AnimalCadastroComponent,
    AnimalPesquisaComponent,
    OngCadastroComponent,
    OngPesquisaComponent,
    OrganizacaoPesquisaComponent,
    OrganizacaoCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatSelectModule,   
    FlexLayoutModule,
    MatMenuModule, 
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
