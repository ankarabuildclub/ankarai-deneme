import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4">
      <h1 className="font-heading text-2xl font-semibold">Sayfa bulunamadı</h1>
      <p className="text-center text-muted-foreground">
        Bu mekân rehberde yok veya bağlantı hatalı olabilir.
      </p>
      <Button nativeButton={false} render={<Link href="/" />}>
        Ana sayfaya dön
      </Button>
    </div>
  );
}
