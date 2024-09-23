import React, { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import debounce from 'lodash.debounce';
import { Link, useParams, useNavigate } from 'react-router-dom'



const client = createClient({space: "tftlhnwhadc4" , accessToken:
    "Uf89F9d745mgQqmWCzhUv-aLv-Vs9246o-MHYkfGYO0"})



    const ITEMS_PER_PAGE = 10;

const ContentfulSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const searchContentful = async (query, page = 1) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await client.getEntries({
        content_type: process.env.REACT_APP_CONTENTFUL_CONTENT_TYPE_ID,
        query: query,
        limit: ITEMS_PER_PAGE,
        skip: (page - 1) * ITEMS_PER_PAGE,
      });

      setSearchResults(response.items);
      setTotalPages(Math.ceil(response.total / ITEMS_PER_PAGE));
      setCurrentPage(page);
    } catch (error) {
      console.error('Error searching Contentful:', error);
      setError('An error occurred while searching. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const debouncedSearch = debounce((term) => {
    if (term) {
      searchContentful(term);
    } else {
      setSearchResults([]);
      setTotalPages(0);
    }
  }, 300);

  useEffect(() => {
    debouncedSearch(searchTerm);
    return () => debouncedSearch.cancel();
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      searchContentful(searchTerm, newPage);
    }
  };

  return (
    <div>
      <input
      className='w-2/4 bg-transparent border-black border-b'
        type="text"
        placeholder="search events or parties"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {isLoading && <p>Loading...</p>}

      {error && <p className="error">{error}</p>}

      {searchResults.length > 0 ? (
        <div className='bg-white w-full min-h-screen max-h-fit absolute mt-9'>
          <ul className='flex gap-3'>
            {searchResults.map((item) => (
              <li key={item.sys.id}>
                
                <p>{item.fields.description}</p>
                <Link
                to={`/eventDetails/${item.sys.id}`}>
                <img className='w-60 h-72 object-cover' src={item.fields.eventImage.fields.file.url} alt={item.fields.eventTitle} />
                </Link>
                <h3 className='text-xl text-center font-regular'>{item.fields.eventTitle}</h3>  
              </li>
            ))}
          </ul>
          <div>
            <button 
              onClick={() => handlePageChange(currentPage - 1)} 
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button 
              onClick={() => handlePageChange(currentPage + 1)} 
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        searchTerm && !isLoading && <p>No results found.</p>
      )}
    </div>
  );
};

export default ContentfulSearch;