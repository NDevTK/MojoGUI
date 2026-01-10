// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/print_preview_cros/mojom/destination_provider.mojom
// Module: ash.printing.print_preview.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.printing = ash.printing || {};
ash.printing.print_preview = ash.printing.print_preview || {};
ash.printing.print_preview.mojom = ash.printing.print_preview.mojom || {};
var printing = printing || {};

ash.printing.print_preview.mojom.DestinationProvider = {};
ash.printing.print_preview.mojom.DestinationProvider.$interfaceName = 'ash.printing.print_preview.mojom.DestinationProvider';
ash.printing.print_preview.mojom.DestinationProvider_FetchCapabilities_ParamsSpec = { $: {} };
ash.printing.print_preview.mojom.DestinationProvider_FetchCapabilities_ResponseParamsSpec = { $: {} };

// Interface: DestinationProvider
mojo.internal.Struct(
    ash.printing.print_preview.mojom.DestinationProvider_FetchCapabilities_ParamsSpec, 'ash.printing.print_preview.mojom.DestinationProvider_FetchCapabilities_Params', [
      mojo.internal.StructField('destination_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('printer_type', 8, 0, printing.mojom.PrinterTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.printing.print_preview.mojom.DestinationProvider_FetchCapabilities_ResponseParamsSpec, 'ash.printing.print_preview.mojom.DestinationProvider_FetchCapabilities_ResponseParams', [
      mojo.internal.StructField('capabilities', 0, 0, ash.printing.print_preview.mojom.CapabilitiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.printing.print_preview.mojom.DestinationProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.printing.print_preview.mojom.DestinationProviderRemote = class {
  static get $interfaceName() {
    return 'ash.printing.print_preview.mojom.DestinationProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.printing.print_preview.mojom.DestinationProviderPendingReceiver,
      handle);
    this.$ = new ash.printing.print_preview.mojom.DestinationProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.printing.print_preview.mojom.DestinationProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  fetchCapabilities(destination_id, printer_type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.printing.print_preview.mojom.DestinationProvider_FetchCapabilities_ParamsSpec,
      ash.printing.print_preview.mojom.DestinationProvider_FetchCapabilities_ResponseParamsSpec,
      [destination_id, printer_type],
      false);
  }

};

ash.printing.print_preview.mojom.DestinationProvider.getRemote = function() {
  let remote = new ash.printing.print_preview.mojom.DestinationProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.printing.print_preview.mojom.DestinationProvider',
    'context');
  return remote.$;
};

ash.printing.print_preview.mojom.DestinationProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.printing.print_preview.mojom.DestinationProvider_FetchCapabilities_ParamsSpec.$.decode(message.payload);
          const result = this.impl.fetchCapabilities(params.destination_id, params.printer_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.printing.print_preview.mojom.DestinationProvider_FetchCapabilities_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

ash.printing.print_preview.mojom.DestinationProviderReceiver = ash.printing.print_preview.mojom.DestinationProviderReceiver;

ash.printing.print_preview.mojom.DestinationProviderPtr = ash.printing.print_preview.mojom.DestinationProviderRemote;
ash.printing.print_preview.mojom.DestinationProviderRequest = ash.printing.print_preview.mojom.DestinationProviderPendingReceiver;

