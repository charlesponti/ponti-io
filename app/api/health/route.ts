import { NextResponse } from "next/server";

export async function GET() {
	try {
		// You can add more sophisticated health checks here
		// For example, check database connectivity, external services, etc.
		return NextResponse.json(
			{
				status: "healthy",
				timestamp: new Date().toISOString(),
				uptime: process.uptime(),
			},
			{ status: 200 },
		);
	} catch (error) {
		return NextResponse.json(
			{
				status: "unhealthy",
				error: error instanceof Error ? error.message : "Unknown error",
				timestamp: new Date().toISOString(),
			},
			{ status: 503 },
		);
	}
}
