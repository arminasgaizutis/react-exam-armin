import Container from '../UI/Container/Container';
import Grid from '../UI/Grid/Grid';
import Card from './../Cards/Card';
import css from './CardsList.module.css';

function CardsList(props) {
  if (props.items.length === 0) {
    return (
      <div className={css.cardsList}>
        <h2>Unfortunately, there no skills to display yet...</h2>
        <p> Use 'Add' button to show us what You've got! </p>
      </div>
    );
  } else {
    return (
      <Container>
        <Grid>
          {props.items.map((skillObj) => (
            <Card key={skillObj.id} {...skillObj} onDelete={props.onDelete} />
          ))}
        </Grid>
      </Container>
    );
  }
}

export default CardsList;
