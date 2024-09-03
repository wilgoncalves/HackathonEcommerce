namespace TaNaCesta.Communication.Responses
{
    public class ResponseProductJson
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int Unit { get; set; }
        public decimal Price { get; set; }
        public int StockQuantity { get; set; }
        public ResponseCategoryJson Category { get; set; } = new();
        public int CategoryId { get; set; }
        public bool Active { get; set; }
    }
}
