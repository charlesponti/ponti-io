'use client';

import { useQuery } from '@tanstack/react-query';
import {
  APIProvider,
  InfoWindow,
  Map,
  Marker,
  useMap,
  useMapsLibrary,
} from '@vis.gl/react-google-maps';
import React, { useEffect } from 'react';
import { Camera, CamerasResponse } from '../../utils/types';

const TFLMap = () => {
  const map = useMap();
  const google = useMapsLibrary('core');
  const [infowindow, setInfowindow] = React.useState<{
    content: string;
    id: string;
    file: string;
    lat: number;
    lng: number;
  } | null>(null);
  const { data, isLoading } = useQuery<CamerasResponse>({
    queryKey: ['cameras'],
    queryFn: async () => {
      const res = await fetch('/tfl/api/');
      const json = await res.json();
      return json.cameras;
    },
  });

  useEffect(() => {
    // Once the map is loaded, add the cameras to it
    if (data && map && google) {
      map.setCenter(new google.LatLng(51.508742, -0.12085));
      map.setZoom(11);
    }
  }, [data, google, map]);

  const onMarkerClick = (camera: Camera) => {
    setInfowindow({
      content: camera.location,
      file: camera.file,
      id: camera.id,
      lat: +camera.lat,
      lng: +camera.lng,
    });
  };

  if (isLoading) {
    return (
      <div className='h-96 p-4'>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className='h-96 p-4'>
      <Map
        className='h-5/6'
        zoom={3}
        center={{ lat: 22.54992, lng: 0 }}
        gestureHandling='greedy'
        disableDefaultUI={true}
        viewState={{ latitude: 22.54992, longitude: 0, zoom: 3 }}
      >
        {infowindow ? (
          <InfoWindow position={{ lat: infowindow.lat, lng: infowindow.lng }}>
            <div className='flex flex-col py-2'>
              <img
                alt={infowindow.content}
                className='camera-pic'
                style={{ marginBottom: '10px', width: '100%' }}
                src={`http://www.tfl.gov.uk/tfl/livetravelnews/trafficcams/cctv/${infowindow.file}`}
              />
              <p className='text-lg font-semibold'>{infowindow.content}</p>
            </div>
          </InfoWindow>
        ) : null}
        {data?.map((camera) => (
          <Marker
            data-camera={camera.id}
            key={camera.id}
            position={{ lat: +camera.lat, lng: +camera.lng }}
            title={camera.location}
            icon={{
              anchor: google && new google.Point(30, 30),
              scaledSize: google && new google.Size(25, 25),
              url: '/camera.png',
            }}
            onClick={() => onMarkerClick(camera)}
          />
        ))}
      </Map>
    </div>
  );
};

export default function TFLCameras() {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <TFLMap />
    </APIProvider>
  );
}
