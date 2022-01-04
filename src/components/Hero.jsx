const Hero = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-start">
    <div className="flex flex-col pr-8">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white">
        Jimwell Pariñas
      </h1>
      <h2 className="text-gray-200 mb-4">
       Software Developer {' | '} 
        <span className="font-semibold">Web Artisan</span>
      </h2>
      <p className="text-gray-400 mb-16">
        Programming isn't about what you know; it's about what you can <br />  figure out. Software Programmer at Baler, Aurora.
      </p>
    </div>
    <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
      <img
        alt="Lee Robinson"
        height={176}
        width={176}
        src="/avatar.jpg"
        className="rounded"
      />
    </div>
  </div>
  )
}

export default Hero
