import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

function Card({ study }) {
  return (
    <div className="group m-3 cursor-pointer mx-2 max-w-sm rounded-xl hover:bg-blue-600 border-4 border-black dark:border-gray-500 border-opacity-25 hover:border-opacity-0">
      <div className="m-3 group-hover:text-white">
        <div className="flex dark:text-gray-600 group-hover:text-white justify-between pb-5">
          <div className="uppercase">{study.category}</div>
          <div className="capitalize">{study.application_type}</div>
        </div>
        <div className="text-3xl capitalize dark:text-white">{study.title}</div>
        <div className="">
          <p className="dark:text-gray-600 group-hover:text-white truncate overflow-hidden overflow-ellipsis pb-5">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident
          </p>
        </div>
        <div className="flex items-center">
          <div className="dark:text-white capitalize">view case study</div>
          <div className="mx-2">
            <ArrowNarrowRightIcon className="h-7 group-hover:text-white text-black dark:text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
