using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApI.Models;

namespace WebApI.Data
{
   public interface IRepository
    {
         Task<List<Members>> GetDetails();
        Task<Boolean> PutDetail(int id, Members Detail);
        Task<int> PostDetail(Members Detail);
        Task<Members> GetDetail(int id);
        Task<bool> DeleteDetail(int id);
       
    }
}
