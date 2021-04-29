using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApI.Models;
using Microsoft.AspNetCore.Http;

namespace WebApI.Data
{
    public class Repository : IRepository
    {
        private readonly DetailContext _context;

        public Repository(DetailContext context)
        {
            _context = context;
        }
        public async Task<bool> DeleteDetail(int id)
        {
            var data = await _context.Members.FirstOrDefaultAsync(m => m.GMId == id);
            if (data==null)
            {
                return false;
            }
            _context.Members.Remove(data);
           await _context.SaveChangesAsync();
            return true;
        }

        
        public async Task<Members> GetDetail(int id)
        {
            var data =await _context.Members.FirstOrDefaultAsync(m => m.GMId == id);
           
            return data;
        }

        public async Task<List<Members>> GetDetails()
        {
            return await _context.Members.ToListAsync();
        }

        public async Task<int> PostDetail(Members Detail)
        {
            await _context.Members.AddAsync(Detail);
            await _context.SaveChangesAsync();
            return Detail.GMId;
        }
        
        public async Task<Boolean> PutDetail(int id, Members Detail)
        {
            //if (id != Detail.GMId)
            //{
            //    return false;
            //}

            var member=await _context.Members.FirstOrDefaultAsync(m=>m.GMId==id);
            if (member==null)
            {
                return false;
            }
            member.CardNumber = Detail.CardNumber;
            member.CardOwnerName = Detail.CardOwnerName;
           member.ExpiryDate = Detail.ExpiryDate;
            member.Amount = Detail.Amount;
            await _context.SaveChangesAsync();
            return true;
            
        }
    }
}
