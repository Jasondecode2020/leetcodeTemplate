import { useState } from 'react';
import ReactPaginate from 'react-paginate';
// Example items, to simulate fetching from another resources.
import DIFFICULTY_MAP from './../../utils/constants'

const renderListOfUserNames = (items: []) => {
  return items.map((item: string, index: number) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">
          <div className="flex items-center">
              <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
          </div>
      </td>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {item.title}
      </th>
      <td className="px-6 py-4">
          {item.ratings}
      </td>
      <td className="px-6 py-4">
          {DIFFICULTY_MAP[item.difficulty]}
      </td>
      <td className="px-6 py-4">
          {item.tags}
      </td>
      <td className="px-6 py-4">
          <a href="#" className="font-medium text-blue hover:underline">Open</a>
      </td>
  </tr>)
}

function Items({ currentItems }) {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="p-4">
                          <div className="flex items-center">
                              <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                              <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                          </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Title
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Ratings
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Difficulty
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Tags
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Code
                      </th>
                  </tr>
              </thead>
              {currentItems &&
          (<tbody>
            {renderListOfUserNames(currentItems)}
          </tbody>
        )}
          </table>
      </div>
    </>
  );
}

function PaginatedItems({ itemsPerPage, items }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
}

export default PaginatedItems