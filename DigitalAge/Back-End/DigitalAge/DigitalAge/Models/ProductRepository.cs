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
                Image = "https://content2.onliner.by/catalog/device/header/7cd37e4850f8812fc737d4d811eddca2.jpeg"
            });
            Add(new Product
            {
                Id = 4,
                Name = "Irwin Computers Matisse G1-17",
                Category = "Computers",
                Price = 1690,
                Description = "15.6 1920 x 1080 IPS, AMD Ryzen 5 3550H 2100 МГц, 8 ГБ, SSD 512 ГБ, граф. адаптер: AMD Radeon RX 560X 4 ГБ, без ОС, цвет крышки черный",
                Image = "https://content2.onliner.by/catalog/device/header/09b7968a445ac1c2ed2c8b7c289719c0.jpeg"
            });
            Add(new Product
            {
                Id = 5,
                Name = "ASUS TUF Gaming FX505DY-BQ024",
                Category = "Laptops",
                Price = 1490,
                Description = "домашний/геймерский, CPU Intel Core i5 9400F 2900 МГц, RAM DDR4 16 ГБ, SSD 480 ГБ, NVIDIA GeForce GTX 1660 6 ГБ, БП 500 Вт",
                Image = "https://content2.onliner.by/catalog/device/header/8b98d73d89e7118f4a91a487b24e342e.jpeg"
            });
            Add(new Product
            {
                Id = 6,
                Name = "Lenovo IdeaPad S340-15API 81NC00F0RE",
                Category = "Laptops",
                Price = 1045,
                Description = "1920 x 1080 IPS, Intel Core i9 9980HK 2400 МГц, 64 ГБ, HDD+SSD 2000+2048 ГБ, граф. адаптер: NVIDIA GeForce RTX 2080 8 ГБ, Windows 10, цвет крышки черный",
                Image = "https://content2.onliner.by/catalog/device/header/b368d51af7af1cc2039985e9e07ce431.jpeg"
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
