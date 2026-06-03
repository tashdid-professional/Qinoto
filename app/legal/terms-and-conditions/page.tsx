import { getTermsAndConditions } from "@/src/services/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function TermsAndConditionsPage() {
  const data = await getTermsAndConditions();

  return (
    <>
      <Navbar />
      <main className="min-h-screen font-karla pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-black ">
            {data.title.toLowerCase()}.
          </h1>
          <div className="space-y-6">
            {data.content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
