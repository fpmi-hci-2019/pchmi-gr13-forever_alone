using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DigitalAge.Models
{
    public class ProductRepository : IProductRepository
    {
        private List<Product> products = new List<Product>();
        private int _nextId = 4;

        public ProductRepository()
        {
            Add(new Product
            {
                Id = 1,
                Name = "Irwin Computers Coffee Lake G1-12",
                Category = "Computers",
                Price = 1515,
                Description = "геймерский, CPU Intel Core i5 9400F 2900 МГц, RAM DDR4 16 ГБ, SSD 480 ГБ, NVIDIA GeForce GTX 1660 Super 6 ГБ, БП 500 Вт",
                Image = "https://fk.by/uploads/images/cache/computers/kompyuter-bez-monitora-amd-a4_1-1100x500.jpg"
            });
            Add(new Product
            {
                Id = 2,
                Name = "256Bit I9400164801660",
                Category = "Computers",
                Price = 1487,
                Description = "домашний/геймерский, CPU Intel Core i5 9400F 2900 МГц, RAM DDR4 16 ГБ, SSD 480 ГБ, NVIDIA GeForce GTX 1660 6 ГБ, БП 500 Вт",
                Image = "https://fk.by/uploads/images/cache/computers/kompyuter-bez-monitora-amd-a4_1-1100x500.jpg"
            });
            Add(new Product
            {
                Id = 3,
                Name = "Irwin Computers Matisse G1-17",
                Category = "Computers",
                Price = 1690,
                Description = "None",
                Image = "https://fk.by/uploads/images/cache/computers/kompyuter-bez-monitora-amd-a4_1-1100x500.jpg"
            });
        }

        public IEnumerable<Product> GetAll()
        {
            return products;
        }

        public IEnumerable<Product> GetAll(string namePart)
        {
            return products.Where(prod => prod.Name.Contains(namePart));
        }

        public IEnumerable<Product> GetAllFromCategory(string category)
        {
            return products.Where(prod => prod.Category == category);
        }

        public Product Get(int id)
        {
            return products.Find(p => p.Id == id);
        }

        public Product Add(Product item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            item.Id = _nextId++;
            products.Add(item);
            return item;
        }

        public void Remove(int id)
        {
            products.RemoveAll(p => p.Id == id);
        }

        public bool Update(Product item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            int index = products.FindIndex(p => p.Id == item.Id);
            if (index == -1)
            {
                return false;
            }
            products.RemoveAt(index);
            products.Add(item);
            return true;
        }
    }
}
