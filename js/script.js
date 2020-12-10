var app = new Vue({
el: '#root',
data: {
  logo: "img/takeout-logo-mobile.png",
  hidedrop: "hidedrop",
  menu: [
    {
      titlelist: "Home",
      dropdown:[
        "Most Populars",
        "Menu Categories",
        "Ordering App",
        "Latest News"
      ],
      icon: "fa fa-angle-down"
    },
    {
      titlelist: "Order Online"
    },
    {
      titlelist: "About"
    },
    {
      titlelist: "News"
    },
    {
      titlelist: "Contact Us"
    },
    {
      titlelist: "",
      icon: "fas fa-shopping-cart"
    },

  ],
  footerBackground: "background",
  titleFootermid: "Stay In The Loop",
  registrationTitle: "Sign up to receive up to date news and offers directly in your inbox:",
  inputEmail: "",
  emailList: [],
  orderOnline: [
    {
      title: "Order Online",
      linksMenu: [
        {
          name: "Appetizers",
          href: "#"
        },
        {
          name: "Burgers",
          href: "#"
        },
        {
          name: "Pizza",
          href: "#"
        },
        {
          name: "Fries",
          href: "#"
        },
        {
          name: "Sides",
          href: "#"
        },
        {
          name: "Desserts",
          href: "#"
        },
        {
          name: "Beverages",
          href: "#"
        },
        {
          name: "Specials",
          href: "#"
        },
      ],
    }
  ],
  navigate: [
    {
      title: "Navigate",
      linksNav: [
        {
          name: "Home",
          href: "#"
        },
        {
          name: "Alternate Home",
          href: "#"
        },
        {
          name: "Menu",
          href: "#"
        },
        {
          name: "About",
          href: "#"
        },
        {
          name: "News",
          href: "#"
        },
        {
          name: "Contact Us",
          href: "#"
        },
        {
          name: "Cart",
          href: "#"
        }
      ],
    }
  ],
  information: [
    {
      title: "Information",
      appStore: {
        href: "#",
        img: "img/app-store.png"
      },
      playStore: {
        href: "#",
        img: "img/play-store.png"
      },
      linksInfo: [
        {
          name: "My Account",
          href: "#"
        },
        {
          name: "Terms Of Service",
          href: "#"
        },
        {
          name: "Privacy Policy",
          href: "#"
        },

      ]
    }
  ],
  opening: [
    {
      title: "Opening Hours",
      days: [
        {
          day: "Mon - ",
          time: "10AM to 11PM"
        },
        {
          day: "Tue - ",
          time: "10AM to 11PM"
        },
        {
          day: "Wed - ",
          time: "10AM to 11PM"
        },
        {
          day: "Thur - ",
          time: "10AM to 11PM"
        },
        {
          day: "Fri - ",
          time: "10AM to 11PM"
        },
        {
          day: "Sat - ",
          time: "10AM to 1AM"
        },
        {
          day: "Sun - ",
          time: "11AM to 10PM"
        },
      ]
    },
  ],
  voucher: {
    title: "Voucher",
    img: "img/voucher.png",
    saleCode: "FIRSTORDER"
  },
  socialIcons: [
    "fa fa-facebook",
    "fab fa-twitter",
    "fab fa-instagram",
    "fab fa-linkedin-in",
    "fas fa-rss",
    "fab fa-youtube",
    "far fa-envelope"
  ],


},
methods: {
  buttonInput: function() {
    this.emailList.push(this.inputEmail);
    console.log(this.emailList);
  },
  showdrop: function() {
    if (this.hidedrop === "hidedrop") {
      this.hidedrop = "showdrop"
    } else {
      this.hidedrop = "hidedrop"
    }
  }
}

});
