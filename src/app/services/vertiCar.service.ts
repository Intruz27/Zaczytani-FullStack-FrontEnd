import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { CarsInterface, PartsInterface } from '../modules/interfaces';

@Injectable({
  providedIn: 'root',
})
export class VertiCarService {
public baseApiUrl = 'https://localhost:7111'
  
constructor(private http: HttpClient) { }

public getAllCars(): Observable<CarsInterface[]> {
  return this.http.get<CarsInterface[]>(this.baseApiUrl + '/api/Cars');
}

public getAllParts(): Observable<PartsInterface[]> {
  return this.http.get<PartsInterface[]>(this.baseApiUrl + '/api/Parts');
}

public addCar(form: CarsInterface): Observable<CarsInterface> {
  form.id = uuidv4();
  return this.http.post<CarsInterface>(this.baseApiUrl + '/api/Cars', form);
}

public addPart(form: PartsInterface): Observable<PartsInterface> {
  form.id = uuidv4();
  return this.http.post<PartsInterface>(this.baseApiUrl + '/api/Part', form);
}

public getCar(id: string): Observable<CarsInterface> {
  return this.http.get<CarsInterface>(this.baseApiUrl + '/api/Cars/' + id);
}

public getPart(id: string): Observable<PartsInterface> {
  return this.http.get<PartsInterface>(this.baseApiUrl + '/api/Parts/' + id);
}

public updateCar(id: string, updateCarRequest: CarsInterface): Observable<CarsInterface> {
  return this.http.put<CarsInterface>(this.baseApiUrl + '/api/Cars/' + id, updateCarRequest);
}

public updatePart(id: string, updatePartRequest: PartsInterface): Observable<PartsInterface> {
  return this.http.put<PartsInterface>(this.baseApiUrl + '/api/Parts/' + id, updatePartRequest);
}

public deleteCar(id: string): Observable<CarsInterface> {
  return this.http.delete<CarsInterface>(this.baseApiUrl + '/api/Cars/' + id,);
}

public deletePart(id: string): Observable<PartsInterface> {
  return this.http.delete<PartsInterface>(this.baseApiUrl + '/api/Parts/' + id,);
}
}
