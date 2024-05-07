export const itemsObj: any[] = [
  {
    label: "Inicio",
    items: [{ label: "Dashboard", icon: "pi pi-fw pi-home", routerLink: ["/app/home"] }],
  },
  {
    label: "Clientes",
    items: [
      { label: "Actualizar", icon: "pi pi-fw pi-id-card", routerLink: ["/app/client/update-client"], preventExact: false },
      { label: "Facturas - Nota Crédito", icon: "pi pi-fw pi-file", routerLink: ["/app/client/invoices"], preventExact: false },
      { label: "Pagos", icon: "pi pi-fw pi-money-bill", routerLink: ["/app/client/payments"] },
      { label: "Servicio crédito", icon: "pi pi-fw pi-cloud", routerLink: ["/app/client/credit-service"] },
      { label: "Transacciones", icon: "pi pi-arrow-right-arrow-left", routerLink: ["/app/client/transactions"] },
    ],
  },
  {
    label: "Materiales",
    items: [
      { label: "Consulta", icon: "pi pi-fw pi-shopping-bag", routerLink: ["/app/material/material-information"] },
      { label: "Promociones tienda", icon: "pi pi-fw pi-tags", routerLink: ["/app/material/material-promotion"] },
    ],
  },
  {
    label: "Usuarios",
    items: [
      { label: "Usuarios tienda", icon: "pi pi-fw pi-users", routerLink: ["/app/users/users"] },
      { label: "Usuarios autorizador", icon: "pi pi-fw pi-user", routerLink: ["/app/users/authorizing-user"] },
      { label: "Usuarios registrados", icon: "pi pi-fw pi-user-edit", routerLink: ["/app/users/registered-users"] },
    ],
  },
  {
    label: "Tienda",
    items: [
      {
        label: "Cajas abiertas",
        icon: "pi pi-fw pi-lock-open",
        routerLink: ["/app/store/open-boxes"],
      },

      {
        label: "Ip cajas",
        icon: "pi pi-fw pi-desktop",
        routerLink: ["/app/store/ip-boxes"],
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
        label: "Tamaño bases de datos",
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
