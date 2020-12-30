import picture from '../../../assets/sample.jpg'
import CourseBadge, { ICourseBadgeProps } from '../../common/CourseBadge/CourseBadge'
export interface ICourseCardProps {
  rating: number,
  reviewCount: number,
  badgeType: ICourseBadgeProps['badgeType']
}


const CourseCard = ({ rating, reviewCount, badgeType }: ICourseCardProps) => {

  const ratingStyle = { '--rating': rating } as React.CSSProperties;

  return (
    <div>
      <img src={picture} alt="" className="w-full h-14 object-cover rounded border" />
      <h3 className="text-xl font-weight-600 line-clamp-2">
        Blender Character Creator v2.0 for Video Games Design
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
    </div >
  );
};

export default CourseCard;
