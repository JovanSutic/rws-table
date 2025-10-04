export const billStatus = {
  Current: "Current",
  Withdrawn: "Withdrawn",
  Enacted: "Enacted",
  Rejected: "Rejected",
  Defeated: "Defeated",
  Lapsed: "Lapsed",
} as const;

export type BillStatusType = (typeof billStatus)[keyof typeof billStatus];

export interface BillTable {
  id: string;
  billNumber: number;
  billType: string;
  billStatus: BillStatusType;
  billSponsor: string;
}

export interface BillInternal extends BillTable {
  titleGa: string;
  titleEn: string;
  favorites: unknown;
}

export interface Chamber {
  showAs: string;
  uri: string;
  chamberCode?: string;
  chamberType?: string;
  houseCode?: string;
  houseNo?: string;
}

export interface DateEntry {
  date: string;
}

export interface ProgressEvent {
  chamber: Chamber;
  dates: DateEntry[];
  eventURI: string;
  showAs: string;
  uri: string;
  house?: Chamber;
  progressStage?: number;
  stageCompleted?: boolean;
  stageOutcome?: null | string;
  stageURI?: string;
}

export interface Debate {
  chamber: Chamber;
  date: string;
  debateSectionId: string;
  showAs: string;
  uri: string;
}

export interface SponsorBy {
  showAs: string;
  uri: string;
}

export interface SponsorAs {
  showAs: null | string;
  uri: null | string;
}

export interface SponsorDetails {
  as: SponsorAs;
  by: SponsorBy;
  isPrimary: boolean;
}

export interface BillVersionFormat {
  uri: string;
}

export interface BillVersion {
  version: {
    date: string;
    docType: string;
    formats: {
      pdf: BillVersionFormat;
      xml: null | BillVersionFormat;
    };
    lang: string;
    showAs: string;
    uri: string;
  };
}


export interface Bill {
  act: null | string;
  amendmentLists: unknown[];
  billNo: string;
  billType: string;
  billTypeURI: string;
  billYear: string;
  debates: Debate[];
  events: { event: ProgressEvent }[];
  lastUpdated: string;
  longTitleEn: string;
  longTitleGa: string;
  method: string;
  methodURI: string;
  mostRecentStage: { event: ProgressEvent };
  originHouse: Chamber;
  originHouseURI: string;
  relatedDocs: unknown[];
  shortTitleEn: string;
  shortTitleGa: string;
  source: string;
  sourceURI: string;
  sponsors: { sponsor: SponsorDetails }[];
  stages: { event: ProgressEvent }[];
  status: BillStatusType;
  statusURI: string;
  uri: string;
  versions: BillVersion[];
}

export interface BillSort {
  actNoSort: null | number;
  actShortTitleEnSort: null | string;
  actShortTitleGaSort: null | string;
  actYearSort: null | number;
  billNoSort: number;
  billShortTitleEnSort: string;
  billShortTitleGaSort: string;
  billYearSort: number;
}

export interface BillResult {
  bill: Bill;
  billSort: BillSort;
  contextDate: string;
}

export interface BillHeadCounts {
  billCount: number;
  resultCount: number;
}

export interface BillHead {
  counts: BillHeadCounts;
}

export interface BillResponse {
  head: BillHead;
  results: BillResult[];
}

export interface BillsAdapted {
  count: BillHeadCounts;
  results: BillInternal[];
}
