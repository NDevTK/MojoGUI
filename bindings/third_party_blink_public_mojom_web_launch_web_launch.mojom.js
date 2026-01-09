// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/web_launch/web_launch.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: WebLaunchService
blink.mojom.WebLaunchServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WebLaunchServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebLaunchService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WebLaunchServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.WebLaunchServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WebLaunchServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setLaunchFiles(files) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WebLaunchService_SetLaunchFiles_ParamsSpec.$,
      null,
      [files]);
  }

  enqueueLaunchParams(launch_url, time_navigation_started_in_browser, navigation_started) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.WebLaunchService_EnqueueLaunchParams_ParamsSpec.$,
      null,
      [launch_url, time_navigation_started_in_browser, navigation_started]);
  }

};

blink.mojom.WebLaunchService.getRemote = function() {
  let remote = new blink.mojom.WebLaunchServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebLaunchService',
    'context');
  return remote.$;
};

// ParamsSpec for SetLaunchFiles
blink.mojom.WebLaunchService_SetLaunchFiles_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebLaunchService.SetLaunchFiles_Params',
      packedSize: 16,
      fields: [
        { name: 'files', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EnqueueLaunchParams
blink.mojom.WebLaunchService_EnqueueLaunchParams_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebLaunchService.EnqueueLaunchParams_Params',
      packedSize: 32,
      fields: [
        { name: 'launch_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'time_navigation_started_in_browser', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'navigation_started', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.WebLaunchServicePtr = blink.mojom.WebLaunchServiceRemote;
blink.mojom.WebLaunchServiceRequest = blink.mojom.WebLaunchServicePendingReceiver;

