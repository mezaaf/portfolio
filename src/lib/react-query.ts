/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  type DefaultOptions,
  type UseMutationOptions,
} from "@tanstack/react-query";

export const queryConfig = {
  queries: {
    // Kapan perlu refetch data
    staleTime: 5 * 60 * 1000,
    // Berapa lama data di cache
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    retry: false,
  },
} satisfies DefaultOptions;

export type ApiFnReturnType<FnType extends (...args: any) => Promise<any>> =
  Awaited<ReturnType<FnType>>;

export type QueryConfig<T extends (...args: any[]) => any> = Omit<
  ReturnType<T>,
  "queryKey" | "queryFn"
>;

export type MutationConfig<
  MutationFnType extends (...args: any) => Promise<any>,
> = UseMutationOptions<
  ApiFnReturnType<MutationFnType>,
  Error,
  Parameters<MutationFnType>[0]
>;
