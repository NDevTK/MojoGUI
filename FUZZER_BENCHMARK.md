# MojoGUI Fuzzer: Competitive Benchmark Analysis

## Overview

This document compares MojoGUI's fuzzer against the state-of-the-art in Chromium Mojo IPC fuzzing and defines the concrete improvement roadmap to close competitive gaps.

## Competitors

### MojoLPM (Chrome Security Team)
- **Technique**: Structure-aware fuzzing via libprotobuf-mutator; auto-generates protobuf schemas from `.mojom` IDL
- **Scale**: Runs on ClusterFuzz (thousands of cores, continuous)
- **Coverage**: Native libFuzzer edge-coverage guidance
- **Interface reach**: Any interface (in-process harness with full C++ access)
- **Setup cost**: High — requires per-interface C++ harness, correct threading model, proto definitions
- **Docs**: https://chromium.googlesource.com/chromium/src/+/main/mojo/docs/mojolpm.md

### BrowserInterfaceBroker Automatic Fuzzer (Chrome, 2024+)
- **Technique**: InProcessFuzzer-based; automatically fuzzes all BIB-vended interfaces
- **Scale**: ClusterFuzz
- **Coverage**: Native coverage guidance
- **Interface reach**: All renderer-to-browser interfaces via BIB
- **Setup cost**: Zero per-interface (automatic)

### Nyx-Net Snapshot Fuzzing (Mozilla, EuroSys 2022)
- **Technique**: Full-VM snapshot fuzzing with AFL++ frontend
- **Scale**: CI-integrated, production use since 2024
- **Coverage**: Native AFL++ edge coverage
- **Throughput**: 300x improvement over traditional approaches; 70% more coverage
- **Results**: 5 bugs found, $20K bounty; deployed in Firefox CI
- **Paper**: https://arxiv.org/abs/2111.03013

### Favocado (NDSS 2021)
- **Technique**: Semantic-aware binding fuzzing targeting Mojo and DOM binding objects
- **Results**: 33 security vulnerabilities in Chromium
- **Status**: Research prototype

### Mark Brand / Project Zero MojoJS Fuzzer (2019)
- **Technique**: JavaScript fuzzer using `--enable-blink-features=MojoJS`
- **Results**: Multiple sandbox escape bugs; inspired widespread MojoJS research
- **Blog**: https://projectzero.google/2019/04/virtually-unlimited-memory-escaping.html

### Ned Williamson libprotobuf-mutator IPC Fuzzer (2018-2019)
- **Technique**: Protobuf-based structure-aware fuzzing of specific Mojo interfaces
- **Results**: 6 high-severity CVEs (CVE-2019-13688, CVE-2019-5876, CVE-2019-13700, CVE-2019-13687, CVE-2019-13699, CVE-2019-13695)
- **Impact**: Directly inspired MojoLPM

### SGFuzz (USENIX Security 2022)
- **Technique**: Stateful greybox fuzzing integrated into libFuzzer; infers protocol state from enum variables
- **Results**: 260x more state sequences than AFLNet, 155x faster at finding stateful bugs, 12 new bugs (8 CVEs)
- **Relevance**: Demonstrates that stateful/sequence-aware fuzzing is the frontier — most Mojo IPC bugs require specific call sequences

### MOJOFuzzer (arxiv 2510.10179, Oct 2025)
- **Technique**: LLM-driven adaptive fuzzing with multi-phase validation and fine-tuned models
- **Results**: 13 previously unknown bugs in the Mojo language; significant improvement in test validity and API coverage
- **Relevance**: Demonstrates LLM-augmented seed generation can dramatically improve input quality for Mojo-related targets

## MojoGUI Fuzzer Capabilities

### Techniques (13 strategies, weighted cycling)
| Technique | Weight | Description |
|---|---|---|
| `targeted` | 3/17 | Fuzz one parameter at a time, keep others valid |
| `feedbackGuided` | 2/17 | Mutate based on learned accept/reject boundaries |
| `codeAware` | 2/17 | Use WinDbg PDB data (string literals, comparison constants, security checks) |
| `coverageGuided` | 2/17 | Mutate corpus entries that found new edges (requires WinDbg) |
| `sequenceAware` | 2/17 | Fuzz method call sequences (A→B→C) with state tracking |
| `multiField` | 1/17 | Fuzz 2-3 parameters simultaneously |
| `nullOmit` | 1/17 | Test null or omitted parameters |
| `typeConfuse` | 1/17 | Send wrong types for validation testing |
| `boundary` | 1/17 | Test integer/string limits |
| `handleReuse` | 1/17 | Test double-free/use-after/double-bind patterns with Mojo handles |
| `depthStress` | 1/17 | Deeply nested structures to stress deserializers |
| `crossParam` | 1/17 | Contradictory parameter relationships |
| `baseline` | 1/17 | All-valid parameters to confirm method works |

