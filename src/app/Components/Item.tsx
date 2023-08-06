import React from 'react';
import cover from '../../assets/images/cover.svg'
const BookItem: React.FC<BookItemProps> = (props) => {
  const {book} = props
  return (
    <div className='w-[250px] md:w-[350px]'>    
         <div className="w-full relative">
            <img src={cover} alt="" className='w-[250px] md:w-[350px]'  />
        </div>
        <div className='px-5 py-2 text-left'>
            <h3 className='overflow-hidden truncate whitespace-nowrap font-notoKr text-lg font-bold leading-tight tracking-tighter '>{book.title}</h3>
            <div className='flex justify-between space-x-63 my-4'>
                <h3 className='text-[#FF003E] font-roboto font-bold text-lg leading-tight'>{book.discountRate}%</h3>
                <h3 className='font-bold font-roboto text-xl'>{book.price} <span className='text-base'>원</span></h3>
            </div>
        </div>
    </div>

  );
};

interface BookItemProps {
    book: {
      id: number;
      discountRate: number;
      price: number,
      title: string,
      description: string      
    };
  }

export default BookItem;
