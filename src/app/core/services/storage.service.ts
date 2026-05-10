import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
  getNumber(key: string, fallback: number): number {
    const value = window.localStorage.getItem(key);
    const parsed = value === null ? Number.NaN : Number(value);

    return Number.isFinite(parsed) ? parsed : fallback;
  }

  setNumber(key: string, value: number): void {
    window.localStorage.setItem(key, String(value));
  }
}
