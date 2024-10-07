export const itemsObj: any[] = [
  {
    items: [
      {
        label: "Inicio",
        icon: "pi pi-fw pi-home",
        items: [{ label: "Dashboard", routerLink: ["/app/home"] }],
      },
    ],
  },
  {
    items: [
      {
        label: "Clientes",
        icon: "pi pi-fw pi-user-edit",
        items: [
          { label: "Actualizar", routerLink: ["/app/client/update-client"] },
          { label: "Facturas", routerLink: ["/app/client/invoices"] },
          { label: "Pagos", routerLink: ["/app/client/payments"] },
          { label: "Servicio crédito", routerLink: ["/app/client/credit-service"] },
          { label: "Transacciones", routerLink: ["/app/client/transactions"] },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: "Materiales",
        icon: "pi pi-fw pi-shopping-bag",
        items: [
          { label: "Consulta", routerLink: ["/app/material/material-information"] },
          { label: "Promociones", routerLink: ["/app/material/material-promotion"] },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: "Usuarios",
        icon: "pi pi-fw pi-users",
        items: [
          { label: "Usuarios tienda", routerLink: ["/app/users/users"] },
          { label: "Autorizadores", routerLink: ["/app/users/authorizing-user"] },
          { label: "Logueados", routerLink: ["/app/users/registered-users"] },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: "Tienda",
        icon: "pi pi-fw pi-building",
        items: [
          {
            label: "Cajas abiertas",
            routerLink: ["/app/store/open-boxes"],
          },

          {
            label: "Ip cajas",
            routerLink: ["/app/store/ip-boxes"],
          },
          {
            label: "Oficinas",
            routerLink: ["/app/store/offices"],
          },
          {
            label: "Voucher",
            routerLink: ["/app/store/voucher"],
          },
          {
            label: "Tarjeta regalo",
            routerLink: ["/app/store/gift-card"],
          },
          // {
          //   label: "Cuadre de ventas",
          //   icon: "pi pi-fw pi-calculator",
          //   routerLink: ["/pages/empty"],
          // },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: "Servidores",
        icon: "pi pi-fw pi-database",
        items: [
          {
            label: "Ejecución jobs",
            routerLink: ["/app/servers/job-executions"],
          },

          {
            label: "Tamaño bases de datos",
            routerLink: ["/app/servers/database-size"],
          },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: "Vendedores",
        icon: "pi pi-fw pi-shopping-cart",
        items: [
          {
            label: "Consulta vendedores",
            routerLink: ["/app/sellers/sellers"],
          },
        ],
      },
    ],
  },
];
