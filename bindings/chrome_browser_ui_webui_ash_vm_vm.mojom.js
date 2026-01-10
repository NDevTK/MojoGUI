// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/vm/vm.mojom
// Module: ash.vm.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.vm = ash.vm || {};
ash.vm.mojom = ash.vm.mojom || {};


// Interface: VmDiagnosticsProvider
ash.vm.mojom.VmDiagnosticsProvider = {};

ash.vm.mojom.VmDiagnosticsProvider_GetPluginVmDiagnostics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.vm.mojom.VmDiagnosticsProvider_GetPluginVmDiagnostics_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.vm.mojom.VmDiagnosticsProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.vm.mojom.VmDiagnosticsProviderRemote = class {
  static get $interfaceName() {
    return 'ash.vm.mojom.VmDiagnosticsProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.vm.mojom.VmDiagnosticsProviderPendingReceiver,
      handle);
    this.$ = new ash.vm.mojom.VmDiagnosticsProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.vm.mojom.VmDiagnosticsProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPluginVmDiagnostics() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.vm.mojom.VmDiagnosticsProvider_GetPluginVmDiagnostics_ParamsSpec,
      ash.vm.mojom.VmDiagnosticsProvider_GetPluginVmDiagnostics_ResponseParamsSpec,
      []);
  }

};

ash.vm.mojom.VmDiagnosticsProvider.getRemote = function() {
  let remote = new ash.vm.mojom.VmDiagnosticsProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.vm.mojom.VmDiagnosticsProvider',
    'context');
  return remote.$;
};

// ParamsSpec for GetPluginVmDiagnostics
ash.vm.mojom.VmDiagnosticsProvider_GetPluginVmDiagnostics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.vm.mojom.VmDiagnosticsProvider.GetPluginVmDiagnostics_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.vm.mojom.VmDiagnosticsProvider_GetPluginVmDiagnostics_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.vm.mojom.VmDiagnosticsProvider.GetPluginVmDiagnostics_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'diagnostics', packedOffset: 0, packedBitOffset: 0, type: guest_os.mojom.DiagnosticsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.vm.mojom.VmDiagnosticsProviderPtr = ash.vm.mojom.VmDiagnosticsProviderRemote;
ash.vm.mojom.VmDiagnosticsProviderRequest = ash.vm.mojom.VmDiagnosticsProviderPendingReceiver;

