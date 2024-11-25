import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eventos, EventosCrear } from 'src/interfaces/eventos';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApicrudService {

  constructor(private httpclient: HttpClient) { }

// Obtener eventos desde el servidor
getEventos(): Observable<Eventos[]> {
  return this.httpclient.get<Eventos[]>(`${environment.apiUrl}/eventos`);
}

}
