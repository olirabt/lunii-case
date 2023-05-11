import type { NextApiRequest, NextApiResponse } from "next";
import isValidUrl from "../../utils/isvalidurl";

interface SuccessResponse {
	originalUrl: string;
	shortUrl: string;
}

interface ErrorResponse {
	error: string;
}

type ResponseData = SuccessResponse | ErrorResponse;

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
	//handle POST requests send to /api/shorturl
	if (req.method === "POST") {
		const { url } = req.body;

		if (!isValidUrl(url)) {
			//the url provided is invalid
			return res.status(400).json({ error: "invalid url" });
		}

		const generateShortURL = (url: string): string => {
			/* this function serves as a mock for the exercise
			to make it work a database is needed to make the data persistent
			we could also use the "nanoid" package to generate a short url  */
			const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
			const shortString = Array.from({ length: 6 }, () => characters[Math.floor(Math.random() * characters.length)]).join("");

			const domain = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split("/")[0];
			const shortUrl = `${domain}/${shortString}`;

			return shortUrl;
		}

		res.status(200).json({ originalUrl: url, shortUrl: generateShortURL(url) });
	} else {
		res.status(400).json({ error: "invalid request method" });
	}
}
