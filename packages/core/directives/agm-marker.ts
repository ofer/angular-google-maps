import { Directive } from '@angular/core';
// import {Subscription} from 'rxjs/Subscription';

import { GoogleMapsAPIWrapper } from '../services/google-maps-api-wrapper';
import { Marker } from './../services/google-maps-types';
import { BaseMarker } from './base-marker';

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
  selector: 'agm-marker'
})
export class AgmMarker extends BaseMarker {
  createMarker(apiWrapper: GoogleMapsAPIWrapper): Promise<Marker> {
    return apiWrapper.createMarker({
      position: { lat: this.latitude, lng: this.longitude },
      label: this.label,
      draggable: this.draggable,
      icon: this.iconUrl,
      opacity: this.opacity,
      visible: this.visible,
      zIndex: this.zIndex,
      title: this.title,
      clickable: this.clickable
    });

  }
}
