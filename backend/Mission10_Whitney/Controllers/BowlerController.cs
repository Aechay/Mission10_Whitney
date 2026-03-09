using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mission10_Whitney.Data;

namespace Mission10_Whitney.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BowlerController : ControllerBase
    {
        private BowlingLeagueContext _context;

        public BowlerController(BowlingLeagueContext temp)
        {
            _context = temp;
        }
        
        [HttpGet(Name = "GetBowlers")]
        public IEnumerable<Bowler> Get()
        {
            // Get bowler information, and also include the team name for each bowler
            var BowlerList = _context.Bowlers
                .Select(x => new Bowler
                {
                    BowlerId = x.BowlerId,
                    BowlerLastName = x.BowlerLastName,
                    BowlerFirstName = x.BowlerFirstName,
                    BowlerMiddleInit = x.BowlerMiddleInit,
                    BowlerAddress = x.BowlerAddress,
                    BowlerCity = x.BowlerCity,
                    BowlerState = x.BowlerState,
                    BowlerZip = x.BowlerZip,
                    BowlerPhoneNumber = x.BowlerPhoneNumber,
                    TeamId = x.TeamId,
                    Team = new Team
                    {
                        TeamId = x.Team.TeamId,
                        TeamName = x.Team.TeamName
                    }
                })
                .ToList();
            
            return(BowlerList);
        }
    }
}