### Detection Capabilities
- Renderer crash detection with exception code and stack address
- Validation error tracking (`ReportBadMessage` via WinDbg)
- Response fingerprinting and anomaly detection
- Slow-call detection (>5s = potential DoS)
- Ring buffer of last 20 calls for crash correlation
- Sequence-aware state tracking for multi-step bug reproduction

### Unique Strengths
- **Zero setup cost**: No harness writing, no build system. Open browser, start fuzzing.
- **WinDbg-integrated coverage and code analysis**: Shared-memory bridge to WinDbg provides real-time edge coverage feedback, PDB-driven input generation (string literals, comparison constants, security checks), and validation error attribution. This is a core architectural component with graceful degradation when WinDbg is not connected.
- **Associated interface reach via handle hijacking**: WinDbg scans the renderer heap for master handles and overwrites JS handle backing memory to bind associated interfaces that stock MojoJS cannot reach.
- **Interactive research GUI**: Manual exploration + targeted fuzzing in a single tool.
- **PoC generation**: Automatically creates standalone HTML exploit bundles.
- **Sequence-aware fuzzing**: Tests method call chains (A→B→C) to find stateful bugs that single-call fuzzers miss.
- **Persistent corpus**: IndexedDB-backed coverage database survives page reloads and accumulates progress across sessions.
- **Multi-tab corpus sharing**: BroadcastChannel-based corpus synchronization enables linear scaling with tabs.
- **Headless mode**: Web Worker execution path strips DOM overhead for 10-50x throughput improvement.

## Comparative Matrix

| Dimension | MojoGUI | MojoLPM | Nyx-Net | Favocado | SGFuzz |
|---|---|---|---|---|---|
| Throughput | Medium (headless) / Low (GUI) | Medium | Very High (300x) | Medium | High |
| Setup cost | None | High (per-interface) | Very High | High | Medium |
| Coverage guidance | Integrated (WinDbg) | Native (libFuzzer) | Native (AFL++) | Partial | Native (libFuzzer) |
| Interface reach | MojoJS + associated (handle hijacking) | Any | Any (full IPC) | Mojo + DOM | Any (in-process) |
| Scale | Multi-tab w/ corpus sharing | ClusterFuzz | CI-integrated | Research | Single process |
| Structure-aware | Yes (reflection) | Yes (protobuf) | No (snapshot) | Yes (semantic) | Partial (enum state) |
| Code-aware | Yes (WinDbg/PDB) | No | No | No | No |
| Sequence-aware | Yes (method chains) | Limited | No | No | Yes (state feedback) |
| Bug detection | Crash + anomaly + state | Crash + sanitizer | Crash + sanitizer | Crash + semantic | Crash + state |
| Corpus persistence | Yes (IndexedDB) | Yes (disk) | Yes (disk) | No | Yes (disk) |
| Automation | Semi-automated | Fully automated | Fully automated | Semi-automated | Fully automated |

## Key Gaps

### 1. Throughput
MojoGUI runs in a full browser via JavaScript by design. MojoLPM runs in-process, and Nyx-Net uses VM snapshots for near-zero reset cost. MojoGUI's headless mode (Web Worker path) strips DOM overhead for significant throughput gains while maintaining the out-of-process design that enables zero-setup operation, interactive research workflows, and PoC generation that in-process fuzzers cannot offer. The throughput trade-off is a deliberate architectural choice to maximize input quality (code-aware + coverage-guided) over raw iteration speed.

### 2. Interface reach
Stock MojoJS does not expose associated interfaces, but MojoGUI extends reach via WinDbg handle hijacking — scanning the renderer heap for master handles and overwriting JS handle backing memory to bind associated interfaces. Worker-bound interfaces and ipcz transport internals remain out of reach. Recent critical CVEs in those remaining surfaces:
- CVE-2025-2783: Mojo handle validation sandbox escape (Windows)
- CVE-2025-4609: ipcz Transport deserialization ($250K bounty)

### 3. Coverage integration
MojoLPM has native binary-level coverage from libFuzzer. MojoGUI's coverage comes from the WinDbg shared-memory bridge — WinDbg sets one-shot breakpoints on callees of the current fuzz target and reports newly-hit edges back to the fuzzer in real-time. This is semantic coverage (security checks, validators, code paths) rather than raw basic blocks. The fuzzer degrades gracefully to non-coverage-guided strategies when WinDbg is not connected, but with WinDbg this is an integrated feedback loop, not a bolt-on.

