using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TwitterWeb.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public string GetLatestTweetByUserName(string name)
        {
            return "Welcome " + name + " to Angular Js ";
        }
    }
}