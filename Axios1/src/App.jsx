import axios from 'axios';
import React, { useState } from 'react';

const App =  () => {
  const [getdata, setgetdata] = useState([]);

  const fetchData = async () => {
      const {data} = await axios.get('https://picsum.photos/v2/list');
      setgetdata(data);  
      console.log(getdata);
          
  }
  
  return (
    <div id='main-btn' className='h-min p-10'>
      <button onClick={fetchData} className='py-2 px-6 text-lg bg-sky-700 font-[helvetica] text-white rounded-lg active:scale-[0.97]'>Get Data</button>
      <div id="images" className='p-5 grid grid-cols-4'>
        {getdata.map((elem, index) => (
          <div key={index} className=' mb-3 h-[30vh] w-[20vw]'>
            <img className='mb-2 h-[85%] w-[100%] rounded-lg' src={elem.download_url} alt="" />
            <h1 className='font-[monument]  text-[1.3vw]'>{elem.author}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
