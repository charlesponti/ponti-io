export type TFLCamera = {
  $: {
    id: string;
    available: string;
  };
  captureTime: string[];
  corridor: string[];
  currentView: string[];
  easting: string[];
  file: string[];
  lat: string[];
  lng: string[];
  location: string[];
  northing: string[];
  osgr: string[];
  postCode: string[];
};

export interface CameraResponse {
  syndicatedFeed: {
    cameraList: {
      camera: TFLCamera[];
    }[];
  };
}

export interface Camera {
  id: string;
  available: string;
  captureTime: string;
  corridor: string;
  currentView: string;
  easting: string;
  file: string;
  lat: string;
  lng: string;
  location: string;
  northing: string;
  osgr: string;
  postCode: string;
}

export type CamerasResponse = Camera[];
