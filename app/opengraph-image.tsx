import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/data/config";

// Site-wide link preview card. Colors are the dark theme tokens from globals.css.
export const alt = `${siteConfig.author}, AI engineer and full-stack developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const photo = `data:image/png;base64,${await readFile(join(process.cwd(), "public/profile.png"), "base64")}`;

export default function Image() {
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: "#101614", padding: 72, alignItems: "center", gap: 64 }}>
      <div style={{ display: "flex", flexDirection: "column", flex: 1, height: "100%", justifyContent: "space-between" }}>
        <div style={{ display: "flex", fontSize: 30, color: "#43d9a3" }}>@{siteConfig.brand}</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, color: "#f4f7f5", letterSpacing: -3, lineHeight: 1.05 }}>{siteConfig.author}</div>
          <div style={{ fontSize: 40, color: "#b4c2b9", marginTop: 20 }}>AI Engineer & Full-Stack Developer</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#43d9a3" }}>AI products, chatbots & SaaS · {siteConfig.base_url}</div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photo} width={340} height={435} alt="" style={{ objectFit: "cover", objectPosition: "top", borderRadius: 24, border: "2px solid #35473c" }} />
    </div>,
    size,
  );
}
