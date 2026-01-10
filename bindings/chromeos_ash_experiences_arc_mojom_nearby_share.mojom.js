// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/nearby_share.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var url = url || {};

arc.mojom.FileInfoSpec = { $: {} };
arc.mojom.ShareIntentInfoSpec = { $: {} };
arc.mojom.NearbyShareSessionHost = {};
arc.mojom.NearbyShareSessionHost.$interfaceName = 'arc.mojom.NearbyShareSessionHost';
arc.mojom.NearbyShareSessionInstance = {};
arc.mojom.NearbyShareSessionInstance.$interfaceName = 'arc.mojom.NearbyShareSessionInstance';
arc.mojom.NearbyShareSessionInstance_OnNearbyShareViewClosed_ParamsSpec = { $: {} };
arc.mojom.NearbyShareHost = {};
arc.mojom.NearbyShareHost.$interfaceName = 'arc.mojom.NearbyShareHost';
arc.mojom.NearbyShareHost_StartNearbyShare_ParamsSpec = { $: {} };
arc.mojom.NearbyShareHost_StartNearbyShare_ResponseParamsSpec = { $: {} };
arc.mojom.NearbyShareInstance = {};
arc.mojom.NearbyShareInstance.$interfaceName = 'arc.mojom.NearbyShareInstance';
arc.mojom.NearbyShareInstance_Init_ParamsSpec = { $: {} };
arc.mojom.NearbyShareInstance_Init_ResponseParamsSpec = { $: {} };

// Struct: FileInfo
mojo.internal.Struct(
    arc.mojom.FileInfoSpec, 'arc.mojom.FileInfo', [
      mojo.internal.StructField('content_uri', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mime_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('size', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ShareIntentInfo
mojo.internal.Struct(
    arc.mojom.ShareIntentInfoSpec, 'arc.mojom.ShareIntentInfo', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('mime_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('extras', 16, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('files', 24, 0, mojo.internal.Array(arc.mojom.FileInfoSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 40]]);

// Interface: NearbyShareSessionHost
arc.mojom.NearbyShareSessionHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.NearbyShareSessionHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.NearbyShareSessionHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.NearbyShareSessionHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.NearbyShareSessionHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.NearbyShareSessionHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.NearbyShareSessionHost.getRemote = function() {
  let remote = new arc.mojom.NearbyShareSessionHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.NearbyShareSessionHost',
    'context');
  return remote.$;
};

arc.mojom.NearbyShareSessionHostReceiver = class {
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
      }
    }});
  }
};

arc.mojom.NearbyShareSessionHostReceiver = arc.mojom.NearbyShareSessionHostReceiver;

arc.mojom.NearbyShareSessionHostPtr = arc.mojom.NearbyShareSessionHostRemote;
arc.mojom.NearbyShareSessionHostRequest = arc.mojom.NearbyShareSessionHostPendingReceiver;


// Interface: NearbyShareSessionInstance
mojo.internal.Struct(
    arc.mojom.NearbyShareSessionInstance_OnNearbyShareViewClosed_ParamsSpec, 'arc.mojom.NearbyShareSessionInstance_OnNearbyShareViewClosed_Params', [
    ],
    [[0, 8]]);

arc.mojom.NearbyShareSessionInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.NearbyShareSessionInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.NearbyShareSessionInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.NearbyShareSessionInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.NearbyShareSessionInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.NearbyShareSessionInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNearbyShareViewClosed() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.NearbyShareSessionInstance_OnNearbyShareViewClosed_ParamsSpec,
      null,
      [],
      false);
  }

};

arc.mojom.NearbyShareSessionInstance.getRemote = function() {
  let remote = new arc.mojom.NearbyShareSessionInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.NearbyShareSessionInstance',
    'context');
  return remote.$;
};

arc.mojom.NearbyShareSessionInstanceReceiver = class {
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
          const params = arc.mojom.NearbyShareSessionInstance_OnNearbyShareViewClosed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNearbyShareViewClosed();
          break;
        }
      }
    }});
  }
};

arc.mojom.NearbyShareSessionInstanceReceiver = arc.mojom.NearbyShareSessionInstanceReceiver;

arc.mojom.NearbyShareSessionInstancePtr = arc.mojom.NearbyShareSessionInstanceRemote;
arc.mojom.NearbyShareSessionInstanceRequest = arc.mojom.NearbyShareSessionInstancePendingReceiver;


// Interface: NearbyShareHost
mojo.internal.Struct(
    arc.mojom.NearbyShareHost_StartNearbyShare_ParamsSpec, 'arc.mojom.NearbyShareHost_StartNearbyShare_Params', [
      mojo.internal.StructField('info', 0, 0, arc.mojom.ShareIntentInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('instance', 8, 0, mojo.internal.InterfaceProxy(arc.mojom.NearbyShareSessionInstanceSpec), null, false, 0, undefined),
      mojo.internal.StructField('task_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.NearbyShareHost_StartNearbyShare_ResponseParamsSpec, 'arc.mojom.NearbyShareHost_StartNearbyShare_ResponseParams', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.NearbyShareSessionHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.NearbyShareHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.NearbyShareHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.NearbyShareHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.NearbyShareHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.NearbyShareHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.NearbyShareHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startNearbyShare(task_id, info, instance) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.NearbyShareHost_StartNearbyShare_ParamsSpec,
      arc.mojom.NearbyShareHost_StartNearbyShare_ResponseParamsSpec,
      [task_id, info, instance],
      false);
  }

};

arc.mojom.NearbyShareHost.getRemote = function() {
  let remote = new arc.mojom.NearbyShareHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.NearbyShareHost',
    'context');
  return remote.$;
};

arc.mojom.NearbyShareHostReceiver = class {
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
          const params = arc.mojom.NearbyShareHost_StartNearbyShare_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startNearbyShare(params.task_id, params.info, params.instance);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.NearbyShareHost_StartNearbyShare_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

arc.mojom.NearbyShareHostReceiver = arc.mojom.NearbyShareHostReceiver;

arc.mojom.NearbyShareHostPtr = arc.mojom.NearbyShareHostRemote;
arc.mojom.NearbyShareHostRequest = arc.mojom.NearbyShareHostPendingReceiver;


// Interface: NearbyShareInstance
mojo.internal.Struct(
    arc.mojom.NearbyShareInstance_Init_ParamsSpec, 'arc.mojom.NearbyShareInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.NearbyShareHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NearbyShareInstance_Init_ResponseParamsSpec, 'arc.mojom.NearbyShareInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

arc.mojom.NearbyShareInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.NearbyShareInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.NearbyShareInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.NearbyShareInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.NearbyShareInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.NearbyShareInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.NearbyShareInstance_Init_ParamsSpec,
      arc.mojom.NearbyShareInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

};

arc.mojom.NearbyShareInstance.getRemote = function() {
  let remote = new arc.mojom.NearbyShareInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.NearbyShareInstance',
    'context');
  return remote.$;
};

arc.mojom.NearbyShareInstanceReceiver = class {
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
          const params = arc.mojom.NearbyShareInstance_Init_ParamsSpec.$.decode(message.payload);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.NearbyShareInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

arc.mojom.NearbyShareInstanceReceiver = arc.mojom.NearbyShareInstanceReceiver;

arc.mojom.NearbyShareInstancePtr = arc.mojom.NearbyShareInstanceRemote;
arc.mojom.NearbyShareInstanceRequest = arc.mojom.NearbyShareInstancePendingReceiver;

