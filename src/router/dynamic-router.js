/* 订单管理 */
// const Order = () => import('pages/order-manage')
const dragTable = () => import('pages/Table/dragTable.vue')
const compileTable = () => import('pages/Table/compileTable')
// const ProductionList = () =>
//   import('pages/order-manage/product-manage/production-list')
// const ReviewManage = () =>
//   import('pages/order-manage/product-manage/review-manage')
const Table = () => import('pages/Table/index.vue')

/* 产品管理 */
const Goods = () => import('pages/goods-manage')
const GoodsList = () => import('pages/goods-manage/goods-list')
const GoodsClassify = () => import('pages/goods-manage/goods-classify')
// 导出
const Export = () => import("pages/Export/index.vue")
//Echartsjs
const Echartsjs = () => import("pages/Echartsjs/index.vue")
//拖拽
const Dialog = () => import("pages/Drag/Dialog.vue")
const Drag = () => import("pages/Drag")
const Select = () => import("pages/Drag/Select.vue")
const Kanban = () => import("pages/Drag/Kanban.vue")

//富士文本编辑器Tinymce
const Tinymce = () => import("pages/Tinymce")

/* 需要权限判断的路由 */
const dynamicRoutes = [
  {
    path: '/order',
    component: Goods,
    name: 'order-manage',
    meta: {
      name: 'Table',
      icon: 'icon-email'
    },
    children: [
      {
        path: 'dragTable',
        name: 'dragTable',
        component: dragTable,
        meta: {
          name: '拖拽 Table',
          icon: 'icon-quit'
        }
      },
      {
        path: 'compileTable',
        name: 'compileTable',
        component: compileTable,
        meta: {
          name: 'Table 内编辑',
          icon: 'icon-service'
        }

      },
      {
        path: 'Table',
        name: 'Table',
        component: Table,
        meta: {
          name: 'Table',
          icon: 'icon-product-manage'
        }
      }
    ]
  },
  {
    path: '/goods',
    component: Goods,
    name: 'goods',
    meta: {
      name: '产品管理',
      icon: 'icon-order-manage'
    },
    children: [
      {
        path: 'list',
        name: 'goods-list',
        component: GoodsList,
        meta: {
          name: '产品列表',
          icon: 'icon-home'
        }
      },
      {
        path: 'classify',
        name: 'goods-classify',
        component: GoodsClassify,
        meta: {
          name: '产品分类',
          icon: 'icon-product-manage'
        }
      }
    ]
  },
  {
    path: '/Export',
    component: Export,
    name: 'Export',
    meta: {
      name: '导出导入',
      icon: 'icon-order-manage'
    },

  },
  {
    path: '/Echartsjs',
    component: Echartsjs,
    name: 'Echartsjs',
    meta: {
      name: 'Echartsjs',
      icon: 'icon-order-manage'
    },

  },
  {
    path: '/grag',
    component: Goods,
    name: 'Drag',
    meta: {
      name: '拖拽组件',
      icon: 'icon-order-manage'
    },
    children: [
      {
        path: 'dialog',
        name: 'dialog',
        component: Dialog,
        meta: {
          name: '拖拽Dialog',
          icon: 'icon-home'
        }
      },
      {
        path: 'select',
        name: 'select',
        component: Select,
        meta: {
          name: '列表拖拽',
          icon: 'icon-product-manage'
        }
      },
      {
        path: 'kanban',
        name: 'kanban',
        component: Kanban,
        meta: {
          name: '可拖拽看板',
          icon: 'icon-product-manage'
        }
      },
    ]

  }, {
    path: '/tinymce',
    component: Tinymce,
    name: 'tinymce',
    meta: {
      name: '富文本编辑器',
      icon: 'icon-order-manage'
    },

  },
]

export default dynamicRoutes
