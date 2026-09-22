import type { APIRoute } from "astro";
import { handleContactPost } from "@/lib/contact";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  return handleContactPost(request);
};
