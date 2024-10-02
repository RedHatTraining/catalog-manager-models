export type Edition = {
  readonly id: number;
  parent_version: number;
  title: string;
  edition_number: number;
  edition_status: number;
  release_date: string; // ISO8601?
};
