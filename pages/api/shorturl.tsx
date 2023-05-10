import type { NextApiRequest, NextApiResponse } from "next"

interface SuccessResponse {
	originalUrl: string;
	shortUrl: string;
}

interface ErrorResponse {
	error: string;
}

type ResponseData = SuccessResponse | ErrorResponse;

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
	if (req.method === "POST") {
		const { url } = req.body;

		const isValidUrl = (url: string): boolean => {
			try {
				new URL(url);
				return true;
			} catch (error) {
				return false;
			}
		};

		if (!isValidUrl(url)) {
			return res.status(400).json({ error: "invalid url" });
		}

		const generateShortURL = (url: string): string => {
			const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			const shortString = Array.from({ length: 6 }, () => characters[Math.floor(Math.random() * characters.length)]).join('');

			const domain = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0];
			const shortUrl = `${domain}/${shortString}`;

			return shortUrl;
		}
		res.status(200).json({ originalUrl: url, shortUrl: generateShortURL(url) });
	} else {
		res.status(400).json({ error: "invalid request method" });
	}
}
