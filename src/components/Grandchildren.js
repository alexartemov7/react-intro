export const GrandChild = (props) => {
    console.log('props -->', props.firstname)

    const birthYear = 2023 - props.age
    return (
        <div>
            I'm GranKid {props.firstname} and I was born in {birthYear}.
        </div>
    )
}

export function ChildComponent() {
    return (
        <div>
            <h2>Hi I'm child</h2>
            <GrandChild firstname={'Joe'} age={102} pet={'🐟'} />
            <GrandChild firstname={'Rosie'} age={31} pet={'🐠'} />
            <GrandChild firstname={'Little T'} age={15} pet={'🐟'} />
            <GrandChild firstname={'John'} age={71} pet={'🐟'} />
            <p>Test</p>
        </div>
    )
}

