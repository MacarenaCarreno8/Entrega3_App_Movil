import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eventos, EventosCrear } from 'src/interfaces/eventos';
import { environment } from 'src/environments/environment';
import { switchMap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Comentario } from 'src/interfaces/eventos';


@Injectable({
  providedIn: 'root'
})
export class ApicrudService {
   // Define la propiedad apiUrl
   

  private registroEventos: Eventos[] = []; // Lista de eventos agendados

  constructor(private httpclient: HttpClient) { }

  // Obtener eventos desde el servidor
  getEventos(): Observable<Eventos[]> {
    return this.httpclient.get<Eventos[]>(`${environment.apiUrl}/eventos`);
  }

  getEventoById(idEvento: number): Observable<Eventos> {
    return this.httpclient.get<Eventos>(`${environment.apiUrl}/eventos/?idEvento=${idEvento}`);
  }

  // Agregar nuevo evento al servidor
  postEventos(newEvento: EventosCrear): Observable<EventosCrear> {
    return this.httpclient.post<EventosCrear>(`${environment.apiUrl}/eventos`, newEvento);
  }

  // Actualizar evento en el servidor
  putEventos(eventito: any): Observable<Eventos> {
    if (!eventito.id) {
      throw new Error('El evento no tiene ID');
    }
    return this.httpclient.put<Eventos>(`${environment.apiUrl}/eventos/${eventito.id}`, eventito);
  }  

  // Eliminar evento del servidor
  deleteEventos(evento: any): Observable<Eventos> {
    return this.httpclient.delete<Eventos>(`${environment.apiUrl}/eventos/${evento.id}`);
  }

  // Agregar evento a la lista de eventos agendados
  agregarEvento(evento: Eventos): void {
    this.registroEventos.push(evento);
  }





  /*postComentario(eventoid: string, comentario: Comentario): Observable<any> {
    return this.httpclient.get<Eventos>(`${environment.apiUrl}/eventos/${eventoid}`).pipe(
      switchMap((evento: Eventos) => {
        evento.comentario.push(comentario);
        return this.httpclient.patch(`${environment.apiUrl}/eventos/${eventoid}`, { comentario: evento.comentario });
      })
    );
  }*/
  
  
}