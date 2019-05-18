using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(IvanUrbant.Startup))]
namespace IvanUrbant
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
