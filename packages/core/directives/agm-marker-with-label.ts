/* tslint:disable:variable-name */
export var google: any;
export var MarkerWithLabel: any;

import { Directive, Input } from '@angular/core';
// import {Subscription} from 'rxjs/Subscription';
import { LatLngLiteral } from '../services/google-maps-types';

import { BaseMarker } from './base-marker';
import { GoogleMapsAPIWrapper } from '../services/google-maps-api-wrapper';
import { Marker } from './../services/google-maps-types';

/**
 * AgmMarker renders a map marker inside a {@link AgmMap}.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
@Directive({
  selector: 'agm-marker-with-label'
})
export class AgmMarkerWithLabel extends BaseMarker {
  @Input() labelClass: string;

  // private getMarkerWithLabelOptions(): MarkerWithLabelOptions {
  //   var markerWithLabelOptions = {
  //
  //   } as MarkerWithLabelOptions;
  //   return markerWithLabelOptions;
  // }
  createMarker(apiWrapper: GoogleMapsAPIWrapper): Promise<Marker> {
    return apiWrapper.getNativeMap().then(nm => {
      var latLng = { lat: this.latitude, lng: this.longitude } as LatLngLiteral;

      return new MarkerWithLabel({
        position: latLng,
        draggable: false,
        visable: true,
        raiseOnDrag: false,
        map: nm,
  //      labelContent: elementRef.nativeElement.innerHTML,
        labelVisible: true,
        labelClass: this.labelClass,
        icon: this.iconUrl
      });
    });
  }
}
