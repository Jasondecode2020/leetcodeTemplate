import Dropdown from './Dropdown'
import SearchBar from './SearchBar'
const Difficulty = ['Easy', 'Medium', 'Hard']
const Ratings = ['1000-1200', '1201-1400', '1401-1600', '1601-1800', '1801-2000', '2001-2200', '2201-2400', '2401-3000']
const Lists = ['Leetcode 75', 'Leetcode Hot 100', 'Leetcode 150']
const Tags = ['Sliding Window', 'Stack', 'Queue', 'Linked List', 'Tree', 'Graph']

function Dropdowns() {

  return (
    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <Dropdown items={Ratings} option={'Ratings'} />
        <Dropdown items={Difficulty} option={'Difficulty'} />
        <Dropdown items={Lists} option={'Lists'} />
        <Dropdown items={Tags} option={'Tags'} />
        <SearchBar />
      </div>
    </main>
      
  )
}

export default Dropdowns
