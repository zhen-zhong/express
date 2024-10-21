project/
│
├── node_modules/              # npm 依赖项
├── src/                       # 所有源码文件存放的目录
│   ├── app.ts                 # Express 应用的配置
│   ├── index.ts               # 服务器启动文件
│   ├── routes/                # 路由文件夹
│   │   ├── api/               # 具体API路由
│   │   │   ├── userRoutes.ts  # 用户相关路由
│   │   │   └── businessRoutes.ts  # 业务相关路由
│   │   └── index.ts           # 路由入口文件
│   ├── controllers/           # 控制器文件夹
│   │   ├── users/             # 用户控制器逻辑
│   │   │   ├── registerUser.ts
│   │   │   ├── loginUser.ts
│   │   │   └── changePassword.ts
│   │   └── business/          # 业务控制器逻辑（可选）
│   ├── db.ts                  # 数据库连接文件
│   └── middleware/            # 中间件文件（可选，用于权限验证、日志等）
│
├── .env                       # 环境变量文件
├── package.json               # 项目配置文件（npm依赖）
├── tsconfig.json              # TypeScript 配置文件
└── README.md                  # 项目文档
