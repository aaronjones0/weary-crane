export interface MGRSCoordinate {
  /**
   * Universal Transverse Mercator Zone
   */
  UTMZ: string;
  /**
   * 100,000-Meter Square Identification
   */
  SI_100KM: string;
  /**
   * Eastering, a.k.a. Meters East
   */
  MEast: string;
  /**
   * Northering, a.k.a. Meters North
   */
  MNorth: string;
}