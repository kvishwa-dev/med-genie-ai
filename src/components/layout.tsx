import NavBar from "./landing_page/NavBar";
import Footer from "./landing_page/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      {/* Add padding-top equal to navbar height */}
      <main className="flex-grow pt-16">
        {children}
      </main>

      <Footer />
    </div>
  );
}
