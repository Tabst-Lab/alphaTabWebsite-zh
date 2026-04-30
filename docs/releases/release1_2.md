---
title: v1.2
---

## v1.2.3

尽管这"只是"一个补丁版本，但有很多东西可以发现。🥳🎉

此版本旨在将 1.3 中已完成的所有改进和错误修复提前发布到 1.2 中，以保持 1.3 的官方 Android 和 iOS 原生支持主题。

衷心感谢所有通过报告错误、提出功能想法和贡献代码更改来为 alphaTab 做出贡献的人！


# 此版本的亮点

## 新功能 💡 

- [通用] alphaTab 的 ES6 模块风格构建。（Issue: #666, PR: #678）
- [通用] 每当播放范围更改时的新事件。（Issue: #732, PR: #782）
- [通用] 用于获取所有音轨和声部中当前播放节拍的新事件。（Issue: #722, PR: #878）
<br/>

- [文件格式] alphaTex 中的 Unicode 字符支持。（Issue: #579, PR: #580）
- [文件格式] alphaTex 中的替代结尾支持。（Issue: #671, PR: #791）感谢 @jonaro00 的贡献。
- [文件格式] alphaTex 中的小调调号支持。（Issue: #875, PR: #880）感谢 @jonaro00 的贡献。
- [文件格式] 向 alphaTex 添加刷弦和琶音支持。（Issue: #505, PR: #799）感谢 @jonaro00 的贡献。
<br/>

- [渲染] 禁用光标动画和元素高亮的新选项（Issue: #558, PR: #644）
- [渲染] 允许使用多个字体系列并带有回退。（Issue: #546, PR: #953）

- [音频] 在可用时使用 AudioWorklets 进行音频播放。（Issue: #480, PR: #642）
- [音频] 公开 MidiTickLookup 以通过给定的 midi 位置手动查找元素。（Discussion: #732, Commit: e8b58506190f776b6987cdcddd5d0a48ab7e2ae8）
<br/>

## 改进 🚀 

- [通用] 改进的 WebPack 支持。我们还没有达到 100% 正确支持所有内容（主要是由于 WebPack 缺少功能，如 AudioWorklets），但情况正在好转。我们计划很快在 https://github.com/CoderLine/alphaTabSamplesWeb 上发布一些扩展示例。
- [通用] 改进的 Node.js 支持。（Issue: #542, PR: #544）
- [通用] 改进的模块导出以获得更好的 TypeScript 兼容性。（Issue: #682, PR: #684）
- [通用] 允许动态更改光标和光标颜色的显示。（Issue: #876, PR: #899）
- [通用] 更多公开的底层 API。（Issue: #897, PR: #956）
- [通用] 允许动态更改移调音高。（Issue: #896, PR: #957）
<br/>

- [渲染] 以不同方式渲染半音符节奏记谱符干（Issue: #602, PR: #605, Discussion: #601）
- [渲染] 避免装饰音完全粘附在前一个音符上（Issue: #604, PR: #606）
- [渲染] 使用原生浏览器平滑滚动（Issue: #558, PR: #644）
- [渲染] 改进元素定位以减少浏览器 CPU 负载（Issue: #558, PR: #644）
- [渲染] 减少光标放置时的 CPU 负载（Issue: #558, PR: #645）
- [渲染] 添加渲染部分的虚拟化显示（Issue: #532, PR: #689）
<br/>

- [音频] 避免由于缓冲导致的音频设置延迟（Issue: #657, PR: #686）
- [音频] 可配置的音频缓冲区大小（Issue: #736, PR: #788）
- [音频] 改进的 WebAudio 上下文暂停/恢复处理（Issue: #760, PR: #768）

<br/>

## 错误修复 🕷️ 

