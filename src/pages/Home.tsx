import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export default function Home() {
  return (
    <div className="container space-y-10">
      <h1 className="sr-only">Home</h1>
      {/* Hero */}
      <section className="pt-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          USMedQ
        </h1>
        <p className="mt-3 max-w-2xl text-gray-600">
          Build the next-generation medical Q&A platform with a modern React + TypeScript stack.
        </p>
        <div className="mt-6 flex gap-3">
          <Button onClick={() => window.alert('Get Started')}>Get Started</Button>
          <Button variant="outline" onClick={() => window.alert('Learn More')}>Learn More</Button>
        </div>
      </section>

      {/* Highlights */}
      <section>
        <h2 className="text-2xl font-bold">Highlights</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <h3 className="text-lg font-semibold">Fast Dev</h3>
            <p className="mt-1 text-gray-600">Vite + React + TS for rapid iteration and HMR.</p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Typed UI</h3>
            <p className="mt-1 text-gray-600">TypeScript-first components with Tailwind utilities.</p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Tested</h3>
            <p className="mt-1 text-gray-600">Vitest + RTL ensure reliability for core flows.</p>
          </Card>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="rounded-xl border bg-brand/5 p-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Ready to integrate your backend?</h2>
          <p className="text-gray-700">Configure <code>.env</code> with your API base URL and start consuming endpoints.</p>
        </div>
        <Button onClick={() => window.alert('Configure Env')}>Configure Env</Button>
      </section>
    </div>
  )
}
