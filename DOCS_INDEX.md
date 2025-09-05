# 📚 KatelyaTV 文档快速索引

## 🔍 快速查找

### 按问题症状查找

#### 🚨 紧急问题（影响正常使用）

| 症状描述                             | 推荐解决方案       | 文档链接                                                             |
| ------------------------------------ | ------------------ | -------------------------------------------------------------------- |
| 🔒 成人内容过滤开关卡住，无法切换    | 完整过滤系统修复   | [ADULT_CONTENT_FILTER_SOLUTION.md](ADULT_CONTENT_FILTER_SOLUTION.md) |
| 🗄️ 管理员页面显示"获取配置失败"      | D1 数据库表修复    | [D1_DATABASE_CHECK.md](D1_DATABASE_CHECK.md)                         |
| ☁️ Cloudflare Pages 部署一直失败     | Pages 部署完整修复 | [CLOUDFLARE_PAGES_FIX.md](CLOUDFLARE_PAGES_FIX.md)                   |
| 🆔 部署时显示"Invalid database UUID" | 数据库 ID 配置问题 | [D1_DATABASE_ID_FIX.md](D1_DATABASE_ID_FIX.md)                       |
| 📱 TVBox 配置接口返回错误            | TVBox 兼容性修复   | [docs/TVBOX_CONFIG_FIX.md](docs/TVBOX_CONFIG_FIX.md)                 |

#### ⚠️ 构建和部署问题

| 症状描述                            | 推荐解决方案         | 文档链接                                     |
| ----------------------------------- | -------------------- | -------------------------------------------- |
| 🏗️ Windows 构建失败，EPERM 权限错误 | Windows 权限问题修复 | [WINDOWS_BUILD_FIX.md](WINDOWS_BUILD_FIX.md) |
| ⚙️ wrangler.toml 配置验证失败       | 配置文件修复         | [WRANGLER_TOML_FIX.md](WRANGLER_TOML_FIX.md) |
| 🗄️ 数据库连接失败，表不存在         | 数据库迁移与修复     | [D1_MIGRATION.md](D1_MIGRATION.md)           |

### 按功能模块查找

#### 🔒 成人内容过滤系统

| 文档类型               | 文档名称                                                             | 适用场景                     |
| ---------------------- | -------------------------------------------------------------------- | ---------------------------- |
| 🛠️ **完整解决方案**    | [ADULT_CONTENT_FILTER_SOLUTION.md](ADULT_CONTENT_FILTER_SOLUTION.md) | 系统架构、实现原理、故障排除 |
| 🧪 **功能测试验证**    | [ADULT_CONTENT_FILTER_TEST.md](ADULT_CONTENT_FILTER_TEST.md)         | 功能测试、验证步骤           |
| ☁️ **Cloudflare 专项** | [CLOUDFLARE_PAGES_ADULT_FILTER.md](CLOUDFLARE_PAGES_ADULT_FILTER.md) | Pages 部署专门配置           |

#### 🗄️ 数据库系统

| 文档类型          | 文档名称                                       | 适用场景                |
| ----------------- | ---------------------------------------------- | ----------------------- |
| 🔍 **诊断与修复** | [D1_DATABASE_CHECK.md](D1_DATABASE_CHECK.md)   | 数据库问题诊断、表修复  |
| 🔄 **数据迁移**   | [D1_MIGRATION.md](D1_MIGRATION.md)             | 旧版本数据库升级        |
| 🆔 **配置修复**   | [D1_DATABASE_ID_FIX.md](D1_DATABASE_ID_FIX.md) | 数据库连接配置问题      |
| ⚙️ **管理员配置** | [ADMIN_CONFIG_FIX.md](ADMIN_CONFIG_FIX.md)     | admin_config 表相关问题 |

#### ☁️ 部署平台

| 部署平台             | 主要文档                                               | 补充文档                                     |
| -------------------- | ------------------------------------------------------ | -------------------------------------------- |
| **Cloudflare Pages** | [CLOUDFLARE_PAGES_FIX.md](CLOUDFLARE_PAGES_FIX.md)     | [WRANGLER_TOML_FIX.md](WRANGLER_TOML_FIX.md) |
| **Windows 开发**     | [WINDOWS_BUILD_FIX.md](WINDOWS_BUILD_FIX.md)           | -                                            |
| **Docker 部署**      | [DOCKER_TROUBLESHOOTING.md](DOCKER_TROUBLESHOOTING.md) | -                                            |
| **TVBox 兼容**       | [docs/TVBOX_CONFIG_FIX.md](docs/TVBOX_CONFIG_FIX.md)   | [docs/TVBOX.md](docs/TVBOX.md)               |

## 🎯 使用建议

### 新用户推荐流程

1. **首次部署**：先阅读 [README.md](README.md) 的部署方案选择
2. **遇到问题**：使用本索引快速定位解决方案
3. **深入了解**：阅读对应的完整文档

### 问题排查优先级

1. **🚨 紧急问题**：直接查看对应的专项修复文档
2. **⚠️ 构建部署问题**：先检查平台兼容性文档
3. **🔧 功能配置问题**：查看功能模块的完整解决方案

### 文档维护说明

这些文档是基于实际问题修复过程创建的，涵盖了：

- ✅ 实际遇到的故障和错误
- ✅ 经过验证的解决方案
- ✅ 步骤详细的操作指南
- ✅ 防范措施和最佳实践

## 📞 获得帮助

如果文档无法解决你的问题：

1. **查看 Issues**：[GitHub Issues](https://github.com/katelya77/KatelyaTV/issues)
2. **提交新问题**：提供详细的错误信息和环境描述
3. **参与讨论**：[GitHub Discussions](https://github.com/katelya77/KatelyaTV/discussions)

## 📝 文档更新

这些文档会持续更新，包含：

- 🆕 新发现的问题和解决方案
- 🔄 已有方案的优化和改进
- 📚 更多平台和场景的支持

---

_📅 最后更新：2025 年 9 月 5 日_
_🤝 贡献者：KatelyaTV Community_
