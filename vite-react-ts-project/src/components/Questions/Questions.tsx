import PaginatedItems from './PaginatedItems'

function Questions({ items }) {
  
  return (
    <div>
        <PaginatedItems itemsPerPage={20} items = {items} />
    </div>
  )
}

export default Questions
