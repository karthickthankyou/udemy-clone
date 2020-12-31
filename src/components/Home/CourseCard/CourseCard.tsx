import { useState } from 'react'

import picture from '../../../assets/sample.jpg'
import CourseBadge, { ICourseBadgeProps } from '../../common/CourseBadge/CourseBadge'
export interface ICourseCardProps {
  title: string,
  updatedOn: string,
  courseDuration: number,
  desc: string,
  keyPoints: string[],
  rating: number,
  reviewCount: number,
  badgeType: ICourseBadgeProps['badgeType']
}


const CourseCard = ({ rating, reviewCount, badgeType, title, updatedOn, courseDuration, desc, keyPoints }: ICourseCardProps) => {
  const ratingStyle = { '--rating': rating } as React.CSSProperties;

  const [popupOpen, setPopupOpen] = useState(false)
  const [popupRight, setPopupRight] = useState(false)

  let showTimeout: NodeJS.Timeout;
  const CardHovered = (e: any, state: boolean) => {
    if (showTimeout) {
      clearTimeout(showTimeout)
    }

    showTimeout = setTimeout(() => {
      setPopupOpen(state)
      setPopupRight(e.clientX / window.innerWidth * 100 > 50)
    }, 500);
  }

  return (
    <div className="relative cursor-pointer" onMouseEnter={(e) => CardHovered(e, true)} onMouseLeave={(e) => CardHovered(e, false)}>
      <img src={picture} alt="" className="w-full h-14 object-cover rounded border" />
      <h3 className="text-xl font-weight-600 line-clamp-2">
        {title}
      </h3>
      <p className="text-grey-500 line-clamp-1 text-sm mt-1">
        GameDev.tv Team, Rick Davidson, Grant Abbitt
      </p>
      <div className="d-flex items-center mt-1">
        <p className="text-primary-600 font-weight-600">
          {rating}
        </p>
        <div className="stars text-sm ml-1" style={ratingStyle}></div>
        <p className="text-grey-500 ml-1 text-sm">
          ({reviewCount.toLocaleString()})
        </p>
      </div>
      <div className="mt-2">
        {
          badgeType && <CourseBadge badgeType={badgeType} />
        }
      </div>
      {
        popupOpen &&
        <div className={`d-none sm-d-block absolute mx-2 cursor-auto ${popupRight ? 'right-full' : 'left-full'} top-0 z-dropdown bg-white p-4 w-full shadow-lg rounded`}>
          <div className="text-xl font-weight-600">
            {title}
          </div>
          <div className="mt-2">
            {
              badgeType && <CourseBadge badgeType={badgeType} />
            }
            <span className="ml-2 text-sm text-green-600">
              Updated{" "}
              <span className="font-weight-600">{updatedOn}</span>
            </span>
          </div>
          <div className="mt-2 text-grey-500 text-sm">
            <span>
              {courseDuration} total hours
            &middot;
            All Levels
            &middot;
            Subtitles
          </span>
          </div>
          <div className="mt-2 text-grey-600">
            {desc}
            <ol className="mt-2">
              {
                keyPoints.map(point => {
                  return <li className="mt-1" key={point}>
                    <span className="text-grey-400">&#8226;</span>
                    <span className="ml-2">{point}</span></li>
                })
              }
            </ol>
          </div>
          <div className='d-flex mt-3'>
            <button className="bg-primary-500 text-white flex-grow hover-bg-primary-600">
              Add to cart
          </button>
            <button className="rounded-circle text-primary-500 border-primary-500 w-2_5 h-2_5 ml-2 hover-bg-primary-100 d-flex items-center justify-center">
              <i className="far fa-heart"></i>
            </button>
          </div>
        </div>}
    </div >
  );
};

export default CourseCard;
