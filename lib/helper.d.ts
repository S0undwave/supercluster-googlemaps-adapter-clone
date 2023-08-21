/// <reference types="googlemaps" />
import { SuperClusterAdapter } from './clusterer';
export declare class ClustererHelper {
    private static newId;
    static featureCenter(feature: google.maps.Data.Feature): google.maps.LatLng;
    static featureBounds(feature: google.maps.Data.Feature): google.maps.LatLngBounds;
    static isFeatureInBounds(feature: google.maps.Data.Feature, bounds: google.maps.LatLngBounds): boolean;
    static getClusterer(map: google.maps.Map): SuperClusterAdapter | undefined;
    static setClusterer(map: google.maps.Map, clusterer: SuperClusterAdapter): void;
    static getClusterBounds(map: google.maps.Map, marker: google.maps.Marker, radius: number): google.maps.LatLngBounds;
    static getNewId(): number;
    private static fromLatLngToPixel;
    private static fromPixelToLatLng;
}
