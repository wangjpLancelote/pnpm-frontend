export const MockLoginData = {
  data: {
    msg: "操作成功",
    code: 200,
    phoneNumber: "15888888888",
    sex: "女",
    avatar: "/profile/avatar/2023/10/28/blob_20231028142304A001.png",
    userName: "admin",
    authorizationState: "1",
    email: "ry@161.com",
    access_token:
      // eslint-disable-next-line max-len
      "eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImVlM2EyMGU2LTJlZDItNDhjOC1iMzFmLTYwMDM0OTM4MWU1MCJ9.80dfvaotD_SYy5uo6qHjrRB--XQyWRXeis-OPpvZJqcQT9GM7Z4i5S-CmYCrDWrqPgRQnrxBeBC5rHKYyvRSzQ"
  }
};

export const MockUserInfoData = {
  msg: "操作成功",
  code: 200,
  permissions: ["*:*:*"],
  roles: ["admin"],
  user: {
    createBy: "admin",
    createTime: "2023-03-28 00:00:00",
    remark: "管理员",
    userId: 1,
    deptId: 103,
    userName: "admin",
    nickName: "若依",
    email: "ry@161.com",
    phonenumber: "15888888888",
    sex: "1",
    avatar: "/profile/avatar/2023/10/28/blob_20231028142304A001.png",
    password: "$2a$10$7JB720yubVSZvUI0rEqK/.VqGOZTH.ulu33dHOiBE8ByOhJIrdAu2",
    status: "0",
    delFlag: "0",
    loginIp: "202.105.139.2",
    loginDate: "2024-01-09T11:10:31.033+08:00",
    dept: {
      deptId: 103,
      parentId: 101,
      ancestors: "0,100,101",
      deptName: "研发部门",
      orderNum: 1,
      leader: "若依",
      status: "0",
      children: []
    },
    roles: [
      {
        roleId: 1,
        roleName: "超级管理员",
        roleKey: "admin",
        roleSort: 1,
        dataScope: "1",
        menuCheckStrictly: false,
        deptCheckStrictly: false,
        status: "0",
        flag: false,
        admin: true
      }
    ],
    authorizationState: "1",
    admin: true
  }
};

