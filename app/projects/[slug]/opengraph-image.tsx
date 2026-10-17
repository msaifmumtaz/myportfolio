import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { siteConfig } from "@/data/config";
import { getSortedProjectsData } from "@/lib/projects";
import { projectImage } from "@/lib/project-presentation";

// Case study link preview: title plus the project's screenshot, in the site-wide card's style.
export const alt = "Case study by Muhammad Saif";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() { return getSortedProjectsData().map(project => ({ slug: project.slug })); }

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getSortedProjectsData().find(project => project.slug === slug);
  const image = project && projectImage(project);
  const screenshot = image && `data:image/${extname(image).slice(1)};base64,${await readFile(join(process.cwd(), "public", image), "base64")}`;
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", background: "#101614", padding: "56px 72px 0" }}>
      <div style={{ display: "flex", fontSize: 26, color: "#43d9a3" }}>@{siteConfig.brand} · Case Study</div>
      <div style={{ display: "flex", fontSize: 58, color: "#f4f7f5", letterSpacing: -2, lineHeight: 1.1, marginTop: 18 }}>{project?.title ?? siteConfig.brand}</div>
      {screenshot && <div style={{ display: "flex", flex: 1, marginTop: 40, borderRadius: "20px 20px 0 0", overflow: "hidden", border: "2px solid #35473c", borderBottom: "none", background: "#19221e" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={screenshot} width={1056} height={420} alt="" style={{ objectFit: "cover", objectPosition: "top" }} />
      </div>}
    </div>,
    size,
  );
}
