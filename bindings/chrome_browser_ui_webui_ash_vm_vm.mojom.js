// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/vm/vm.mojom
// Module: ash.vm.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.vm = ash.vm || {};
ash.vm.mojom = ash.vm.mojom || {};
var guest_os = guest_os || {};

ash.vm.mojom.VmDiagnosticsProvider = {};
ash.vm.mojom.VmDiagnosticsProvider.$interfaceName = 'ash.vm.mojom.VmDiagnosticsProvider';
ash.vm.mojom.VmDiagnosticsProvider_GetPluginVmDiagnostics_ParamsSpec = { $: {} };
ash.vm.mojom.VmDiagnosticsProvider_GetPluginVmDiagnostics_ResponseParamsSpec = { $: {} };

// Interface: VmDiagnosticsProvider
mojo.internal.Struct(
    ash.vm.mojom.VmDiagnosticsProvider_GetPluginVmDiagnostics_ParamsSpec, 'ash.vm.mojom.VmDiagnosticsProvider_GetPluginVmDiagnostics_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.vm.mojom.VmDiagnosticsProvider_GetPluginVmDiagnostics_ResponseParamsSpec, 'ash.vm.mojom.VmDiagnosticsProvider_GetPluginVmDiagnostics_ResponseParams', [
      mojo.internal.StructField('diagnostics', 0, 0, guest_os.mojom.DiagnosticsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
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

ash.vm.mojom.VmDiagnosticsProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = ash.vm.mojom.VmDiagnosticsProvider_GetPluginVmDiagnostics_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getPluginVmDiagnostics();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.vm.mojom.VmDiagnosticsProvider_GetPluginVmDiagnostics_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

ash.vm.mojom.VmDiagnosticsProviderReceiver = ash.vm.mojom.VmDiagnosticsProviderReceiver;

ash.vm.mojom.VmDiagnosticsProviderPtr = ash.vm.mojom.VmDiagnosticsProviderRemote;
ash.vm.mojom.VmDiagnosticsProviderRequest = ash.vm.mojom.VmDiagnosticsProviderPendingReceiver;

