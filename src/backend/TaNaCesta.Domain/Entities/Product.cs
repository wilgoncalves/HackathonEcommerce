namespace TaNaCesta.Domain.Entities
{
    public class Product : BaseEntity
    {
        public string Name { get; set; } = string.Empty;
        public int Unit { get; set; }
        public decimal Price { get; set; }
        public int StockQuantity { get; set; }
        public Category? Category { get; set; } = null;
        public bool Active { get; set; }

        protected Product(){}
        public Product(string name, int unit, decimal price, int stockQuantity, Category category) : base()
        {
            Name = name;
            Unit = unit;
            Price = price;
            StockQuantity = stockQuantity;
            Category = category;
        }

        public void Activate() => Active = true;
        public void Deactivate() => Active = false;
    }
}
