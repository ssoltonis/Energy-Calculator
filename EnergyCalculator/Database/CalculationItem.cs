using System;

namespace EnergyCalculator.Database
{
    public class CalculationItem
    {
        public int Id { get; set; }

        public double Mass { get; set; }

        public double Velocity { get; set; }

        public double KineticEnergy { get; set; }

        public string Comment { get; set; }

        public DateTime CreatedDate { get; set; }
    }
}