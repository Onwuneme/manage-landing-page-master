import { useEffect, useState } from "react";

const testimonials = [
  {
    image: "/avatar-anisha.png",
    name: "  Anisha Li",
    quote: `“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”`,
  },
  {
    image: "/avatar-ali.png",
    name: " Ali Bravo",
    quote: ` “We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”`,
  },
  {
    image: "/avatar-richard.png",
    name: "Richard Watts",
    quote: `  “Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”`,
  },
  {
    image: "/avatar-shanai.png",
    name: "Shanai Gough",
    quote: ` “Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”`,
  },
];

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[activeIndex];
  return (
    <>
      <div className=" flex flex-col  items-center">
        <h2 className=" text-blue-950 text-4xl text-center font-semibold mb-30">
          What they've said
        </h2>
        <div className="md:w-150 lg:hidden flex flex-col items-center">
          <div className=" relative h-67 flex flex-col items-center mx-4  px-5 py-13 bg-neutral-100 rounded">
            <img
              src={current.image}
              alt=""
              className=" w-20 h-20 absolute -top-9  "
            />
            <h2 className=" text-blue-950 font-semibold text-xl my-5">
              {current.name}
            </h2>
            <p className="text-neutral-400 text-center">
              {current.quote}
            </p>
          </div>
          <div className=" space-x-2 mt-5">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${
                  activeIndex === index ? "bg-orange-600" : ""
                } h-3 w-3 border border-orange-600 rounded-full`}
              ></button>
            ))}
          </div>
        </div>
        <div className=" hidden lg:flex  gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className=" relative  flex flex-col items-center  px-5 py-13 bg-neutral-100 rounded"
            >
              <img
                src={testimonial.image}
                alt=""
                className=" w-20 h-20 absolute -top-9  "
              />
              <h2 className=" text-blue-950  font-semibold text-xl my-5">
                {testimonial.name}
              </h2>
              <p className="text-neutral-400 text-lg text-center">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
        <button className=" my-10 px-10 py-3 duration-500 bg-orange-600 hover:bg-red-300 rounded-full text-white font-semibold shadow-lg shadow-orange-600 hover:shadow-red-300 ">
          Get Started
        </button>
      </div>
    </>
  );
}
