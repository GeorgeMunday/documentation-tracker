type ApiResponse<T> = {
  data: T | null;
  error: string | null;
};

type ApiRequestOptions = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: Record<string, unknown> | null;
  headers?: Record<string, string>;
};

export async function apiRequest<T>(
  url: string,
  options: ApiRequestOptions
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url, {
      method: options.method,
      body: options.body ? JSON.stringify(options.body) : undefined,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        data: null,
        error: data?.error ?? `Request failed: ${response.status}`,
      };
    }

    return {
      data,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}