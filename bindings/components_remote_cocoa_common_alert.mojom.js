// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/alert.mojom
// Module: remote_cocoa.mojom

'use strict';

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};


// Enum: AlertDisposition
remote_cocoa.mojom.AlertDisposition = {
  PRIMARY_BUTTON: 0,
  SECONDARY_BUTTON: 1,
  CLOSE: 2,
};

// Interface: AlertBridge
remote_cocoa.mojom.AlertBridge = {};

remote_cocoa.mojom.AlertBridgePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remote_cocoa.mojom.AlertBridgeRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.AlertBridge';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remote_cocoa.mojom.AlertBridgePendingReceiver,
      handle);
    this.$ = new remote_cocoa.mojom.AlertBridgeRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remote_cocoa.mojom.AlertBridgeRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  show(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remote_cocoa.mojom.AlertBridge_Show_ParamsSpec,
      remote_cocoa.mojom.AlertBridge_Show_ResponseParamsSpec,
      remote_cocoa.mojom.AlertBridge_Show_ResponseParamsSpec,
      [params],
      undefined,
      undefined
    );
  }

  dismiss() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remote_cocoa.mojom.AlertBridge_Dismiss_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

};

remote_cocoa.mojom.AlertBridge.getRemote = function() {
  let remote = new remote_cocoa.mojom.AlertBridgeRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.AlertBridge',
    'context');
  return remote.$;
};

// ParamsSpec for Show
remote_cocoa.mojom.AlertBridge_Show_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.AlertBridge.Show_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

remote_cocoa.mojom.AlertBridge_Show_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.AlertBridge.Show_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'disposition', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'text_field_value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'check_box_value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for Dismiss
remote_cocoa.mojom.AlertBridge_Dismiss_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.AlertBridge.Dismiss_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
remote_cocoa.mojom.AlertBridgePtr = remote_cocoa.mojom.AlertBridgeRemote;
remote_cocoa.mojom.AlertBridgeRequest = remote_cocoa.mojom.AlertBridgePendingReceiver;

