import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <Container className="mt-4 mb-4">
      <header>
        <h1>Bowler List</h1>
        <p>
          A list of all bowlers from the Marlins and the Sharks with their
          contact information.
        </p>
      </header>
    </Container>
  );
}

export default Header;
