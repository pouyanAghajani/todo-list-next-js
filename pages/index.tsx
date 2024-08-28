import { UsersDetails } from "@types";
import Link from "next/link";
const Index: React.FC<{ data: UsersDetails[] }> = ({ data }) => {
  return (
    <div className="min-h-screen bg-custom-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <ul className="space-y-4">
          {data.map((user: UsersDetails) => (
            <li
              key={user.id}
              className="bg-white/80 shadow overflow-hidden sm:rounded-lg hover:bg-white/90 transition-colors duration-300"
            >
              <div className="px-4 py-5 sm:px-6 bg-blue-500 text-white">
                <h3 className="text-lg leading-6 font-medium">{user.name}</h3>
                <p className="mt-1 max-w-2xl text-sm">{user.email}</p>
              </div>
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-blue-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-900">
                      Username
                    </dt>
                    <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                      {user.username}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-900">Phone</dt>
                    <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                      {user.phone}
                    </dd>
                  </div>
                  <div className="bg-blue-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-900">
                      Website
                    </dt>
                    <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                      {user.website}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <details className="col-span-3">
                      <summary className="font-medium text-gray-900 cursor-pointer">
                        Address
                      </summary>
                      <dl className="mt-2 bg-blue-50 p-4 rounded-lg">
                        <dt className="text-sm font-medium text-gray-600">
                          Street
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {user.address.street}
                        </dd>
                        <dt className="text-sm font-medium text-gray-600">
                          Suite
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {user.address.suite}
                        </dd>
                        <dt className="text-sm font-medium text-gray-600">
                          City
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {user.address.city}
                        </dd>
                        <dt className="text-sm font-medium text-gray-600">
                          Zipcode
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {user.address.zipcode}
                        </dd>
                      </dl>
                    </details>
                    <details className="col-span-3">
                      <summary className="font-medium text-gray-900 cursor-pointer">
                        Company
                      </summary>
                      <dl className="mt-2 bg-blue-50 p-4 rounded-lg">
                        <dt className="text-sm font-medium text-gray-600">
                          Name
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {user.company.name}
                        </dd>
                        <dt className="text-sm font-medium text-gray-600">
                          CatchPhrase
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {user.company.catchPhrase}
                        </dd>
                        <dt className="text-sm font-medium text-gray-600">
                          BS
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {user.company.bs}
                        </dd>
                      </dl>
                    </details>
                  </div>
                </dl>
              </div>
              <div className="px-4 py-4 sm:px-6 bg-blue-500 flex gap-2">
                <Link
                  href={`./Todos/${user.id}`}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                >
                  Todos
                </Link>
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                  Posts
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                  Albums
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { data },
  };
};

export default Index;
