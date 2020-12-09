var app = new Vue({
el: '#root',
data: {
  logo: "img/takeout-logo-mobile.png",
  menu: [
    {
      titlelist: "Home",
      dropdown: [
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
  footerLists: [
    {
      title: "Order Online",
      listLinks: [
        {
          name: "Appetizers"
        },
        {
          name: "Burgers"
        },
        {
          name: "Pizza"
        },
        {
          name: "Fries",
        },
        {
          name: "Sides",
        },
        {
          name: "Desserts",
        },
        {
          name: "Beverages",
        },
        {
          name: "Specials"
        }
      ]
    },
    {
      title: "Navigate",
      listLinks: [
        {
          name: "Home"
        },
        {
          name: "Alternate Home"
        },
        {
          name: "Menu"
        },
        {
          name: "About",
        },
        {
          name: "News",
        },
        {
          name: "Contact Us",
        },
        {
          name: "Cart",
        }
      ]
    },
    {
      title: "Information",
      listLinks: [
        {
          name: "My Account"
        },
        {
          name: "Terms Of Services"
        },
        {
          name: "Privacy Policy"
        },
        {
          name: "img/app-store.png",
        },
        {
          name: "img/play-store.png",
        }
      ]
    },
    {
      title: "Opening Hours",
      listLinks: [
        {
          name: "Mon -",
          time: "10AM to 11PM"
        },
        {
          name: "Tue -",
          time: "10AM to 11PM"
        },
        {
          name: "Wed -",
          time: "10AM to 11PM"
        },
        {
          name: "Thur -",
          time: "10AM to 11PM"
        },
        {
          name: "Fri -",
          time: "10AM to 11PM"
        },
        {
          name: "Sat -",
          time: "10AM to 1AM"
        },
        {
          name: "Sun -",
          time: "10AM to 11PM"
        }
      ],
    },
    {
      title: "Voucher",
      listLinks: [
        {
          name: "img/voucher.png"
        },
        {
          name: "Just Use The Code"
        },
        {
          name: "FIRSTORDER",
        },
        {
          name: "At Checkout"
        }
      ]
    },
  ]
  // voucher: ,//img voucher
  // downloadStore: ,//img Stores
  // socialIcons: [] ,// array icone
  // inputEmail: "", //collegare v-model
  // emailList: [] , //array dove inserire email del form

},
methods: {
  buttonInput: function() {

  },




}

});
