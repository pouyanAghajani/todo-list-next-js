import { TodosDetails } from "@/types";
import Link from "next/link";

const id: React.FC<{ data: TodosDetails[] }> = ({ data }) => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-custom-background flex flex-col items-center justify-center py-10">
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="space-y-4">
          {data?.map((todo) => (
            <li
              key={todo.id}
              className="bg-white/80 shadow overflow-hidden sm:rounded-lg hover:bg-white/90 transition-colors duration-300 p-6"
            >
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {todo.title}
              </h3>
              <p className="text-sm text-gray-600">
                Completed: {todo.completed ? "Yes" : "No"}
              </p>
            </li>
          ))}
        </ul>
        <Link
          href={"/"}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 m-5"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: number };
}) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${params.id}`
  );
  const data = await res.json();
  return {
    props: { data },
  };
};

export default id;
