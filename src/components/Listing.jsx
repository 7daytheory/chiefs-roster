import {useState} from 'react'
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import noHeadshot from '../assets/images/blank-headshot.png';

const Listing = ( {player}) => {
  const [showMore, setShowMore] = useState(false);

  let { FirstName, LastName, Height, Weight, Position, College, UsaTodayHeadshotNoBackgroundUrl, id} = player;

  let headshotCheck = UsaTodayHeadshotNoBackgroundUrl || noHeadshot;
  
  return (
    <div className='bg-white rounded-xl shadow-md relative'>
        <div className='p-4'>
            <div className='mb-6'>
                <div className='text-gray-600 my-2'>{FirstName}</div>
                <h3 className='text-xl font-bold'>{LastName}</h3>
            </div>
            <p className="italic text-sm">{headshotCheck.includes("http://cdn.usatsimg.com") ? "Paid API Users get Headshots only, but there WOULD have been a headshot here(lol)" : "This person has no headshot anyway" }</p>
            <div className='mb-5 flex justify-center'>
                <img src={noHeadshot} alt="Headshot" className="flex justify-center mb-2 mt-2 h-[200px]"/>
                {console.log("Headshot Check : " + headshotCheck)}
               
            </div>
            <button onClick={() => setShowMore((prevState) => !prevState)} className="text-red-500 mb-5 hover:text-red-600">Show {showMore ? 'less' : 'more'}</button>
            {showMore && (
              <div id="moreInfo">
                <h3 className='text-gray-600 mb-2'>Height : {Height}</h3>
                <h3 className='text-gray-600 mb-2'>Weight : {Weight}</h3>
                <h3 className='text-gray-600 mb-2'>Position : {Position}</h3>
              </div>
            )}
            <div className='border border-gray-100 mb-5'></div>
            <div className='flex flex-col lg:flex-row justify-between mb-4'>

            </div>
            <div className='text-orange-700 mb-3'>
                <FaMapMarker className="inline text-lg mb-1 mr-1" />
                {College}
            </div>
            <Link to={`/players/${id}`} className='h-[36px] bg-[#FFB612] hover:bg-[#FFC920] text-white px-4 py-2 rounded-lg text-center text-sm'>
                Read More
            </Link>
        </div>
    </div>
  )
}

export default Listing