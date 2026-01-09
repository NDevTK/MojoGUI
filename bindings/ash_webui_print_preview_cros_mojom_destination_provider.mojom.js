// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/print_preview_cros/mojom/destination_provider.mojom
// Module: ash.printing.print_preview.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.printing = ash.printing || {};
ash.printing.print_preview = ash.printing.print_preview || {};
ash.printing.print_preview.mojom = ash.printing.print_preview.mojom || {};


// Interface: DestinationProvider
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
      ash.printing.print_preview.mojom.DestinationProvider_FetchCapabilities_ParamsSpec.$,
      ash.printing.print_preview.mojom.DestinationProvider_FetchCapabilities_ResponseParamsSpec.$,
      [destination_id, printer_type]);
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
}};

// ParamsSpec for FetchCapabilities
ash.printing.print_preview.mojom.DestinationProvider_FetchCapabilities_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.DestinationProvider.FetchCapabilities_Params',
      packedSize: 24,
      fields: [
        { name: 'destination_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'printer_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

ash.printing.print_preview.mojom.DestinationProvider_FetchCapabilities_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.DestinationProvider.FetchCapabilities_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'capabilities', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
ash.printing.print_preview.mojom.DestinationProviderPtr = ash.printing.print_preview.mojom.DestinationProviderRemote;
ash.printing.print_preview.mojom.DestinationProviderRequest = ash.printing.print_preview.mojom.DestinationProviderPendingReceiver;

