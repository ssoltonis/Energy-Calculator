using Microsoft.EntityFrameworkCore;

namespace EnergyCalculator.Database
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options)
        {
        }

        public DbSet<CalculationItem> CalculationItems { get; set; }
    }
}