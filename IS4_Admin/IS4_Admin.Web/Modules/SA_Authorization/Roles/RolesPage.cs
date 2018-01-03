
namespace IS4_Admin.SA_Authorization.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.RolesRow))]
    public class RolesController : Controller
    {
        [Route("SA_Authorization/Roles")]
        public ActionResult Index()
        {
            return View("~/Modules/SA_Authorization/Roles/RolesIndex.cshtml");
        }
    }
}