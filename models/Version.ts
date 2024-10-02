export interface Version {
  readonly id: number;
  parent_asset: number;
  product: string;
  product_version: string;
  gh_release_branch_url?: string;
}
