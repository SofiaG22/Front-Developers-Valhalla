import ChevronDecor from "@/components/ui/ChevronDecor";
import AmbientBackground from "@/components/ui/AmbientBackground";

type PageHeroProps = {
  title: string;
  titleHighlight?: string;
  subtitle: string;
};

export default function PageHero({ title, titleHighlight, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 border-b border-brand/40 overflow-hidden section-purple-wash bg-[#0a0614]">
      <AmbientBackground variant="section" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-50 pointer-events-none">
        <ChevronDecor size="md" animated />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl ml-auto text-right">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight">
            {title}
            {titleHighlight ? (
              <>
                <br />
                <span className="text-gradient-brand">{titleHighlight}</span>
              </>
            ) : null}
          </h1>
          <p className="mt-6 text-lg text-muted max-w-xl ml-auto">{subtitle}</p>
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-brand to-transparent ml-auto" />
        </div>
      </div>
    </section>
  );
}
