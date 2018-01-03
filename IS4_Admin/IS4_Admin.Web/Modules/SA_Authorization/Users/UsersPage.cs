
namespace IS4_Admin.SA_Authorization.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.UsersRow))]
    public class UsersController : Controller
    {
        [Route("SA_Authorization/Users")]
        public ActionResult Index()
        {
            return View("~/Modules/SA_Authorization/Users/UsersIndex.cshtml");
        }
    }
}