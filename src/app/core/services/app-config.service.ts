import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AppConfigService {
  readonly production = environment.production;
  readonly apiUrl = environment.apiUrl;
}
