import { PlacesClient } from "../src";
import { expect, test } from "bun:test";

const TOKEN = Bun.env.PUBLIC_GOOGLE_API_KEY;

if (!TOKEN) {
  throw new Error("TURSO_API_KEY is not set in the environment variables");
}

test("place detail", async () => {
  const client = new PlacesClient({ apiKey: TOKEN });
  const result = await client.placeDetails.execute(
    "ChIJj61dQgK6j4AR4GeTYWZsKWw",
    ["id"]
  );
  expect(result).toHaveProperty("id");
});
