import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoaderService } from './loader.service';
import { environment } from 'src/environments/environment';

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
    return this.http.get(`${environment.starwarsApi}films/`);
  }

  @ShowLoader()
  public getPeople(search?: string) {
    if (search && search.trim()) {
      return this.http.get(`${environment.starwarsApi}people/?search=${search}`);
    } else {
      return this.http.get(`${environment.starwarsApi}people/`);
    }
  }

  @ShowLoader()
  public getPlanets() {
    return this.http.get(`${environment.starwarsApi}planets/`);
  }

  @ShowLoader()
  public getStarships() {
    return this.http.get(`${environment.starwarsApi}starships/`);
  }

  @ShowLoader()
  public getSpecies() {
    return this.http.get(`${environment.starwarsApi}species/`);
  }

  @ShowLoader()
  public getVehicles() {
    return this.http.get(`${environment.starwarsApi}vehicles/`);
  }
}
