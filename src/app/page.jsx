import Image from "next/image";
// 38
const Homepage = () => {
  return (
    <>

      <div className="h-full flex flex-col sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image container  */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
          {/* object contain aspect ratio maitain karne ky ly */}
        </div>
        {/* Text container  */}
        <div className="h-1/2 lg:h-full lg:w-1/2  flex flex-col lg:flex-row gap-8 items-center justify-center" >
          {/* Title  */}
          <h1 className="text-4xl md:m-6xl font-bold ">Crafting Digital Experiences , Designing Tommorow</h1>
          {/* Description  */}
          <p className="md:text-xl">
            Welcome to my Digital canvas , where innovation and creativity
            converge. With a keen eye for aesthetics and ,mastery of code,my
            portfolio showcase a diverse collection of projects that reflect
            my commitment to execellence
          </p>
          {/* Buttons  */}
          <div className="flex gap-4">
            <button className="p-4 rounded-lg ring-1 bg-black text-white">View My Work</button>
            <button className="p-4 rounded-lg ring-1 bg-black" >Contact Me</button>
          </div>
        </div>
      </div>
    </>
  )
};

export default Homepage;
