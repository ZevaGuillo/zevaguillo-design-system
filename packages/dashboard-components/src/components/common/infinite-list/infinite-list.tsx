import { useEffect, ReactNode, useRef, useCallback } from "react";

export interface InfiniteListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  hasMore?: boolean;
  isLoading?: boolean;
  onLoadMore?: () => void;
  loader?: ReactNode;
  endMessage?: ReactNode;
}

export function InfiniteList<T>({
  items,
  renderItem,
  hasMore = false,
  isLoading = false,
  onLoadMore,
  loader,
  endMessage,
}: InfiniteListProps<T>) {
  const observerRef = useRef<HTMLDivElement>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && hasMore && !isLoading && onLoadMore) {
        onLoadMore();
      }
    },
    [hasMore, isLoading, onLoadMore],
  );

  useEffect(() => {
    const element = observerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.1,
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [handleObserver]);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>{renderItem(item, index)}</div>
      ))}

      {isLoading && loader && <div className="py-4">{loader}</div>}

      {!hasMore && endMessage && (
        <div className="py-4 text-center text-gray-500">{endMessage}</div>
      )}

      <div ref={observerRef} className="h-1" />
    </div>
  );
}
