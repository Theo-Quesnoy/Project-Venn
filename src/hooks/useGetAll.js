import { useIsFocused } from "@react-navigation/native";
import { useState, useCallback, useEffect } from "react";

import { getAll } from "../firebase";

export default function useGetAll(collection) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const isFocused = useIsFocused();
  const getData = useCallback(async () => {
    try {
      const json = await getAll(collection);
      setData(json);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [collection]);
  useEffect(() => {
    getData();
  }, [getData, isFocused]);
  return { loading, data, error };
}
