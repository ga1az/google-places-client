# google-places-client

a simple client for the [google places api (NEW)](https://developers.google.com/maps/documentation/places/web-service/op-overview) written in typescript fully typed.

The methods are documented in the [API Reference](#api-reference) section.

## Installation

To install dependencies:

```bash
bun install
```

## Usage

First, import the PlacesClient and create an instance:

```typescript
import { PlacesClient } from "google-places-client";

const client = new PlacesClient({ apiKey: TOKEN });
```

## API Reference

### Nearby Search

A Nearby Search (New) request takes one or more place types, and returns a list of matching places within the specified area. A field mask specifying one or more data types is required. Nearby Search (New) only supports POST requests.

```typescript
await client.nearbySearch.execute(
  {
    locationRestriction: {
      circle: {
        center: {
          latitude: 37.7937,
          longitude: -122.3965,
        },
        radius: 500,
      },
    },
  },
  ["places.displayName"]
);
```

### Text Search

A Text Search (New) returns information about a set of places based on a string — for example "pizza in New York" or "shoe stores near Ottawa" or "123 Main Street". The service responds with a list of places matching the text string and any location bias that has been set.

```typescript
await client.textSearch.execute(
  {
    textQuery: "pizza in New York",
    pageSize: 5,
    locationBias: {
      circle: {
        center: { latitude: 37.7937, longitude: -122.3965 },
        radius: 500.0,
      },
    },
  },
  ["places.displayName", "places.allowsDogs"]
);
```

### Place Details

Once you have a place ID, you can request more details about a particular establishment or point of interest by initiating a Place Details (New) request. A Place Details (New) request returns more comprehensive information about the indicated place such as its complete address, phone number, user rating and reviews.

```typescript
await client.placeDetails.execute("ChIJj61dQgK6j4AR4GeTYWZsKWw", ["id"]);
```

### Autocomplete

The Autocomplete (New) service is a web service that returns place predictions and query predictions in response to an HTTP request. In the request, specify a text search string and geographic bounds that controls the search area.

```typescript
await client.autocomplete.execute({
  input: "pizza",
  languageCode: ["hi"],
});
```
