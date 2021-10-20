import Card from "./Card"

function Results(props) {
  return (
    <div>
{props.items.map(item=> (<Card key={item.id} item={item}></Card>))}
    </div>
  )
}

export default Results