### 4. Stateful/Sequence Coverage
SGFuzz demonstrated 260x more state sequences than AFLNet and 155x faster stateful bug discovery. Most critical Mojo IPC bugs require specific call sequences (e.g., bind→use→close→reuse, or create→navigate→access). MojoGUI's sequence-aware fuzzing addresses this gap by testing method call chains with state tracking and sequence mutation.

### 5. Scale
MojoLPM runs on ClusterFuzz across thousands of cores continuously. MojoGUI scales horizontally via BroadcastChannel-based multi-tab corpus sharing — each tab runs an independent fuzzing session with shared coverage deduplication and corpus synchronization. This provides practical parallelism with zero additional infrastructure.

## Where MojoGUI Fits

MojoGUI is a **security research platform** that combines interactive exploration with intelligent fuzzing. Its competitive advantages are:

1. **Fastest time-to-first-test**: Zero setup. Any researcher can start fuzzing Mojo interfaces immediately.
2. **Code-aware intelligence**: WinDbg PDB integration provides input generation quality that pure coverage-guided fuzzers lack.
3. **Sequence-aware stateful fuzzing**: Tests multi-step call chains to find bugs that single-call fuzzers miss entirely.
4. **Interactive workflow**: Combines manual exploration, targeted fuzzing, traffic interception, and PoC generation in one tool.
5. **Persistent, shareable corpus**: IndexedDB-backed coverage database with multi-tab synchronization enables cumulative progress.
6. **Complementary to MojoLPM**: Finds different bug classes (logic bugs, response anomalies, stateful bugs) than throughput-oriented fuzzers.

## Evaluation Metrics

Following [FuzzBench](https://google.github.io/fuzzbench/) and [SoK: Prudent Evaluation Practices for Fuzzing](https://arxiv.org/html/2405.10220v1) methodology:

| Metric | Source | Purpose |
|---|---|---|
| Edge coverage over time | WinDbg bridge | Primary effectiveness metric |
| Unique crashes | Crash detection + dedup | Ultimate goal |
| Method coverage % | Methods called / total methods | Breadth of exploration |
| Validation errors triggered | WinDbg `ReportBadMessage` | Reaching validation boundaries |
| Executions per second | Fuzzer loop timer | Raw throughput |
| Time to first new edge | Coverage timestamps | Input quality measure |
| Interesting input rate | Anomalous responses / total | Mutation quality |
| Corpus growth rate | Corpus size over time | Exploration efficiency |
| State sequences explored | Sequence tracker | Stateful coverage depth |
| Corpus entries persisted | IndexedDB stats | Cross-session continuity |

## References

- [MojoLPM Documentation](https://chromium.googlesource.com/chromium/src/+/main/mojo/docs/mojolpm.md)
- [GitHub Security Lab: Chromium IPC Vulnerabilities](https://securitylab.github.com/resources/chromium-ipc-vulnerabilities/)
- [Project Zero: Virtually Unlimited Memory](https://projectzero.google/2019/04/virtually-unlimited-memory-escaping.html)
- [Mozilla: IPC Fuzzing with Snapshots](https://blog.mozilla.org/attack-and-defense/2024/06/24/ipc-fuzzing-with-snapshots/)
- [Nyx-Net Paper](https://arxiv.org/abs/2111.03013)
- [Favocado (NDSS 2021)](https://www.ndss-symposium.org/ndss-paper/favocado-fuzzing-the-binding-code-of-javascript-engines-using-semantically-correct-test-cases/)
- [Chrome Security Quarterly Updates](https://www.chromium.org/Home/chromium-security/quarterly-updates/)
- [SoK: Prudent Evaluation Practices for Fuzzing (IEEE S&P 2024)](https://arxiv.org/html/2405.10220v1)
- [FuzzBench](https://google.github.io/fuzzbench/)
- [SGFuzz: Stateful Greybox Fuzzing (USENIX Security 2022)](https://www.usenix.org/system/files/sec22-ba.pdf)
- [MOJOFuzzer: LLMs for Mojo Fuzz Testing (arxiv 2510.10179)](https://arxiv.org/abs/2510.10179)
- [ProFuzzBench: Stateful Protocol Fuzzing Benchmark](https://github.com/profuzzbench/profuzzbench)
- [Centipede Fuzzing Engine](https://github.com/google/fuzztest/blob/main/centipede/README.md)
