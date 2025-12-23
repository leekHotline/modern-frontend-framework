export default async function UsersPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return (
        <div>
            <h1>Users fetched on the server!</h1>
            <ul>
                {users.map((user:any)=> {
                    return <li key={user.id}>{user.name}</li>
                })}
            </ul>

        </div>
    );

}