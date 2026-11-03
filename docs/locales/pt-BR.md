| [KR 한국어](./ko.md) | [US English](../../README.md) | [JP 日本語](./ja.md) | [CN 简体中文](./zh-CN.md) | [ES Español](./es.md) |
| :---: | :---: | :---: | :---: | :---: |
| [FR Français](./fr.md) | [DE Deutsch](./de.md) | [RU Русский](./ru.md) | [SA العربية](./ar.md) | [IN हिन्दी](./hi.md) |

---

# Olá, eu sou o Opilnig 👋

Programador de sistemas, entusiasta de processamento digital de sinais (DSP) e hacker de áudio open-source. Passo meus dias projetando pipelines de áudio determinísticos em tempo real com Rust, construindo arquiteturas de sintetizadores modulares e explorando áudio web de latência zero através de WebAssembly.

Quando não estou caçando quedas de áudio em escala de nanossegundos (buffer underruns) ou modificando circuitos analógicos clássicos dos anos 80 (circuit bending), você me encontrará calibrando amplificadores valvulados, escrevendo kernels de cálculo DSP personalizados ou contribuindo para a infraestrutura de áudio de baixo nível.

---

## 🛠️ Foco Principal e Filosofia de Engenharia

- **DSP em Tempo Real e Síntese Sonora**: Criação de motores wavetable polifônicos, modelagem física acústica e filtros analógicos com feedback de atraso zero (Zero-Delay Feedback - ZDF).
- **Engenharia de Sistemas de Ultra Baixa Latência**: Buffers circulares livres de bloqueio (lock-free ring buffers), kernels matemáticos acelerados por SIMD e gerenciamento determinístico de memória sem pausas de coleta de lixo (GC).
- **Pontes entre Áudio Embarcado e Web**: Compilação cruzada de bases de código Rust DSP tanto para plugins nativos de desktop VST3/CLAP quanto para módulos de alta performance em WebAssembly/AudioWorklet.

---

## 💻 Repertório Técnico

| Categoria | Principais Tecnologias e Toolchains |
| :--- | :--- |
| **Sistemas Centrais** | Rust, Modern C++ (C++20), C, Zig |
| **Áudio & DSP** | WebAssembly, AudioWorklet, SIMD (AVX2/NEON), FAUST, JUCE, CLAP / VST3 |
| **Firmware & Embarcados** | STM32 (ARM Cortex-M4/M7), ESP32, Teensy, FreeRTOS, Embedded Rust |
| **Protocolos & Padrões** | MIDI 2.0, OSC (Open Sound Control), I2S, SPI, USB Audio Class 2.0 |
| **Ferramentas & Plataformas** | Linux (Arch / Debian com kernel de tempo real), Git, CMake, Cargo, GDB, Valgrind, Wireshark |

---

## 🚀 Projetos Ativos e Experimentos

### 1. [pulse-dsp](https://github.com/opilnig-rgb)
> Motor de síntese modular DSP sem alocações dinâmicas de memória (zero-allocation) e livre de bloqueios, escrito inteiramente em Rust moderno. Conta com osciladores de trem de impulsos com limitação de banda (BLIT), filtros ladder ZDF e uma matriz de patch extensível operando a 192 kHz com latência de ida e volta inferior a um milissegundo.

### 2. [wasm-audio-canvas](https://github.com/opilnig-rgb)
> Visualizador de áudio interativo e rack modular baseado em nós executado em velocidade nativa no navegador via WebAssembly e AudioWorklet. Alimentado por SharedArrayBuffer e filas atômicas sem travas.

### 3. [midi2-router](https://github.com/opilnig-rgb)
> Roteador e inspetor de pacotes MIDI 2.0 Universal MIDI Packet (UMP) ultraleve e multiplataforma. Suporta pitch bend por nota em alta resolução, perfis de articulação e descoberta bidirecional de dispositivos.

### 4. [analog-modeler](https://github.com/opilnig-rgb)
> Simulação numérica discreta não-linear de amplificadores operacionais de transcondutância (OTA) e circuitos ceifadores de diodo clássicos utilizando análise nodal modificada (MNA) e resolvedores de Newton-Raphson.

---

## 📊 Filosofia de Código e Artesanato

```rust
pub trait AudioProcessor: Send {
    /// Processamento puramente determinístico de blocos de áudio sem alocações na heap.
    fn process_block(&mut self, input: &[f32], output: &mut [f32], sample_rate: f64);
}
```

- **Zero Alocação em Caminhos Críticos (Zero Allocation in Hot Paths)**: Threads de áudio em tempo real jamais devem ser bloqueadas por malloc, operações de E/S de arquivos ou travas mutex.
- **Matemática Determinística**: Cada cálculo numérico deve ser exato ao nível de bit, estritamente limitado e imune à perda de desempenho causada por números flutuantes subnormais (denormals).
- **Padrões Abertos**: Construir ecossistemas de ferramentas livres de aprisionamento tecnológico (vendor lock-in) e interoperáveis em qualquer plataforma.

---

## 🎧 Laboratório de Hardware & Bancada

- **Osciloscópio**: Rigol DS1054Z Osciloscópio digital de armazenamento de 4 canais
- **Interface de Áudio**: RME Babyface Pro FS (clock SteadyClock FS de baixíssimo jitter)
- **Monitores & Fones**: Genelec 8030C, Sennheiser HD600 (calibrados para campo difuso)
- **Equipamentos Modulares**: Gabinetes Eurorack personalizados, clones Mutable Instruments, placas de desenvolvimento Teensy 4.1

---

## 📫 Conexão e Colaboração

- **GitHub Discussions**: Sinta-se à vontade para abrir uma issue ou discussão nos meus repositórios para falar sobre algoritmos DSP, arquitetura de áudio ou ideias de patch.
- **Tópicos Favoritos**: Topologia de filtros, algoritmos de antialiasing, anéis de memória em tempo real sem bloqueios e esquemas eletrônicos de sintetizadores modulares DIY.
- **Meta Atual**: Lançar uma suíte completa de plugins de áudio nativos CLAP/VST3 construída puramente em Rust de código aberto.

---

*“Entram bits, sai som cristalino. Mantenha a latência próxima de zero.”*
