// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/crosh.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: ArcShellCommand
arc.mojom.ArcShellCommand = {
  kTop: 0,
  kCpuinfo: 1,
  kMeminfo: 2,
};

// Struct: ArcShellExecutionRequest
arc.mojom.ArcShellExecutionRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcShellExecutionRequest',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: ArcShellExecutionInstance
arc.mojom.ArcShellExecutionInstance = {};

arc.mojom.ArcShellExecutionInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ArcShellExecutionInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ArcShellExecutionInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ArcShellExecutionInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.ArcShellExecutionInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ArcShellExecutionInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.ArcShellExecutionInstance.getRemote = function() {
  let remote = new arc.mojom.ArcShellExecutionInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ArcShellExecutionInstance',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.ArcShellExecutionInstancePtr = arc.mojom.ArcShellExecutionInstanceRemote;
arc.mojom.ArcShellExecutionInstanceRequest = arc.mojom.ArcShellExecutionInstancePendingReceiver;

