"use client";

import Image from "next/image";
import type { MenuSection } from "@/data/cafes";
import { Separator } from "@/components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

type Props = {
  menu: MenuSection[];
  gallery: string[];
  cafeName: string;
};

export function CafeMenuGallery({ menu, gallery, cafeName }: Props) {
  return (
    <Tabs defaultValue="menu" className="w-full gap-4">
      <TabsList variant="line" className="w-full max-w-md">
        <TabsTrigger value="menu">Menü</TabsTrigger>
        <TabsTrigger value="photos">Fotoğraflar</TabsTrigger>
      </TabsList>
      <TabsContent value="menu" className="space-y-8">
        {menu.map((section, index) => (
          <section key={section.title}>
            <h3 className="font-heading mb-3 text-sm font-semibold tracking-wide text-foreground uppercase">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li
                  key={`${section.title}-${item.name}`}
                  className="flex items-baseline justify-between gap-4 text-sm"
                >
                  <span className="text-foreground">{item.name}</span>
                  <span className="shrink-0 font-medium text-muted-foreground tabular-nums">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
            {index < menu.length - 1 ? <Separator className="mt-6" /> : null}
          </section>
        ))}
      </TabsContent>
      <TabsContent value="photos">
        <p className="mb-4 text-sm text-muted-foreground">
          {cafeName} — mekândan kareler (örnek görseller).
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {gallery.map((src, i) => (
            <div
              key={src}
              className="relative aspect-3/2 overflow-hidden rounded-lg ring-1 ring-foreground/10"
            >
              <Image
                src={src}
                alt={`${cafeName} fotoğraf ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
