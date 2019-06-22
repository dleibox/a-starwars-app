import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getFilms() {
    return this.http.get(`https://swapi.co/api/films/`);
  }
  public getPeople() {
    return this.http.get(`https://swapi.co/api/people/`);
  }
  public getPlanets() {
    return this.http.get(`https://swapi.co/api/planets/`);
  }
  public getStarships() {
    return this.http.get(`https://swapi.co/api/starships/`);
  }
  public getSpecies() {
    return this.http.get(`https://swapi.co/api/species/`);
  }
  public getVehicles() {
    return this.http.get(`https://swapi.co/api/vehicles/`);
  }
}
