using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

using System.Web.Http;
using System.Web.Http.Description;
using IvanUrbant.Models;
using Microsoft.AspNet.Identity;


namespace IvanUrbant.Controllers
{
    [Authorize]
    public class UserInfoesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        // GET: api/UserInfoes
        [ResponseType(typeof(UserInfo))]
        public async Task<IHttpActionResult> GetUserInfo()
        {
            var user = await GetCurrentUserInfo();

            if (user == null)
            {
                return Ok();
            }

            return Json(user);
        }
        private async Task<CharModel> GetCurrentUserInfo()
        {
            var userId = RequestContext.Principal.Identity.GetUserId();
            var charModel = await db.Set<ApplicationUser>()
                .Where(e => e.Id == userId)
                .Select(e => e.UserInfo)
                .Where(e => e != null)
                .Select(c => new CharModel
                {
                    Coins = c.Coins,
                    Experience = c.Experience,
                    Level = c.Level,
                    Name = c.Name,
                    Type = c.Type,
                    AvailableCards = c.AvailableCards.Select(e => new AvailableCardModel
                    {
                        Status = e.CardStatus,
                        Card = new CardModel
                        {
                            Id = e.Card.Id,
                            Type = e.Card.Type,
                            Title = e.Card.Title,
                            Description =e.Card. Description,
                            Exp = e.Card.Exp,
                            Coins = e.Card.Coins,
                            Answers = e.Card.Answers.Select(p => new AnswerModel{Id = p.Id, Title = p.Title}),
                            CorrectAnswer = e.Card.CorrectAnswer != null ? new AnswerModel{Id = e.Card.CorrectAnswer.Id, Title = e.Card.CorrectAnswer.Title} : null
                        }
                    })

                })
                .FirstOrDefaultAsync();
            return charModel;
        }

        // POST: api/UserInfoes
        [ResponseType(typeof(UserInfo))]
        public async Task<IHttpActionResult> PostUserInfo(CharModel charModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            if (await GetCurrentUserInfo() != null)
            {
                return BadRequest("Пользователь уже создан");
            }

            await CreateUserInfo(charModel);

            return StatusCode(HttpStatusCode.NoContent);
        }
        
         // PUT: api/UserInfoes
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutUserInfo(CharModel charModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var user = await GetCurrentUserInfo();
            if (user == null)
            {
                return Ok();
            }
            user.Level = charModel.Level;
            user.Type = charModel.Type;
            user.Experience = charModel.Experience;

            await db.SaveChangesAsync();

            return StatusCode(HttpStatusCode.NoContent);
        }

        private async Task CreateUserInfo(CharModel charModel)
        {
            var newInfo = new UserInfo
            {
                Type = charModel.Type,
                Name = charModel.Name
            };
            db.UserInfos.Add(newInfo);
            await db.SaveChangesAsync();

            var userId = RequestContext.Principal.Identity.GetUserId();
            var user = await db.Set<ApplicationUser>()
                .Where(e => e.Id == userId)
                .FirstOrDefaultAsync();

            db.Set<ApplicationUser>().Attach(user);
            user.UserInfo = newInfo;
            await db.SaveChangesAsync();

            var availableCardsIds = new[] {1, 2, 3};
            var cards = db.Card.Where(c => availableCardsIds.Contains(c.Id)).ToArray();
            db.AvailableCards.AddRange(new[]
            {
                new AvailableCards {UserInfo = newInfo, Card = cards[0], CardStatus = CardStatus.NotActive},
                new AvailableCards {UserInfo = newInfo, Card = cards[1], CardStatus = CardStatus.NotActive},
                new AvailableCards {UserInfo = newInfo, Card = cards[2], CardStatus = CardStatus.NotActive}
            });
            db.SaveChanges();
        }
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
        
    }
}