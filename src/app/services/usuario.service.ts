import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/models/usuario';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends AbstractService {
  
  public getPath(): string {
    throw new Error('Method not implemented.');
  }

  constructor(protected http: HttpClient) {
    super(http);
  }

  /**
   * serviço para salvar usuario no servidor
   * @param usuario > objecto que representa a tabela
   */
  public save(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.geturl('salvar'),usuario);
  }

  public search(nome): Observable <Array<Usuario>> {
    return this.http.post <Array<Usuario>>(this.geturl('nome'), nome);
  }

  public findById(id):Observable<Usuario>{
    return this.http.get<Usuario>(this.geturl(`/${id}`));
  }

  public delete(id):Observable<any>{
      return this.http.delete(this.geturl(`/${id}`));
  }
}
