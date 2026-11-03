| [KR 한국어](./ko.md) | [US English](../../README.md) | [JP 日本語](./ja.md) | [CN 简体中文](./zh-CN.md) | [ES Español](./es.md) |
| :---: | :---: | :---: | :---: | :---: |
| [FR Français](./fr.md) | [DE Deutsch](./de.md) | [RU Русский](./ru.md) | [SA العربية](./ar.md) | [IN हिन्दी](./hi.md) |

---

# 你好，我是 Opilnig 👋

系统级程序员、数字信号处理（DSP）狂热爱好者与开源音频极客。致力于利用 Rust 构建确定性的实时音频流处理管道、设计模块化合成器架构，并通过 WebAssembly 探索超低延迟的网页音频体验。

当我没有在逐纳秒排查音频卡顿（缓冲区欠载）或改装上世纪 80 年代的老式模拟硬件时，你通常会发现我在校准电子管放大器、编写专属 DSP 运算内核，或是为底层音频基础设施贡献代码。

---

## 🛠️ 核心研究方向与工程理念

- **实时 DSP 与声音合成**：复音波表引擎、物理声学建模以及零延迟反馈（ZDF）模拟滤波器设计。
- **超低延迟系统工程**：无锁环形缓冲区（Lock-free Ring Buffer）、SIMD 指令集加速数学内核，以及杜绝 GC 停顿的确定性内存控制。
- **嵌入式与 Web 音频桥梁**：将 Rust DSP 代码库无缝交叉编译为原生桌面 VST3/CLAP 插件，以及高性能 WebAssembly/AudioWorklet 模块。

---

## 💻 技术工具箱

| 领域 | 核心技术与工具链 |
| :--- | :--- |
| **底层系统** | Rust, Modern C++ (C++20), C, Zig |
| **音频与 DSP** | WebAssembly, AudioWorklet, SIMD (AVX2/NEON), FAUST, JUCE, CLAP / VST3 |
| **固件与嵌入式** | STM32 (ARM Cortex-M4/M7), ESP32, Teensy, FreeRTOS, Embedded Rust |
| **协议与标准** | MIDI 2.0, OSC (Open Sound Control), I2S, SPI, USB Audio Class 2.0 |
| **开发环境与平台** | Linux (Arch / Debian 实时内核), Git, CMake, Cargo, GDB, Valgrind, Wireshark |

---

## 🚀 进行中的开源项目与实验

### 1. [pulse-dsp](https://github.com/opilnig-rgb)
> 完全使用现代 Rust 编写的零内存分配、无锁模块化 DSP 合成器引擎。配备带限脉冲列（BLIT）振荡器、零延迟反馈梯形滤波器，以及在 192kHz 采样率下实现低于 1 毫秒往返延迟的可扩展跳线矩阵。

### 2. [wasm-audio-canvas](https://github.com/opilnig-rgb)
> 借助 WebAssembly 和 AudioWorklet 在浏览器中以原生速度运行的高吞吐量交互式音频可视化工具与节点式模块化机架。由 SharedArrayBuffer 与无锁原子队列强力驱动。

### 3. [midi2-router](https://github.com/opilnig-rgb)
> 超轻量级、跨平台的 MIDI 2.0 通用数据包（UMP）路由器与协议分析器。支持单音高精度弯音、触后动态建模及双向设备智能发现。

### 4. [analog-modeler](https://github.com/opilnig-rgb)
> 结合改进节点分析法（MNA）与牛顿-拉弗森（Newton-Raphson）数值求解器，对经典模拟跨导运算放大器（OTA）及二极管削波电路进行精确的非线性离散模拟。

---

## 📊 代码哲学与匠人精神

```rust
pub trait AudioProcessor: Send {
    /// 杜绝堆内存分配的纯净确定性音频块处理
    fn process_block(&mut self, input: &[f32], output: &mut [f32], sample_rate: f64);
}
```

- **热路径零分配（Zero Allocation in Hot Paths）**：音频实时线程绝对不能因 malloc、文件 I/O 或互斥锁发生阻塞。
- **确定性数学计算**：所有数值运算必须达到位级精确，保持有界，并彻底消除非正规浮点数（Denormal floats）陷阱。
- **坚守开放标准**：拒绝私有供应商绑定，打造跨平台、高可互操作性的开源工具链。

---

## 🎧 硬件实验室与工作台

- **示波器**：Rigol DS1054Z 四通道数字存储示波器
- **音频接口**：RME Babyface Pro FS（SteadyClock FS 超低抖动时钟）
- **监听音箱与耳机**：Genelec 8030C, Sennheiser HD600（扩散场校准）
- **模块化设备**：Eurorack 自定义机箱、Mutable Instruments 复刻模块、Teensy 4.1 开发板

---

## 📫 交流与技术探讨

- **GitHub Discussions**：欢迎随时在仓库中发起 Issue 或 Discussions，探讨 DSP 算法、音频引擎架构或调制补丁思路。
- **热衷探讨的技术课题**：滤波器拓扑结构、抗混叠算法、实时无锁内存环、DIY 模块化合成器电路图。
- **现阶段目标**：发布完全由纯开源 Rust 打造的跨平台原生 CLAP/VST3 音频插件套件。

---

*“输入精准二进制，流淌至臻天籁音。让延迟无限逼近于零。”*
