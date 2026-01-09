// Auto-generated MojoJS binding
// Source: chromium_src/content/shell/common/power_monitor_test.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: PowerMonitorTest
content.mojom.PowerMonitorTest = {};

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
      content.mojom.PowerMonitorTest_QueryNextState_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
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

// ParamsSpec for QueryNextState
content.mojom.PowerMonitorTest_QueryNextState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.PowerMonitorTest.QueryNextState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.mojom.PowerMonitorTest_QueryNextState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.PowerMonitorTest.QueryNextState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'battery_power_status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
content.mojom.PowerMonitorTestPtr = content.mojom.PowerMonitorTestRemote;
content.mojom.PowerMonitorTestRequest = content.mojom.PowerMonitorTestPendingReceiver;

