async function fetchUsers () {
    try {
        let url = 'https://jsonplaceholder.typicode.com/users';
        let res = await fetch (url);
        let data = await res.json();
        render(data);

    } catch {
        data = [];
        // renderError('Unfortunately, backend is broken');
    }
    console.log(data);
}
fetchUsers();