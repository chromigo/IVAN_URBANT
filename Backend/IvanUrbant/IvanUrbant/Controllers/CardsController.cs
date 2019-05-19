using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using IvanUrbant.Models;
using Microsoft.AspNet.Identity;

namespace IvanUrbant.Controllers
{
    public class CardsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // PUT: api/Cards/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutCard(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            var userId = RequestContext.Principal.Identity.GetUserId();
            var cardToClose = await db.Set<ApplicationUser>()
                .Where(e => e.Id == userId)
                .SelectMany(e => e.UserInfo.AvailableCards.Where(p => p.CardStatus == CardStatus.NotActive && p.Card.Id == id))
                .FirstOrDefaultAsync();

            if (cardToClose == null) return BadRequest(ModelState);
            
            cardToClose.CardStatus = CardStatus.Skipped;
            await db.SaveChangesAsync();

            return StatusCode(HttpStatusCode.NoContent);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CardExists(int id)
        {
            return db.Card.Count(e => e.Id == id) > 0;
        }
    }
}