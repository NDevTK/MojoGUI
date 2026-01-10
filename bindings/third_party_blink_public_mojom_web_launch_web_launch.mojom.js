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
blink.mojom.WebLaunchService = {};

blink.mojom.WebLaunchService_SetLaunchFiles_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebLaunchService_SetLaunchFiles_Params',
      packedSize: 16,
      fields: [
        { name: 'files', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.FileSystemAccessEntrySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.WebLaunchService_EnqueueLaunchParams_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebLaunchService_EnqueueLaunchParams_Params',
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
      blink.mojom.WebLaunchService_SetLaunchFiles_ParamsSpec,
      null,
      [files]);
  }

  enqueueLaunchParams(launch_url, time_navigation_started_in_browser, navigation_started) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.WebLaunchService_EnqueueLaunchParams_ParamsSpec,
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
        { name: 'files', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.FileSystemAccessEntrySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'launch_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'time_navigation_started_in_browser', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'navigation_started', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
blink.mojom.WebLaunchServicePtr = blink.mojom.WebLaunchServiceRemote;
blink.mojom.WebLaunchServiceRequest = blink.mojom.WebLaunchServicePendingReceiver;

