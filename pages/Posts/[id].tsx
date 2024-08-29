import React, { useState } from "react";
import { commentsDetails, PostsDetails } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";

const id: React.FC<{ data: PostsDetails[] }> = ({ data }) => {
  const [comments, setComments] = useState<{
    [key: number]: commentsDetails[];
  }>({});

  const clickHandler = (postId: number) => {
    if (!comments[postId]) {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then((response) => response.json())
        .then((data) => {
          setComments((prev) => ({ ...prev, [postId]: data }));
        });
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-custom-background flex flex-col items-center justify-center py-10">
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="space-y-4">
          {data?.map((post) => (
            <li
              key={post.id}
              className="bg-white/80 shadow overflow-hidden sm:rounded-lg hover:bg-white/90 transition-colors duration-300 p-6"
            >
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600">{post.body}</p>
              <details className="col-span-3">
                <summary
                  className="font-medium text-gray-900 cursor-pointer"
                  onClick={() => clickHandler(post.id)}
                >
                  Comments
                </summary>
                <>
                  {comments[post.id]?.map((item) => (
                    <dl
                      className="mt-2 bg-blue-50 p-4 rounded-lg"
                      key={item.id}
                    >
                      <dt className="text-sm font-medium text-gray-600">
                        name
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {item.name}
                      </dd>
                      <dt className="text-sm font-medium text-gray-600">
                        email
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {item.email}
                      </dd>
                      <dt className="text-sm font-medium text-gray-600">
                        body
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {item.body}
                      </dd>
                    </dl>
                  ))}
                </>
              </details>
            </li>
          ))}
        </ul>
        <Link
          href="/"
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
    `https://jsonplaceholder.typicode.com/posts?userId=${params.id}`
  );
  const data = await res.json();
  return {
    props: { data },
  };
};

export default id;
