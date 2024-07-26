export interface PlaceType {
  name?: string;
  id?: string;
  displayName?: LocalizedText;
  types?: [string];
  primaryType?: string;
  primaryTypeDisplayName?: LocalizedText;
  nationalPhoneNumber?: string;
  internationalPhoneNumber?: string;
  formattedAddress?: string;
  shortFormattedAddress?: string;
  addressComponents?: AddressComponent[];
  plusCode?: PlusCode;
  location?: LatLng;
  viewport?: Viewport;
  rating?: number;
  googleMapsUri?: string;
  websiteUri?: string;
  reviews?: Review[];
  regularOpeningHours?: OpeningHours;
  photos?: Photo[];
  adrFormatAddress?: string;
  businessStatus?: BusinessStatus;
  priceLevel?: PriceLevel;
  attributions?: Attribution[];
  iconMaskBaseUri?: string;
  iconBackgroundColor?: string;
  currentOpeningHours?: OpeningHours;
  currentSecondaryOpeningHours?: OpeningHours[];
  regularSecondaryOpeningHours?: OpeningHours[];
  editorialSummary?: LocalizedText;
  paymentOptions?: PaymentOptions;
  parkingOptions?: ParkingOptions;
  subDestinations?: SubDestination[];
  fuelOptions?: FuelOptions;
  evChargeOptions?: EVChargeOptions;
  generativeSummary?: GenerativeSummary;
  areaSummary?: AreaSummary;
  utcOffsetMinutes?: integer;
  userRatingCount?: integer;
  takeout?: boolean;
  delivery?: boolean;
  dineIn?: boolean;
  curbsidePickup?: boolean;
  reservable?: boolean;
  servesBreakfast?: boolean;
  servesLunch?: boolean;
  servesDinner?: boolean;
  servesBeer?: boolean;
  servesWine?: boolean;
  servesBrunch?: boolean;
  servesVegetarianFood?: boolean;
  outdoorSeating?: boolean;
  liveMusic?: boolean;
  menuForChildren?: boolean;
  servesCocktails?: boolean;
  servesDessert?: boolean;
  servesCoffee?: boolean;
  goodForChildren?: boolean;
  allowsDogs?: boolean;
  restroom?: boolean;
  goodForGroups?: boolean;
  goodForWatchingSports?: boolean;
  accessibilityOptions?: AccessibilityOptions;
}

export interface LocalizedText {
  text?: string;
  languageCode?: string;
}

export interface AddressComponent {
  longText?: string;
  shortText?: string;
  types?: [string];
  languageCode?: string;
}

export interface PlusCode {
  globalCode?: string;
  compoundCode?: string;
}

export interface LatLng {
  latitude?: number;
  longitude?: number;
}

export interface Viewport {
  southwest?: LatLng;
  northeast?: LatLng;
}

export interface Review {
  name?: string;
  relativePublishTimeDescription?: string;
  text?: LocalizedText;
  originalText?: LocalizedText;
  rating?: number;
  authorAttribution?: AuthorAttribution;
  publishTime?: string;
}

export interface AuthorAttribution {
  displayName?: string;
  uri?: string;
  photoUri?: string;
}

export interface OpeningHours {
  periods?: Period[];
  weekdayDescriptions?: [string];
  secondaryHoursType?: SecondaryHoursType;
  specialDays?: SpecialDay[];
  openNow?: boolean;
}

export interface Period {
  open?: Point;
  close?: Point;
}

export interface Point {
  date?: DateType;
  truncated?: boolean;
  day?: integer;
  hour?: integer;
  minute?: integer;
}
export interface DateType {
  year?: integer;
  month?: integer;
  day?: integer;
}

export type SecondaryHoursType =
  /**
   * Default value when secondary hour type is not specified.
   */
  | "SECONDARY_HOURS_TYPE_UNSPECIFIED"
  /**
   * The drive-through hour for banks, restaurants, or pharmacies.
   */
  | "DRIVE_THROUGH"
  /**
   * The happy hour.
   */
  | "HAPPY_HOUR"
  /**
   * The delivery hour.
   */
  | "DELIVERY"
  /**
   * The takeout hour.
   */
  | "TAKEOUT"
  /**
   * The kitchen hour.
   */
  | "KITCHEN"
  /**
   * The breakfast hour.
   */
  | "BREAKFAST"
  /**
   * The lunch hour.
   */
  | "LUNCH"
  /**
   * The dinner hour.
   */
  | "DINNER"
  /**
   * The brunch hour.
   */
  | "BRUNCH"
  /**
   * The pickup hour.
   */
  | "PICKUP"
  /**
   * The access hours for storage places.
   */
  | "ACCESS"
  /**
   * The special hours for seniors.
   */
  | "SENIOR_HOURS"
  /**
   * The online service hours.
   */
  | "ONLINE_SERVICE_HOURS";

export interface SpecialDay {
  date?: DateType;
}

export interface Photo {
  name?: string;
  widthPx?: integer;
  heightPx?: integer;
  authorAttributions?: AuthorAttribution[];
}

export interface AuthorAttribution {
  displayName?: string;
  uri?: string;
  photoUri?: string;
}

export type BusinessStatus =
  /**
   * Default value. This value is unused.
   */
  | "BUSINESS_STATUS_UNSPECIFIED"
  /**
   * The establishment is operational, not necessarily open now.
   */
  | "OPERATIONAL"
  /**
   * The establishment is temporarily closed.
   */
  | "CLOSED_TEMPORARILY"
  /**
   * The establishment is permanently closed.
   */
  | "CLOSED_PERMANENTLY";

