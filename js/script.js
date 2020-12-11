var app = new Vue({
el: '#root',
data: {
  // Logo Avada
  logo: "img/takeout-logo-mobile.png",
  // Link Logo
  hrefLogo: "#",
  // classe per far apparire/scomparire il menu dropdown
  hidedrop: "hidedrop",
  // array header menu
  menu: [
    {
      titlelist: "Home",
      href: "#",
      icon: "fa fa-angle-down",
      dropdown:[
        {
          titledrop: "Most Populars",
          href: "#"
        },
        {
          titledrop: "Menu categories",
          href: "#"
        },
        {
          titledrop: "Ordering App",
          href: "#"
        },
        {
          titledrop: "Latest New",
          href: "#"
        }
      ],
    },
    {
      titlelist: "Order Online",
      href: "#"
    },
    {
      titlelist: "About",
      href: "#"
    },
    {
      titlelist: "News",
      href: "#"
    },
    {
      titlelist: "Contact Us",
      href: "#"
    },
    {
      titlelist: "",
      icon: "fas fa-shopping-cart",
      href: "#"
    },
  ],
  // classe per imgbackground footer
  footerBackground: "background",
  // Array footer con lista link per sezione Online Order
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
  // array li con link per navigazione in pagina
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
  // array link stores
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
      // array link per info
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
  // array orari apertura
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
  // sezione Voucher con codice sconto
  voucher: {
    title: "Voucher",
    img: "img/voucher.png",
    saleCode: "FIRSTORDER"
  },
  // icone social e link
  socialIcons: [
    {
      icona: "fa fa-facebook",
      href: "#"
    },
    {
      icona: "fab fa-twitter",
      href: "#"
    },
    {
      icona: "fab fa-instagram",
      href: "#"
    },
    {
      icona: "fab fa-linkedin-in",
      href: "#"
    },
    {
      icona: "fas fa-rss",
      href: "#"
    },
    {
      icona: "fab fa-youtube",
      href: "#"
    },
    {
      icona: "far fa-envelope",
      href: "#"
    },
  ],
  // titolo footer sezione input
  titleFootermid: "Stay In The Loop",
  //sottotitolo footer sezione input
  registrationTitle: "Sign up to receive up to date news and offers directly in your inbox:",
  // v-model per registrazione email
  inputEmail: "",
  // array dove inserire le email input
  emailList: [],
},
methods: {
  // metodo per pushare le email nell'array
  buttonInput: function() {
    this.emailList.push(this.inputEmail);
    console.log(this.emailList);
  },
  // funzione per nascondere/far comparire il dropdown
  showdrop(i) {
    if ((this.hidedrop === "hidedrop") && (i === 0)) {
      this.hidedrop = "showdrop"
    } else {
      this.hidedrop = "hidedrop"
    }
  }
}

});
