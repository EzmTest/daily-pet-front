import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ong } from 'src/models/ong';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class OngService extends AbstractService {
  public getPath(): string {
    throw new Error('Method not implemented.');
  }

  constructor(protected http: HttpClient) {
    super(http);
  }

  /**
   * serviço para salvar Ong no servidor
   * @param ong > objecto que representa a tabela
   */
  public save(ong: Ong):Observable<Ong>{
    return this.http.post<Ong>(this.geturl('salvar'), ong);
  }

  public search(denominacao): Observable <Array<Ong>> {
    return this.http.post <Array<Ong>>(this.geturl('denominacao'), denominacao);
  }

  public findById(id):Observable<Ong>{
    return this.http.get<Ong>(this.geturl(`/${id}`));
  }

  public delete(id):Observable<any>{
      return this.http.delete(this.geturl(`/${id}`));
  }
}
