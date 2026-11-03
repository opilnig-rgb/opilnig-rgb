| [KR 한국어](./ko.md) | [US English](../../README.md) | [JP 日本語](./ja.md) | [CN 简体中文](./zh-CN.md) | [ES Español](./es.md) |
| :---: | :---: | :---: | :---: | :---: |
| [FR Français](./fr.md) | [DE Deutsch](./de.md) | [RU Русский](./ru.md) | [SA العربية](./ar.md) | [IN हिन्दी](./hi.md) |

---

# 안녕하세요, Opilnig입니다 👋

시스템 프로그래머이자 디지털 신호 처리(DSP) 애호가, 그리고 오픈소스 오디오 해커입니다. Rust 기반의 결정론적 실시간 오디오 파이프라인 설계, 모듈러 신시사이저 아키텍처 구축, WebAssembly를 활용한 제로 레이턴시 웹 오디오 연구에 몰두하고 있습니다.

나노초 단위의 오디오 드롭아웃(버퍼 언더런)을 디버깅하거나 80년대 빈티지 아날로그 회로를 회로 개조(Circuit Bending)하지 않을 때는, 진공관 앰프를 캘리브레이션하거나 커스텀 DSP 연산 커널을 작성하고 저수준 오디오 인프라에 기여하고 있습니다.

---

## 🛠️ 주요 관심 분야 및 엔지니어링 철학

- **실시간 DSP 및 사운드 합성**: 폴리포닉 웨이브테이블 엔진, 물리적 음향 모델링, 제로 딜레이 피드백(ZDF) 아날로그 필터 설계.
- **초저지연 시스템 엔지니어링**: 락프리(Lock-free) 링 버퍼, SIMD 가속 수학 연산 커널, 가비지 컬렉션 지연이 없는 결정론적 메모리 제어.
- **임베디드 & 웹 오디오 브릿지**: Rust DSP 코드베이스를 데스크톱 네이티브 VST3/CLAP 플러그인과 고성능 WebAssembly/AudioWorklet 모듈로 크로스 컴파일.

---

## 💻 기술 스택

| 분류 | 주요 기술 및 툴체인 |
| :--- | :--- |
| **코어 시스템** | Rust, Modern C++ (C++20), C, Zig |
| **오디오 & DSP** | WebAssembly, AudioWorklet, SIMD (AVX2/NEON), FAUST, JUCE, CLAP / VST3 |
| **펌웨어 & 임베디드** | STM32 (ARM Cortex-M4/M7), ESP32, Teensy, FreeRTOS, Embedded Rust |
| **프로토콜 & 표준** | MIDI 2.0, OSC (Open Sound Control), I2S, SPI, USB Audio Class 2.0 |
| **도구 및 플랫폼** | Linux (Arch / Debian 실시간 커널), Git, CMake, Cargo, GDB, Valgrind, Wireshark |

---

## 🚀 진행 중인 프로젝트 및 실험

### 1. [pulse-dsp](https://github.com/opilnig-rgb)
> 모던 Rust로 순수하게 구현한 무할당(Zero-allocation), 락프리 모듈러 DSP 신시사이저 엔진입니다. 대역제한 임펄스 열(BLIT) 오실레이터, 제로 딜레이 피드백 래더 필터, 192kHz에서 1ms 미만의 왕복 지연시간으로 구동되는 확장형 패치 매트릭스를 제공합니다.

### 2. [wasm-audio-canvas](https://github.com/opilnig-rgb)
> WebAssembly와 AudioWorklet을 통해 브라우저에서 네이티브 속도로 동작하는 고성능 인터랙티브 오디오 시각화 및 노드 기반 모듈러 랙입니다. SharedArrayBuffer와 락프리 원자적 큐를 기반으로 구동됩니다.

### 3. [midi2-router](https://github.com/opilnig-rgb)
> 초경량 크로스 플랫폼 MIDI 2.0 범용 패킷(UMP) 라우터 및 패킷 인스펙터입니다. 노트별 고해상도 피치 벤드, 아티큘레이션 프로파일링 및 양방향 기기 탐색을 지원합니다.

### 4. [analog-modeler](https://github.com/opilnig-rgb)
> 수정 노달 분석법(MNA)과 뉴턴-랩슨(Newton-Raphson) 수치 해석 솔버를 사용하여 빈티지 아날로그 연산 트랜스컨덕턴스 증폭기(OTA) 및 다이오드 클리퍼 회로의 비선형 이산 거동을 시뮬레이션합니다.

---

## 📊 코드와 장인정신에 대한 철학

```rust
pub trait AudioProcessor: Send {
    /// 힙 메모리 할당이 없는 순수 결정론적 오디오 블록 처리
    fn process_block(&mut self, input: &[f32], output: &mut [f32], sample_rate: f64);
}
```

- **핫 패스 무할당 (Zero Allocation in Hot Paths)**: 실시간 오디오 스레드는 malloc, 파일 I/O, 뮤텍스 락으로 인해 블로킹되어서는 안 됩니다.
- **결정론적 수학 연산**: 모든 수치 계산은 비트 단위로 정밀해야 하며, 유계(bounded) 상태를 유지하고 비정규화 부동소수점(Denormal floats) 현상을 방지해야 합니다.
- **오픈 표준 지향**: 특정 벤더에 종속되지 않고 플랫폼 간 상호 운용성이 보장되는 지속 가능한 툴체인을 구축합니다.

---

## 🎧 하드웨어 연구실 & 작업대

- **오실로스코프**: Rigol DS1054Z 4채널 디지털 스토리지 오실로스코프
- **오디오 인터페이스**: RME Babyface Pro FS (SteadyClock FS 저지터 클럭)
- **모니터 스피커 & 헤드폰**: Genelec 8030C, Sennheiser HD600 (확산 음장 캘리브레이션)
- **모듈러 장비**: 커스텀 유로랙 케이스, Mutable Instruments 복각 모듈, Teensy 4.1 개발 보드

---

## 📫 소통 및 협업

- **GitHub Discussions**: DSP 알고리즘, 오디오 엔진 아키텍처, 패치 아이디어에 대해 저장소 이슈나 토론을 언제든 열어주세요.
- **즐겨 나누는 주제**: 필터 토폴로지, 안티앨리어싱 알고리즘, 실시간 락프리 메모리 링, DIY 모듈러 신스 회로도.
- **현재 목표**: 오픈소스 Rust만으로 빌드된 네이티브 CLAP/VST3 크로스 플랫폼 오디오 플러그인 제품군 공개.

---

*“비트를 입력받아 순수한 소리를 빚어냅니다. 지연 시간은 언제나 0에 가깝게.”*