- [通用] 修复颜色的错误解码（Issue: #387, PR: 543）感谢 @kyledecot 的贡献。
- [通用] 修复未通过序列化器发送时的错误乐谱模型（Issue: #551, PR: #610）
- [通用] 修复音符位置的不良检测（Issue: #744, PR: #746）感谢 @gallegretti 的贡献。
- [通用] 允许在 Avalonia 中加载 alphaTab/Skia（Issue: #774, PR: #789）
- [通用] 修复 beat removeNote 函数保留 stringLookup 引用的问题（Issue #932, PR: #933）感谢 @gallegretti 的贡献。
<br/>

- [文件格式] 允许 alphaTex 中的部分以休止符开始（Issue: #683, PR: #685）
- [文件格式] 错误的连音处理和改进的重复组计算（Issue: #865, PR: #898）
- [文件格式] 第一小节上的速度变化处理不正确（Issue: #988, PR: #994）
- [文件格式] 确保 GP5 文件的正确颤音音频（Issue: #1011, PR: #1014）
<br/>

- [渲染] 防止重复的打印对话框/事件（Issue: #844, PR: #846）
- [渲染] 修正调号的错误放置（Issue: #872, PR: #881）
- [渲染] 修正刷弦的错误放置（Issue: #935, PR: #955）
- [渲染] 无法在某些节拍上放置光标（Issue: #959, PR: #960）
<br/>

- [音频] 防止选择反向时的无效播放范围（Issue: #733, PR: #783）
- [音频] 修正导致节拍器行为的时间签名生成（Issue: #567, PR: #574）
- [音频] 确保播放器与 alphaTab 的其余部分一起完全销毁（Issue: #594, PR: #595）
- [音频] 重新设计预备拍和单个音符及节拍的播放（Issue: #758, PR: #787）
- [音频] 光标跳到下一小节（Issue: #976, PR: #888）

## 维护 👷‍♂️

- [通用] TypeScript 升级，使用 `override`
- [通用] 将开发和运行时依赖项更新到最新版本。
- [文件格式] AlphaTexImporter 的更正和简化（PR: #852）感谢 @jonaro00 的贡献。
- [渲染] 将视觉测试套件更新为使用免费字体（Issue: #559, PR: #560）
<br/>

# 所有更改

