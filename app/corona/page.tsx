import { redirect } from "next/navigation";

export default function CoronaRedirectPage() {
	// Use server-side redirect instead of client-side
	redirect("/corona/OWID_WRL");
}
