import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalKeyListenerService } from '../../../services/global-key-listener.service';

@Component({
  selector: 'app-attendance-table',
  templateUrl: './attendance-table.component.html',
  styleUrls: ['./attendance-table.component.scss']
})
export class AttendanceTableComponent implements OnInit, OnDestroy {
  private dniSubscription: Subscription;

  constructor(private keyListenerService: GlobalKeyListenerService) {}

  ngOnInit() {
    this.dniSubscription = this.keyListenerService.dniScanned$.subscribe(dni => {
      // Aquí lógica para buscar los datos del estudiante y actualizar la vista
      console.log(`DNI escaneado desde attendance table: ${dni}`);
    });
  }

  ngOnDestroy() {
    this.dniSubscription.unsubscribe();
  }
}