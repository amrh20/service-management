import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TableModule } from 'primeng/table';

interface Column {
  field: string;
  header: string;
  searchable: boolean;
}


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() serviceData: any[] = [];
  @Input() tableColumns: { field: string; header: string }[] = [];


  onEdit(row: any): void {
    console.log('Edit clicked for:', row);
  }

  onView(row: any): void {
    console.log('View clicked for:', row);
  }
}
