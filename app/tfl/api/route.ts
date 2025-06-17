import { db, tflCameras } from "@/db/index";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const cameras = await db.select().from(tflCameras);

		// Transform database data to match the frontend expected format
		const formattedCameras = cameras.map((camera) => ({
			id: camera.tflId,
			commonName: camera.commonName,
			available: camera.available ? "true" : "false",
			imageUrl: camera.imageUrl,
			videoUrl: camera.videoUrl,
			view: camera.view,
			lat: camera.lat,
			lng: camera.lng,
		}));

		return NextResponse.json({ cameras: formattedCameras });
	} catch (error) {
		console.error("Error fetching TFL cameras:", error);
		return NextResponse.json(
			{ error: "Failed to fetch cameras" },
			{ status: 500 },
		);
	}
}
