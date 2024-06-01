import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/itemSlice";
import { fetchingActions } from "../store/fetchingSlice";
const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetching);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus.fetchingDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchingActions.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchingActions.markFetchingDone());
        dispatch(itemActions.addInitialItems(items));
        dispatch(fetchingActions.markFetchingFinished());
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};
export default FetchItems;
