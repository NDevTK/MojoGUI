# MojoGUI Fuzzer: Competitive Benchmark Analysis

## Overview

This document compares MojoGUI's fuzzer against the state-of-the-art in Chromium Mojo IPC fuzzing.

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

## MojoGUI Fuzzer Capabilities

### Techniques (13 strategies, weighted cycling)
| Technique | Weight | Description |
|---|---|---|
| `targeted` | 3/15 | Fuzz one parameter at a time, keep others valid |
| `feedbackGuided` | 2/15 | Mutate based on learned accept/reject boundaries |
| `codeAware` | 2/15 | Use WinDbg PDB data (string literals, comparison constants, security checks) |
| `coverageGuided` | 2/15 | Mutate corpus entries that found new edges (requires WinDbg) |
| `multiField` | 1/15 | Fuzz 2-3 parameters simultaneously |
| `nullOmit` | 1/15 | Test null or omitted parameters |
| `typeConfuse` | 1/15 | Send wrong types for validation testing |
| `boundary` | 1/15 | Test integer/string limits |
| `handleReuse` | 1/15 | Test double-free/use-after patterns with Mojo handles |
| `depthStress` | 1/15 | Deeply nested structures to stress deserializers |
| `crossParam` | 1/15 | Contradictory parameter relationships |
| `baseline` | 1/15 | All-valid parameters to confirm method works |

### Detection Capabilities
- Renderer crash detection with exception code and stack address
- Validation error tracking (`ReportBadMessage` via WinDbg)
- Response fingerprinting and anomaly detection
- Slow-call detection (>5s = potential DoS)
- Ring buffer of last 20 calls for crash correlation

### Unique Strengths
- **Zero setup cost**: No harness writing, no build system. Open browser, start fuzzing.
- **WinDbg code-aware fuzzing**: PDB-driven input generation (string literal probing, comparison constant testing, security-note-driven values) — unique among MojoJS-based fuzzers.
- **Interactive research GUI**: Manual exploration + targeted fuzzing in a single tool.
- **PoC generation**: Automatically creates standalone HTML exploit bundles.

## Comparative Matrix

| Dimension | MojoGUI | MojoLPM | Nyx-Net | Favocado | Project Zero MojoJS |
|---|---|---|---|---|---|
| Throughput | Low | Medium | Very High (300x) | Medium | Low |
| Setup cost | None | High (per-interface) | Very High | High | Low |
| Coverage guidance | Bolt-on (WinDbg) | Native (libFuzzer) | Native (AFL++) | Partial | None |
| Interface reach | MojoJS-reachable | Any | Any (full IPC) | Mojo + DOM | MojoJS-reachable |
| Scale | Single browser | ClusterFuzz | CI-integrated | Research | Manual |
| Structure-aware | Yes (reflection) | Yes (protobuf) | No (snapshot) | Yes (semantic) | Partial |
| Code-aware | Yes (WinDbg/PDB) | No | No | No | No |
| Bug detection | Crash + anomaly | Crash + sanitizer | Crash + sanitizer | Crash + semantic | Crash |
| Automation | Semi-automated | Fully automated | Fully automated | Semi-automated | Manual |

## Key Gaps

### 1. Throughput
MojoGUI runs in a full browser via JavaScript. MojoLPM runs in-process, and Nyx-Net uses VM snapshots for near-zero reset cost. This is the largest competitive gap — likely 100-1000x slower than MojoLPM, and orders of magnitude slower than Nyx.

### 2. Interface reach
MojoJS does not expose associated interfaces, worker-bound interfaces, or ipcz transport internals. Recent critical CVEs target these unreachable surfaces:
- CVE-2025-2783: Mojo handle validation sandbox escape (Windows)
- CVE-2025-4609: ipcz Transport deserialization ($250K bounty)
- CVE-2021-21146: BackForwardCacheControllerHost (associated interface)

### 3. Coverage integration
MojoLPM has native binary-level coverage from libFuzzer. MojoGUI's coverage requires an external WinDbg connection and is not always available.

### 4. Scale
MojoLPM runs on ClusterFuzz across thousands of cores continuously. MojoGUI runs in a single session.

## Where MojoGUI Fits

MojoGUI is best categorized as a **security research tool** rather than a production fuzzer. Its competitive advantages are:

1. **Fastest time-to-first-test**: Zero setup. Any researcher can start fuzzing Mojo interfaces immediately.
2. **Code-aware intelligence**: WinDbg PDB integration provides input generation quality that pure coverage-guided fuzzers lack.
3. **Interactive workflow**: Combines manual exploration, targeted fuzzing, traffic interception, and PoC generation in one tool.
4. **Complementary to MojoLPM**: Finds different bug classes (logic bugs, response anomalies) than throughput-oriented fuzzers.

## Improvement Opportunities

1. **Headless/worker mode**: Run fuzzing iterations without GUI overhead to improve throughput.
2. **Corpus sharing**: Export/import interesting inputs in a format compatible with MojoLPM or ClusterFuzz.
3. **Associated interface support**: Explore workarounds for reaching non-MojoJS interfaces (e.g., via CDP raw Mojo message injection).
4. **Parallel browser instances**: Spawn multiple tabs/workers to increase iteration throughput.
5. **Persistent coverage database**: Store and reload coverage data across sessions for cumulative progress.

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
