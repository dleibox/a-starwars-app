import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoaderService } from './loader.service';

let loader: LoaderService;
const setLoaderService = (ldr: LoaderService) => {
  loader = ldr;
};
function ShowLoader(): MethodDecorator {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const o = descriptor.value;
    descriptor.value = function () {
      let r = o.apply(this, arguments);
      if (r instanceof Observable) {
        r = (<Observable<any>>r).pipe(
          tap(() => {
            loader.stopSpinner();
          })
        );
        loader.showSpinner();
      }
      return r;
    };
  };
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private loader: LoaderService) {
    setLoaderService(this.loader);
  }

  @ShowLoader()
  public getFilms() {
    return this.http.get(`https://swapi.co/api/films/`);
  }

  @ShowLoader()
  public getPeople(search?: string) {
    if (search && search.trim()) {
      return this.http.get(`https://swapi.co/api/people/?search=${search}`);
    } else {
      return this.http.get(`https://swapi.co/api/people/`);
    }
  }

  @ShowLoader()
  public getPlanets() {
    return this.http.get(`https://swapi.co/api/planets/`);
  }

  @ShowLoader()
  public getStarships() {
    return this.http.get(`https://swapi.co/api/starships/`);
  }

  @ShowLoader()
  public getSpecies() {
    return this.http.get(`https://swapi.co/api/species/`);
  }

  @ShowLoader()
  public getVehicles() {
    return this.http.get(`https://swapi.co/api/vehicles/`);
  }
}
