import cameras from "./cameras-formatted.json";

export async function GET() {
	return Response.json({ cameras });
}