**Issues:** [v1.2.3](https://github.com/CoderLine/alphaTab/issues?q=is%3Aopen%20is%3Aissue%20project%3Acoderline%2F9)

**完整变更日志**: https://github.com/CoderLine/alphaTab/compare/v1.2.2...v1.2.3

## v1.2.2 - 错误修复版本

在 1.2.x 中引入了一个无意的破坏性更改，与 `Settings.fillFromJson` 相关。此 PR 恢复了与 1.1.0 的 API 兼容性

## 错误修复 🕷️ 

- [通用] 恢复 Settings.fillFromJson 的 API 兼容性（Issue: #674 , PR: #676）感谢 @goodgame365 报告此问题
<br/>

## v1.2.1 - 错误修复版本

自 1.2.0 版本发布以来有两个发现，促使我发布了包含相关修复的 1.2.1：

## 错误修复 🕷️ 

- [渲染]对于 iOS 设备，制表谱数字未垂直居中对齐到线条（Issue: #556, PR: #570）
- [渲染] 确保在使用 `scale` 不同于 1.0 时正确渲染记谱和和弦图（#564）

## v1.2.0

alphaTab 的下一个版本已完成。此版本的主题是：

> 主要重点将是通过避免碰撞和改进一些视觉元素来改善视觉显示。
 
我们尽量避免 API 级别的任何破坏性更改，升级应该可以在不进行任何代码更改的情况下进行。
但存在各种行为更改，你可能希望采用新的设置、值等。

此版本为你带来：

## 在 alphaTab 1.2 中，我们放弃了对 Internet Explorer 的支持 ❗
我们在 1.2 版本中做出的最大更改/决定之一是放弃对 Internet Explorer 的支持。
这使我们能够在性能和更现代的代码方面进行各种改进。
我们进行了一项[投票](https://github.com/CoderLine/alphaTab/discussions/460)，询问放弃 IE 支持是否被普遍接受，但如果你错过了并且需要 Internet Explorer 支持，请通过[讨论](https://github.com/CoderLine/alphaTab/discussions)与我们联系，我们将看看我们能做什么。

## 新功能 💡 

- [通用] .net 平台的 JSON 序列化（Issue: #461, PR: #466, [文档](https://www.alphatab.net/docs/guides/lowlevel-apis/#serialize-data-model-fromto-json)）
<br/>

- [文件格式] Guitar Pro 7 导出器（Issue: #443, PR: #447, [文档](https://www.alphatab.net/docs/guides/exporter)）
- [文件格式] 从 Guitar Pro 3-5 文件的节拍文本中检测歌词（Issue: #402, PR: #506, [文档](https://www.alphatab.net/docs/reference/settings/importer/beattextaslyrics/)）
<br/>

## 改进 🚀 

- [通用] 打印时遵循原始设置并允许额外的打印设置（Issue: #469, PR: #486, [文档](https://www.alphatab.net/docs/reference/api/print/)）
- [通用] 将 alphaTab 编译为 ES6 代码以减小体积并获得更现代的代码（Issue: #508, PR: #512）
- [通用] 更小的版权水印（PR: #512）
- [通用] 删除了各种 polyfills、过时 API 的使用、更好的 SVG 生成（Issue: #509, PR: #514）
<br/>

- [文件格式] 遵循 Guitar Pro 7 文件中的音轨音量（Issue: #446, PR: #445 感谢 @jordanske 的贡献）
- [文件格式] 遵循 MusicXML 文件中的音轨音量和平衡（Issue: #451, PR: #454 感谢 @jordanske 的贡献）
- [文件格式] alphaTex 中的乐器和调音自动检测（Issue: #484, PR: #449）
- [文件格式] 在 Capella 和 MusicXML 中添加对全小节休止符的支持（Issue: #495, PR: #503）
<br />

- [渲染] 新的音符符杠算法，避免休止符上的碰撞（Issue: #296, PR: #491）
- [渲染] 在多音轨渲染情况下渲染多个调音（Issue: #463, PR: #492）
- [渲染] 新的装饰音定位逻辑（Issues: #227, #335, PR: #493）
- [渲染] 为 HTML5 Canvas 渲染高 DPI 图像（Issue: #496, PR: #497）
- [渲染] 在多声部场景中移动休止符（Issue: #355, PR: #502）
- [渲染] 修复了音符、三连音和符杠的各种对齐问题（PR: #502）
- [渲染] 使用 IntersectionObserver 实现更快的延迟加载（Issue: #510, PR: #515）
- [渲染] 使用 ResizeObserver 实现更快/更可靠的调整大小检测（Issue: #511, PR: #516）
<br/>

- [音频] 移除最大音量限制（Issue: #453, PR: #487）
- [音频] `midiLoaded` 事件上的更多数据，用于与外部音频源同步（Discussion: #520, PR: #522）
- [音频] 用于获取节拍器等 midi 事件的新事件（Issue: #450, PR: #523, [文档](https://www.alphatab.net/docs/guides/handling-midi-events)）

## 错误修复 🕷️ 

- [渲染] 修正跨小节连音上的变音记号显示（Issue: #472, PR: #485）
- [渲染] 各种缩放相关问题（Issue: #452, PR: #483）
- [渲染] 为 WinForms 控件添加了新的页面背景属性（替换 Foreground）（Issue: #503）
如果你以前有自定义颜色，请务必设置新的 `NotationBackColor` 属性。
<br/>

- [音频] 修复连音推弦上的错误推弦生成（Issue: #470, PR: #488）

## 维护

- [通用] 自动生成 JSON 序列化代码（Issue: #461, PR: #466）
<br/>
