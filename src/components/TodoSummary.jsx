const TodoSummary = ({handleSummary}) => {
  return (
    <div>
      <p>Összesen: {handleSummary()[0]}</p>
      <p>Kész: {handleSummary()[1]}</p>
    </div>
  )
}

export default TodoSummary
