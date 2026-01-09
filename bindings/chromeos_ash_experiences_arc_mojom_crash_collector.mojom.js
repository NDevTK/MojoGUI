// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/crash_collector.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: CrashCollectorHost
arc.mojom.CrashCollectorHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.CrashCollectorHost';
  }

  0(type, pipe, uptime) {
    // Method: 0
    // Call: 0(type, pipe, uptime)
  }

  1(device, board, cpu_abi, fingerprint) {
    // Method: 1
    // Call: 1(device, board, cpu_abi, fingerprint)
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  2(exec_name, pid, timestamp, minidump_fd) {
    // Method: 2
    // Call: 2(exec_name, pid, timestamp, minidump_fd)
  }

  3(ramoops_handle) {
    // Method: 3
    // Call: 3(ramoops_handle)
  }

};

arc.mojom.CrashCollectorHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CrashCollectorInstance
arc.mojom.CrashCollectorInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.CrashCollectorInstance';
  }

  1(host_remote) {
    // Method: 1
    // Call: 1(host_remote)
  }

};

arc.mojom.CrashCollectorInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
