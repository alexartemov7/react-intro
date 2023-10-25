
function SingleCoffee({entireObject}) {
    return (
        <p>
            {entireObject.title} --- {entireObject.description}
        </p>
    )
}

function CoffeesComponent() {

    const coffeesArray = [
        {title: 'Americano', decription: 'dark tasty yummy coffee'},
        {title: 'Cafecito', decription: 'dark tasty yummy coffee'},
        {title: 'Cortadito', decription: 'dark tasty yummy coffee'},
        {title: 'Cubano', decription: 'dark tasty yummy coffee'},
        {title: 'Capuccino', decription: 'dark tasty yummy coffee'},
        {title: 'Late', decription: 'dark tasty yummy coffee'},
        {title: 'Espresso', decription: 'dark tasty yummy coffee'},
        {title: 'Mocha', decription: 'dark tasty yummy coffee'},
    ]
    coffeesArray.map(() => {})
    return (
        <div>
        <h2> Coffees component here</h2>
        <SingleCoffee name={'test Americano'}/>
        {coffeesArray.map((oneCoffee) => {
            console.log(oneCoffee)
            return (
                <SingleCoffee entireObject={oneCoffee} />
            )
        })}
        <p> Coffee title here Americano</p>
        <p> Coffee title here Cafecito</p>
        <p> Coffee title here</p>
        <p> Coffee title here</p>
        <p> Coffee title here</p>
        <p> Coffee title here</p>
        <p> Coffee title here</p>
        </div>
    )
 }

 export default CoffeesComponent