// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/vm/vm.mojom
// Module: ash.vm.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.vm = ash.vm || {};
ash.vm.vm.mojom = ash.vm.vm.mojom || {};


// Interface: VmDiagnosticsProvider
ash.vm.vm.mojom.mojom.VmDiagnosticsProvider = {};

ash.vm.vm.mojom.mojom.VmDiagnosticsProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.vm.vm.mojom.mojom.VmDiagnosticsProviderRemote = class {
  static get $interfaceName() {
    return 'ash.vm.mojom.VmDiagnosticsProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.vm.vm.mojom.mojom.VmDiagnosticsProviderPendingReceiver,
      handle);
    this.$ = new ash.vm.vm.mojom.mojom.VmDiagnosticsProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.vm.vm.mojom.mojom.VmDiagnosticsProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPluginVmDiagnostics() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.vm.vm.mojom.mojom.VmDiagnosticsProvider_GetPluginVmDiagnostics_ParamsSpec,
      ash.vm.vm.mojom.mojom.VmDiagnosticsProvider_GetPluginVmDiagnostics_ResponseParamsSpec,
      []);
  }

};

ash.vm.vm.mojom.mojom.VmDiagnosticsProvider.getRemote = function() {
  let remote = new ash.vm.vm.mojom.mojom.VmDiagnosticsProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.vm.mojom.VmDiagnosticsProvider',
    'context');
  return remote.$;
};

// ParamsSpec for GetPluginVmDiagnostics
ash.vm.vm.mojom.mojom.VmDiagnosticsProvider_GetPluginVmDiagnostics_ParamsSpec = {
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

ash.vm.vm.mojom.mojom.VmDiagnosticsProvider_GetPluginVmDiagnostics_ResponseParamsSpec = {
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
ash.vm.vm.mojom.mojom.VmDiagnosticsProviderPtr = ash.vm.vm.mojom.mojom.VmDiagnosticsProviderRemote;
ash.vm.vm.mojom.mojom.VmDiagnosticsProviderRequest = ash.vm.vm.mojom.mojom.VmDiagnosticsProviderPendingReceiver;

