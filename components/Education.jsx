import PropTypes from 'prop-types';
import Card from './Card';
import EducationItem from './EducationItem';
import { educationItemPropType } from '../renderer/PropTypeValues';

function Education({ education }) {
    return (
        <Card heading={'Education'}>
            {education.map((educationItem) => (
                <EducationItem
                    title={educationItem.flatData.title}
                    startDate={educationItem.flatData.startDate}
                    endDate={educationItem.flatData.endDate}
                    image={educationItem.flatData.image[0]}
                    key={educationItem.id}
                />
            ))}
        </Card>
    );
}

Education.propTypes = {
    education: PropTypes.arrayOf(PropTypes.shape(educationItemPropType)),
};

export default Education;
