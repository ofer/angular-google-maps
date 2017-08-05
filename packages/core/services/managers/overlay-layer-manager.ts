import { Injectable } from '@angular/core';

import { AgmOverlayLayer } from './../../directives/overlay-layer';
import { GoogleMapsAPIWrapper } from './../google-maps-api-wrapper';
import { GroundOverlay, GroundOverlayOptions } from './../google-maps-types';

declare var google: any;

/**
 * Manages all Data Layers for a Google Map instance.
 */
@Injectable()
export class OverlayLayerManager {
  private _layers: Map<AgmOverlayLayer, Promise<GroundOverlay>> =
  new Map<AgmOverlayLayer, Promise<GroundOverlay>>();

  constructor(private _wrapper: GoogleMapsAPIWrapper) { }

  /**
   * Adds a new Data Layer to the map.
   */
  addOverlayLayer(layer: AgmOverlayLayer) {
    const newLayer = this._wrapper.createOverlayLayer(layer.url, layer.bounds)
    .then(d => {
      return d;
    });
    this._layers.set(layer, newLayer);
  }

  deleteOverlayLayer(layer: AgmOverlayLayer) {
    this._layers.get(layer).then(l => {
      l.setMap(null);
      this._layers.delete(layer);
    });
  }

  // updateGeoJson(layer: AgmOverlayLayer, geoJson: Object | string) {
  //   this._layers.get(layer).then(l => {
  //     l.forEach(function (feature: Feature) {
  //       l.remove(feature);
  //
  //       var index = l.features.indexOf(feature, 0);
  //       if (index > -1) {
  //         l.features.splice(index, 1);
  //       }
  //     });
  //     this.getDataFeatures(l, geoJson).then(features => l.features = features);
  //   });
  // }

  setOverlayOptions(layer: AgmOverlayLayer, options: GroundOverlayOptions)
  {
    this._layers.get(layer).then(l => {
      l.setOpacity(options.opacity);
    });
  }
}
