import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Organizacao } from 'src/models/organizacao';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizacaoService extends AbstractService {
  public getPath(): string {
    throw new Error('Method not implemented.');
  }

  constructor(protected http: HttpClient) {
    super(http)
  }

  /**
   * serviço para salvar Organizacao no servidor
   * @param organizacao > objecto que representa a tabela
   */
  public save(organizacao: Organizacao):Observable<Organizacao>{
    return this.http.post<Organizacao>(this.geturl('salvar'), organizacao);
  }

  public search(denominacao): Observable <Array<Organizacao>> {
    return this.http.post <Array<Organizacao>>(this.geturl('denominacao'), denominacao);
  }

  public findById(id):Observable<Organizacao>{
    return this.http.get<Organizacao>(this.geturl(`/${id}`));
  }

  public delete(id):Observable<any>{
      return this.http.delete(this.geturl(`/${id}`));
  }
}
