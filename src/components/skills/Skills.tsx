type SkillProps = {
    skills: string[];
};

export const Skills = (props: SkillProps) => {
  const { skills } = props;
  return(
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
    </>
  )
};