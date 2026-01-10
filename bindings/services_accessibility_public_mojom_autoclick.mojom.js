// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/autoclick.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Interface: Autoclick
ax.mojom.Autoclick = {};

ax.mojom.AutoclickPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.mojom.AutoclickRemote = class {
  static get $interfaceName() {
    return 'ax.mojom.Autoclick';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.mojom.AutoclickPendingReceiver,
      handle);
    this.$ = new ax.mojom.AutoclickRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.mojom.AutoclickRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestScrollableBoundsForPoint(point) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ax.mojom.Autoclick_RequestScrollableBoundsForPoint_ParamsSpec,
      null,
      [point]);
  }

};

ax.mojom.Autoclick.getRemote = function() {
  let remote = new ax.mojom.AutoclickRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.mojom.Autoclick',
    'context');
  return remote.$;
};

// ParamsSpec for RequestScrollableBoundsForPoint
ax.mojom.Autoclick_RequestScrollableBoundsForPoint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Autoclick.RequestScrollableBoundsForPoint_Params',
      packedSize: 16,
      fields: [
        { name: 'point', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ax.mojom.AutoclickPtr = ax.mojom.AutoclickRemote;
ax.mojom.AutoclickRequest = ax.mojom.AutoclickPendingReceiver;


// Interface: AutoclickClient
ax.mojom.AutoclickClient = {};

ax.mojom.AutoclickClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.mojom.AutoclickClientRemote = class {
  static get $interfaceName() {
    return 'ax.mojom.AutoclickClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.mojom.AutoclickClientPendingReceiver,
      handle);
    this.$ = new ax.mojom.AutoclickClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.mojom.AutoclickClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  handleScrollableBoundsForPointFound(bounds) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ax.mojom.AutoclickClient_HandleScrollableBoundsForPointFound_ParamsSpec,
      null,
      [bounds]);
  }

  bindAutoclick() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ax.mojom.AutoclickClient_BindAutoclick_ParamsSpec,
      ax.mojom.AutoclickClient_BindAutoclick_ResponseParamsSpec,
      []);
  }

};

ax.mojom.AutoclickClient.getRemote = function() {
  let remote = new ax.mojom.AutoclickClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.mojom.AutoclickClient',
    'context');
  return remote.$;
};

// ParamsSpec for HandleScrollableBoundsForPointFound
ax.mojom.AutoclickClient_HandleScrollableBoundsForPointFound_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AutoclickClient.HandleScrollableBoundsForPointFound_Params',
      packedSize: 16,
      fields: [
        { name: 'bounds', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindAutoclick
ax.mojom.AutoclickClient_BindAutoclick_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AutoclickClient.BindAutoclick_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ax.mojom.AutoclickClient_BindAutoclick_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'autoclick_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ax.mojom.AutoclickClientPtr = ax.mojom.AutoclickClientRemote;
ax.mojom.AutoclickClientRequest = ax.mojom.AutoclickClientPendingReceiver;

