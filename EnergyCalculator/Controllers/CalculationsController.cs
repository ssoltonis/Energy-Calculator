using System;
using System.Linq;
using System.Threading.Tasks;
using EnergyCalculator.Database;
using EnergyCalculator.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace EnergyCalculator.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CalculationsController : ControllerBase
    {
        private readonly DatabaseContext _databaseContext;
        private readonly ILogger<CalculationsController> _logger;

        public CalculationsController(ILogger<CalculationsController> logger, DatabaseContext databaseContext)
        {
            _logger = logger;
            _databaseContext = databaseContext;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var response = await _databaseContext.CalculationItems
                .Select(x => new CalculationItemModel
                    {
                        Mass = x.Mass,
                        Velocity = x.Velocity,
                        KineticEnergy = x.KineticEnergy,
                        Comment = x.Comment,
                        CreatedDate = x.CreatedDate
                    }
                ).ToListAsync();

            return Ok(response);
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Save(CalculationItemModel model)
        {
            CalculationItem item = new()
            {
                Mass = model.Mass,
                Velocity = model.Velocity,
                KineticEnergy = model.KineticEnergy,
                Comment = model.Comment,
                CreatedDate = DateTime.Now
            };

            await _databaseContext.CalculationItems.AddAsync(item);
            await _databaseContext.SaveChangesAsync();

            return Ok();
        }
    }
}