const Total = ({parts}) => {
    console.log(parts)
    return (
        <p>total of {parts.map(part => part.exercises)
            .reduce((exercise, total) => exercise + total)} exercises</p>
    )
}

export default Total;