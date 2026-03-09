import { useEffect, useState } from 'react';
import type { bowler } from './types/bowler.ts';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

function BowlerList() {
  const [bowlers, setBowlers] = useState<bowler[]>([]);

  useEffect(() => {
    const fetchBowlers = async () => {
      try {
        const response = await fetch('https://localhost:5000/api/Bowler');
        const data = await response.json();
        setBowlers(data);
      } catch (error) {
        console.error('Error fetching bowlers:', error);
      }
    };

    fetchBowlers();
  }, []);

  return (
    <>
      <Container>
        <Table striped bordered>
          <thead className="table-dark">
            <tr>
              <th>Bowler Name</th>
              <th>Team Name</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip Code</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {bowlers
              .filter((bowler) => bowler.teamId === 1 || bowler.teamId === 2)
              .map((bowler: bowler) => (
                <tr key={bowler.bowlerId}>
                  {bowler.bowlerMiddleInit ? (
                    <td>
                      {bowler.bowlerFirstName} {bowler.bowlerMiddleInit}.{' '}
                      {bowler.bowlerLastName}
                    </td>
                  ) : (
                    <td>
                      {bowler.bowlerFirstName} {bowler.bowlerLastName}
                    </td>
                  )}
                  <td>{bowler.team.teamName}</td>
                  <td>{bowler.bowlerAddress}</td>
                  <td>{bowler.bowlerCity}</td>
                  <td>{bowler.bowlerState}</td>
                  <td>{bowler.bowlerZip}</td>
                  <td>{bowler.bowlerPhoneNumber}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default BowlerList;
