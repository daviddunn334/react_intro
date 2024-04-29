function Employee (props) {
return (
    <>
    <h3 className="text-3xl font-bold underline">Employee: {props.name}</h3>
    <p>I am a {props.role ? props.role : "No role"}</p>
    <p>My favorite food is {props.food ? props.food : "No food"}</p>
    </>
    
)
}

export default Employee;