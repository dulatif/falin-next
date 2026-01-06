import { useMemo } from "react";

export interface RepeaterProps<T> {
  items: T[] | undefined | null;
  render: (item: T, index: number) => React.ReactNode;
  empty?: React.ReactNode;
  loading?: boolean;
  loader?: React.ReactNode;
}

export function useRepeater<T>(config: RepeaterProps<T>) {
  return useMemo(() => config, [config]);
}

const Repeater = <T,>({ items, render, empty }: RepeaterProps<T>) => {
  if (!items || items.length === 0) return <>{empty}</>;

  return <>{items.map((item, index) => render(item, index))}</>;
};

export default Repeater;
