---
title: v1.3
---

## v1.3.1 - 错误修复版本

这是一个错误修复版本，改进了与 WebPack 和 Next.js 的集成

## 错误修复 🕷️ 
fix(webpack): 使用传递给插件的 webpack 实例，由 @Danielku15 在 https://github.com/CoderLine/alphaTab/pull/1539 中完成
fix: 源映射不应包含在 NPM 包中，由 @Danielku15 在 https://github.com/CoderLine/alphaTab/pull/1540 中完成

**完整变更日志**: https://github.com/CoderLine/alphaTab/compare/v1.3.0...v1.3.1

## v1.3.0

alphaTab 终于发布了新版本。此版本的亮点功能是原生 Android 支持，允许你直接在 Android Views 应用程序中将 alphaTab 用作 Kotlin 库。

衷心感谢所有通过报告错误、提出功能想法和贡献代码更改来为 alphaTab 做出贡献的人！

由于之前版本中的合并错误，创建此版本与之前版本的可靠差异有点麻烦。我希望我没有在发布说明中遗漏任何值得一提的功能或更改。

## 新功能 💡 

### 支持原生 Android 应用

这是此版本的亮点功能。我们在编译管道中添加了"用于 Android 的 Kotlin"目标，现在提供了一个原生 Android (Views) 控件，可在 Android 应用中使用。功能范围类似于我们在 .net WPF 中已经支持的内容，包括渲染、交互性、播放器、播放光标等，全部内置。

我们依赖你的反馈来改进平台支持的稳定性、功能和性能。

* https://alphatab.net/docs/getting-started/installation-android
* https://alphatab.net/docs/tutorial-android/introduction
* https://github.com/CoderLine/alphaTabSamplesAndroid

### 打包器和前端框架支持
> 在 https://github.com/CoderLine/alphaTab/pull/1386 中添加完整的 WebPack 支持，由 @Danielku15 完成
> 在 https://github.com/CoderLine/alphaTab/pull/1386 中添加 Vite 插件，由 @Danielku15 完成

通过此版本，我们最终实现了与现代打包器（如 WebPack 和 Vite）的兼容性，这些打包器用于 Angular、React 和 Vue 等前端框架。

为此，我们创建了打包器插件，负责正确的配置和打包方面，以便所有功能（如 Web Workers 和 Audio Worklets）都能 quasi 开箱即用。查看我们的指南和示例，了解如何将 alphaTab 集成到你的前端应用中。

* https://alphatab.net/docs/getting-started/installation-webpack
* https://alphatab.net/docs/getting-started/installation-vite
* https://github.com/CoderLine/alphaTabSamplesWeb

### 系统布局自定义

> 在 https://github.com/CoderLine/alphaTab/pull/1197 中添加对系统布局自定义的支持，由 @Danielku15 完成

通过这个新选项，你可以告诉 alphaTab 使用嵌入在数据模型中的布局信息，这些信息可能从 Guitar Pro 等格式中读取。此信息可能包括系统（单行包含多个谱表）中有多少小节以及这些小节在系统内的相对缩放等信息。

参见 https://alphatab.net/docs/reference/settings/display/systemslayoutmode 了解更多详情

### 允许最后一行对齐

> 在 https://github.com/CoderLine/alphaTab/pull/1240 中添加允许最后一行对齐的选项，由 @Danielku15 完成

通过这个新选项，你可以选择最后一行也对齐到页面宽度。通常，小节只在一行被认为已满且我们进行换行时才会对齐。但此选项允许你也对齐这最后一行，它可能仍有空间。

参见 https://next.alphatab.net/docs/reference/settings/display/justifylastsystem#description 了解更多详情

### alphaSkia 作为渲染引擎

> 在 https://github.com/CoderLine/alphaTab/pull/1292 中集成 alphaSkia，由 @Danielku15 完成