export const MockRoutersData = {
  msg: "操作成功",
  code: 200,
  data: [
    // {
    //   name: 'System',
    //   path: '/system',
    //   hidden: false,
    //   redirect: 'noRedirect',
    //   component: 'Layout',
    //   alwaysShow: true,
    //   meta: {
    //     title: '系统管理',
    //     icon: 'system',
    //     noCache: false,
    //   },
    //   children: [
    //     {
    //       name: 'User',
    //       path: 'user',
    //       hidden: false,
    //       component: 'system/user/index',
    //       meta: {
    //         title: '用户管理',
    //         icon: 'user',
    //         noCache: false,
    //       },
    //     },
    //     {
    //       name: 'Role',
    //       path: 'role',
    //       hidden: false,
    //       component: 'system/role/index',
    //       meta: {
    //         title: '角色管理',
    //         icon: 'peoples',
    //         noCache: false,
    //       },
    //     },
    //     {
    //       name: 'Menu',
    //       path: 'menu',
    //       hidden: false,
    //       component: 'system/menu/index',
    //       meta: {
    //         title: '菜单管理',
    //         icon: 'tree-table',
    //         noCache: false,
    //       },
    //     },
    //     {
    //       name: 'Dept',
    //       path: 'dept',
    //       hidden: false,
    //       component: 'system/dept/index',
    //       meta: {
    //         title: '部门管理',
    //         icon: 'tree',
    //         noCache: false,
    //       },
    //     },
    //     {
    //       name: 'Post',
    //       path: 'post',
    //       hidden: false,
    //       component: 'system/post/index',
    //       meta: {
    //         title: '岗位管理',
    //         icon: 'post',
    //         noCache: false,
    //       },
    //     },
    //     {
    //       name: 'Dict',
    //       path: 'dict',
    //       hidden: false,
    //       component: 'system/dict/index',
    //       meta: {
    //         title: '字典管理',
    //         icon: 'dict',
    //         noCache: false,
    //       },
    //     },
    //     {
    //       name: 'Config',
    //       path: 'config',
    //       hidden: false,
    //       component: 'system/config/index',
    //       meta: {
    //         title: '参数设置',
    //         icon: 'edit',
    //         noCache: false,
    //       },
    //     },
    //     {
    //       name: 'Notice',
    //       path: 'notice',
    //       hidden: false,
    //       component: 'system/notice/index',
    //       meta: {
    //         title: '通知公告',
    //         icon: 'message',
    //         noCache: false,
    //       },
    //     },
    //     {
    //       name: 'Log',
    //       path: 'log',
    //       hidden: false,
    //       redirect: 'noRedirect',
    //       component: 'ParentView',
    //       alwaysShow: true,
    //       meta: {
    //         title: '日志管理',
    //         icon: 'log',
    //         noCache: false,
    //       },
    //       children: [
    //         {
    //           name: 'Operlog',
    //           path: 'operlog',
    //           hidden: false,
    //           component: 'monitor/operlog/index',
    //           meta: {
    //             title: '操作日志',
    //             icon: 'form',
    //             noCache: false,
    //           },
    //         },
    //         {
    //           name: 'Logininfor',
    //           path: 'logininfor',
    //           hidden: false,
    //           component: 'monitor/logininfor/index',
    //           meta: {
    //             title: '登录日志',
    //             icon: 'logininfor',
    //             noCache: false,
    //           },
    //         },
    //       ],
    //     },
    //     {
    //       name: 'System/ent/list',
    //       path: 'system/ent/list',
    //       hidden: false,
    //       component: 'ent',
    //       meta: {
    //         title: 'ent',
    //         noCache: false,
    //       },
    //     },
    //   ],
    // },
    // {
    //   name: 'Monitor',
    //   path: '/monitor',
    //   hidden: false,
    //   redirect: 'noRedirect',
    //   component: 'Layout',
    //   alwaysShow: true,
    //   meta: {
    //     title: '系统监控',
    //     icon: 'monitor',
    //     noCache: false,
    //   },
    //   children: [
    //     {
    //       name: 'Online',
    //       path: 'online',
    //       hidden: false,
    //       component: 'monitor/online/index',
    //       meta: {
    //         title: '在线用户',
    //         icon: 'online',
    //         noCache: false,
    //       },
    //     },
    //     {
    //       name: 'Job',
    //       path: 'job',
    //       hidden: false,
    //       component: 'monitor/job/index',
    //       meta: {
    //         title: '定时任务',
    //         icon: 'job',
    //         noCache: false,
    //       },
    //     },
    //     {
    //       name: 'Druid',
    //       path: 'druid',
    //       hidden: false,
    //       component: 'monitor/druid/index',
    //       meta: {
    //         title: '数据监控',
    //         icon: 'druid',
    //         noCache: false,
    //       },
    //     },
    //     {
    //       name: 'Server',
    //       path: 'server',
    //       hidden: false,
    //       component: 'monitor/server/index',
    //       meta: {
    //         title: '服务监控',
    //         icon: 'server',
    //         noCache: false,
    //       },
    //     },
    //     {
    //       name: 'Cache',
    //       path: 'cache',
    //       hidden: false,
    //       component: 'monitor/cache/index',
    //       meta: {
    //         title: '缓存监控',
    //         icon: 'redis',
    //         noCache: false,
    //       },
    //     },
    //     {
    //       name: 'CacheList',
    //       path: 'cacheList',
    //       hidden: false,
    //       component: 'monitor/cache/list',
    //       meta: {
    //         title: '缓存列表',
    //         icon: 'redis-list',
    //         noCache: false,
    //       },
    //     },
    //   ],
    // },
    // {
    //   name: 'Tool',
    //   path: '/tool',
    //   hidden: false,
    //   redirect: 'noRedirect',
    //   component: 'Layout',
    //   alwaysShow: true,
    //   meta: {
    //     title: '系统工具',
    //     icon: 'tool',
    //     noCache: false,
    //   },
    //   children: [
    //     {
    //       name: 'Build',
    //       path: 'build',
    //       hidden: false,
    //       component: 'tool/build/index',
    //       meta: {
    //         title: '表单构建',
    //         icon: 'build',
    //         noCache: false,
    //       },
    //     },
    //     {
    //       name: 'Gen',
    //       path: 'gen',
    //       hidden: false,
    //       component: 'tool/gen/index',
    //       meta: {
    //         title: '代码生成',
    //         icon: 'code',
    //         noCache: false,
    //       },
    //     },
    //     {
    //       name: 'Swagger',
    //       path: 'swagger',
    //       hidden: false,
    //       component: 'tool/swagger/index',
    //       meta: {
    //         title: '系统接口',
    //         icon: 'swagger',
    //         noCache: false,
    //       },
    //     },
    //   ],
    // },
    // {
    //   name: 'Http://ruoyi.vip',
    //   path: 'http://ruoyi.vip',
    //   hidden: false,
    //   component: 'Layout',
    //   meta: {
    //     title: '若依官网',
    //     icon: 'guide',
    //     noCache: false,
    //     link: 'http://ruoyi.vip',
    //   },
    // },
    // {
    //   name: 'Activiti',
    //   path: '/activiti',
    //   hidden: false,
    //   redirect: 'noRedirect',
    //   component: 'Layout',
    //   alwaysShow: true,
    //   meta: {
    //     title: '流程菜单',
    //     icon: 'guide',
    //     noCache: false,
    //   },
    //   children: [
    //     {
    //       name: 'Definition',
    //       path: 'definition',
    //       hidden: false,
    //       component: 'activiti/definition/index',
    //       meta: {
    //         title: '流程定义',
    //         icon: 'qq',
    //         noCache: false,
    //       },
    //     },
    //   ],
    // },
    // {
    //   name: 'Open',
    //   path: '/open',
    //   hidden: false,
    //   redirect: 'noRedirect',
    //   component: 'Layout',
    //   alwaysShow: true,
    //   meta: {
    //     title: '历史流程',
    //     icon: 'eye-open',
    //     noCache: false,
    //   },
    //   children: [
    //     {
    //       name: 'LeaveAll',
    //       path: 'leaveAll',
    //       hidden: false,
    //       component: 'workflow/leave/leaveAll',
    //       meta: {
    //         title: '请假历史',
    //         icon: 'row',
    //         noCache: false,
    //       },
    //     },
    //   ],
    // },
    // {
    //   name: 'OA',
    //   path: '/OA',
    //   hidden: false,
    //   redirect: 'noRedirect',
    //   component: 'Layout',
    //   alwaysShow: true,
    //   meta: {
    //     title: '我的oa',
    //     icon: 'build',
    //     noCache: false,
    //   },
    //   children: [
    //     {
    //       name: 'Leave',
    //       path: 'leave',
    //       hidden: false,
    //       component: 'workflow/leave/index',
    //       meta: {
    //         title: '请假',
    //         icon: 'table',
    //         noCache: false,
    //       },
    //     },
    //   ],
    // },
    // {
    //   name: 'Task',
    //   path: '/task',
    //   hidden: false,
    //   redirect: 'noRedirect',
    //   component: 'Layout',
    //   alwaysShow: true,
    //   meta: {
    //     title: '待办任务',
    //     icon: 'cascader',
    //     noCache: false,
    //   },
    //   children: [
    //     {
    //       name: 'Task',
    //       path: 'task',
    //       hidden: false,
    //       component: 'activiti/task',
    //       meta: {
    //         title: '代办任务',
    //         icon: 'code',
    //         noCache: false,
    //       },
    //     },
    //   ],
    // },
    // {
    //   name: 'Monitentconfig',
    //   path: '/monitentconfig',
    //   hidden: false,
    //   redirect: 'noRedirect',
    //   component: 'Layout',
    //   alwaysShow: true,
    //   meta: {
    //     title: 'monitentconfig',
    //     icon: 'dict',
    //     noCache: false,
    //   },
    //   children: [
    //     {
    //       name: 'Monitentconfig',
    //       path: 'monitentconfig',
    //       hidden: false,
    //       component: 'Layout',
    //       meta: {
    //         title: 'add',
    //         noCache: false,
    //       },
    //     },
    //     {
    //       name: 'Moniusergroup',
    //       path: 'moniusergroup',
    //       hidden: false,
    //       component: 'moniusergroup',
    //       meta: {
    //         title: 'moniusergroup',
    //         noCache: false,
    //       },
    //     },
    //     {
    //       name: 'Monitentconfig',
    //       path: 'monitentconfig',
    //       hidden: false,
    //       component: 'Layout',
    //       meta: {
    //         title: 'list',
    //         noCache: false,
    //       },
    //     },
    //     {
    //       name: 'System/tags',
    //       path: 'system/tags',
    //       hidden: false,
    //       component: 'Layout',
    //       meta: {
    //         title: 'systemtags',
    //         noCache: false,
    //       },
    //     },
    //   ],
    // },
  ]
};
