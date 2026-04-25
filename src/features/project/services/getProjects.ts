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

export type GetProjectsInput = {
  isFeatured?: boolean;
};

export const getProjectsQueryKey = (input: GetProjectsInput) => [
  "projects",
  input,
];

export const getProjectsQueryOptions = (input: GetProjectsInput) => {
  return queryOptions({
    queryKey: getProjectsQueryKey(input),
    queryFn: () => getProjectsAction(input),
  });
};

type UseGetProjectsParams = {
  input: GetProjectsInput;
  queryConfig?: QueryConfig<typeof getProjectsQueryOptions>;
};

export const useGetProjects = ({
  input,
  queryConfig,
}: UseGetProjectsParams) => {
  return useQuery({
    ...getProjectsQueryOptions(input),
    ...queryConfig,
  });
};
