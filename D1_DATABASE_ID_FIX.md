# Cloudflare Pages 部署最后一步：配置 D1 数据库绑定

## 🎉 好消息：构建完全成功！

从部署日志可以确认：

- ✅ wrangler.toml 配置问题已解决
- ✅ Next.js 构建成功（无错误）
- ✅ 所有 API 路由正确转换为 Edge Functions
- ✅ 文件上传成功

## 🔧 最后一步：配置真实的 D1 数据库 ID

### 问题

```
Error 8000022: Invalid database UUID (your-d1-database-id-here)
```

### 解决方案

**方法 1：在 wrangler.toml 中配置（推荐）**

1. 获取你的 D1 数据库 ID：

   - 登录 Cloudflare Dashboard
   - 进入 **D1** 部分
   - 找到你的数据库
   - 复制 **Database ID**（类似：`a1b2c3d4-e5f6-7890-abcd-ef1234567890`）

2. 更新 `wrangler.toml` 文件第 47 行：
   ```toml
   [[env.production.d1_databases]]
   binding = "DB"
   database_name = "katelyatv-db"  # 这个可以自定义
   database_id = "你的真实数据库ID"  # 替换这里
   ```

**方法 2：在 Cloudflare Pages 控制台中配置**

1. 进入 Cloudflare Pages → 你的项目 → Settings → Functions
2. 找到 **D1 database bindings** 部分
3. 添加绑定：
   - **Variable name**: `DB`
   - **D1 database**: 选择你的数据库

### 完成后

1. **如果修改了 wrangler.toml**：

   ```bash
   git add wrangler.toml
   git commit -m "fix: Update D1 database ID for production deployment"
   git push
   ```

2. **Cloudflare Pages 会自动重新部署**

3. **验证部署成功**：
   - 访问你的网站
   - 检查 `/admin` 页面是否正常
   - 测试成人内容过滤功能

## 🎯 预期结果

修复后，你应该看到：

- ✅ Cloudflare Pages 部署成功
- ✅ `/admin` 页面正常加载（不再显示"获取配置失败"）
- ✅ 所有功能正常工作，包括成人内容过滤
- ✅ D1 数据库正确连接

## 📝 提醒

- 数据库 ID 是唯一标识符，必须准确
- 不要把数据库 ID 和数据库名称搞混了
- 如果找不到数据库 ID，可以在 Cloudflare D1 控制台中查看数据库详情

你现在距离完全成功只差这一步了！🚀
