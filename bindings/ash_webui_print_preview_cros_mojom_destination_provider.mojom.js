// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/print_preview_cros/mojom/destination_provider.mojom
// Module: ash.printing.print_preview.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.printing = ash.printing || {};
ash.printing.printing.print_preview = ash.printing.printing.print_preview || {};
ash.printing.printing.print_preview.print_preview.mojom = ash.printing.printing.print_preview.print_preview.mojom || {};


// Interface: DestinationProvider
ash.printing.printing.print_preview.print_preview.mojom.mojom.DestinationProvider = {};

ash.printing.printing.print_preview.print_preview.mojom.mojom.DestinationProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.printing.printing.print_preview.print_preview.mojom.mojom.DestinationProviderRemote = class {
  static get $interfaceName() {
    return 'ash.printing.print_preview.mojom.DestinationProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.printing.printing.print_preview.print_preview.mojom.mojom.DestinationProviderPendingReceiver,
      handle);
    this.$ = new ash.printing.printing.print_preview.print_preview.mojom.mojom.DestinationProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.printing.printing.print_preview.print_preview.mojom.mojom.DestinationProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  fetchCapabilities(destination_id, printer_type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.printing.printing.print_preview.print_preview.mojom.mojom.DestinationProvider_FetchCapabilities_ParamsSpec,
      ash.printing.printing.print_preview.print_preview.mojom.mojom.DestinationProvider_FetchCapabilities_ResponseParamsSpec,
      [destination_id, printer_type]);
  }

};

ash.printing.printing.print_preview.print_preview.mojom.mojom.DestinationProvider.getRemote = function() {
  let remote = new ash.printing.printing.print_preview.print_preview.mojom.mojom.DestinationProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.printing.print_preview.mojom.DestinationProvider',
    'context');
  return remote.$;
};

// ParamsSpec for FetchCapabilities
ash.printing.printing.print_preview.print_preview.mojom.mojom.DestinationProvider_FetchCapabilities_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.DestinationProvider.FetchCapabilities_Params',
      packedSize: 24,
      fields: [
        { name: 'destination_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'printer_type', packedOffset: 8, packedBitOffset: 0, type: printing.mojom.PrinterTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.printing.printing.print_preview.print_preview.mojom.mojom.DestinationProvider_FetchCapabilities_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.DestinationProvider.FetchCapabilities_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'capabilities', packedOffset: 0, packedBitOffset: 0, type: ash.printing.print_preview.mojom.CapabilitiesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.printing.printing.print_preview.print_preview.mojom.mojom.DestinationProviderPtr = ash.printing.printing.print_preview.print_preview.mojom.mojom.DestinationProviderRemote;
ash.printing.printing.print_preview.print_preview.mojom.mojom.DestinationProviderRequest = ash.printing.printing.print_preview.print_preview.mojom.mojom.DestinationProviderPendingReceiver;

