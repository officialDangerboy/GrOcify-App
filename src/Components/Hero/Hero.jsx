import HomeImg from "../../assets/grocery.png"
import Buttton from "../Button/Buttton"
const Hero = () => {
  return (
    <section>
      <div className='max-[750px]:pt-[9rem] max-[500px]:pt-[6rem] min-h-[100vh] pt-[4rem] flex items-center max-w-[90vw] mx-auto max-[750px]:flex-col gap-[1rem]'>

        {/* hero content */}
        <div className="flex-1 flex flex-col gap-[0.8rem]">
          <span className="bg-pink-100 text-pink-500 text-xl px-[1rem] py-[0.3rem] rounded-full max-w-fit max-[850px]:text-lg max-[500px]:text-sm">Export Best Quality</span>
          <h1 className="text-7xl max-[1250px]:text-6xl max-[1030px]:text-5xl max-[500px]:text-4xl font-bold">Tasty Organic <span className="text-pink-500">Fruits</span> & <span className="text-pink-500">Veggies</span> in Your City</h1>
          <p className="max-w-[550px] text-xl text-zinc-600 max-[850px]:text-lg max-[500px]:text-sm">
            Bread for a high content of benifits like antioxidants, fiber, and antibacterial properties.
          </p>
          <div className="max-[500px]:text-md">
            <Buttton content="Shop Now" />
          </div>
        </div>

        {/* hero image */}
        <div className="flex-1">
          <img src={HomeImg} alt="" />
        </div>

      </div>
    </section>
  )
}

export default Hero