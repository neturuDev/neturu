import CardBlock from './CardBlock';
import Date from './Date';
import { educationItemPropType } from '../renderer/PropTypeValues';

function EducationItem({ title, startDate, endDate, image }) {
    return (
        <CardBlock
            heading={title}
            image={image}
            imageAlt={'WUNU'}
        >
            <span>
                <Date
                    dateString={startDate}
                    woDay
                />{' '}
                -{' '}
                <Date
                    dateString={endDate}
                    woDay
                />
            </span>
        </CardBlock>
    );
}

EducationItem.propTypes = educationItemPropType;

export default EducationItem;
