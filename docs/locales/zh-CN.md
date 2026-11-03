| [KR 한국어](./ko.md) | [US English](../../README.md) | [JP 日本語](./ja.md) | [CN 简体中文](./zh-CN.md) | [ES Español](./es.md) |
| :---: | :---: | :---: | :---: | :---: |
| [FR Français](./fr.md) | [DE Deutsch](./de.md) | [RU Русский](./ru.md) | [SA العربية](./ar.md) | [IN हिन्दी](./hi.md) |

---

# 你好，我是 Opilnig 👋

资深系统级程序员、数字信号处理（DSP）专家与高性能音频软件工程师。专注于利用 Rust 构建确定性的实时音频系统、设计模块化合成器架构，并通过 WebAssembly 打造具备原生性能的网页音频软件。

我的技术追求聚焦于微秒级的时序精度、数值分析的鲁棒性以及对缓存友好的系统架构设计。在代码之外，我常年进行分立模拟电路的台面测试、电子管放大器校准以及定制 DSP 滤波器的算法设计。

---

## 🛠️ 专业工程领域与设计理念

- **确定性实时音频**：构建无堆分配（Zero-allocation）的音频渲染线程、无锁环形缓冲区（Lock-free Ring Buffer），以及杜绝卡顿的确定性时限 DSP 循环。
- **高性能数值计算**：设计 SIMD 加速向量运算内核（AVX2/NEON）、零延迟反馈（ZDF）模拟滤波器拓扑以及非线性电路数值求解器。
- **跨平台音频架构**：构建可在桌面插件标准（CLAP、VST3）与浏览器 AudioWorklet 之间高度复用的 Rust 与现代 C++ 代码库。
- **稳健的系统工程**：确保严格的并发不变性、内存安全，并在所有目标环境中验证确定性行为。

---

## 💻 技术工具箱

| 领域 | 核心技术与工具链 |
| :--- | :--- |
| **底层系统** | Rust, Modern C++ (C++20), C, Zig |
| **音频与 DSP** | WebAssembly, AudioWorklet, SIMD (AVX2/NEON), FAUST, JUCE, CLAP / VST3 |
| **固件与嵌入式** | STM32 (ARM Cortex-M4/M7), ESP32, Teensy, FreeRTOS, Embedded Rust |
| **协议与 I/O** | MIDI 2.0 (UMP), OSC (Open Sound Control), I2S, SPI, USB Audio Class 2.0 |
| **平台与分析工具** | Linux (实时内核), Git, CMake, Cargo, GDB, Valgrind, Perf, Wireshark |

---

## 🚀 核心开源项目

### 1. [pulse-dsp](https://github.com/opilnig-rgb)
> 纯 Rust 实现的零堆分配、无锁模块化 DSP 合成器引擎。配备带限脉冲列（BLIT）振荡器、零延迟反馈梯形滤波器，以及在 192 kHz 下实现低于 1 毫秒往返延迟的可扩展复音跳线矩阵。

### 2. [wasm-audio-canvas](https://github.com/opilnig-rgb)
> 借助 WebAssembly 和 AudioWorklet 在浏览器中以原生速度运行的高吞吐量交互式音频可视化工具与节点式模块化机架。基于 SharedArrayBuffer 与无锁原子队列构建。

### 3. [midi2-router](https://github.com/opilnig-rgb)
> 超轻量级、跨平台的 MIDI 2.0 通用数据包（UMP）路由器与协议分析器。支持单音高精度弯音、触后动态建模及双向设备智能发现。

### 4. [analog-modeler](https://github.com/opilnig-rgb)
> 结合改进节点分析法（MNA）与阻尼牛顿-拉弗森（Newton-Raphson）数值求解器，对经典模拟跨导运算放大器（OTA）及二极管削波电路进行精确的非线性离散模拟。

---

## 📊 代码哲学与架构原则

```rust
pub trait AudioProcessor: Send {
    /// 杜绝堆分配与线程锁的纯净确定性音频块处理
    fn process_block(&mut self, input: &[f32], output: &mut [f32], sample_rate: f64);
}
```

- **热路径零分配（Zero Allocation in Hot Paths）**：实时音频线程绝不能因 malloc、文件 I/O 或互斥锁发生阻塞。
- **确定性数学计算**：所有浮点运算必须达到位级精确，保持有界，并彻底消除非正规浮点数（Denormal）的性能陷阱。
- **拥抱开放标准**：拒绝专有供应商绑定，打造跨操作系统完全互操作的整洁软件。

---

## 🎧 硬件实验室与测试仪器

- **测试仪器**：Rigol DS1054Z 四通道数字存储示波器
- **音频接口**：RME Babyface Pro FS（SteadyClock FS 超低抖动参考时钟）
- **监听音箱与耳机**：Genelec 8030C 有源监听、Sennheiser HD600（扩散场校准）
- **模块化设备**：Eurorack 自定义机箱、分立模拟滤波器模块、Teensy 4.1 开发板

---

## 📫 交流与技术探讨

- **GitHub Discussions**：欢迎随时在仓库中发起 Issue 或 Discussions，探讨 DSP 算法、音频引擎架构或合成器电路。
- **专业探讨课题**：滤波器拓扑结构、抗混叠算法、实时无锁并发数据结构、分立模拟电路仿真。
- **现阶段目标**：发布完全由纯开源 Rust 打造的生产级跨平台 CLAP/VST3 音频插件套件。

---

*“整洁的架构，确定性的执行，以及无限逼近于零的延迟。”*
