import { Footer } from "@/components/app/footer";
import { Head } from "./head";
import { Navbar } from "@/components/app/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex h-screen flex-col">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl flex-grow px-6 pt-16">
        {children}
      </main>

      <Footer />
    </div>
  );
}
