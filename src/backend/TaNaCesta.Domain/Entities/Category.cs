namespace TaNaCesta.Domain.Entities
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; private set; } = string.Empty;

        public void SetName(string name)
        {
            Name = name;
        }
    }
}
