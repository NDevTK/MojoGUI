// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/web_install/web_install.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};


// Enum: WebInstallServiceResult
blink.mojom.WebInstallServiceResult = {
  kSuccess: 0,
  kAbortError: 1,
  kDataError: 2,
};
blink.mojom.WebInstallServiceResultSpec = { $: mojo.internal.Enum() };

// Struct: InstallOptions
blink.mojom.InstallOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.InstallOptions',
      packedSize: 24,
      fields: [
        { name: 'install_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'manifest_id', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: WebInstallService
blink.mojom.WebInstallService = {};

blink.mojom.WebInstallService_Install_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebInstallService_Install_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.InstallOptionsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.WebInstallService_InstallFromElement_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebInstallService_InstallFromElement_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.InstallOptionsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.WebInstallServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WebInstallServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebInstallService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WebInstallServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.WebInstallServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WebInstallServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  install(options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WebInstallService_Install_ParamsSpec,
      blink.mojom.WebInstallService_Install_ResponseParamsSpec,
      [options]);
  }

  installFromElement(options) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.WebInstallService_InstallFromElement_ParamsSpec,
      blink.mojom.WebInstallService_InstallFromElement_ResponseParamsSpec,
      [options]);
  }

};

blink.mojom.WebInstallService.getRemote = function() {
  let remote = new blink.mojom.WebInstallServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebInstallService',
    'context');
  return remote.$;
};

// ParamsSpec for Install
blink.mojom.WebInstallService_Install_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebInstallService.Install_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.InstallOptionsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.WebInstallService_Install_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebInstallService.Install_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.WebInstallServiceResultSpec, nullable: false, minVersion: 0 },
        { name: 'manifest_id', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for InstallFromElement
blink.mojom.WebInstallService_InstallFromElement_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebInstallService.InstallFromElement_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.InstallOptionsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.WebInstallService_InstallFromElement_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebInstallService.InstallFromElement_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.WebInstallServiceResultSpec, nullable: false, minVersion: 0 },
        { name: 'manifest_id', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.WebInstallServicePtr = blink.mojom.WebInstallServiceRemote;
blink.mojom.WebInstallServiceRequest = blink.mojom.WebInstallServicePendingReceiver;

