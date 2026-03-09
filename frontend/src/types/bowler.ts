export type bowler = {
  bowlerId: number;
  bowlerLastName: string;
  bowlerFirstName: string;
  bowlerMiddleInit: string;
  bowlerAddress: string;
  bowlerCity: string;
  bowlerState: string;
  bowlerZip: string;
  bowlerPhoneNumber: string;
  teamId: number;
  team: {
    teamId: number;
    teamName: string;
    captainId: number;
    bowlers: [];
    tourneyMatchEvenLaneTeams: [];
    tourneyMatchOddLaneTeams: [];
  };
  bowlerScores: [];
};
