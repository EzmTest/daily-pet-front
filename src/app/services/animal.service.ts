import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from 'src/models/animal';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class AnimalService extends AbstractService {
  
  public getPath(): string {
    throw new Error('Method not implemented.');
  }

  constructor(protected http: HttpClient) {
    super(http);
  }

  /**
   * serviço para salvar Animal no servidor
   * @param animal > objecto que representa a tabela
   */
  public save(animal: Animal):Observable<Animal>{
    return this.http.post<Animal>(this.geturl('salvar'), animal);
  }

  public search(titulo): Observable <Array<Animal>> {
    return this.http.post <Array<Animal>>(this.geturl('titulo'), titulo);
  }

  public findById(id):Observable<Animal>{
    return this.http.get<Animal>(this.geturl(`/${id}`));
  }

  public delete(id):Observable<any>{
      return this.http.delete(this.geturl(`/${id}`));
  }
}
