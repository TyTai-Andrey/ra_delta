import { useRouter } from 'next/router';

export const usePushRouter = () => {
  const router = useRouter();
  const pushRouter = (path, routerParams) => {
    const query = new URLSearchParams();

    if (routerParams) {
      for (const searchParamName in routerParams) {
        const param = routerParams[searchParamName];

        if (param) {
          query.set(searchParamName, String(param));
        }
      }
    }

    router.push(
      path + (query.toString()?.length ? `?${query.toString()}` : ''),
    );
  };
  const pushRouterQuery = (searchParamName, param) => {
    const query = new URLSearchParams(router.query);
    if (query.has(searchParamName)) {
      query.delete(searchParamName);
    }
    if (typeof param === 'string' || typeof param === 'number') {
      if (!param) {
        query.delete(searchParamName);
      } else {
        query.set(searchParamName, String(param));
      }
    }

    router.push(query.toString()?.length ? `?${query.toString()}` : '/');
  };

  const pushRouterQueryList = (routerParams) => {
    const query = new URLSearchParams(router.query);

    for (const searchParamName in routerParams) {
      const param = routerParams[searchParamName];

      if (query.has(searchParamName)) {
        query.delete(searchParamName);
      }
      if (param) {
        query.set(searchParamName, String(param));
      }
    }

    router.push(query.toString()?.length ? `?${query.toString()}` : '/');
  };

  return { pushRouterQuery, pushRouterQueryList, pushRouter };
};
