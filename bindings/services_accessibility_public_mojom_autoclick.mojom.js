// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/autoclick.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Interface: Autoclick
ax.mojom.mojom.Autoclick = {};

ax.mojom.mojom.AutoclickPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.mojom.mojom.AutoclickRemote = class {
  static get $interfaceName() {
    return 'ax.mojom.Autoclick';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.mojom.mojom.AutoclickPendingReceiver,
      handle);
    this.$ = new ax.mojom.mojom.AutoclickRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.mojom.mojom.AutoclickRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestScrollableBoundsForPoint(point) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ax.mojom.mojom.Autoclick_RequestScrollableBoundsForPoint_ParamsSpec,
      null,
      [point]);
  }

};

ax.mojom.mojom.Autoclick.getRemote = function() {
  let remote = new ax.mojom.mojom.AutoclickRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.mojom.Autoclick',
    'context');
  return remote.$;
};

// ParamsSpec for RequestScrollableBoundsForPoint
ax.mojom.mojom.Autoclick_RequestScrollableBoundsForPoint_ParamsSpec = {
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
ax.mojom.mojom.AutoclickPtr = ax.mojom.mojom.AutoclickRemote;
ax.mojom.mojom.AutoclickRequest = ax.mojom.mojom.AutoclickPendingReceiver;


// Interface: AutoclickClient
ax.mojom.mojom.AutoclickClient = {};

ax.mojom.mojom.AutoclickClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.mojom.mojom.AutoclickClientRemote = class {
  static get $interfaceName() {
    return 'ax.mojom.AutoclickClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.mojom.mojom.AutoclickClientPendingReceiver,
      handle);
    this.$ = new ax.mojom.mojom.AutoclickClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.mojom.mojom.AutoclickClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  handleScrollableBoundsForPointFound(bounds) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ax.mojom.mojom.AutoclickClient_HandleScrollableBoundsForPointFound_ParamsSpec,
      null,
      [bounds]);
  }

  bindAutoclick() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ax.mojom.mojom.AutoclickClient_BindAutoclick_ParamsSpec,
      ax.mojom.mojom.AutoclickClient_BindAutoclick_ResponseParamsSpec,
      []);
  }

};

ax.mojom.mojom.AutoclickClient.getRemote = function() {
  let remote = new ax.mojom.mojom.AutoclickClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.mojom.AutoclickClient',
    'context');
  return remote.$;
};

// ParamsSpec for HandleScrollableBoundsForPointFound
ax.mojom.mojom.AutoclickClient_HandleScrollableBoundsForPointFound_ParamsSpec = {
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
ax.mojom.mojom.AutoclickClient_BindAutoclick_ParamsSpec = {
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

ax.mojom.mojom.AutoclickClient_BindAutoclick_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AutoclickClient.BindAutoclick_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'autoclick_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(ax.mojom.AutoclickRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ax.mojom.mojom.AutoclickClientPtr = ax.mojom.mojom.AutoclickClientRemote;
ax.mojom.mojom.AutoclickClientRequest = ax.mojom.mojom.AutoclickClientPendingReceiver;

