// src/server/utils/crypto.ts

import { ALGORITHM } from "./constants";
import crypto from "crypto";
import { env } from "@/env";

const key = Buffer.from(env.ENCRYPTION_KEY, "hex");

export function encrypt(text: string): string {
	const iv = crypto.randomBytes(16); // Generate a unique IV for each encryption
	const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
	let encrypted = cipher.update(text);
	encrypted = Buffer.concat([encrypted, cipher.final()]);
	return iv.toString("hex") + ":" + encrypted.toString("hex");
}

export function decrypt(text: string): string | null {
	const [ivHex, encryptedText] = text.split(":");

	if (!ivHex || !encryptedText) {
		return null;
	}

	const iv = Buffer.from(ivHex, "hex");
	const encryptedBuffer = Buffer.from(encryptedText, "hex");
	const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
	let decrypted = decipher.update(encryptedBuffer);
	decrypted = Buffer.concat([decrypted, decipher.final()]);
	return decrypted.toString();
}
