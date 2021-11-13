import Head from "next/head";
import Header from '../components/Header'
import Card from '../components/Card'

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

export default function Home() {
  return (
    <div className="dark:bg-black h-screen">
      <Head>
        <title>Landing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-5 flex flex-col">
        <Header />
          <div className="pt-20 flex flex-col items-center">
            <h1 className="dark:text-white text-black text-4xl md:text-6xl">
              Cargo
              <span className="text-blue-600 mx-2">
                Design
              </span>
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
            <div className="pt-20 flex justify-between px-3 ">
              <div className="capitalize text-xl dark:text-white">
                case studies
              </div>
              <div className="capitalize dark:text-white underline">
                view all
              </div>
            </div>
            <div className="flex flex-wrap justify-between">
              {caseStudies.map((study, index) => (
               <Card key={index} study={study} />
              ))}
            </div>
      </div>
    </div>
  );
}
