using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.API.Dtos
{
    //Dtos = Data transfer Objects (objetos parciales que reciben los controladores)
    public class UserForRegisterDto
    {
        public string Username { get; set; }
        public string Password { get; set; }


    }
}
