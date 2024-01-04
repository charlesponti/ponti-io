import * as xml2js from 'xml2js';
import { Camera, CameraResponse } from '@/utils/types';

export async function GET() {
  const response = await fetch(
    'https://www.tfl.gov.uk/cdn/static/cms/documents/camera-list.xml',
    {
      headers: {
        'Content-Type': 'application/xml',
      },
    },
  );
  const text: CameraResponse = await xml2js.parseStringPromise(
    await response.text(),
  );

  return Response.json({
    cameras: text.syndicatedFeed.cameraList[0].camera.map<Camera>((camera) => {
      return {
        id: camera.$.id,
        available: camera.$.available,
        captureTime: camera.captureTime[0],
        corridor: camera.corridor[0],
        currentView: camera.currentView[0],
        easting: camera.easting[0],
        file: camera.file[0],
        lat: camera.lat[0],
        lng: camera.lng[0],
        location: camera.location[0],
        northing: camera.northing[0],
        osgr: camera.osgr[0],
        postCode: camera.postCode[0],
      };
    }),
  });
}
