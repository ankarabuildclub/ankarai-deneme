import Image from "next/image";
import Link from "next/link";
import { getAllCafes } from "@/data/cafes";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const list = getAllCafes();

  return (
    <div className="min-h-screen">
      <header className="border-b border-foreground/10 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-10 sm:px-6">
          <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
            AnkaraCafe
          </p>
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Ankara&apos;da kahve molası
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground">
            Bağımsız kahve dükkanlarını keşfedin; her kart bir mekânın özetini
            sunar. Detayda menü ve fotoğraf galerisine gidebilirsiniz.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((cafe) => (
            <li key={cafe.slug}>
              <Card className="h-full transition-shadow hover:shadow-md">
                <div className="relative aspect-16/10 w-full overflow-hidden">
                  <Image
                    src={cafe.heroImage}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={cafe.slug === list[0]?.slug}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{cafe.name}</CardTitle>
                  <CardDescription>{cafe.neighborhood}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {cafe.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button nativeButton={false} render={<Link href={`/mekanlar/${cafe.slug}`} />}>
                    Mekânı gör
                  </Button>
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      </main>

      <footer className="border-t border-foreground/10 py-8 text-center text-sm text-muted-foreground">
        Örnek veri — AnkaraCafe demo
      </footer>
    </div>
  );
}
