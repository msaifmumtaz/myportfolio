import { llmsFullText } from "@/lib/llms";

// Built from the same config and case studies as the site, so it never drifts from the pages.
export const dynamic = "force-static";

export function GET() {
  return new Response(llmsFullText(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
