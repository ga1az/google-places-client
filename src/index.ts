import {
  FieldMaskNearbySearch,
  NearbySearchBody,
  NearbySearchResponse,
  PlaceType,
  FieldMaskPlaceDetail,
  FieldMaskTextSearch,
  TextSearchBody,
  TextSearchResponse,
  autocompleteBody,
  autocompleteResponse,
} from "./types";

export type ApiClientOptions = {
  apiKey: string;
};

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

type ApiRequest<T = unknown> = {
  path: string;
  method: HttpMethod;
  body?: T;
  query?: Record<string, string> | null;
};

export class PlacesClient {
  private readonly baseUrl: string;
  private readonly apiKey: string;

  constructor(opts: ApiClientOptions) {
    this.baseUrl = "https://places.googleapis.com/v1";
    this.apiKey = opts.apiKey;
  }

  private async request<TResponse, TBody = unknown>(
    req: ApiRequest<TBody>,
    fieldMask: string
  ): Promise<TResponse> {
    const url = new URL(`${this.baseUrl}${req.path}`);
    if (req.query) {
      Object.entries(req.query).forEach(([key, value]) =>
        url.searchParams.append(key, value)
      );
    }
    const init: RequestInit = {
      method: req.method,
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": this.apiKey,
        "X-Goog-FieldMask": fieldMask,
      },
    };
    if (req.body) {
      init.body = JSON.stringify(req.body);
    }
    console.log(init);

    const response = await fetch(url.toString(), init);
    console.log(response);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json() as Promise<TResponse>;
  }

  public readonly nearbySearch = {
    /**
     * A Nearby Search (New) request takes one or more place types, and returns a list of matching places within the specified area. A field mask specifying one or more data types is required. Nearby Search (New) only supports POST requests.
     * @param body
     * @param fieldMask
     * @returns NearbySearchResponse
     */
    execute: async (
      body: NearbySearchBody,
      fieldMask: FieldMaskNearbySearch[]
    ): Promise<NearbySearchResponse> => {
      return this.request<NearbySearchResponse>(
        {
          path: "/places:searchNearby",
          method: "POST",
          body,
        },
        fieldMask.join(",")
      );
    },
  };

  public readonly textSearch = {
    /**
     * A Text Search (New) returns information about a set of places based on a string — for example "pizza in New York" or "shoe stores near Ottawa" or "123 Main Street". The service responds with a list of places matching the text string and any location bias that has been set.
     * @param body
     * @param fieldMask
     * @returns TextSearchResponse
     */
    execute: async (
      body: TextSearchBody,
      fieldMask: FieldMaskTextSearch[]
    ): Promise<TextSearchResponse> => {
      return this.request<TextSearchResponse>(
        {
          path: "/places:searchText",
          method: "POST",
          body,
        },
        fieldMask.join(",")
      );
    },
  };

  public readonly placeDetails = {
    /**
     * Once you have a place ID, you can request more details about a particular establishment or point of interest by initiating a Place Details (New) request. A Place Details (New) request returns more comprehensive information about the indicated place such as its complete address, phone number, user rating and reviews.
     * @param placeId
     * @param fieldMask
     * @returns PlaceType
     */
    execute: async (
      placeId: string,
      fieldMask: FieldMaskPlaceDetail[]
    ): Promise<PlaceType> => {
      return this.request<PlaceType>(
        {
          path: `/places/${placeId}`,
          method: "GET",
        },
        fieldMask.join(",")
      );
    },
  };

  public readonly autocomplete = {
    /**
     *The Autocomplete (New) service is a web service that returns place predictions and query predictions in response to an HTTP request. In the request, specify a text search string and geographic bounds that controls the search area.
     * @param body
     * @returns autocompleteResponse
     */
    execute: async (body: autocompleteBody): Promise<autocompleteResponse> => {
      return this.request<autocompleteResponse>(
        {
          path: "/places:autocomplete",
          method: "POST",
          body,
        },
        ""
      );
    },
  };
}
