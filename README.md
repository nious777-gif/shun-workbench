# 顺 · 个人玄机工作台

单用户、本地优先。传统文化 / 娱乐参考，不提供确定性决策建议。

## 隐私
- 出生档案、排盘、合盘、收藏与设置以 AES-256-GCM 加密保存于浏览器 IndexedDB。
- PBKDF2-SHA256 600000 次派生密钥；密码不上传、不持久保存，忘记无法恢复。
- 解锁后内存含明文；加密不防御恶意浏览器扩展、被攻陷的设备或被篡改的站点代码。
- 导出 JSON 默认加密。旧版明文库需在设置里手动迁移；旧备份文件不会自动改变。
- 无云同步、无统计追踪。访问站点仍会向 GitHub 发送常规网络请求；不要把备份提交到仓库。
- GitHub Pages 是静态托管，不提供 AI 代理；保持 AI 关闭。

## 发布文件
仓库根目录为构建产物；Settings → Pages → Deploy from a branch → main / (root)。
shun-source.zip 是可重建源码，不包含个人数据、密钥、截图或本机历史文档。

## 重建
解压源码，使用 Node.js 22 和 pnpm，执行：

    pnpm install --frozen-lockfile
    pnpm test
    pnpm exec tsc --noEmit
    pnpm exec vite build --base /shun-workbench/ --outDir release

上传 release 中的文件到仓库根目录。源码附带可选 Actions 工作流；当前网页上传版本采用分支发布。

## 验证范围
48 项自动化测试通过。排盘精度仍需专业对照与人工复核；二十七宿关系不编造。加密实现未做独立安全审计。
