export function HeroSectionGrid() {
  return (
    <main className="flex flex-col items-center gap-10 max-w-[1200px] mx-auto mt-10 md:mt-20 relative mb-[50px] md:mb-[100px] px-4 sm:px-6 md:px-8">
      <section className="flex flex-col items-center gap-5 md:gap-10 w-full">
        <div className="group flex flex-col lg:flex-row gap-5 lg:gap-10 bg-[#FFFFFF99] p-5 md:p-10 rounded-[20px] md:rounded-[40px] justify-between relative overflow-hidden min-h-[20rem] md:h-[30rem] transition-all duration-300 hover:bg-[#FFFFFFCC] transform-gpu hover:scale-[1.02] lg:hover:scale-105 will-change-transform cursor-pointer">
          <div className="flex flex-col justify-between gap-8 lg:gap-16 w-full lg:w-1/2">
            <div className="flex flex-col gap-5 lg:gap-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold acorn">
                Quality is not an option, it is a necessity.
              </h2>
              <div className="flex flex-col gap-3 md:gap-5 roboto text-base md:text-lg">
                <p>
                  As a frontend developer, my goal is to build scalable,
                  high-performance, and maintainable interfaces that provide
                  seamless user experiences.
                </p>
                <p>
                  I focus on writing clean, efficient, and modular code to
                  ensure long-term sustainability and adaptability.
                </p>
              </div>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/joseramonmontes/"
                target="_blank"
                className="bg-gradient-to-r from-[#E2CCFF] to-[#B5C0FF] roboto px-4 md:px-5 py-3 rounded-full font-bold text-sm md:text-base cursor-pointer"
              >
                Know me better
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-5 md:gap-10 w-full">
          <div className="group flex flex-col gap-5 md:gap-10 bg-[#D6ABFF] p-5 md:p-10 rounded-[20px] md:rounded-[40px] justify-between relative overflow-hidden min-h-[20rem] md:h-[30rem] w-full lg:w-7/12 transition-all duration-300 hover:bg-[#C090FF] transform-gpu hover:scale-[1.02] lg:hover:scale-105 will-change-transform cursor-pointer">
            <div className="flex items-start gap-5 md:gap-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold acorn">
                Currently a frontend developer at Metlabs.
              </h2>
            </div>
          </div>
          <a
            href="/about"
            className="group flex flex-col gap-5 md:gap-10 bg-[#FFC6C7] p-5 md:p-10 rounded-[20px] md:rounded-[40px] justify-between relative overflow-hidden min-h-[20rem] md:h-[30rem] w-full lg:w-5/12 transition-all duration-300 hover:bg-[#FFB0B1] transform-gpu hover:scale-[1.02] lg:hover:scale-105 will-change-transform cursor-pointer"
          ></a>
        </div>
      </section>
    </main>
  )
}