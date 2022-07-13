import { Injectable } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListrenderserviceService {

  private API_URL = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) { }

  remove(animals: Animal[], animal: Animal){
    return animals.filter((a) => animal.name !== a.name)
  }

  getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal []>(this.API_URL);
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.API_URL}/${id}`);
  }
}
