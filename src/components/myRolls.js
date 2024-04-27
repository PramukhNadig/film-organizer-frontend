function getFilmRolls() {
    return [
        { id: 1, name: "Roll 1" },
        { id: 2, name: "Roll 2" },
        { id: 3, name: "Roll 3" },
    ];
}

function MyRolls() {
    return (
        <div>
            <h1>My Film Rolls</h1>
            <ul>
                {filmRolls.map((roll) => (
                    <li key={roll.id}>{roll.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default MyRolls;
