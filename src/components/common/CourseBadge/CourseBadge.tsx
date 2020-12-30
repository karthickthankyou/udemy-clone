export interface ICourseBadgeProps {
  badgeType: 'NEW' | "HOT_AND_NEW" | "BESTSELLER" | "HIGHEST_RATED"
}

const CourseBadge = ({ badgeType }: ICourseBadgeProps) => {

  const badgeTypes = {
    NEW: {
      background: 'bg-primary-200',
      textColor: 'text-primary-800',
      text: 'New'
    },
    HOT_AND_NEW: {
      background: 'bg-red-200',
      textColor: 'text-red-700',
      text: 'Hot & New'
    },
    BESTSELLER: {
      background: 'bg-green-200',
      textColor: 'text-green-700',
      text: 'Bestseller'
    },
    HIGHEST_RATED: {
      background: 'bg-secondary-200',
      textColor: 'text-secondary-700',
      text: 'Highest rated'
    },
  }

  const bgColor = badgeTypes[badgeType].background;
  const textColor = badgeTypes[badgeType].textColor;
  const text = badgeTypes[badgeType].text;

  return (
    <div className={`d-inline-block ${bgColor} ${textColor} py-1 px-2 rounded text-sm`}>
      {text}
    </div>
  );
};

export default CourseBadge;
