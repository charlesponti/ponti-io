import type { NextApiRequest, NextApiResponse } from "next";

export default function hello(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json({ message: "ok" });
}
