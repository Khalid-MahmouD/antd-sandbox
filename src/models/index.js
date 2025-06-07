export interface Filter {
  key: string;
  op: string;
  value: string;
}

export interface Filters {
  basicFilters: Filter[];
  rangeFilters: any[]; // Adjust the type as necessary for range filters
}