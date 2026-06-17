import { readFileSync, existsSync } from "fs";
import { join } from "path";

const CATALOG_FILENAME = "catalog_products.csv";

/** Facebook/Meta: la primera fila útil debe ser el encabezado; las filas que empiezan con # son documentación del plantilla. */
export function loadCatalogCsvForFeed(): { ok: true; body: string } | { ok: false; error: string } {
  const path = join(process.cwd(), CATALOG_FILENAME);
  if (!existsSync(path)) {
    return { ok: false, error: "missing_file" };
  }
  const raw = readFileSync(path, "utf-8");
  const lines = raw.split(/\r?\n/);
  const kept = lines.filter((line) => {
    const t = line.trim();
    if (!t) return false;
    return !t.startsWith("#");
  });
  if (kept.length === 0) {
    return { ok: false, error: "empty" };
  }
  return { ok: true, body: kept.join("\n") + "\n" };
}
