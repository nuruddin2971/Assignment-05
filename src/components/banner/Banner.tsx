import BannarLogo from "../../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="flex flex-col mt-5 md:flex-row justify-between items-center text-center md:text-left w-11/12 mx-auto">
      <div className="space-y-8">
        <h2 className="font-extrabold text-5xl md:text-6xl">
          Build Your Ideal <br />
          <span className="bg-linear-to-r from-[#FF5722] from-0% via-[#D81B7E] via-50% to-[#7C3AED] to-100% bg-clip-text text-transparent">
            Development Stack
          </span>
        </h2>
        <p>
          Explore frontend, backend, database, and tooling options,
          <br /> compare them side by side, and put together the stack that fits
          your next project.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <button className="btn text-white font-semibold bg-linear-to-r from-[#FF5722] to-[#D81B7E]">
            Explore Technologies
          </button>
          <button className="btn font-semibold w-42">Learn More</button>
        </div>
      </div>
      <div>
        <img src={BannarLogo} alt="" />
      </div>
    </div>
  );
};

export default Banner;
