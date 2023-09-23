import CardBlock from './CardBlock';
import parse from 'html-react-parser';
import Date from './Date';
import { jobPropType } from '../renderer/PropTypeValues';

const renderEndDate = (endDate) =>
    endDate ? (
        <Date
            dateString={endDate}
            woDay
        />
    ) : (
        'Present'
    );

function Job({ title, company, startDate, endDate, total, projectDescription, responsibilities, technologies }) {
    return (
        <CardBlock heading={title}>
            <p className='subheading'>
                <span>{company}</span>
                <span>
                    {
                        <Date
                            dateString={startDate}
                            woDay
                        />
                    }{' '}
                    - {renderEndDate(endDate)} · {total}
                </span>
            </p>
            <p>
                <span className='marked'>Project:</span> {parse(projectDescription)}
            </p>
            <p>
                <span className='marked'>Responsibilities:</span> {responsibilities}
            </p>
            <p>
                <span className='marked'>Technologies:</span> {technologies}
            </p>
        </CardBlock>
    );
}

Job.propTypes = jobPropType;

export default Job;
