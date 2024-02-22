export async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
        throw new Error(`Failed to fetch posts, ${response.statusText}`);
    }

    const data = await response.json();
    return data;
}