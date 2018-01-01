using Serenity.Services;

namespace IS4_Admin.Northwind
{
    public class OrderListRequest : ListRequest
    {
        public int? ProductID { get; set; }
    }
}