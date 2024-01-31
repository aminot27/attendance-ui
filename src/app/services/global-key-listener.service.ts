import { Injectable } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { filter, buffer, debounceTime } from 'rxjs/operators';
import { ScanService } from '../services/api/scan.service'; // Asegúrate de importar ScanService correctamente

@Injectable({
  providedIn: 'root'
})
export class GlobalKeyListenerService {
  private dniScannedSource = new Subject<string>(); // Cambiado para emitir solo el DNI como string
  dniScanned$ = this.dniScannedSource.asObservable();

  constructor(private scanService: ScanService) { } // Inyecta ScanService

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
    return keyEvents.length > 0 && keyEvents[keyEvents.length - 1].key === 'Enter';
  }

  private extractDniFromSequence(keyEvents: KeyboardEvent[]): string {
    const keyValues = keyEvents.map(event => event.key);
    let dni = keyValues.slice(0, -1).join('');
    return dni;
  }

  private registerDni(dni: string) {
    this.dniScannedSource.next(dni);
    this.scanService.sendDni(dni).subscribe({
      next: (response) => console.log('DNI enviado con éxito', response),
      error: (error) => console.error('Error al enviar el DNI', error)
    });
  }
}