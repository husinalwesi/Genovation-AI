export interface DoughnutChartData {
  value: number;
  outOf: number;
  label: string;
}

export interface CounterData {
  value: number | string;
  label: string;
}

export interface VehicleTableRow {
  vehicleType: string;
  vehicle: string;
  vehicleLink: string;
  plateNum: string;
  odometer: string;
  gps: string;
  device: string;
  deviceNo: string;
  sim: string;
  fleet: string;
  status: string;
}

export interface ShiftData {
  shiftTitle: string;
  time: string;
  table: VehicleTableRow[];
}

export interface TableConfig {
  head: ColumnConfig[];
  body: VehicleTableRow[];
}

export interface ColumnConfig {
  field: string;
  header: string;
  sortable: boolean;
  reorderable: boolean;
}

export interface DdlOption {
  label: string;
  value: string;
}

export interface SortMeta {
  field: string;
  order: number;
}

export interface PageMeta {
  label: string | null;
  icon: string | null;
}