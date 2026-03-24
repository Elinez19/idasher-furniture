import Image from 'next/image';

export function DesignPlan() {
  return (
    <section className="relative w-full h-[400px] my-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
          alt="People reviewing design swatches"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-sm">
            Get a free design plan.
          </h2>
          <p className="text-sm md:text-base font-medium mb-8 drop-shadow-sm text-gray-100">
            Complete a short form to get put in motion design.
          </p>
          <button className="bg-white hover:bg-gray-100 text-black font-semibold tracking-wider text-xs px-8 py-3 rounded-full transition-colors uppercase shadow-md">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
