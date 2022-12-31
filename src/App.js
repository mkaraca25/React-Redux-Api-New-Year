import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContent } from './features/counter/contentSlice';
import './index.css'
function App() {
  const dispatch=useDispatch();
useEffect(()=>{dispatch(fetchContent())},[dispatch])

const contents=useSelector((state)=>state.content.contents)
const isLoading=useSelector((state)=>state.content.isLoading)
const error=useSelector((state)=>state.content.error)
if (isLoading){
  return 'isLoading...'
}
if(error){
  return error
}

  return ( 
  <>
  <section class="w-full h-full container max-w-screen-lg mx-auto pb-10">
    <img class="mx-auto" src="https://helonational.com/wp-content/uploads/2022/11/New-Year-GIFS-2023.gif" alt="screenshot" />
<p className='text-center text-4xl'>Güzel yıllar, mutlu yarınlar, güzel dostluklar bizimle olsun, yeni yılın kutlu olsun!</p></section>

    <div className='mt-5 grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-8 p-4'>
     
      {
        contents.map(content=>(
          <div key={content.id}>
            <img className='w-full h-full rounded' src={`${content.thumbnailUrl}`} alt={`${content.title}`} />
          </div>
        ))
      }
    </div></>
  );
}
export default App;
