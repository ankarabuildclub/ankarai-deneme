import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllCafes, getCafeBySlug } from "@/data/cafes";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CafeMenuGallery } from "@/components/cafe-menu-gallery";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllCafes().map((cafe) => ({ slug: cafe.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cafe = getCafeBySlug(slug);
  if (!cafe) {
    return { title: "Mekân bulunamadı" };
  }
  return {
    title: cafe.name,
    description: cafe.description,
  };
}

export default async function MekanDetayPage({ params }: PageProps) {
  const { slug } = await params;
  const cafe = getCafeBySlug(slug);

  if (!cafe) {
    notFound();
  }

  return (
    <div className="min-h-screen pb-16">
      <div className="relative aspect-21/9 max-h-[min(420px,50vh)] w-full overflow-hidden">
        <Image
          src={cafe.heroImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />
      </div>

      <article className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="-mt-16 relative z-10">
          <Button
            variant="secondary"
            size="sm"
            nativeButton={false}
            className="mb-6 shadow-sm"
            render={<Link href="/" />}
          >
            ← Tüm mekânlar
          </Button>

          <header className="space-y-3">
            <p className="text-sm text-muted-foreground">{cafe.neighborhood}</p>
            <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {cafe.name}
            </h1>
            <p className="text-sm text-muted-foreground">{cafe.address}</p>
            <p className="text-base leading-relaxed text-foreground/90">
              {cafe.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {cafe.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          <div className="mt-10 rounded-xl border border-foreground/10 bg-card p-4 sm:p-6">
            <CafeMenuGallery
              menu={cafe.menu}
              gallery={cafe.gallery}
              cafeName={cafe.name}
            />
          </div>
        </div>
      </article>
    </div>
  );
}
