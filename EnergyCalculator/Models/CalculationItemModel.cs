using System;

namespace EnergyCalculator.Models
{
    public class CalculationItemModel
    {
        public DateTime CreatedDate { get; set; }

        public int Mass { get; set; }

        public int Velocity { get; set; }

        public double KineticEnergy { get; set; }

        public string Comment { get; set; }
    }
}