通过 [alphaSkia](https://github.com/CoderLine/alphaSkia)，我们创建了自己的跨平台绘图库，以实现 alphaTab 在所有平台上的一致渲染体验。此引擎包装了 [Skia](https://skia.org/)，这是 Google 开发的流行 2D 图形库，用于 Google Chrome、Android 和 Mozilla Firefox 等许多产品中。

此引擎可用于：

* .net（替代 SkiaSharp）
* Java/Kotlin（替代 Skija）
* Node.js（替代 node-canvas 等库）。

alphaSkia 目前专注于 alphaTab，但根据兴趣，它可能会发展成为一个适用于许多平台的完整 HTML5 画布类库。

## 改进 🚀 

### 重新设计的 Midi Tick 查找

> 重新设计用于光标放置和高亮的 Tick 查找机制。在 https://github.com/CoderLine/alphaTab/pull/1328 中，由 @Danielku15 完成
> 在 https://github.com/CoderLine/alphaTab/pull/1334 中处理新的 tick 查找的附加情况，由 @Danielku15 完成
> fix: 开始和结束时间必须相对于 masterbar 而不是绝对的，在 https://github.com/CoderLine/alphaTab/pull/1393 中，由 @Danielku15 完成

此版本中的一个关键改进和更改是重新设计的"Midi Tick 查找"。此组件负责在播放期间高效地将给定的 midi tick 位置转换为正在播放的小节和节拍。此组件是播放期间放置光标和突出显示任何当前播放元素的关键部分。

通过此次改进，你应该不会再遇到任何光标位置错误、跳过项目或未突出显示音符的情况。

### alphaTex 扩展

特别感谢 @jonaro00 对 alphaTex 的各种改进，包括错误报告方面的改进和一些支持元素的扩展。

* 各种代码改进。AlphaTexImporter 小错误修复。在 https://github.com/CoderLine/alphaTab/pull/1043 中，由 @jonaro00 完成
* AlphaTex 错误改进。行/列号。在 https://github.com/CoderLine/alphaTab/pull/1059 中，由 @jonaro00 完成
* feat(alphaTex): 允许将速度指定为字符串中的浮点数，在 https://github.com/CoderLine/alphaTab/pull/1356 中，由 @jonaro00 完成

### 改进的装饰音定位

我们再次不得不与我们的老对手——装饰音作斗争。由于它们在定位和时值处理方面的特殊需求，它们是音符定位问题的常见原因。我们再次解决了一些与装饰音定位相关的问题。

* 调整装饰音定位以利用空闲空间，在 https://github.com/CoderLine/alphaTab/pull/1094 中，由 @Danielku15 完成
* 处理新查找逻辑中的空小节和拍前装饰音，在 https://github.com/CoderLine/alphaTab/pull/1347 中，由 @Danielku15 完成

### MusicXML 扩展

我们的 MusicXML 支持也通过新功能或现有功能的调整得到了一些改进。除了和弦图的显示外，还对连音的处理进行了一些改进。

* 正确处理没有 diagram 元素的 ChordCollection 项目。在 https://github.com/CoderLine/alphaTab/pull/1211 中，由 @Danielku15 完成
* 改进 mxml 的连音处理，在 https://github.com/CoderLine/alphaTab/pull/1219 中，由 @Danielku15 完成
* 在 https://github.com/CoderLine/alphaTab/pull/1299 中，由 @coluzziandrea 完成，为 MusicXML 导入器添加了对和弦的支持

### SMF1.0 兼容的 MIDI 文件导出

> 在 https://github.com/CoderLine/alphaTab/pull/1239 中添加 SMF1.0 兼容的 MIDI 文件导出，由 @Danielku15 完成

alphaTab 在内部使用与 MIDI 标准对齐的结构来处理歌曲的播放。为了正确处理所有播放，我们还使用了一些来自 Midi 2.0 的事件和结构（每个音符的弯音）。但不幸的是，这导致了与标准 MIDI 文件格式 1.0 的不兼容。SMF2.0 文件标准在许多年后仍未准备好，市场上没有对这些事件的真正支持。

为了恢复与仅支持 SMF 1.0 的应用程序的兼容性，我们添加了专门的 SMF 1.0 导出功能。

* https://next.alphatab.net/docs/guides/lowlevel-apis#generating-midi-files-via-midifilegenerator

如果需要，将来我们还将支持新的 Midi 2.0 文件格式。

### 和弦统一
> 在 https://github.com/CoderLine/alphaTab/pull/1216 中删除重复和弦，由 @AdamSEY 完成

通过此次改进，我们现在根据和弦的定义检测相同的和弦，并确保它们只在和弦图中显示一次。这应该可以减少和弦图中的噪音，因为重复可能由于文件格式设计而发生。

### 移调音高的动态更改
> 允许动态更改移调音高。在 https://github.com/CoderLine/alphaTab/pull/1309 中，由 @Danielku15 完成

通过此次改进，移调音高更改得到了遵循。在此之前，单独提供的音高只在加载乐谱时应用一次。这阻止了开发者开发用户可以根据自己的偏好动态更改移调的功能。现在，此改进在需要时以更动态的方式处理音高。

### 其他
* 在 https://github.com/CoderLine/alphaTab/pull/1241 中分析、记录和修复 PartConfiguration 处理，由 @Danielku15 完成
* 在 https://github.com/CoderLine/alphaTab/pull/1243 中修复：允许导入使用 displayScale 作为 Float xml 节点的 gpx 文件，由 @allandiego 完成

## 错误修复 🕷️ 

* 在 https://github.com/CoderLine/alphaTab/pull/1026 中修复导致 GP7 导出器失败的空/未定义歌词，由 @Danielku15 完成（修复 https://github.com/CoderLine/alphaTab/issues/1025）
* 在 https://github.com/CoderLine/alphaTab/pull/1028 中修复 GP5 中替代结尾的错误读取，由 @Danielku15 完成（修复 https://github.com/CoderLine/alphaTab/issues/1023）
* 在 https://github.com/CoderLine/alphaTab/pull/1054 中修复替代结尾上的错误重复，由 @Danielku15 完成（修复 https://github.com/CoderLine/alphaTab/issues/1046）
* 在 https://github.com/CoderLine/alphaTab/pull/1055 中确保在获取节拍播放位置时遵循重复，由 @Danielku15 完成（修复 https://github.com/CoderLine/alphaTab/issues/1047）
* 在 https://github.com/CoderLine/alphaTab/pull/1053 中修复谱表末尾的滑音渲染，由 @Danielku15 完成（修复 https://github.com/CoderLine/alphaTab/issues/1045）
* 在 https://github.com/CoderLine/alphaTab/pull/1091 中确保我们不为空部分向 UI 外观发送信号，由 @Danielku15 完成（修复 https://github.com/CoderLine/alphaTab/issues/1090）
* 在 https://github.com/CoderLine/alphaTab/pull/1148 中防止部分的重复渲染请求，由 @Danielku15 完成（修复 https://github.com/CoderLine/alphaTab/issues/1147）
* 在 https://github.com/CoderLine/alphaTab/pull/1149 中修复播放范围内的损坏预备拍，由 @Danielku15 完成（修复 https://github.com/CoderLine/alphaTab/issues/1140）
* 在 https://github.com/CoderLine/alphaTab/pull/1223 中处理多声部效果场景中缺少的效果带，由 @Danielku15 完成（修复 https://github.com/CoderLine/alphaTab/issues/1200）
* 在 https://github.com/CoderLine/alphaTab/pull/1329 中修复与 alphaSkia 相关的 .net 问题，修复播放器相关问题，由 @Danielku15 完成（修复 https://github.com/CoderLine/alphaTab/issues/1288）
* 在 https://github.com/CoderLine/alphaTab/pull/1330 中修复仅在播放时合成样本的刺耳噪音，由 @Danielku15 完成（修复 https://github.com/CoderLine/alphaTab/issues/1298）


## 维护 👷‍♂️

### 改进的 GitHub Actions 工作流
我们对构建系统进行了各种改进，并使其保持最新，包括任何依赖项和新实践。

* 在 https://github.com/CoderLine/alphaTab/pull/1027 中更改运行者并更新工作流，由 @Danielku15 完成
* 在 https://github.com/CoderLine/alphaTab/pull/1113 中修复和清理发布工作流，由 @jonaro00 完成（修复 https://github.com/CoderLine/alphaTab/issues/1112）

### 面向 .net 8.0
> chore: 面向 net8.0 #1465

由于 .net 6.0 现已停止支持，我们将 .net Windows 库（WPF/WinForms）的目标定为新的 LTS 版本 .net 8.0。核心库仍然面向 .netstandard 2.0。

### 其他

* 在 https://github.com/CoderLine/alphaTab/pull/1041 中清理 README，由 @jonaro00 完成
* 在 https://github.com/CoderLine/alphaTab/pull/1042 中更新/简化 npm 脚本，由 @jonaro00 完成
* 在 https://github.com/CoderLine/alphaTab/pull/1061 中优化 TS 生成器，从生成的文件中删除尾随空格，由 @jonaro00 完成
* 在 https://github.com/CoderLine/alphaTab/pull/1274 中导出更多内部内容，由 @Danielku15 完成
