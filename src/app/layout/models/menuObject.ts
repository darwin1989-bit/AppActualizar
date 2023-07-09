export const itemsObj: any[] = [
  {
    label: "Inicio",
    items: [{ label: "Dashboard", icon: "pi pi-fw pi-home", routerLink: ["/app/home"] }],
  },
  {
    label: "Clientes",
    items: [
      { label: "Actualizar", icon: "pi pi-fw pi-id-card", routerLink: ["/app/client/update-client"] },
      { label: "Facturas", icon: "pi pi-fw pi-file", routerLink: ["/uikit/input"] },
      { label: "Servicio crédito", icon: "pi pi-fw pi-cloud", routerLink: ["/uikit/floatlabel"] },
      { label: "Transacciones", icon: "pi pi-fw pi-mobile", routerLink: ["/uikit/button"], class: "rotated-icon" },
    ],
  },
  {
    label: "Materiales",
    items: [
      { label: "Consulta", icon: "pi pi-fw pi-shopping-bag", routerLink: ["/blocks"], badge: "NEW" },
      { label: "Promociones", icon: "pi pi-fw pi-tags", routerLink: ["/blocks"], badge: "NEW" },
    ],
  },
  {
    label: "Usuarios",
    items: [
      { label: "Usuarios", icon: "pi pi-fw pi-users", routerLink: ["/utilities/icons"] },
      { label: "Autorizador", icon: "pi pi-fw pi-user", url: ["https://www.primefaces.org/primeflex/"], target: "_blank" },
      { label: "Usuarios registrados", icon: "pi pi-fw pi-user-edit", routerLink: ["/utilities/icons"] },
    ],
  },
  {
    label: "Tienda",
    items: [
      {
        label: "Cajas abiertas",
        icon: "pi pi-fw pi-lock-open",
        routerLink: ["/landing"],
      },

      {
        label: "Ip cajas",
        icon: "pi pi-fw pi-desktop",
        routerLink: ["/pages/crud"],
      },
      {
        label: "Oficinas",
        icon: "pi pi-fw pi-building",
        routerLink: ["/pages/timeline"],
      },
      {
        label: "Voucher",
        icon: "pi pi-fw pi-credit-card",
        routerLink: ["/pages/notfound"],
      },
      {
        label: "Tarjeta regalo",
        icon: "pi pi-fw pi-wallet",
        routerLink: ["/pages/empty"],
      },
      {
        label: "Cuadre de ventas",
        icon: "pi pi-fw pi-calculator",
        routerLink: ["/pages/empty"],
      },
    ],
  },
  {
    label: "Servidores",
    items: [
      {
        label: "Ejecución jobs",
        icon: "pi pi-fw pi-sync",
        routerLink: ["/landing"],
      },

      {
        label: "Espacio discos",
        icon: "pi pi-fw pi-database",
        routerLink: ["/pages/crud"],
      },
    ],
  },
  {
    label: "Vendedores",
    items: [
      {
        label: "Vendedores",
        icon: "pi pi-fw pi-shopping-cart",
        routerLink: ["/landing"],
      },
    ],
  },
];
