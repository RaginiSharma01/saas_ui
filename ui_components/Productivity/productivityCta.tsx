export default function ProductivityCTA() {
  return (
    <section className="w-full bg-gradient-to-b from-[#0B1E3B] to-[#07162D] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center text-white">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          One tool to replace them all
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          Forget about jumping from one tool to another, just to get the job done.
          With our CRM, you get all the tools that you need in a single, easy to use application.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center items-center gap-3">
          <button className="bg-bg-primary hover:bg-purple-700 transition px-6 py-2.5 rounded-md text-sm font-medium">
            CREATE ACCOUNT
          </button>

          <button className="border border-white/30 hover:border-white/60 transition px-6 py-2.5 rounded-md text-sm font-medium">
            SEE PRICING
          </button>
        </div>

      </div>
    </section>
  );
}
