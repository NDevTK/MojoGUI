// Auto-generated MojoJS binding
// Source: chromium_src/content/shell/common/power_monitor_test.mojom
// Module: content.mojom

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};

content.mojom.PowerMonitorTest = {};
content.mojom.PowerMonitorTest.$interfaceName = 'content.mojom.PowerMonitorTest';
content.mojom.PowerMonitorTest_QueryNextState_ParamsSpec = { $: {} };
content.mojom.PowerMonitorTest_QueryNextState_ResponseParamsSpec = { $: {} };

// Interface: PowerMonitorTest
mojo.internal.Struct(
    content.mojom.PowerMonitorTest_QueryNextState_ParamsSpec, 'content.mojom.PowerMonitorTest_QueryNextState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.PowerMonitorTest_QueryNextState_ResponseParamsSpec, 'content.mojom.PowerMonitorTest_QueryNextState_ResponseParams', [
      mojo.internal.StructField('battery_power_status', 0, 0, mojo_base.mojom.BatteryPowerStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.PowerMonitorTestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.PowerMonitorTestRemote = class {
  static get $interfaceName() {
    return 'content.mojom.PowerMonitorTest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.PowerMonitorTestPendingReceiver,
      handle);
    this.$ = new content.mojom.PowerMonitorTestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  queryNextState() {
    return this.$.queryNextState();
  }
};

content.mojom.PowerMonitorTestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PowerMonitorTest', [
      { explicit: null },
    ]);
  }

  queryNextState() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.PowerMonitorTest_QueryNextState_ParamsSpec,
      content.mojom.PowerMonitorTest_QueryNextState_ResponseParamsSpec,
      [],
      false);
  }

};

content.mojom.PowerMonitorTest.getRemote = function() {
  let remote = new content.mojom.PowerMonitorTestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.PowerMonitorTest',
    'context');
  return remote.$;
};

content.mojom.PowerMonitorTestReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PowerMonitorTest', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.PowerMonitorTest_QueryNextState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.PowerMonitorTest_QueryNextState_ParamsSpec.$.structSpec);
          const result = this.impl.queryNextState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.PowerMonitorTest_QueryNextState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

content.mojom.PowerMonitorTestReceiver = content.mojom.PowerMonitorTestReceiver;

content.mojom.PowerMonitorTestPtr = content.mojom.PowerMonitorTestRemote;
content.mojom.PowerMonitorTestRequest = content.mojom.PowerMonitorTestPendingReceiver;

