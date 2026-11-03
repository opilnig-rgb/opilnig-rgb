| [KR 한국어](./ko.md) | [US English](../../README.md) | [JP 日本語](./ja.md) | [CN 简体中文](./zh-CN.md) | [ES Español](./es.md) |
| :---: | :---: | :---: | :---: | :---: |
| [FR Français](./fr.md) | [DE Deutsch](./de.md) | [RU Русский](./ru.md) | [SA العربية](./ar.md) | [IN हिन्दी](./hi.md) |

---

# 안녕하세요, Opilnig입니다 👋

시니어 시스템 프로그래머이자 디지털 신호 처리(DSP) 및 고성능 오디오 소프트웨어 엔지니어입니다. Rust 기반의 결정론적 실시간 오디오 시스템 설계, 모듈러 신시사이저 아키텍처 구축, WebAssembly를 활용한 네이티브 성능의 웹 오디오 엔지니어링에 주력하고 있습니다.

마이크로초 단위의 타이밍 정밀도, 수치 해석적 안정성, 캐시 친화적인 시스템 아키텍처 설계를 지향합니다. 터미널 밖에서는 아날로그 오디오 회로 벤치 테스트, 진공관 앰프 캘리브레이션, 커스텀 DSP 필터 설계를 진행하고 있습니다.

---

## 🛠️ 전문 엔지니어링 역량 및 설계 철학

- **결정론적 실시간 오디오**: 힙 할당이 없는(Zero-allocation) 오디오 렌더 스레드, 락프리(Lock-free) 링 버퍼, 드롭아웃 없는 유계 시간 DSP 루프 구현.
- **고성능 수치 연산**: SIMD 가속 벡터 연산 커널(AVX2/NEON), 제로 딜레이 피드백(ZDF) 아날로그 필터 토폴로지 및 비선형 회로 수치해석기 설계.
- **크로스 플랫폼 오디오 아키텍처**: 데스크톱 플러그인 표준(CLAP, VST3)과 브라우저 AudioWorklet 전반에 이식 가능한 Rust 및 모던 C++ 코드베이스 구조화.
- **견고한 시스템 설계**: 엄격한 동시성 불변식 보장, 메모리 안전성, 모든 타깃 환경에서의 결정론적 거동 검증.

---

## 💻 기술 스택

| 분류 | 주요 기술 및 툴체인 |
| :--- | :--- |
| **코어 시스템** | Rust, Modern C++ (C++20), C, Zig |
| **오디오 & DSP** | WebAssembly, AudioWorklet, SIMD (AVX2/NEON), FAUST, JUCE, CLAP / VST3 |
| **임베디드 & 펌웨어** | STM32 (ARM Cortex-M4/M7), ESP32, Teensy, FreeRTOS, Embedded Rust |
| **프로토콜 & I/O** | MIDI 2.0 (UMP), OSC (Open Sound Control), I2S, SPI, USB Audio Class 2.0 |
| **플랫폼 & 분석 툴** | Linux (실시간 커널), Git, CMake, Cargo, GDB, Valgrind, Perf, Wireshark |

---

## 🚀 주요 오픈소스 프로젝트

### 1. [pulse-dsp](https://github.com/opilnig-rgb)
> 순수 Rust로 작성된 무할당(Zero-allocation), 락프리 모듈러 DSP 신시사이저 엔진. 대역제한 임펄스 열(BLIT) 오실레이터, 제로 딜레이 피드백 래더 필터, 192kHz에서 1ms 미만의 왕복 지연시간으로 구동되는 확장형 폴리포닉 패치 매트릭스 탑재.

### 2. [wasm-audio-canvas](https://github.com/opilnig-rgb)
> WebAssembly와 AudioWorklet을 통해 브라우저에서 네이티브 속도로 동작하는 고스루풋 인터랙티브 오디오 시각화 및 노드 기반 모듈러 랙. SharedArrayBuffer와 락프리 원자적 큐를 기반으로 동작.

### 3. [midi2-router](https://github.com/opilnig-rgb)
> 초경량 크로스 플랫폼 MIDI 2.0 범용 패킷(UMP) 라우터 및 프로토콜 인스펙터. 노트별 고해상도 피치 벤드, 아티큘레이션 프로파일링 및 양방향 기기 탐색 지원.

### 4. [analog-modeler](https://github.com/opilnig-rgb)
> 수정 노달 분석법(MNA)과 감쇠 뉴턴-랩슨(Newton-Raphson) 수치 해석 솔버를 사용하여 빈티지 아날로그 연산 트랜스컨덕턴스 증폭기(OTA) 및 다이오드 클리퍼 회로의 비선형 이산 거동 시뮬레이션.

---

## 📊 코드 및 아키텍처 철학

```rust
pub trait AudioProcessor: Send {
    /// 힙 메모리 할당 및 락이 없는 순수 결정론적 오디오 블록 처리
    fn process_block(&mut self, input: &[f32], output: &mut [f32], sample_rate: f64);
}
```

- **핫 패스 무할당 (Zero Allocation in Hot Paths)**: 실시간 오디오 스레드는 malloc, 파일 I/O, 뮤텍스 락으로 인해 블로킹되어서는 안 됩니다.
- **결정론적 수학 연산**: 모든 부동소수점 연산은 비트 단위로 정밀해야 하며, 유계(bounded) 상태를 유지하고 비정규화 부동소수점(Denormal) 성능 저하를 방지해야 합니다.
- **오픈 표준 지향**: 특정 벤더에 종속되지 않고 운영체제 간 완벽한 상호 운용성을 보장하는 클린 소프트웨어를 구축합니다.

---

## 🎧 하드웨어 연구실 & 측정 장비

- **계측 장비**: Rigol DS1054Z 4채널 디지털 스토리지 오실로스코프
- **오디오 인터페이스**: RME Babyface Pro FS (SteadyClock FS 저지터 레퍼런스)
- **모니터링**: Genelec 8030C 액티브 모니터, Sennheiser HD600 (확산 음장 캘리브레이션)
- **모듈러 장비**: 커스텀 유로랙 케이스, 디스크리트 아날로그 필터 모듈, Teensy 4.1 개발 보드

---

## 📫 소통 및 협업

- **GitHub Discussions**: DSP 알고리즘, 오디오 엔진 아키텍처, 신시사이저 회로 설계에 대해 저장소 이슈나 토론을 열어주세요.
- **기술적 대화 주제**: 필터 토폴로지, 안티앨리어싱 알고리즘, 락프리 동시성 자료구조, 아날로그 회로 시뮬레이션.
- **현재 목표**: 순수 오픈소스 Rust 기반의 프로덕션 레벨 크로스 플랫폼 CLAP/VST3 오디오 플러그인 제품군 출시.

---

*“명료한 아키텍처, 결정론적 실행, 그리고 0에 수렴하는 지연시간.”*
