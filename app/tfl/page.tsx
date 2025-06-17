"use client";

import { GOOGLE_MAPS_API_KEY } from "@/utils/constant/env";
import { useQuery } from "@tanstack/react-query";
import {
	APIProvider,
	Marker,
	Map as ReactGoogleMaps,
	useMap,
	useMapsLibrary,
} from "@vis.gl/react-google-maps";
import { X as XIcon } from "lucide-react";
import { useState } from "react";
import type { Camera, Cameras } from "./types";

// Force dynamic rendering for this page
export const dynamic = "force-dynamic";

const TFLMap = () => {
	const map = useMap();
	const google = useMapsLibrary("core");
	const [selectedCamera, setSelectedCamera] = useState<Camera | null>(null);
	const { data, isLoading } = useQuery<Cameras>({
		queryKey: ["cameras"],
		queryFn: async () => {
			const res = await fetch("/tfl/api/");
			const json = (await res.json()) as { cameras: Cameras };
			return json.cameras;
		},
	});

	if (isLoading) {
		return (
			<div className="flex w-full h-full justify-center items-center">
				<span className="loading loading-spinner loading-lg" />
			</div>
		);
	}

	return (
		<div className="relative w-full h-5/6 p-4 mt-24">
			{selectedCamera && (
				<div className="absolute bottom-[-100px] md:top-4 md:left-4 w-[calc(100%-2rem)] max-h-fit md:w-1/4 flex flex-col justify-between bg-white z-10 rounded-t-xl rounded-l-xl rounded-br-xl shadow-md">
					<div className="relative">
						<div className="btn-circle bg-blue-500 text-white text-lg font-semibold absolute top-2 right-2 cursor-pointer flex items-center justify-center h-8 w-8">
							<XIcon size={20} onClick={() => setSelectedCamera(null)} />
						</div>
					</div>
					<img
						alt={selectedCamera.commonName}
						className="camera-pic rounded-tl-lg w-full"
						src={selectedCamera.imageUrl}
					/>
					<p className="text-lg font-semibold px-2 py-4">
						{selectedCamera.commonName}
					</p>
				</div>
			)}
			<ReactGoogleMaps
				className="h-[500px] rounded-xl"
				zoom={selectedCamera ? 15 : 13}
				center={
					selectedCamera
						? { lat: selectedCamera.lat, lng: selectedCamera.lng }
						: { lat: 51.508742, lng: -0.12085 }
				}
				gestureHandling="greedy"
				disableDefaultUI={true}
			>
				{data?.map((camera) => (
					<Marker
						data-camera={camera.id}
						key={camera.id}
						position={{ lat: camera.lat, lng: camera.lng }}
						title={camera.commonName}
						icon={{
							anchor: google && new google.Point(30, 30),
							scaledSize:
								google &&
								(selectedCamera?.commonName === camera.commonName
									? new google.Size(50, 50)
									: new google.Size(25, 25)),
							url:
								selectedCamera?.commonName === camera.commonName
									? "/images/camera-selected.png"
									: "/images/camera.png",
						}}
						onClick={() => setSelectedCamera(camera)}
					/>
				))}
			</ReactGoogleMaps>
		</div>
	);
};

export default function TFLCameras() {
	const apiKey = GOOGLE_MAPS_API_KEY;

	// Handle missing API key gracefully during build
	if (!apiKey) {
		return (
			<div className="flex w-full h-full justify-center items-center mt-24">
				<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg shadow-md p-8 max-w-md mx-auto text-center">
					<h2 className="text-2xl font-bold text-white mb-4">
						Maps Configuration Required
					</h2>
					<p className="text-blue-200 mb-6">
						Google Maps API key is required to display the TFL camera map.
						Please configure the NEXT_PUBLIC_GOOGLE_MAPS_API_KEY environment
						variable.
					</p>
				</div>
			</div>
		);
	}

	return (
		<APIProvider apiKey={apiKey}>
			<TFLMap />
		</APIProvider>
	);
}
