using Serenity.Navigation;
using MyPages = IS4_Admin.SA_Authorization.Pages;

[assembly: NavigationLink(int.MaxValue, "SA_Authorization/Users", typeof(MyPages.UsersController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "SA_Authorization/Roles", typeof(MyPages.RolesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "SA_Authorization/User Roles", typeof(MyPages.UserRolesController), icon: null)]