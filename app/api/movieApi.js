export async function fetchMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      // For production apps, move this token to an environment variable
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjM1YzJkMmU3OGYzYmZhZjEyYjM4MzZlMWFhOWE5ZiIsIm5iZiI6MTc0MTc2NzYyNC44NzYsInN1YiI6IjY3ZDE0M2M4NmVjZWM1ZjM5YTgxNTM2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vT_xMWAFcuzIeV0HR4SmKm0whlP0AuaRb16XlYooO7s",
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

// api/movieApi.js

export async function searchMovies(query) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      // For production, store the token in an environment variable
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjM1YzJkMmU3OGYzYmZhZjEyYjM4MzZlMWFhOWE5ZiIsIm5iZiI6MTc0MTc2NzYyNC44NzYsInN1YiI6IjY3ZDE0M2M4NmVjZWM1ZjM5YTgxNTM2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vT_xMWAFcuzIeV0HR4SmKm0whlP0AuaRb16XlYooO7s",
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
