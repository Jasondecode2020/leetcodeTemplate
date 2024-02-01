import { useState, useEffect } from 'react';
import Dropdown from './Dropdown'
import SearchBar from './SearchBar'
import Button from './Buttons/AllButton'
import Questions from './Questions/Questions'
const Difficulty = ['Easy', 'Medium', 'Hard']
const Ratings = ['1000-1200', '1201-1400', '1401-1600', '1601-1800', '1801-2000', '2001-2200', '2201-2400', '2401-3000', '2601-2800', '2801-3000', '> 3000']
const Lists = ['Leetcode 75', 'Leetcode Hot 100', 'Leetcode 150']
const Templates = ['Binary search guess', 'monotonic stack', 'sliding window']
const Tags = ['Sliding Window', 'Stack', 'Queue', 'Linked List', 'Tree', 'Graph']
const Company = ['AWS', 'Google', 'Microsoft', 'Tictok', 'Atlassian', 'Adobe']

function Dropdowns() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const questionsFromServer = await fetchQuestions();
      setQuestions(questionsFromServer);
    }
    getTasks();
  }, [])
  console.log('from dropdowns', questions);

  // Fetch Tasks
  const fetchQuestions = async () => {
    const res = await fetch('http://localhost:8001/questions');
    const data = await res.json();
    return data;
  }

  return (
    <main className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
      <div className='flex py-2'>
        <div className="mx-0 py-6 sm:px-1 lg:px-2 w-3/4 border-solid border-2 border-gray-100 rounded-lg">
          <div className="flex justify-between">
            <div>
              <Button />
              <Dropdown items={Ratings} option={'Ratings'} />
              <Dropdown items={Difficulty} option={'Difficulty'} />
              <Dropdown items={Tags} option={'Tags'} />
            </div>
            <div>
              <SearchBar />
            </div>
          </div>
          <div>
            <Questions items={questions} />
          </div>
        </div>
        <div className="sider mx-0 py-6 sm:px-1 lg:px-2 w-1/4 flex flex-col border-solid border-2 border-gray-100 rounded-lg">
          <Dropdown items={Templates} option={'Templates'} />
          <Dropdown items={Lists} option={'Lists'} />
          <Dropdown items={Company} option={'Company'} />
        </div>
      </div>
    </main>
      
  )
}

export default Dropdowns
