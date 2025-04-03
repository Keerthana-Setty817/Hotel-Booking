async function getData() {
    const res = await fetch("https://snowtooth-api-rest.fly.dev");
    return res.json();
}

export default async function Page() {
    const data = await getData();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
            <div>
                <h1>Lift Status Info</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Lift name</th>
                            <th>Current status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((lift) => (
                            <tr key={lift.id}>
                                <td>{lift.name}</td>
                                <td>{lift.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}