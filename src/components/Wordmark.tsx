import Link from "next/link";
import Image from "next/image";

type WordmarkProps = {
  className?: string;
  href?: string;
  height?: number;
};

/** Brand wordmark image — Developers (white) + Valhalla (purple), no icon */
export default function Wordmark({ className = "", href = "/", height = 32 }: WordmarkProps) {
  const img = (
    <Image
      src="/wordmark-developers-valhalla.png"
      alt="DevelopersValhalla"
      width={420}
      height={72}
      className={`w-auto ${className}`}
      style={{ height, width: "auto" }}
      priority
    />
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center shrink-0" aria-label="DevelopersValhalla home">
        {img}
      </Link>
    );
  }

  return img;
}
