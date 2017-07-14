
import {GoogleMapsAPIWrapper} from './../services/google-maps-api-wrapper';
import {Marker} from './../services/google-maps-types';

export interface IAgmMarker {
  createMarker(apiWrapper: GoogleMapsAPIWrapper): Promise<Marker>;
}
