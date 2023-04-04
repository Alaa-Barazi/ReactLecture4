import './style.css'
export default function Card({ prop }) {
    return (
            prop.map((person) => (
                <>
                    <div className="card" >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcU50X1UOeDaphmUyD6T8ROKs-HjeirpOoapiWbC9cLAqewFy1gthrgUTB9E7nKjRwOVk&usqp=CAU" width={100} height={90}/>
                        <h1 key={person.id}>{person.name}</h1>
                        <p className="title">{person.birthday}</p>
                        <h4>Meat</h4>
                        <p>{person.favoriteFoods.meats.map((meat)=>(
                            <li key={meat}>{meat}</li>
                        ))}</p>
                        <h4>Fish</h4>
                        <p>{ person.favoriteFoods.fish.map((fish)=>(
                            <li key={fish}>{fish}</li>
                        ))}</p>
                       
                    </div>
                    <br/>
                </>
            ))
        


    )
}