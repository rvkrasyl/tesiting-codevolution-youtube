import { useEffect, useState } from "react";

type SkillProps = {
    skills: string[];
};

export const Skills = (props: SkillProps) => {
  const { skills } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1001);
  }, []);

  return(
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
      {
        isLoggedIn
          ? <button>Start learning</button>
          : <button onClick={() => setIsLoggedIn(true)}>Login</button>
      }
    </>
  );
};