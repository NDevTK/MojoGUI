// Auto-generated MojoJS binding
// Source: chromium_src/content/shell/common/power_monitor_test.mojom
// Module: content.mojom

'use strict';

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
};

content.mojom.PowerMonitorTestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  queryNextState() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = content.mojom.PowerMonitorTest_QueryNextState_ParamsSpec.$.decode(message.payload);
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
    }});
  }
};

content.mojom.PowerMonitorTestReceiver = content.mojom.PowerMonitorTestReceiver;

content.mojom.PowerMonitorTestPtr = content.mojom.PowerMonitorTestRemote;
content.mojom.PowerMonitorTestRequest = content.mojom.PowerMonitorTestPendingReceiver;

