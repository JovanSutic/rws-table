import type {
  BillResponse,
  BillInternal,
  BillResult,
  BillsAdapted,
  FetchBillsParams,
} from "../api/bill.types";

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

export async function getBills(
  params: FetchBillsParams
): Promise<BillsAdapted> {
  const baseUrl = `${import.meta.env.VITE_API_URL}/legislation`;
  const searchParams = buildSearchParams(params);
  const fullUrl = `${baseUrl}?${searchParams.toString()}`;

  const response = await fetch(fullUrl);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch bills. HTTP Status: ${response.status} (${response.statusText})`
    );
  }

  const data: BillResponse = await response.json();

  const adaptedData: BillInternal[] = data.results.map((item) =>
    adaptBillData(item as unknown as BillResult)
  );

  return {
    count: data.head.counts,
    results: adaptedData,
  };
}

export async function getFavoriteBills(
  bills: BillInternal[]
): Promise<BillsAdapted> {
  const baseUrl = `${import.meta.env.VITE_API_URL}/legislation/favorite`;

  const response = await fetch(baseUrl);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch bills. HTTP Status: ${response.status} (${response.statusText})`
    );
  }

  if (!response.ok) {
    throw new Error("Failed to add favorite");
  }

  const data: BillInternal[] = bills;

  return {
    count: {
      resultCount: data.length,
      billCount: data.length,
    },
    results: data,
  };
}

export async function postAddFavoriteBill(
  bill: BillInternal
): Promise<BillInternal> {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/legislation/favorite/add`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bill),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to add favorite");
  }

  return response.json();
}

export async function postRemoveFavoriteBill(
  bill: BillInternal
): Promise<BillInternal> {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/legislation/favorite/remove`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bill),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to remove favorite");
  }

  return response.json();
}
