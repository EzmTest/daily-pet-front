import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractService {

  protected webContext: string = 'Daily-Pet/rest'

  constructor(protected http: HttpClient) { }

  public abstract getPath(): string;

  public geturl(pathEnd) {
    return environment.url + this.webContext + '/' + this.getPath() + "/" + pathEnd;
  }
}
