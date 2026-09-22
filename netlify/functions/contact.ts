import type { Handler, HandlerEvent } from "@netlify/functions";
import { handleContactPost } from "../../src/lib/contact";

function toRequest(event: HandlerEvent): Request {
  const url = new URL(event.rawUrl);

  return new Request(url, {
    method: event.httpMethod,
    headers: event.headers as HeadersInit,
    body: event.body ?? undefined,
  });
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed." }),
      headers: { "Content-Type": "application/json" },
    };
  }

  const response = await handleContactPost(toRequest(event));
  const body = await response.text();

  return {
    statusCode: response.status,
    body,
    headers: Object.fromEntries(response.headers.entries()),
  };
};
