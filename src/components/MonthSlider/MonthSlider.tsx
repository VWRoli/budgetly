import { useState } from 'react';
import Slider from 'react-slick';
//Components
import Chip from 'src/components/common/Chip/Chip';
import MonthCard from './MonthCard';

const monthList = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const MonthSlider: React.FC = (): JSX.Element => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 3,
    speed: 300,
    arrows: false,
    beforeChange: (current: number, next: number) => setImageIndex(next),
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {monthList.map((month, i) => (
          <MonthCard
            key={month}
            month={month}
            isActive={i === imageIndex ? true : false}
          />
        ))}
      </Slider>

      <div className="year">
        <Chip label={new Date().getFullYear()} isAlternative />
      </div>
    </div>
  );
};

export default MonthSlider;
