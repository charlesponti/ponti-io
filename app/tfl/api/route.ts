import type { BaseCamera, Cameras, PropertyKey } from "@/app/tfl/types";
import cameras from "./cameras.json";

type Properties = {
	[PropertyKey.available]: string;
	[PropertyKey.videoUrl]: string;
	[PropertyKey.view]: string;
	[PropertyKey.imageUrl]: string;
};

export async function GET(): Promise<Response> {
	const formattedCameras: Cameras = (cameras as BaseCamera[]).map((camera) => {
		const properties = camera.additionalProperties.reduce(
			(acc: { [key: string]: string }, property) => {
				acc[property.key] = property.value;
				return acc;
			},
			{},
		) as Properties;

		return {
			commonName: camera.commonName,
			lat: camera.lat,
			lng: camera.lon,
			id: camera.id,
			available: properties.available,
			videoUrl: properties.videoUrl,
			view: properties.view,
			imageUrl: properties.imageUrl,
		};
	});

	return Response.json({
		cameras: formattedCameras,
	});
}
