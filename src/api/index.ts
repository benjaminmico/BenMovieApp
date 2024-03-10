/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { log } from 'utils';

type APIParams<T> = {
  enabled?: boolean;
  onSuccess?: (data: T) => void;
  onError?: (response: Response) => void;
};

interface UseAPIResponse<T> {
  isLoading: boolean;
  error: string | null;
  data: T | null;
  refetch: (suffixUrl?: string) => Promise<void>;
  clearData: () => void;
}

export const useAPI = <T>(
  suffixUrl: string,
  params: APIParams<T> = { enabled: true },
): UseAPIResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const baseUrl = process.env.API_URL;

  const fetchData = useCallback(async (paramSuffixUrl?: string) => {
    log.info(`Requesting ${baseUrl}${paramSuffixUrl || suffixUrl}...`);
    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}${paramSuffixUrl || suffixUrl}`);

      if (!response.ok) {
        if (params?.onError && typeof params?.onError === 'function') {
          params.onError(response);
        }
        log.error(response);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let jsonData: T = await response.json();

      log.info(`Requested ${paramSuffixUrl || suffixUrl} with success`);

      if (params?.onSuccess && typeof params?.onSuccess === 'function') {
        params.onSuccess(jsonData);
      }

      setData(jsonData);
    } catch (err: any) {
      log.error(err);
      setError(err.message);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!params?.enabled) return;
    fetchData();
  }, []);

  return {
    isLoading,
    error,
    data,
    refetch: fetchData,
    clearData: () => setData(null),
  };
};
