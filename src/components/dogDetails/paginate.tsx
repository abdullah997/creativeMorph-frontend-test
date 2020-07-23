import * as React from 'react';
interface pageProps {
    postsPerPage:number,
    totalPosts:number,
    paginate:any
   }
const Pagination: React.FunctionComponent<pageProps> = (props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => props.paginate(number)} className='page-link' style={{cursor:"pointer"}}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination