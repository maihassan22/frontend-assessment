import { Injector } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export class BaseService<T> {
    protected http: HttpClient;
    private readonly baseUrl;

    constructor(injector: Injector ) {
        this.http = injector.get(HttpClient);
        this.baseUrl = environment.baseUrl;
    }

    protected getAll(url: string): Observable<any> {
        return this.http
            .get(`${this.baseUrl}/${url}`)
            .pipe(map((data: any) => data));
    }


}
