using Domain;

namespace Registration
{
    public interface IUserService
    {
        public Response RegisterUser(User user);
    }
}
