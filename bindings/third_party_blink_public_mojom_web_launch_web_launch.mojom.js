// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/web_launch/web_launch.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var url = url || {};


// Interface: WebLaunchService
blink.mojom.mojom.WebLaunchService = {};

blink.mojom.mojom.WebLaunchServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.WebLaunchServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebLaunchService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.WebLaunchServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.WebLaunchServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.WebLaunchServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setLaunchFiles(files) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.WebLaunchService_SetLaunchFiles_ParamsSpec,
      null,
      [files]);
  }

  enqueueLaunchParams(launch_url, time_navigation_started_in_browser, navigation_started) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.WebLaunchService_EnqueueLaunchParams_ParamsSpec,
      null,
      [launch_url, time_navigation_started_in_browser, navigation_started]);
  }

};

blink.mojom.mojom.WebLaunchService.getRemote = function() {
  let remote = new blink.mojom.mojom.WebLaunchServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebLaunchService',
    'context');
  return remote.$;
};

// ParamsSpec for SetLaunchFiles
blink.mojom.mojom.WebLaunchService_SetLaunchFiles_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebLaunchService.SetLaunchFiles_Params',
      packedSize: 16,
      fields: [
        { name: 'files', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.FileSystemAccessEntrySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EnqueueLaunchParams
blink.mojom.mojom.WebLaunchService_EnqueueLaunchParams_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebLaunchService.EnqueueLaunchParams_Params',
      packedSize: 32,
      fields: [
        { name: 'launch_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'time_navigation_started_in_browser', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'navigation_started', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.WebLaunchServicePtr = blink.mojom.mojom.WebLaunchServiceRemote;
blink.mojom.mojom.WebLaunchServiceRequest = blink.mojom.mojom.WebLaunchServicePendingReceiver;

