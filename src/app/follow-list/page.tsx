"use client";

import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { fetchFollowingInfo } from "apis/followData";
import { Suspense } from "react";


export const Page: React.FC = () => {


  const { data, isFetching } = useSuspenseQuery({
    queryKey: ["users"],
    queryFn: () => fetchFollowingInfo('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'),
  });

  return (
    <Suspense fallback={<h1>hi</h1>}>
      <div className="p-4">
        <div className="pb-8 w-3/5 m-auto">
          {isFetching ? (
            <span>loading...</span>
          ) : (
            data?.following.map((followingUser, index) => (
              <ul key={index} className="pb-8 text-left">
                <li>
                  <strong>id: </strong>
                  <span>{followingUser.login}</span>
                </li>

              </ul>
            ))
          )}
        </div>
      </div>
    </Suspense>
  )
}

export default Page;
