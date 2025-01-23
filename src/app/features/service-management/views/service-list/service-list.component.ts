import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../../../shared/components/table/table.component';

@Component({
  selector: 'app-service-list',
  imports: [TableComponent],
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.scss',
  standalone: true,

})
export class ServiceListComponent implements OnInit {
  serviceData: any[] = [];
  tableColumns: any[] = [
    { field: 'serviceName', header: 'Service Name' },
    { field: 'code', header: 'Code' },
    { field: 'type', header: 'Type' },
    { field: 'status', header: 'Status' }
  ];

  ngOnInit(): void {
    // Adding dummy data to serviceData
    this.serviceData = [
      { serviceName: 'Property Transfer', code: 'P-T01', type: 'Service Type', status: 'Active' },
      { serviceName: 'Property Ownership', code: 'P-O2', type: 'Service Type', status: 'Active' },
      { serviceName: 'Property Transfer', code: 'P-T01', type: 'Service Type', status: 'Inactive' },
      { serviceName: 'Property Ownership', code: 'P-O2', type: 'Service Type', status: 'Inactive' },
      { serviceName: 'Property Transfer', code: 'P-T01', type: 'Service Type', status: 'Active' },
      { serviceName: 'Property Ownership', code: 'P-O2', type: 'Service Type', status: 'Active' },
      { serviceName: 'Property Transfer', code: 'P-T01', type: 'Service Type', status: 'Inactive' },
      { serviceName: 'Property Ownership', code: 'P-O2', type: 'Service Type', status: 'Inactive' },
      { serviceName: 'Property Transfer', code: 'P-T01', type: 'Service Type', status: 'Active' },
      { serviceName: 'Property Ownership', code: 'P-O2', type: 'Service Type', status: 'Active' },
      { serviceName: 'Property Transfer', code: 'P-T01', type: 'Service Type', status: 'Inactive' },
      { serviceName: 'Property Ownership', code: 'P-O2', type: 'Service Type', status: 'Inactive' }
    ];
  }
}
