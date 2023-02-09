import DamageStats from './DamageStats';
import DonationStats from './DonationStats';
import Organizations from './Organizations';

export default function Home() {
  return (
    <>
    {/* Hero */}
    <div className="relative isolate overflow-hidden bg-gray-900">
      <img
        src="/background.jpeg"
        className="absolute inset-0 -z-10 h-full w-full object-cover filter brightness-50"
      />
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Turkey Relief DAO
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              The international crypto forefront DAO helping the victims of earthquake disaster for aid & communication through legitimate organizations.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-red-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Donate
              </a>
              <a href="#" className="text-base font-semibold leading-7 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DamageStats/>
    <DonationStats/>
    <Organizations/>
    </>
  )
}
