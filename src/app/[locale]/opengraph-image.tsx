import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";

export const alt = "Said Hammoudi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#ffffff",
          color: "#202124",
        }}
      >
        <div style={{ fontSize: 40, color: "#1a73e8" }}>Said Hammoudi</div>
        <div style={{ fontSize: 76, fontWeight: 400, marginTop: 24, lineHeight: 1.1 }}>{t("ogTitle")}</div>
        <div style={{ fontSize: 34, marginTop: 32, color: "#5f6368" }}>{t("ogTagline")}</div>
      </div>
    ),
    size,
  );
}
