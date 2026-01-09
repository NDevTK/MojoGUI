// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/webapk.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: WebApkInstallResult
arc.mojom.WebApkInstallResult = {
  kSuccess: 0,
  kErrorUnknown: 1,
  kErrorServiceCommunication: 2,
  kErrorServiceTimeout: 3,
  kErrorCallerVerificationFailed: 4,
  kErrorPolicyViolation: 5,
  kErrorApiDisabled: 6,
  kErrorUnknownAccount: 7,
  kErrorResolveNetworkError: 8,
  kErrorResolveError: 9,
  kErrorNotGoogleSigned: 10,
};

// Struct: WebShareTargetInfo
arc.mojom.WebShareTargetInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.WebShareTargetInfo',
      packedSize: 16,
      fields: [
        { name: 'file_accepts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebApkInfo
arc.mojom.WebApkInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.WebApkInfo',
      packedSize: 16,
      fields: [
        { name: 'share_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: WebApkInstance
arc.mojom.WebApkInstance = {};

arc.mojom.WebApkInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.WebApkInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.WebApkInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.WebApkInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.WebApkInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.WebApkInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.WebApkInstance.getRemote = function() {
  let remote = new arc.mojom.WebApkInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.WebApkInstance',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.WebApkInstancePtr = arc.mojom.WebApkInstanceRemote;
arc.mojom.WebApkInstanceRequest = arc.mojom.WebApkInstancePendingReceiver;

