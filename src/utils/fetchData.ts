interface FetchDataProps {
  /** Declares the url to target */
  url: string;
  /** headers overrides */
  headers?: Record<string, string>;
  /** the fetch method. Default: "GET" */
  method?: "POST" | "GET" | "PUT";
}

/**
 * custom-built method for requesting data from an endpoint. Its a wrapper around the fetch api
 * with additional helper methods and properties for streamlining requests to endpoints
 * @example const drivingData = await fetchData({
 *   url: 'https://gist.github.com/gyermich/6ca0c6601932bae50d3c6eb75481d302',
  });
 * @param options.url 
 * @param options.headers
 * @param options.method 
 * 
 */
export async function fetchData(options: FetchDataProps): Promise<Response> {
  const { url, headers, method = "GET" } = options;
  const fetchHeaders = new Headers(headers);

  const response = await fetch(`${url}`, {
    headers: fetchHeaders,
    method,
  }).catch((err) => errorCatchReport(err, url));

  return response as Response;
}

/**
 * a helper for reporting an error from a promise `catch`
 * @param error - the api-generated error message
 * @param message - the custom message helper accompanied by `There was an error in`
 * a reject in a promise or api endpoint
 */
export function errorCatchReport(
  error: string | number | unknown,
  message: string
): void {
  console.warn(`There was an error in (${message}) :>> `, error);
}
