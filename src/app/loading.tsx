export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <div className="container mx-auto h-80 flex flex-col justify-center">

            <p className="text-2xl font-bold mb-8">Hav tålmodighed...</p>
            <p className="text-balance mb-4">API'et til denne side kører på en gratis tjeneste, <br />som går i dvale når der ikke er forespørgsler.</p>
            <p>Venter på 'spin-up'...</p>
        </div>
)
  }