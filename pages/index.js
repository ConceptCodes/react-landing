import Head from "next/head";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

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

let navItems = ["products", "our work", "services"];

export default function Home() {
  return (
    <div className="dark:bg-black">
      <Head>
        <title>Landing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-around h-screen">
        <header class="flex justify-around">
          <div className="dark:text-white">hello@cargo.io</div>
          <div className="flex dark:text-gray-400 capitalize">
            {navItems.map((x, index) => (
              <div
                key={index}
                className="mx-3 cursor-pointer hover:text-gray-800 dark:hover:text-white"
              >
                {x}
              </div>
            ))}
          </div>
          <div>
            <a
              href=""
              className="dark:text-gray-500 mx-3 uppercase hover:text-white"
            >
              faq
            </a>
            <button className="bg-blue-600 text-white capitalize px-4  h-8 rounded-2xl">
              get started
            </button>
          </div>
        </header>
        <div className="flex flex-col mx-10">
          <div className="flex flex-grow flex-col items-center">
            <h1 className="dark:text-white text-black text-6xl">
              Cargo{" "}
              <span className="text-blue-600 mx-1">
                Design
              </span>{" "}
              Agency
            </h1>
            <h4 className="text-gray-600 text-xl p-3">
              Ahead with 100+ amazing clients with 20+ Country Served the best
              design materials
            </h4>
            <button className="capitalize px-6 py-2 text-white bg-blue-600 rounded-3xl">
              get started
            </button>
          </div>
          </div>
          <div className="px-10">
            <div className="flex justify-between pb-10">
              <div className="capitalize text-xl dark:text-white">
                case studies
              </div>
              <div className="capitalize dark:text-white underline">
                view all
              </div>
            </div>
            <div className="flex justify-between">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="flex group cursor-pointer flex-grow mx-2 flex-col p-3 h-45 rounded-lg hover:bg-blue-600 border-4 border-black dark:border-gray-500 border-opacity-25 hover:border-opacity-0"
                >
                  <div className="m-3 group-hover:text-white">
                    <div className="flex dark:text-gray-600 group-hover:text-white justify-between pb-5">
                      <div className="uppercase">{study.category}</div>
                      <div className="capitalize">{study.application_type}</div>
                    </div>
                    <div className="text-3xl capitalize dark:text-white">
                      {study.title}
                    </div>
                    <p className="dark:text-gray-600 group-hover:text-white truncate pb-5">
                      At vero eos et accusamus et o
                    </p>
                    <div className="flex items-center">
                      <div className="dark:text-white capitalize">
                        view case study
                      </div>
                      <div className="mx-2">
                        <ArrowNarrowRightIcon className="h-7 group-hover:text-white text-black dark:text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        
      </div>
    </div>
  );
}
