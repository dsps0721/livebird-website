# LiveBird Website Deployment Guide

本指南将协助您将 LiveBird 网站部署到 Vercel 并绑定 GoDaddy 域名。

## 第一步：准备代码

1.  在 Manus 界面右侧的 **Management UI** 中，点击 **Code** 面板。
2.  点击 **Download All** 下载项目压缩包。
3.  解压下载的文件。
4.  (推荐) 将代码上传到您的 GitHub 仓库。这是使用 Vercel 最简单的方式。

## 第二步：部署到 Vercel

1.  访问 [vercel.com](https://vercel.com) 并登录（推荐使用 GitHub 账号登录）。
2.  点击 **"Add New..."** -> **"Project"**。
3.  选择您刚才上传的 GitHub 仓库并点击 **"Import"**。
4.  在 **Configure Project** 页面：
    *   **Framework Preset**: Vercel 会自动识别为 `Vite`，无需修改。
    *   **Root Directory**: 保持默认 `./`。
    *   **Build Command**: `npm run build` (默认)。
    *   **Output Directory**: `dist` (默认)。
5.  点击 **"Deploy"**。等待约 1 分钟，网站即可部署完成。

## 第三步：配置域名 (Vercel 端)

1.  部署完成后，点击 **"Continue to Dashboard"** 进入项目控制台。
2.  点击顶部的 **"Settings"** 标签。
3.  在左侧菜单选择 **"Domains"**。
4.  在输入框中输入您的域名 `www.livebird.ca`，然后点击 **"Add"**。
5.  Vercel 会提示您推荐的重定向设置（建议将 `livebird.ca` 重定向到 `www.livebird.ca`，或者反之）。选择推荐选项并添加。
6.  此时，Vercel 会显示两个 **Invalid Configuration** 的错误，并给出需要的 DNS 记录值。请保持此页面打开，进行下一步。

## 第四步：配置域名 (GoDaddy 端)

1.  登录您的 [GoDaddy 账户](https://www.godaddy.com)。
2.  进入 **Domain Portfolio** (域名组合)，找到 `livebird.ca`。
3.  点击域名旁边的三个点，选择 **"Edit DNS"** (编辑 DNS)。
4.  您需要添加或修改以下两条记录（根据 Vercel 的提示）：

    **记录 1 (A 记录):**
    *   **Type (类型)**: `A`
    *   **Name (名称)**: `@`
    *   **Value (值)**: `76.76.21.21`
    *   **TTL**: `600` (或默认值)

    **记录 2 (CNAME 记录):**
    *   **Type (类型)**: `CNAME`
    *   **Name (名称)**: `www`
    *   **Value (值)**: `cname.vercel-dns.com`
    *   **TTL**: `600` (或默认值)

    *(注意：如果已存在同名的 A 记录或 CNAME 记录，请修改它们而不是新增，以免冲突。)*

5.  保存更改。

## 第五步：等待生效

1.  回到 Vercel 的 Domains 页面。
2.  DNS 刷新可能需要几分钟到几小时不等（通常在 15 分钟内）。
3.  一旦 Vercel 检测到配置正确，域名状态会变为绿色的 **Valid**。
4.  恭喜！您的网站 `www.livebird.ca` 已经上线了。
