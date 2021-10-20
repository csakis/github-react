import Card from "./Card"

function Results(props) {
  return (
    <div>
{props.items.map(item=> (<Card item={item}></Card>))}
    </div>
  )
}

export default Results
