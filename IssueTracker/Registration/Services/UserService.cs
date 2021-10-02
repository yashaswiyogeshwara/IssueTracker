using Core.Contexts;
using Domain;
using System.Linq;

namespace Registration
{
    public class UserService : IUserService
    {
        private CommandContext CommandContext;
        public UserService(CommandContext context)
        {
            CommandContext = context;
        }

        public Response RegisterUser(User user) {
            if (UserExists(user.Email)) {
                return new Response() { Success = false, Message = "User Already Exists" };
            }
            CommandContext.Add<Core.Models.User>(new Core.Models.User() { Name = user.Name, Email = user.Email, Password = user.Password });
            CommandContext.SaveChanges();
            return new Response() { Success = true };
        }

        private bool UserExists(string email) {
            return CommandContext.Users.Where(u => u.Email == email).FirstOrDefault() == null ? false : true;
        }
    }
}
