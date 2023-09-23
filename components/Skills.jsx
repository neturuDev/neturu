import PropTypes from 'prop-types';
import Card from './Card';
import Skill from './Skill';
import { skillPropType } from '../renderer/PropTypeValues';

function Skills({ skills }) {
    return (
        <Card heading={'Skills'}>
            {skills.map((skill) => {
                return (
                    <Skill
                        title={skill.flatData.title}
                        description={skill.flatData.description}
                        key={skill.id}
                    />
                );
            })}
        </Card>
    );
}

Skills.propTypes = {
    skills: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            flatData: PropTypes.shape(skillPropType),
        })
    ),
};

export default Skills;