export type PriceLevel =
  /**
   * Place price level is unspecified or unknown.
   */
  | "PRICE_LEVEL_UNSPECIFIED"
  /**
   * Place provides free services.
   */
  | "PRICE_LEVEL_FREE"
  /**
   * Place provides inexpensive services.
   */
  | "PRICE_LEVEL_INEXPENSIVE"
  /**
   * Place provides moderately priced services.
   */
  | "PRICE_LEVEL_MODERATE"
  /**
   * Place provides expensive services.
   */
  | "PRICE_LEVEL_EXPENSIVE"
  /**
   * Place provides very expensive services.
   */
  | "PRICE_LEVEL_VERY_EXPENSIVE";

export interface Attribution {
  provider?: string;
  providerUri?: string;
}

export interface PaymentOptions {
  acceptsCreditCards?: boolean;
  acceptsDebitCards?: boolean;
  acceptsCashOnly?: boolean;
  acceptsNfc?: boolean;
}

export interface ParkingOptions {
  freeParkingLot?: boolean;
  paidParkingLot?: boolean;
  freeStreetParking?: boolean;
  paidStreetParking?: boolean;
  valetParking?: boolean;
  freeGarageParking?: boolean;
  paidGarageParking?: boolean;
}

export interface SubDestination {
  name?: string;
  id?: string;
}

export interface AccessibilityOptions {
  wheelchairAccessibleParking?: boolean;
  wheelchairAccessibleEntrance?: boolean;
  wheelchairAccessibleRestroom?: boolean;
  wheelchairAccessibleSeating?: boolean;
}

export interface FuelOptions {
  fuelPrices?: FuelPrice[];
}

export interface FuelPrice {
  type?: FuelType;
  price?: {
    object(Money);
  };
  updateTime?: string;
}

export type FuelType =
  /**
   * Unspecified fuel type.
   */
  | "FUEL_TYPE_UNSPECIFIED"
  /**
   * Diesel fuel.
   */
  | "DIESEL"
  /**
   * Regular unleaded.
   */
  | "REGULAR_UNLEADED"
  /**
   * Midgrade.
   */
  | "MIDGRADE"
  /**
   * Premium.
   */
  | "PREMIUM"
  /**
   * SP 91.
   */
  | "SP91"
  /**
   * SP 91 E10.
   */
  | "SP91_E10"
  /**
   * SP 92.
   */
  | "SP92"
  /**
   * SP 95.
   */
  | "SP95"
  /**
   * SP95 E10.
   */
  | "SP95_E10"
  /**
   * SP 98.
   */
  | "SP98"
  /**
   * SP 99.
   */
  | "SP99"
  /**
   * SP 100.
   */
  | "SP100"
  /**
   * LPG.
   */
  | "LPG"
  /**
   * E 80.
   */
  | "E80"
  /**
   * E 85.
   */
  | "E85"
  /**
   * Methane.
   */
  | "METHANE"
  /**
   * Bio-diesel.
   */
  | "BIO_DIESEL"
  /**
   * Truck diesel.
   */
  | "TRUCK_DIESEL";

export interface Money {
  currencyCode?: string;
  units?: string;
  nanos?: integer;
}

export interface EVChargeOptions {
  connectorCount?: integer;
  connectorAggregation?: ConnectorAggregation[];
}

export interface ConnectorAggregation {
  type?: EVConnectorType;
  maxChargeRateKw?: number;
  count?: integer;
  availabilityLastUpdateTime?: string;
  availableCount?: integer;
  outOfServiceCount?: integer;
}

export type EVConnectorType =
  /**
   * Unspecified connector.
   */
  | "EV_CONNECTOR_TYPE_UNSPECIFIED"
  /**
   * Other connector types.
   */
  | "EV_CONNECTOR_TYPE_OTHER"
  /**
   * J1772 type 1 connector.
   */
  | "EV_CONNECTOR_TYPE_J1772"
  /**
   * IEC 62196 type 2 connector. Often referred to as MENNEKES.
   */
  | "EV_CONNECTOR_TYPE_TYPE_2"
  /**
   * CHAdeMO type connector.
   */
  | "EV_CONNECTOR_TYPE_CHADEMO"
  /**
   * Combined Charging System (AC and DC). Based on SAE. Type-1 J-1772 connector.
   */
  | "EV_CONNECTOR_TYPE_CCS_COMBO_1"
  /**
   * Combined Charging System (AC and DC). Based on Type-2 Mennekes connector.
   */
  | "EV_CONNECTOR_TYPE_CCS_COMBO_2"
  /**
   * The generic TESLA connector. This is NACS in the North America but can be non-NACS in other parts of the world (e.g. CCS Combo 2 (CCS2) or GB/T). This value is less representative of an actual connector type, and more represents the ability to charge a Tesla brand vehicle at a Tesla owned charging station.
   */
  | "EV_CONNECTOR_TYPE_TESLA"
  /**
   * GB/T type corresponds to the GB/T standard in China. This type covers all GB_T types.
   */
  | "EV_CONNECTOR_TYPE_UNSPECIFIED_GB_T"
  /**
   * Unspecified wall outlet.
   */
  | "EV_CONNECTOR_TYPE_UNSPECIFIED_WALL_OUTLET";

export interface GenerativeSummary {
  overview?: LocalizedText;
  description?: LocalizedText;
  references?: References;
}

export interface References {
  reviews?: Review[];
  places?: [string];
}

export interface AreaSummary {
  contentBlocks?: ContentBlock[];
}

export interface ContentBlock {
  topic?: string;
  content?: LocalizedText;
  references?: References;
}
