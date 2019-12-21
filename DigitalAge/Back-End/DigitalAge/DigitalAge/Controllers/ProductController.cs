using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DigitalAge.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace DigitalAge.Controllers
{
    [Route("[controller]")]
    public class ProductController : Controller
    {
        public ProductRepository repository = new ProductRepository();

        [Route("Search/{name}")]
        [HttpGet]
        public IEnumerable<Product> GetFromSearch(string name)
        {
            return repository.GetAll(name);
        }

        [Route("Categories/{category}")]
        [HttpGet]
        public IEnumerable<Product> GetFromCategory(string category)
        {
            return repository.GetAllFromCategory(category);
        }

        [Route("Product/{id}")]
        [HttpGet]
        public Product Get(int id)
        {
            return repository.Get(id);
        }
    }
}
