
const SemiFooter = () => {
  return (
    <section className="w-full flex justify-center items-center py-10 px-2" id="contact">
      <div className="bg-[#142218] rounded-2xl w-full max-w-5xl mx-auto p-8 md:p-14 flex flex-col items-center relative overflow-hidden" style={{backgroundImage: 'url(/bg-pattern.svg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-6 leading-tight">
          Unlock the Potential of Your<br className="hidden md:block" />
          Campaigns with Our Intuitive Software
        </h1>
        <p className="text-gray-200 text-center max-w-2xl mb-8 text-sm md:text-base">
          We invite you to embark on this exciting email marketing journey with us. At emailgigga, we believe in a collaborative approach, where our clients become our partners. Together, we can shape a future where mailing possibilities are limitless.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-7 py-2 rounded-full font-medium text-base transition">Get started</button>
          <button className="flex items-center gap-2 border border-gray-400 text-white px-7 py-2 rounded-full font-medium text-base transition hover:bg-gray-900">
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" stroke="white" strokeWidth="2"/><polygon points="8,7 14,10 8,13" fill="white"/></svg>
            Watch Video
          </button>
        </div>
      </div>
    </section>
  );
};

export default SemiFooter;
