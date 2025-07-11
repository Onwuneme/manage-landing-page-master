

const data = [
  {
    id: 1,
    title: "Track company-wide progress",
    info: "see how your day-to-day tasks fit into the wider vision.Go from tarcking progress at the milestone levl all the way done to the smallest of details. Never lose sight of the bigger picture again ",
  },
  {
    id: 2,
    title: "Advanced built-in reports",
    info: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholder informed.",
  },
  {
    id: 3,
    title: "Everything you need in one place",
    info: "Stop jumping from one service to another to communicate, store files, tracks and share documents. Manage offers n all-in-one team produtivity solution. ",
  },
];

export default function Main() {
  return (
    <>
      <div className=" lg:flex lg:justify-evenly justify-between">
        <div className="text-center lg:text-start  px-6">
          <h2 className={`text-[40px] text-blue-950 font-semibold `}>
            What's different about
            <br  className=" hidden lg:block"/>
             Manage?
          </h2>
          <p className="text-neutral-400 text-lg mb-6 mt-2">
            Manage provides all the functionality your
            <br className=" hidden lg:block" />
            team need. without thecomplexity.Our
            <br className=" hidden lg:block" />
            software is tailor-made for modern digital
            <br className=" hidden lg:block" />
            product teams.
          </p>
        </div>
        <div  className=" lg:hidden">
          {data.map((manage) => (
            <div key={manage.id}>
              <h2 className="bg-red-100 ml-6 mb-6 h-10 rounded-l-full space-x-3">
                <span className="bg-orange-500 rounded-full px-5 text-white py-1 text-2xl">
                  0{manage.id}
                </span>
                <span className="  font-semibold">{manage.title}</span>
              </h2>
              <p className="px-4 mb-10 text-neutral-400 ">
                {manage.info}
              </p>
            </div>
          ))}
        </div>
        <div className=" hidden lg:block w-[600px]">
          {
            data.map(manage =>
              <div key={manage.id} className=" flex gap-10 mb-10">
                <div className="h-fit px-5  bg-orange-500 rounded-full   text-white  text-lg">0{manage.id}</div>
                <div className=" space-y-4">
                  <h2 className=" text-xl font-bold text-blue-950">{manage.title}</h2>
                  <p className="text-neutral-400 text-lg">{manage.info}</p>
                </div>

              </div>
            )
          }
        </div>
      </div>
    </>
  );
}
