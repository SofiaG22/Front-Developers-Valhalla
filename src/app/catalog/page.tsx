import { headers } from "next/headers";
import Link from "next/link";

export const metadata = {
  title: "Catálogo para Meta | Devs Valhalla",
  robots: { index: false, follow: false },
};

export default async function CatalogAdminPage() {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const base = `${proto}://${host}`;
  const hasSecret = Boolean(process.env.CATALOG_FEED_SECRET);
  const feedBase = `${base}/catalog/feed`;
  const feedPath = hasSecret ? `${feedBase}?token=` : feedBase;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-4 py-12">
      <div className="max-w-2xl mx-auto space-y-8">
        <div>
          <p className="text-sm font-medium text-indigo-400 mb-2">Catálogo · Meta Commerce</p>
          <h1 className="text-2xl font-bold text-white">URL del feed de productos</h1>
          <p className="mt-2 text-slate-400 text-sm leading-relaxed">
            Usa esta dirección en{" "}
            <strong className="text-slate-200">Meta Business Suite → Comercio → Catálogos → tu catálogo → Fuentes de datos → Añadir artículos → URL programada</strong>.
            Meta descargará el CSV periódicamente (mismo formato que tu archivo{" "}
            <code className="text-indigo-300">catalog_products.csv</code>, sin la fila de comentarios con #).
          </p>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-4">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">URL del feed</p>
          <code className="block break-all text-sm text-emerald-400">{feedPath}</code>
          {hasSecret && (
            <p className="mt-3 text-xs text-amber-200/90">
              Añade al final el mismo valor que <code className="text-slate-300">CATALOG_FEED_SECRET</code> en tu
              servidor (sin espacios). Esa URL completa es la que debes pegar en Meta.
            </p>
          )}
        </div>

        <ul className="text-sm text-slate-400 space-y-2 list-disc pl-5">
          <li>El archivo debe estar en la raíz del proyecto como <code className="text-slate-300">catalog_products.csv</code>.</li>
          <li>Imágenes y enlaces del CSV deben ser URLs absolutas https accesibles públicamente.</li>
          <li>Precios según Meta: número + espacio + código ISO de moneda (ej. <code className="text-slate-300">99.00 USD</code>).</li>
        </ul>

        <Link
          href="/"
          className="inline-flex text-sm text-indigo-400 hover:text-indigo-300 underline underline-offset-2"
        >
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
}
