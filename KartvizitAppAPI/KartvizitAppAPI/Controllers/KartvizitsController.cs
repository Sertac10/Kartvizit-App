#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using KartvizitAppAPI.Models;
using Microsoft.AspNetCore.Authorization;

namespace KartvizitAppAPI.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class KartvizitsController : ControllerBase
    {
        private readonly MyContext _context;

        public KartvizitsController(MyContext context)
        {
            _context = context;
        }

        // GET: api/Kartvizits
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Kartvizit>>> Get()
        {
            return await _context.Kartvizits.ToListAsync();
        }

        // GET: api/Kartvizits/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Kartvizit>> GetKartvizit(int id)
        {
            var kartvizit = await _context.Kartvizits.FindAsync(id);

            if (kartvizit == null)
            {
                return NotFound();
            }

            return kartvizit;
        }

        
        [HttpPut("{id}")]
        public async Task<IActionResult> PutKartvizit(int id, Kartvizit kartvizit)
        {
            if (id != kartvizit.Id)
            {
                return BadRequest();
            }

            _context.Entry(kartvizit).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KartvizitExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        
        [HttpPost]
        public async Task<ActionResult<Kartvizit>> Post(Kartvizit kartvizit)
        {
            _context.Kartvizits.Add(kartvizit);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetKartvizit", new { id = kartvizit.Id }, kartvizit);
        }

       
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteKartvizit(int id)
        {
            var kartvizit = await _context.Kartvizits.FindAsync(id);
            if (kartvizit == null)
            {
                return NotFound();
            }

            _context.Kartvizits.Remove(kartvizit);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool KartvizitExists(int id)
        {
            return _context.Kartvizits.Any(e => e.Id == id);
        }
    }
}
