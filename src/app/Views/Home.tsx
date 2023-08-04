import { useRecoilState } from 'recoil';
import Header from '../Components/Header';
import BookItem from '../Components/Item';
import {bookState} from '../atoms/atoms'
import { useEffect, useState } from 'react';
import axios from '../../axios';
const HomePage: any = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [isLoading, setIsLoading] = useState(false);  
  const[books, setBooks] = useRecoilState(bookState)

  useEffect(() => {
    (async () => {
            const initBooks = await getInitBooks(limit, currentPage)
            setBooks(initBooks)
        }
    )()        
  },[])

  useEffect(() => {
    const handleScroll = () => {
        if ( window.innerHeight + window.scrollY >= document.body.offsetHeight - 80 && !isLoading ) {
            loadMoreBooks();
        }
      };    
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);

  const getInitBooks = async (limit : number , page : number)  => {
    let res = await axios.get(`/book?limit=${limit}&page=${page}`)
    res = res.data
    return res.data
  }

  const loadMoreBooks = async () => {
    setIsLoading(true);
    const newBooks : never[] = await getInitBooks(limit, currentPage);    
    const currentBooks : never[] = [...books, ...newBooks];
    setBooks(currentBooks); 
    setCurrentPage(prevPage => prevPage + 1);
    setIsLoading(false);
  };

  let booksList = null;
  if(books.length === 0){
    booksList = <div className='text-center'>데이터가 없습니다.</div>
  }else if(books.length > 0){
    booksList = books.map((book: any) => {
      return <BookItem key={book.id} book={book} />
    })
  }else if(isLoading){
    debugger
    booksList = <div className='text-center'>Loading...</div>
  }
  return (
    <div>
      <Header />
      <main className="mx-auto">
            <div className='flex flex-wrap justify-center'>
                {booksList}
            </div>
      </main>
    </div>
  );
};

export default HomePage;
