import { CircleType, IncludedExcludedType } from "./nearby";
import {
  AccessibilityOptions,
  AreaSummary,
  Attribution,
  ConnectorAggregation,
  ContentBlock,
  EVChargeOptions,
  EVConnectorType,
  FuelOptions,
  FuelPrice,
  FuelType,
  GenerativeSummary,
  Money,
  PaymentOptions,
  PlaceType,
  PriceLevel,
  References,
  SubDestination,
} from "./";

export interface TextSearchResponse {
  places: PlaceType[];
}

export type FieldMaskTextSearch =
  | "places.attributions"
  | "places.id"
  | "places.name"
  | "nextPageToken"
  | "places.accessibilityOptions"
  | "places.addressComponents"
  | "places.adrFormatAddress"
  | "places.businessStatus"
  | "places.displayName"
  | "places.formattedAddress"
  | "places.googleMapsUri"
  | "places.iconBackgroundColor"
  | "places.iconMaskBaseUri"
  | "places.location"
  | "places.photos"
  | "places.plusCode"
  | "places.primaryType"
  | "places.primaryTypeDisplayName"
  | "places.shortFormattedAddress"
  | "places.subDestinations"
  | "places.types"
  | "places.utcOffsetMinutes"
  | "places.viewport"
  | "places.currentOpeningHours"
  | "places.currentSecondaryOpeningHours"
  | "places.internationalPhoneNumber"
  | "places.nationalPhoneNumber"
  | "places.priceLevel"
  | "places.rating"
  | "places.regularOpeningHours"
  | "places.regularSecondaryOpeningHours"
  | "places.userRatingCount"
  | "places.websiteUri"
  | "places.allowsDogs"
  | "places.curbsidePickup"
  | "places.delivery"
  | "places.dineIn"
  | "places.editorialSummary"
  | "places.evChargeOptions"
  | "places.fuelOptions"
  | "places.goodForChildren"
  | "places.goodForGroups"
  | "places.goodForWatchingSports"
  | "places.liveMusic"
  | "places.menuForChildren"
  | "places.parkingOptions"
  | "places.paymentOptions"
  | "places.outdoorSeating"
  | "places.reservable"
  | "places.restroom"
  | "places.reviews"
  | "places.servesBeer"
  | "places.servesBreakfast"
  | "places.servesBrunch"
  | "places.servesCocktails"
  | "places.servesCoffee"
  | "places.servesDessert"
  | "places.servesDinner"
  | "places.servesLunch"
  | "places.servesVegetarianFood"
  | "places.servesWine"
  | "places.takeout";

export interface TextSearchBody {
  textQuery: string;
  includedType?: IncludedExcludedType;
  languageCode?: languageCode;
  locationBias?: {
    circle: CircleType;
  };
  locationRestriction?: {
    circle: CircleType;
  };
  // maxResultCount?: number;
  openNow?: boolean;
  pageSize?: number;
  pageToken?: string;
  priceLevels?: PriceLevel[];
  // evOptions
  minRating?: number;
  // rankPreference
  // regionCode
  // strictTypeFiltering
}

export type LanguageCode =
  | "ja"
  | "af"
  | "sq"
  | "kn"
  | "am"
  | "kk"
  | "ar"
  | "km"
  | "hy"
  | "ko"
  | "az"
  | "ky"
  | "eu"
  | "lo"
  | "be"
  | "lv"
  | "bn"
  | "lt"
  | "bs"
  | "mk"
  | "bg"
  | "ms"
  | "my"
  | "ml"
  | "ca"
  | "mr"
  | "zh"
  | "mn"
  | "zh-CN"
  | "zh-HK"
  | "zh-TW"
  | "hr"
  | "pt"
  | "cs"
  | "pt-BR"
  | "pt-PT"
  | "da"
  | "nl"
  | "pa"
  | "en"
  | "ro"
  | "en-AU"
  | "en-GB"
  | "et"
  | "si"
  | "fa"
  | "sk"
  | "fi"
  | "sl"
  | "fil"
  | "es"
  | "fr"
  | "es-419"
  | "fr-CA"
  | "gl"
  | "sv"
  | "ka"
  | "ta"
  | "de"
  | "te"
  | "el"
  | "th"
  | "gu"
  | "tr"
  | "iw"
  | "uk"
  | "hi"
  | "ur"
  | "hu"
  | "uz"
  | "is"
  | "vi"
  | "id"
  | "zu"
  | "it";
