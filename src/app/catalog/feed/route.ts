import { NextRequest, NextResponse } from "next/server";
import { loadCatalogCsvForFeed } from "@/lib/catalogFeed";

/**
 * URL pública del catálogo para Meta Commerce Manager (Catálogo → Fuentes de datos → URL programada).
 * Content-Type CSV; filas de comentario # del plantilla se omiten para compatibilidad con el analizador de Meta.
 *
 * Opcional: define CATALOG_FEED_SECRET en el servidor y usa la misma URL con ?token=... en Meta.
 */
export async function GET(request: NextRequest) {
  const secret = process.env.CATALOG_FEED_SECRET;
  if (secret) {
    const token = request.nextUrl.searchParams.get("token");
    if (token !== secret) {
      return new NextResponse("Unauthorized", {
        status: 401,
        headers: { "Cache-Control": "no-store" },
      });
    }
  }

  const result = loadCatalogCsvForFeed();
  if (!result.ok) {
    const status = result.error === "missing_file" ? 404 : 500;
    const msg =
      result.error === "missing_file"
        ? "Catalog file catalog_products.csv not found at project root."
        : "Catalog file is empty.";
    return new NextResponse(msg, { status, headers: { "Cache-Control": "no-store" } });
  }

  return new NextResponse(result.body, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=86400",
      "Content-Disposition": 'inline; filename="catalog_products.csv"',
    },
  });
}
