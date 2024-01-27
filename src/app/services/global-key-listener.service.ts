import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { filter, buffer, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalKeyListenerService {

  constructor() { }

  startListening() {
    fromEvent(document, 'keydown')
      .pipe(
        buffer(fromEvent(document, 'keydown').pipe(debounceTime(250))),
        filter((keyEvents: KeyboardEvent[]) => this.isDniSequence(keyEvents))
      )
      .subscribe((keyEvents) => {
        const dni = this.extractDniFromSequence(keyEvents);
        if (dni) {
          this.registerDni(dni);
        }
      });
  }

  private isDniSequence(keyEvents: KeyboardEvent[]): boolean {
    return true; 
  }

  private extractDniFromSequence(keyEvents: KeyboardEvent[]): string {
    const keyValues = keyEvents.map(event => event.key);
    let dni = keyValues.slice(0, -1).join('');
    return dni;
  }

  private registerDni(dni: string) {
    console.log(`Registrando DNI: ${dni}`);
  }
}