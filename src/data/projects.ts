import WListDBHero from '../images/wlistdb-hero.webp'
import LuisaPortfolioHero from '../images/luisa-portfolio-hero.webp'
import RPTZENHero from '../images/rptzen-hero.webp'

const projects = [
  {
    "id": 1,
    "title": "WListDB",
    "slug": "wlistdb",
    "description": {
      "en": "It is a new version for the frontend of the web using Nextjs and Material UI, customizing this last one to match with the app design. Some of new features added are light/dark mode, multi-language and more.",
      "es": "Es una nueva versión del frontend de la web usando Nextjs y Material UI, personalizando este último para que se encuadre con el diseño de la app. Se agregaron nuevas funcionalidades como los modos claro/oscuro, multi-idiomas y más"
    },
    "image": WListDBHero,
    "imageWidth": 1500,
    "imageHeight": 838,
    "url": "https://wlistdb.com/",
    "stack": [
      {
        name: "Next.js",
        icon: "https://res.cloudinary.com/dfyxdowwb/image/upload/c_scale,w_128/v1693389197/portfolio/logos/nextjs_jqxnjl.svg",
        width: 128,
        height: 128
      },
      {
        name: "Typescript",
        icon: "https://res.cloudinary.com/dfyxdowwb/image/upload/c_scale,w_128/v1693389199/portfolio/logos/typescript_fdfixf.svg",
        width: 128,
        height: 128
      },
      {
        name: "Material UI",
        icon: "https://res.cloudinary.com/dfyxdowwb/image/upload/v1728342158/portfolio/logos/materialui_kzmspw.svg",
        width: 128,
        height: 128
      },
      {
        name: "External API",
        icon: "https://res.cloudinary.com/dfyxdowwb/image/upload/c_scale,w_128/v1693389195/portfolio/logos/api_nqjc0c.svg",
        width: 128,
        height: 128
      },
    ]
  },
  {
    "id": 2,
    "title": "RPTZEN",
    "slug": "rptzen",
    "description": {
      "en": "SaaS application which development was focused on the business logic and other key features to launch the MVP. The frontend was developed based on a template acquired by the client.",
      "es": "Aplicación SaaS en la que el desarrollo estuvo centrado en la lógica de negocio y demás funcionalidades clave para el lanzamiento de un PMV (o MVP). En el front se ha utilizado una plantilla adquirida por el cliente y se fue iterando sobre la misma."
    },
    "image": RPTZENHero,
    "imageWidth": 1500,
    "imageHeight": 848,
    "url": "https://rptzen.com/",
    "stack": [
      {
        name: "Laravel",
        icon: "https://res.cloudinary.com/dfyxdowwb/image/upload/c_scale,w_128/v1715269533/portfolio/logos/laravel_yzaufq.svg",
        width: 128,
        height: 132
      },
      {
        name: "PHP",
        icon: "https://res.cloudinary.com/dfyxdowwb/image/upload/c_scale,w_128/v1715269533/portfolio/logos/php_eyloyo.svg",
        width: 128,
        height: 69
      },
      {
        name: "MySQL",
        icon: "https://res.cloudinary.com/dfyxdowwb/image/upload/v1693389807/portfolio/logos/mysql_kxfysz.svg",
        width: 128,
        height: 128
      },
      {
        name: "Livewire",
        icon: "https://res.cloudinary.com/dfyxdowwb/image/upload/v1728340506/portfolio/logos/livewire_ox7ryt.svg",
        width: 128,
        height: 128
      },
      {
        name: "Bootstrap",
        icon: "https://res.cloudinary.com/dfyxdowwb/image/upload/v1728340867/portfolio/logos/bootstrap_jszwms.svg",
        width: 128,
        height: 128
      }
    ]
  },
  {
    "id": 3,
    "title": "Luisa Portfolio",
    "slug": "luisa-portfolio",
    "description": {
      "en": "Design of the UI according to the client's vision and requisites, with mobile-first focus. Web Development was made implementing responsive design. It was also built an admin panel, so that the client can customize the content.",
      "es": "Diseño de la UI (interfaz de usuario) acorde a la visión de la clienta y sus requisitos, enfocado al mobile-first. El desarrollo web fue realizado implementando un diseño responsivo. Además fue construído un panel de administrador para que la clienta pueda editar el contenido."
    },
    "image": LuisaPortfolioHero,
    "imageWidth": 1500,
    "imageHeight": 848,
    "url": null,
    "stack": [
      {
        name: "PHP",
        icon: "https://res.cloudinary.com/dfyxdowwb/image/upload/v1693389199/portfolio/logos/php_eyloyo.svg",
        width: 128,
        height: 69
      },
      {
        name: "Javascript",
        icon: "https://res.cloudinary.com/dfyxdowwb/image/upload/c_scale,w_128/v1693389196/portfolio/logos/javascript_brist7.svg",
        width: 128,
        height: 128
      },
      {
        name: "Figma",
        icon: "https://res.cloudinary.com/dfyxdowwb/image/upload/v1728340339/portfolio/logos/figma_tm1ncb.svg"
      },
      {
        name: "HTML",
        icon: "https://res.cloudinary.com/dfyxdowwb/image/upload/v1693389528/portfolio/logos/html_ekmmj7.svg",
        width: 128,
        height: 128
      },
      {
        name: "CSS",
        icon: "https://res.cloudinary.com/dfyxdowwb/image/upload/v1728342469/portfolio/logos/css_wdmrco.svg",
        width: 128,
        height: 128
      }
    ]
  }
]



export default projects