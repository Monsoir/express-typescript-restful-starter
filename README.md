# express-typescript-restful-starter

Express + TypeScript + RESTful API 的项目基础模版

## 创建项目

```sh
git clone https://github.com/Monsoir/express-typescript-restful-starter.git <project name>
```

## 命令

```json
"start": "node ./built/www.js", // 直接从生成的 JS 文件运行项目
"compile": "node ./node_modules/typescript/bin/tsc -p ./src", // 编译 TS 文件生成 JS
"compile-run": "npm run compile && npm start" // 编译 TS 文件，生成 JS 文件后，运行项目
```

