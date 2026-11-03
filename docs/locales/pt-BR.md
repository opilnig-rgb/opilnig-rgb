| [KR 한국어](./ko.md) | [US English](../../README.md) | [JP 日本語](./ja.md) | [CN 简体中文](./zh-CN.md) | [ES Español](./es.md) |
| :---: | :---: | :---: | :---: | :---: |
| [FR Français](./fr.md) | [DE Deutsch](./de.md) | [RU Русский](./ru.md) | [SA العربية](./ar.md) | [IN हिन्दी](./hi.md) |

---

# Olá, eu sou o Opilnig 👋

Programador sênior de sistemas, especialista em processamento digital de sinais (DSP) e engenheiro de software de áudio open-source. Meu foco está no desenvolvimento de sistemas determinísticos de áudio em tempo real com Rust, arquiteturas modulares de sintetizadores e softwares de áudio de ultra-baixa latência para plataformas nativas e web via WebAssembly.

Meu trabalho é guiado pela robustez numérica, precisão temporal em escala de microssegundos e design de sistemas com alta eficiência de cache. Longe do terminal, dedico-me a testes de bancada em circuitos analógicos discretos, calibração de amplificadores valvulados e projeto de filtros DSP personalizados.

---

## 🛠️ Foco de Engenharia e Princípios Arquiteturais

- **Áudio Determinístico em Tempo Real**: Threads de renderização sem alocação dinâmica (Zero-allocation), buffers circulares livres de bloqueio (Lock-free) e loops de DSP de tempo delimitado sem interrupção de amostras.
- **Computação Numérica de Alta Performance**: Núcleos vetoriais acelerados por SIMD (AVX2/NEON), topologias de filtros analógicos com feedback de atraso zero (ZDF) e solucionadores de circuitos não lineares.
- **Arquitetura de Áudio Multiplataforma**: Estruturação de bases de código portáveis em Rust e C++ moderno compiladas para padrões de plugins desktop (CLAP, VST3) e AudioWorklets em navegadores.
- **Engenharia de Sistemas Confiável**: Aplicação estrita de invariantes de concorrência, garantia de segurança de memória e comportamento determinístico em todos os ambientes alvo.

---

## 💻 Repertório Técnico

| Categoria | Principais Tecnologias e Toolchains |
| :--- | :--- |
| **Sistemas Centrais** | Rust, Modern C++ (C++20), C, Zig |
| **Áudio & DSP** | WebAssembly, AudioWorklet, SIMD (AVX2/NEON), FAUST, JUCE, CLAP / VST3 |
| **Embarcados & Firmware** | STM32 (ARM Cortex-M4/M7), ESP32, Teensy, FreeRTOS, Embedded Rust |
| **Protocolos & I/O** | MIDI 2.0 (UMP), OSC (Open Sound Control), I2S, SPI, USB Audio Class 2.0 |
| **Plataformas & Profiling** | Linux (Kernel de Tempo Real), Git, CMake, Cargo, GDB, Valgrind, Perf, Wireshark |

---

## 🚀 Principais Projetos de Código Aberto

### 1. [pulse-dsp](https://github.com/opilnig-rgb)
> Motor de sintetizador modular DSP sem alocações dinâmicas e livre de bloqueios, construído em Rust puro. Conta com osciladores de trem de pulsos com banda limitada (BLIT), filtros ladder ZDF e uma matriz polifônica extensível operando a 192 kHz com latência de ida e volta inferior a um milissegundo.

### 2. [wasm-audio-canvas](https://github.com/opilnig-rgb)
> Visualizador de áudio interativo de alto rendimento e rack modular baseado em nós, rodando com velocidade nativa no navegador via WebAssembly e AudioWorklet. Construído sobre SharedArrayBuffer e filas atômicas sem bloqueio.

### 3. [midi2-router](https://github.com/opilnig-rgb)
> Roteador e inspetor de protocolo MIDI 2.0 Universal MIDI Packet (UMP) ultra-leve e multiplataforma. Oferece suporte a pitch bend de alta resolução por nota, perfis de articulação e descoberta bidirecional de dispositivos.

### 4. [analog-modeler](https://github.com/opilnig-rgb)
> Simulação numérica discreta não linear de amplificadores operacionais de transcondutância (OTA) analógicos clássicos e circuitos limitadores de diodo usando análise nodal modificada (MNA) e solucionadores Newton-Raphson amortecidos.

---

## 📊 Filosofia de Código e Arquitetura

```rust
pub trait AudioProcessor: Send {
    /// Processamento determinístico de blocos de áudio sem alocações na heap ou bloqueios.
    fn process_block(&mut self, input: &[f32], output: &mut [f32], sample_rate: f64);
}
```

- **Zero Allocation em Caminhos Críticos**: Threads de tempo real jamais devem invocar alocadores de heap, descritores de arquivos ou primitivas de bloqueio.
- **Matemática Determinística**: Toda computação de ponto flutuante deve ser estritamente limitada, exata bit a bit e protegida contra perda de desempenho por números desnormalizados (Denormals).
- **Padrões Abertos**: Desenvolvimento de software modular limpo, livre de dependências proprietárias e totalmente interoperável entre sistemas operacionais.

---

## 🎧 Bancada de Hardware & Instrumentação

- **Instrumentação**: Osciloscópio Digital de 4 Canais Rigol DS1054Z
- **Interface de Áudio**: RME Babyface Pro FS (Referência SteadyClock FS de baixíssimo jitter)
- **Monitores & Fones**: Monitores Ativos Genelec 8030C e fones Sennheiser HD600 (campo difuso)
- **Equipamentos Modulares**: Gabinetes Eurorack customizados, módulos de filtros analógicos discretos, placas de desenvolvimento Teensy 4.1

---

## 📫 Conexão e Colaboração

- **GitHub Discussions**: Sinta-se à vontade para abrir issues ou discussões em qualquer um dos meus repositórios sobre algoritmos DSP, arquitetura de áudio ou diagramas de sintetizadores.
- **Tópicos Técnicos**: Topologia de filtros, algoritmos de antialiasing, estruturas de dados concorrentes sem bloqueio e simulação analógica discreta.
- **Foco Atual**: Lançamento de uma suíte de plugins de áudio CLAP/VST3 multiplataforma para produção, desenvolvida puramente em Rust open-source.

---

*“Arquitetura limpa, execução determinística e latência próxima de zero.”*
