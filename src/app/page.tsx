import Image from "next/image";
import FeaturedAgents from "@/components/FeaturedAgents";
import FeaturedHomes from "@/components/FeaturedHomes";

export default function Home() {
  return (
    <>
      <section className="h-3/6 relative bg-gray-400">
        <Image width={1920} height={850} src="/hero.jpg" alt="."  className="w-full h-full object-cover mix-blend-multiply"/>
        <div className="w-[85vw] max-w-160 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-2 sm:p-6">
          <h1 className="text-sm sm:text-lg font-bold mb-4">Søg blandt 158 boliger til salg i 74 butikker</h1>
          <form action="/boliger" className=" flex gap-2">
            <input type="search" name="soeg" id="soeg" className="border p-2  flex-1"/>
            <button type="submit" className="py-2 px-4 sm:px-8 bg-primary text-white">søg</button>
          </form>
        </div>
      </section>
      <FeaturedHomes />
      <section className="py-12 bg-primary">
          <div className="container mx-auto md:px-20">
            <div className="grid lg:grid-cols-2">

              <h2 className="text-white text-xl font-bold text-balance">Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet</h2>
              <form className="mt-8 lg:mt-0">
                <input className="bg-white p-4 w-full" type="email" name="email" id="email" placeholder="Indtast din email adresse" />
              </form>
            </div>
          </div>
      </section>
      <FeaturedAgents />
      
    </>
  );
}
