export async function fetchMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      // For production apps, move this token to an environment variable
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_BEARER}`,
    },
  };

  try {
    // This calls TMDB's "discover" endpoint
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?&page=1",
      options
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch movies. Status: ${response.status}`);
    }

    // Convert response to JSON
    const data = await response.json();
    return data; // data will have { page, results, total_pages, total_results }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function searchMovies(query) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      // For production, store the token in an environment variable
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_BEARER}`,
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        query
      )}`,
      options
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch movies. Status: ${response.status}`);
    }

    const data = await response.json();
    return data; // Data includes page, results, total_pages, total_results
  } catch (error) {
    console.error(error);
    throw error;
  }
}
