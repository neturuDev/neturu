import CardBlock from './CardBlock';
import { skillPropType } from '../renderer/PropTypeValues';

function Skill({ title, description }) {
    return (
        <CardBlock heading={title}>
            <p>{description}</p>
        </CardBlock>
    );
}

Skill.propTypes = skillPropType;

export default Skill;
