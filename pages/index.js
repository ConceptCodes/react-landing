import Head from "next/head";
// import ArrowNarrowRight from '@heroicons/react/outline'

const caseStudies = [
  {
    title: "google",
    category: "technology",
    application_type: "dashboard",
  },
  {
    title: "dunkin donuts",
    category: "finance",
    application_type: "mobile app",
  },
  {
    title: "nokia gadget",
    category: "travel",
    application_type: "mobile app",
  },
];

let navItems = ['products','our work','services']

export default function Home() {
  return (
    <div className="bg-black flex flex-col justify-around min-h-screen">
      <Head>
        <title>Landing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header class="flex justify-around p-5">
      <div className="text-white">hello@cargo.io</div>
      <div className="flex text-gray-400 capitalize">
        { navItems.map((x, index) => <div key={index} className="mx-3 cursor-pointer hover:text-white">{x}</div> )}
      </div>
      <div>
        <a href="" className="text-gray-500 mx-3 uppercase hover:text-white">
          faq
        </a>
        <button className="bg-blue-600 text-white capitalize h-8 rounded-xl">
          get started
        </button>
      </div>
    </header>
      <div className="pt-3 sm:mt-50 flex flex-col mx-10  py-2">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-6xl">
            Cargo <span className="text-gray-500 mx-2">Design</span> Agency
          </h1>
          <h4 className="text-gray-600 text-xl p-3">
            Ahead with 100+ amazing clients with 20+ Country Served the best
            design materials
          </h4>
          <button className="capitalize text-white bg-blue-600 rounded-xl">
            get started
          </button>
        </div>
        <div className="">
          <div className="flex justify-between pb-10">
            <div className="capitalize text-xl text-white">case studies</div>
            <div className="capitalize text-white underline">view all</div>
          </div>
          <div className="flex justify-between">
            {caseStudies.map((study, index) => 
              (<div key={index} className="flex group flex-grow mx-2 flex-col p-3 h-45 rounded-lg hover:bg-blue-600 border-4 border-gray-500 border-opacity-25">
                <div className="m-3 group-hover:text-white">
                  <div className="flex text-gray-600 justify-between pb-5">
                    <div className="uppercase">{study.category}</div>
                    <div className="capitalize">{study.application_type}</div>
                  </div>
                  <div className="text-3xl capitalize text-white">{study.title}</div>
                  <p className="text-gray-600 truncate pb-5">At vero eos et accusamus et o</p>
                  <div className="text-white capitalize">view case study</div>
                  <span>
                    {/* <ArrowNarrowRight /> */}
                  </span>
                </div>
              </div>)
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
