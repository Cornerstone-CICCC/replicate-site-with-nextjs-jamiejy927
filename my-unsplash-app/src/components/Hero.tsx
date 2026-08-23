export default function Hero() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
          Unsplash
        </h1>
        
        <p className="text-base text-gray-800 leading-relaxed font-normal">
          The internet’s source for visuals.<br />
          Powered by creators everywhere.
        </p>

        <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3.5 shadow-sm mt-6 focus-within:bg-white focus-within:ring-2 focus-within:ring-black transition">
          <svg className="w-5 h-5 text-gray-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search high-resolution images, categories, free wallpapers..."
            className="w-full bg-transparent text-sm text-black outline-none placeholder-gray-400"
          />
        </div>
      </div>
    </section>
  );
}