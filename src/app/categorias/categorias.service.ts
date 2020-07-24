import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MoneyHttp } from '../seguranca/money-http';
import { Categoria } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categoriasUrl = 'http://localhost:8080/categorias'

  constructor(private http: MoneyHttp) { }

  listarTodas(): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW46YWRtaW4=')

      return this.http.get<any>( `${this.categoriasUrl}`, { headers } )
        .toPromise()

  }


}
