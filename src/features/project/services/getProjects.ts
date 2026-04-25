import { queryOptions, useQuery } from "@tanstack/react-query";
import { getProjectsAction } from "../action/getProjectsAction";
import { QueryConfig } from "@/lib/react-query";

export type GetProjectsResponse = {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  siteUrl: string;
  githubUrl: string;
  isFeatured: boolean;
}[];

export const getProjectsQueryKey = () => ["projects"];

export const getProjectsQueryOptions = () => {
  return queryOptions({
    queryKey: getProjectsQueryKey(),
    queryFn: () => getProjectsAction(),
  });
};

type UseGetProjectsParams = {
  queryConfig?: QueryConfig<typeof getProjectsQueryOptions>;
};

export const useGetProjects = (params: UseGetProjectsParams = {}) => {
  return useQuery({
    ...getProjectsQueryOptions(),
    ...params.queryConfig,
  });
};
