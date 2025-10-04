import type {
  BillResponse,
  BillStatusType,
  BillInternal,
  BillResult,
  BillsAdapted,
} from "../api/bill.types";

interface FetchBillsParams {
  page: number;
  status?: BillStatusType | "";
  limit?: number;
}

function buildSearchParams({
  page,
  status,
  limit = 10,
}: FetchBillsParams): URLSearchParams {
  const searchParamsObject: Record<string, string> = {
    skip: ((page - 1) * limit).toString(),
  };

  if (status) {
    searchParamsObject.bill_status = status;
  }

  if (limit) {
    searchParamsObject.limit = limit.toString();
  }

  return new URLSearchParams(searchParamsObject);
}

function adaptBillData(billResult: BillResult): BillInternal {
  const { bill } = billResult;
  const sponsorName =
    bill.sponsors?.[0]?.sponsor?.as?.showAs || "Unknown Sponsor";

  return {
    id: `${bill.billNo}-${bill.billYear}`,
    billNumber: parseInt(bill.billNo, 10),
    billType: bill.billType,
    billStatus: bill.status,
    billSponsor: sponsorName,
    titleGa: bill.shortTitleGa,
    titleEn: bill.shortTitleEn,
    favorites: "",
  };
}

export async function fetchBills(
  params: FetchBillsParams
): Promise<BillsAdapted> {
  const baseUrl = "https://api.oireachtas.ie/v1/legislation";
  const searchParams = buildSearchParams(params);

  const fullUrl = `${baseUrl}?${searchParams.toString()}`;

  try {
    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch bills. HTTP Status: ${response.status} (${response.statusText}). URL: ${fullUrl}`
      );
    }

    const data: BillResponse = await response.json();

    const adaptedData: BillInternal[] = data.results.map(
      (item) => adaptBillData(item as unknown as BillResult)
    );

    return {
      count: data.head.counts,
      results: adaptedData,
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An unknown network or processing error occurred.";

    console.error(`Error during fetch for ${fullUrl}:`, error);
    throw new Error(`Data retrieval failed: ${errorMessage}`);
  }
}
