using System;

namespace EnergyCalculator.Models
{
    public class CalculationItemModel
    {
        public DateTime CreatedDate { get; set; }

        public double Mass { get; set; }

        public double Velocity { get; set; }

        public double KineticEnergy { get; set; }

        public string Comment { get; set; }
    }
}