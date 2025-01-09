export type Edition = {
  readonly id: number;
  parent_version: number;
  title: string;
  description: string;
  goals: string;
  edition_number: number;
  edition_status: number;
  release_tag: string;
  release_tag_date: string;
  release_tag_creation_date?: string;
  jira_CDEV_release: string;
  jira_PTL_release: string;
  jenkins_build: string;
  audience_blurb: string;
  prerequisites_blurb: string | null;
  sk_version: string;
};
