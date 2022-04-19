import { useEffect, useState } from 'react';
import { getFetch } from '../helpers/helper';
import CardsList from '../components/Cards/CardsList';
import Container from '../components/UI/Container/Container';

function HomePage() {
  const [skillsArr, setSkillsArr] = useState([]);

  useEffect(() => {
    getSkills();
  }, []);

  async function getSkills() {
    const skillsFromDb = await getFetch('content/skills');
    setSkillsArr(skillsFromDb);
  }

  function onDeleteHandler(skillsIdToDelete) {
    setSkillsArr((prevState) => {
      return prevState.filter((skillObj) => skillObj.id !== skillsIdToDelete);
    });
  }

  return (
    <Container>
      <h1 className='page-title'>Your skillset:</h1> <br />
      <CardsList items={skillsArr} onDelete={onDeleteHandler} />
    </Container>
  );
}

export default HomePage;
