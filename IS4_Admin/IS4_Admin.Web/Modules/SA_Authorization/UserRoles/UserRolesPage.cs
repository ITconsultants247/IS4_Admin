
namespace IS4_Admin.SA_Authorization.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.UserRolesRow))]
    public class UserRolesController : Controller
    {
        [Route("SA_Authorization/UserRoles")]
        public ActionResult Index()
        {
            return View("~/Modules/SA_Authorization/UserRoles/UserRolesIndex.cshtml");
        }
    }
}