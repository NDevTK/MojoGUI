// Auto-generated MojoJS binding
// Source: chromium_src/content/web_test/common/web_test.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var mojo_base = mojo_base || {};
var skia = skia || {};
var blink = blink || {};
var gfx = gfx || {};
var url = url || {};

content.mojom.AutoResponseModeSpec = { $: mojo.internal.Enum() };
content.mojom.WorkItemSpec = { $: {} };
content.mojom.WebTestRunTestConfigurationSpec = { $: {} };
content.mojom.WebTestRendererDumpResultSpec = { $: {} };
content.mojom.WorkItemBackForwardSpec = { $: {} };
content.mojom.WorkItemLoadSpec = { $: {} };
content.mojom.WorkItemReloadSpec = { $: {} };
content.mojom.WorkItemLoadingScriptSpec = { $: {} };
content.mojom.WorkItemNonLoadingScriptSpec = { $: {} };
content.mojom.WebTestRenderFrame = {};
content.mojom.WebTestRenderFrame.$interfaceName = 'content.mojom.WebTestRenderFrame';
content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ParamsSpec = { $: {} };
content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ResponseParamsSpec = { $: {} };
content.mojom.WebTestRenderFrame_DumpFrameLayout_ParamsSpec = { $: {} };
content.mojom.WebTestRenderFrame_DumpFrameLayout_ResponseParamsSpec = { $: {} };
content.mojom.WebTestRenderFrame_SetTestConfiguration_ParamsSpec = { $: {} };
content.mojom.WebTestRenderFrame_OnDeactivated_ParamsSpec = { $: {} };
content.mojom.WebTestRenderFrame_OnReactivated_ParamsSpec = { $: {} };
content.mojom.WebTestRenderFrame_BlockTestUntilStart_ParamsSpec = { $: {} };
content.mojom.WebTestRenderFrame_StartTest_ParamsSpec = { $: {} };
content.mojom.WebTestRenderFrame_SetupRendererProcessForNonTestWindow_ParamsSpec = { $: {} };
content.mojom.WebTestRenderFrame_ReplicateWebTestRuntimeFlagsChanges_ParamsSpec = { $: {} };
content.mojom.WebTestRenderFrame_TestFinishedFromSecondaryRenderer_ParamsSpec = { $: {} };
content.mojom.WebTestRenderFrame_ResetRendererAfterWebTest_ParamsSpec = { $: {} };
content.mojom.WebTestRenderFrame_ProcessWorkItem_ParamsSpec = { $: {} };
content.mojom.WebTestRenderFrame_ReplicateWorkQueueStates_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost = {};
content.mojom.WebTestControlHost.$interfaceName = 'content.mojom.WebTestControlHost';
content.mojom.WebTestControlHost_InitiateCaptureDump_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_TestFinishedInSecondaryRenderer_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_PrintMessageToStderr_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_PrintMessage_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_OverridePreferences_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_Reload_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_CheckForLeakedWindows_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SetMainWindowHidden_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SetFrameWindowHidden_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_GoToOffset_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SendBluetoothManualChooserEvent_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SetBluetoothManualChooser_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ResponseParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SetPopupBlockingEnabled_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_LoadURLForFrame_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SimulateScreenOrientationChanged_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SetPermission_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_BlockThirdPartyCookies_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_GetWritableDirectory_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_GetWritableDirectory_ResponseParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SetFilePathForMockFileDialog_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ResponseParamsSpec = { $: {} };
content.mojom.WebTestControlHost_FocusDevtoolsSecondaryWindow_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ResponseParamsSpec = { $: {} };
content.mojom.WebTestControlHost_ClearTrustTokenState_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_ClearTrustTokenState_ResponseParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SimulateWebNotificationClick_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SimulateWebNotificationClose_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SimulateWebContentIndexDelete_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_WebTestRuntimeFlagsChanged_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ResponseParamsSpec = { $: {} };
content.mojom.WebTestControlHost_DropPointerLock_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SetPointerLockWillFail_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SetPointerLockWillRespondAsynchronously_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_AllowPointerLock_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_WorkItemAdded_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_RequestWorkItem_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_WorkQueueStatesChanged_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SetAcceptLanguages_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SetRegisterProtocolHandlerMode_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_EnableAutoResize_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_DisableAutoResize_ParamsSpec = { $: {} };
content.mojom.NonAssociatedWebTestControlHost = {};
content.mojom.NonAssociatedWebTestControlHost.$interfaceName = 'content.mojom.NonAssociatedWebTestControlHost';
content.mojom.NonAssociatedWebTestControlHost_SetLCPPNavigationHint_ParamsSpec = { $: {} };

// Enum: AutoResponseMode
content.mojom.AutoResponseMode = {
  kNone: 0,
  kAutoAccept: 1,
  kAutoReject: 2,
};

// Union: WorkItem
mojo.internal.Union(
    content.mojom.WorkItemSpec, 'content.mojom.WorkItem', {
      'back_forward': {
        'ordinal': 0,
        'type': content.mojom.WorkItemBackForwardSpec.$,
        'nullable': false,
      },
      'load': {
        'ordinal': 1,
        'type': content.mojom.WorkItemLoadSpec.$,
        'nullable': false,
      },
      'reload': {
        'ordinal': 2,
        'type': content.mojom.WorkItemReloadSpec.$,
        'nullable': false,
      },
      'loading_script': {
        'ordinal': 3,
        'type': content.mojom.WorkItemLoadingScriptSpec.$,
        'nullable': false,
      },
      'non_loading_script': {
        'ordinal': 4,
        'type': content.mojom.WorkItemNonLoadingScriptSpec.$,
        'nullable': false,
      },
    });

// Struct: WebTestRunTestConfiguration
mojo.internal.Struct(
    content.mojom.WebTestRunTestConfigurationSpec, 'content.mojom.WebTestRunTestConfiguration', [
      mojo.internal.StructField('current_working_directory', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('temp_path', 8, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('test_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('expected_pixel_hash', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('allow_external_pages', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('wpt_print_mode', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('protocol_mode', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: WebTestRendererDumpResult
mojo.internal.Struct(
    content.mojom.WebTestRendererDumpResultSpec, 'content.mojom.WebTestRendererDumpResult', [
      mojo.internal.StructField('audio', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('layout', 8, 0, mojo_base.mojom.ByteStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('pixels', 16, 0, skia.mojom.BitmapN32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('actual_pixel_hash', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('selection_rect', 32, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: WorkItemBackForward
mojo.internal.Struct(
    content.mojom.WorkItemBackForwardSpec, 'content.mojom.WorkItemBackForward', [
      mojo.internal.StructField('distance', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WorkItemLoad
mojo.internal.Struct(
    content.mojom.WorkItemLoadSpec, 'content.mojom.WorkItemLoad', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('target', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WorkItemReload
mojo.internal.Struct(
    content.mojom.WorkItemReloadSpec, 'content.mojom.WorkItemReload', [
    ],
    [[0, 8]]);

// Struct: WorkItemLoadingScript
mojo.internal.Struct(
    content.mojom.WorkItemLoadingScriptSpec, 'content.mojom.WorkItemLoadingScript', [
      mojo.internal.StructField('script', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WorkItemNonLoadingScript
mojo.internal.Struct(
    content.mojom.WorkItemNonLoadingScriptSpec, 'content.mojom.WorkItemNonLoadingScript', [
      mojo.internal.StructField('script', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: WebTestRenderFrame
mojo.internal.Struct(
    content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ParamsSpec, 'content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ResponseParamsSpec, 'content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.WebTestRenderFrame_DumpFrameLayout_ParamsSpec, 'content.mojom.WebTestRenderFrame_DumpFrameLayout_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.WebTestRenderFrame_DumpFrameLayout_ResponseParamsSpec, 'content.mojom.WebTestRenderFrame_DumpFrameLayout_ResponseParams', [
      mojo.internal.StructField('frame_layout_dump', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestRenderFrame_SetTestConfiguration_ParamsSpec, 'content.mojom.WebTestRenderFrame_SetTestConfiguration_Params', [
      mojo.internal.StructField('config', 0, 0, content.mojom.WebTestRunTestConfigurationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('starting_test', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.WebTestRenderFrame_OnDeactivated_ParamsSpec, 'content.mojom.WebTestRenderFrame_OnDeactivated_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.WebTestRenderFrame_OnReactivated_ParamsSpec, 'content.mojom.WebTestRenderFrame_OnReactivated_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.WebTestRenderFrame_BlockTestUntilStart_ParamsSpec, 'content.mojom.WebTestRenderFrame_BlockTestUntilStart_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.WebTestRenderFrame_StartTest_ParamsSpec, 'content.mojom.WebTestRenderFrame_StartTest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.WebTestRenderFrame_SetupRendererProcessForNonTestWindow_ParamsSpec, 'content.mojom.WebTestRenderFrame_SetupRendererProcessForNonTestWindow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.WebTestRenderFrame_ReplicateWebTestRuntimeFlagsChanges_ParamsSpec, 'content.mojom.WebTestRenderFrame_ReplicateWebTestRuntimeFlagsChanges_Params', [
      mojo.internal.StructField('changed_layout_test_runtime_flags', 0, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestRenderFrame_TestFinishedFromSecondaryRenderer_ParamsSpec, 'content.mojom.WebTestRenderFrame_TestFinishedFromSecondaryRenderer_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.WebTestRenderFrame_ResetRendererAfterWebTest_ParamsSpec, 'content.mojom.WebTestRenderFrame_ResetRendererAfterWebTest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.WebTestRenderFrame_ProcessWorkItem_ParamsSpec, 'content.mojom.WebTestRenderFrame_ProcessWorkItem_Params', [
      mojo.internal.StructField('work_item', 0, 0, content.mojom.WorkItemSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestRenderFrame_ReplicateWorkQueueStates_ParamsSpec, 'content.mojom.WebTestRenderFrame_ReplicateWorkQueueStates_Params', [
      mojo.internal.StructField('work_queue_states', 0, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.WebTestRenderFramePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.WebTestRenderFrameRemote = class {
  static get $interfaceName() {
    return 'content.mojom.WebTestRenderFrame';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.WebTestRenderFramePendingReceiver,
      handle);
    this.$ = new content.mojom.WebTestRenderFrameRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.WebTestRenderFrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  synchronouslyCompositeAfterTest() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ParamsSpec,
      content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ResponseParamsSpec,
      [],
      false);
  }

  dumpFrameLayout() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.WebTestRenderFrame_DumpFrameLayout_ParamsSpec,
      content.mojom.WebTestRenderFrame_DumpFrameLayout_ResponseParamsSpec,
      [],
      false);
  }

  setTestConfiguration(config, starting_test) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.WebTestRenderFrame_SetTestConfiguration_ParamsSpec,
      null,
      [config, starting_test],
      false);
  }

  onDeactivated() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.WebTestRenderFrame_OnDeactivated_ParamsSpec,
      null,
      [],
      false);
  }

  onReactivated() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      content.mojom.WebTestRenderFrame_OnReactivated_ParamsSpec,
      null,
      [],
      false);
  }

  blockTestUntilStart() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      content.mojom.WebTestRenderFrame_BlockTestUntilStart_ParamsSpec,
      null,
      [],
      false);
  }

  startTest() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      content.mojom.WebTestRenderFrame_StartTest_ParamsSpec,
      null,
      [],
      false);
  }

  setupRendererProcessForNonTestWindow() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      content.mojom.WebTestRenderFrame_SetupRendererProcessForNonTestWindow_ParamsSpec,
      null,
      [],
      false);
  }

  replicateWebTestRuntimeFlagsChanges(changed_layout_test_runtime_flags) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      content.mojom.WebTestRenderFrame_ReplicateWebTestRuntimeFlagsChanges_ParamsSpec,
      null,
      [changed_layout_test_runtime_flags],
      false);
  }

  testFinishedFromSecondaryRenderer() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      content.mojom.WebTestRenderFrame_TestFinishedFromSecondaryRenderer_ParamsSpec,
      null,
      [],
      false);
  }

  resetRendererAfterWebTest() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      content.mojom.WebTestRenderFrame_ResetRendererAfterWebTest_ParamsSpec,
      null,
      [],
      false);
  }

  processWorkItem(work_item) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      content.mojom.WebTestRenderFrame_ProcessWorkItem_ParamsSpec,
      null,
      [work_item],
      false);
  }

  replicateWorkQueueStates(work_queue_states) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      content.mojom.WebTestRenderFrame_ReplicateWorkQueueStates_ParamsSpec,
      null,
      [work_queue_states],
      false);
  }

};

content.mojom.WebTestRenderFrame.getRemote = function() {
  let remote = new content.mojom.WebTestRenderFrameRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.WebTestRenderFrame',
    'context');
  return remote.$;
};

content.mojom.WebTestRenderFrameReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.synchronouslyCompositeAfterTest');
          const result = this.impl.synchronouslyCompositeAfterTest();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestRenderFrame_DumpFrameLayout_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.dumpFrameLayout');
          const result = this.impl.dumpFrameLayout();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.WebTestRenderFrame_DumpFrameLayout_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestRenderFrame_SetTestConfiguration_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setTestConfiguration');
          const result = this.impl.setTestConfiguration(params.config, params.starting_test);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestRenderFrame_OnDeactivated_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onDeactivated');
          const result = this.impl.onDeactivated();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestRenderFrame_OnReactivated_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onReactivated');
          const result = this.impl.onReactivated();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestRenderFrame_BlockTestUntilStart_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.blockTestUntilStart');
          const result = this.impl.blockTestUntilStart();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestRenderFrame_StartTest_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.startTest');
          const result = this.impl.startTest();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestRenderFrame_SetupRendererProcessForNonTestWindow_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setupRendererProcessForNonTestWindow');
          const result = this.impl.setupRendererProcessForNonTestWindow();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestRenderFrame_ReplicateWebTestRuntimeFlagsChanges_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.replicateWebTestRuntimeFlagsChanges');
          const result = this.impl.replicateWebTestRuntimeFlagsChanges(params.changed_layout_test_runtime_flags);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestRenderFrame_TestFinishedFromSecondaryRenderer_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.testFinishedFromSecondaryRenderer');
          const result = this.impl.testFinishedFromSecondaryRenderer();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestRenderFrame_ResetRendererAfterWebTest_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.resetRendererAfterWebTest');
          const result = this.impl.resetRendererAfterWebTest();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestRenderFrame_ProcessWorkItem_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.processWorkItem');
          const result = this.impl.processWorkItem(params.work_item);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestRenderFrame_ReplicateWorkQueueStates_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.replicateWorkQueueStates');
          const result = this.impl.replicateWorkQueueStates(params.work_queue_states);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.WebTestRenderFrameReceiver = content.mojom.WebTestRenderFrameReceiver;

content.mojom.WebTestRenderFramePtr = content.mojom.WebTestRenderFrameRemote;
content.mojom.WebTestRenderFrameRequest = content.mojom.WebTestRenderFramePendingReceiver;


// Interface: WebTestControlHost
mojo.internal.Struct(
    content.mojom.WebTestControlHost_InitiateCaptureDump_ParamsSpec, 'content.mojom.WebTestControlHost_InitiateCaptureDump_Params', [
      mojo.internal.StructField('result', 0, 0, content.mojom.WebTestRendererDumpResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('capture_navigation_history', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('capture_pixels', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_TestFinishedInSecondaryRenderer_ParamsSpec, 'content.mojom.WebTestControlHost_TestFinishedInSecondaryRenderer_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_PrintMessageToStderr_ParamsSpec, 'content.mojom.WebTestControlHost_PrintMessageToStderr_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_PrintMessage_ParamsSpec, 'content.mojom.WebTestControlHost_PrintMessage_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_OverridePreferences_ParamsSpec, 'content.mojom.WebTestControlHost_OverridePreferences_Params', [
      mojo.internal.StructField('web_preferences', 0, 0, blink.mojom.WebPreferencesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_Reload_ParamsSpec, 'content.mojom.WebTestControlHost_Reload_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_CheckForLeakedWindows_ParamsSpec, 'content.mojom.WebTestControlHost_CheckForLeakedWindows_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SetMainWindowHidden_ParamsSpec, 'content.mojom.WebTestControlHost_SetMainWindowHidden_Params', [
      mojo.internal.StructField('hidden', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SetFrameWindowHidden_ParamsSpec, 'content.mojom.WebTestControlHost_SetFrameWindowHidden_Params', [
      mojo.internal.StructField('frame_token', 0, 0, blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hidden', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_GoToOffset_ParamsSpec, 'content.mojom.WebTestControlHost_GoToOffset_Params', [
      mojo.internal.StructField('offset', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SendBluetoothManualChooserEvent_ParamsSpec, 'content.mojom.WebTestControlHost_SendBluetoothManualChooserEvent_Params', [
      mojo.internal.StructField('event', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('argument', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SetBluetoothManualChooser_ParamsSpec, 'content.mojom.WebTestControlHost_SetBluetoothManualChooser_Params', [
      mojo.internal.StructField('enable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ParamsSpec, 'content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ResponseParamsSpec, 'content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ResponseParams', [
      mojo.internal.StructField('events', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SetPopupBlockingEnabled_ParamsSpec, 'content.mojom.WebTestControlHost_SetPopupBlockingEnabled_Params', [
      mojo.internal.StructField('block_popups', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_LoadURLForFrame_ParamsSpec, 'content.mojom.WebTestControlHost_LoadURLForFrame_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SimulateScreenOrientationChanged_ParamsSpec, 'content.mojom.WebTestControlHost_SimulateScreenOrientationChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SetPermission_ParamsSpec, 'content.mojom.WebTestControlHost_SetPermission_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, blink.mojom.PermissionStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('origin', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('embedding_origin', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_BlockThirdPartyCookies_ParamsSpec, 'content.mojom.WebTestControlHost_BlockThirdPartyCookies_Params', [
      mojo.internal.StructField('block', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_GetWritableDirectory_ParamsSpec, 'content.mojom.WebTestControlHost_GetWritableDirectory_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_GetWritableDirectory_ResponseParamsSpec, 'content.mojom.WebTestControlHost_GetWritableDirectory_ResponseParams', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SetFilePathForMockFileDialog_ParamsSpec, 'content.mojom.WebTestControlHost_SetFilePathForMockFileDialog_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ParamsSpec, 'content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_Params', [
      mojo.internal.StructField('disallowed_suffixes', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ResponseParamsSpec, 'content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ResponseParams', [
      mojo.internal.StructField('file', 0, 0, mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_FocusDevtoolsSecondaryWindow_ParamsSpec, 'content.mojom.WebTestControlHost_FocusDevtoolsSecondaryWindow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ParamsSpec, 'content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_Params', [
      mojo.internal.StructField('raw_commitments', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ResponseParamsSpec, 'content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_ClearTrustTokenState_ParamsSpec, 'content.mojom.WebTestControlHost_ClearTrustTokenState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_ClearTrustTokenState_ResponseParamsSpec, 'content.mojom.WebTestControlHost_ClearTrustTokenState_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SimulateWebNotificationClick_ParamsSpec, 'content.mojom.WebTestControlHost_SimulateWebNotificationClick_Params', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('reply', 8, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('action_index', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SimulateWebNotificationClose_ParamsSpec, 'content.mojom.WebTestControlHost_SimulateWebNotificationClose_Params', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('by_user', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SimulateWebContentIndexDelete_ParamsSpec, 'content.mojom.WebTestControlHost_SimulateWebContentIndexDelete_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_WebTestRuntimeFlagsChanged_ParamsSpec, 'content.mojom.WebTestControlHost_WebTestRuntimeFlagsChanged_Params', [
      mojo.internal.StructField('changed_web_test_runtime_flags', 0, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ParamsSpec, 'content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_Params', [
      mojo.internal.StructField('file_paths', 0, 0, mojo.internal.Array(mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ResponseParamsSpec, 'content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ResponseParams', [
      mojo.internal.StructField('filesystem_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_DropPointerLock_ParamsSpec, 'content.mojom.WebTestControlHost_DropPointerLock_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SetPointerLockWillFail_ParamsSpec, 'content.mojom.WebTestControlHost_SetPointerLockWillFail_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SetPointerLockWillRespondAsynchronously_ParamsSpec, 'content.mojom.WebTestControlHost_SetPointerLockWillRespondAsynchronously_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_AllowPointerLock_ParamsSpec, 'content.mojom.WebTestControlHost_AllowPointerLock_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_WorkItemAdded_ParamsSpec, 'content.mojom.WebTestControlHost_WorkItemAdded_Params', [
      mojo.internal.StructField('work_item', 0, 0, content.mojom.WorkItemSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_RequestWorkItem_ParamsSpec, 'content.mojom.WebTestControlHost_RequestWorkItem_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_WorkQueueStatesChanged_ParamsSpec, 'content.mojom.WebTestControlHost_WorkQueueStatesChanged_Params', [
      mojo.internal.StructField('changed_work_queue_states', 0, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SetAcceptLanguages_ParamsSpec, 'content.mojom.WebTestControlHost_SetAcceptLanguages_Params', [
      mojo.internal.StructField('accept_languages', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SetRegisterProtocolHandlerMode_ParamsSpec, 'content.mojom.WebTestControlHost_SetRegisterProtocolHandlerMode_Params', [
      mojo.internal.StructField('mode', 0, 0, content.mojom.AutoResponseModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_EnableAutoResize_ParamsSpec, 'content.mojom.WebTestControlHost_EnableAutoResize_Params', [
      mojo.internal.StructField('min_size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_size', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_DisableAutoResize_ParamsSpec, 'content.mojom.WebTestControlHost_DisableAutoResize_Params', [
      mojo.internal.StructField('new_size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.WebTestControlHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.WebTestControlHostRemote = class {
  static get $interfaceName() {
    return 'content.mojom.WebTestControlHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.WebTestControlHostPendingReceiver,
      handle);
    this.$ = new content.mojom.WebTestControlHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.WebTestControlHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initiateCaptureDump(result, capture_navigation_history, capture_pixels) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.WebTestControlHost_InitiateCaptureDump_ParamsSpec,
      null,
      [result, capture_navigation_history, capture_pixels],
      false);
  }

  testFinishedInSecondaryRenderer() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.WebTestControlHost_TestFinishedInSecondaryRenderer_ParamsSpec,
      null,
      [],
      false);
  }

  printMessageToStderr(message) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.WebTestControlHost_PrintMessageToStderr_ParamsSpec,
      null,
      [message],
      false);
  }

  printMessage(message) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.WebTestControlHost_PrintMessage_ParamsSpec,
      null,
      [message],
      false);
  }

  overridePreferences(web_preferences) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      content.mojom.WebTestControlHost_OverridePreferences_ParamsSpec,
      null,
      [web_preferences],
      false);
  }

  reload() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      content.mojom.WebTestControlHost_Reload_ParamsSpec,
      null,
      [],
      false);
  }

  checkForLeakedWindows() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      content.mojom.WebTestControlHost_CheckForLeakedWindows_ParamsSpec,
      null,
      [],
      false);
  }

  setMainWindowHidden(hidden) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      content.mojom.WebTestControlHost_SetMainWindowHidden_ParamsSpec,
      null,
      [hidden],
      false);
  }

  setFrameWindowHidden(frame_token, hidden) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      content.mojom.WebTestControlHost_SetFrameWindowHidden_ParamsSpec,
      null,
      [frame_token, hidden],
      false);
  }

  goToOffset(offset) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      content.mojom.WebTestControlHost_GoToOffset_ParamsSpec,
      null,
      [offset],
      false);
  }

  sendBluetoothManualChooserEvent(event, argument) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      content.mojom.WebTestControlHost_SendBluetoothManualChooserEvent_ParamsSpec,
      null,
      [event, argument],
      false);
  }

  setBluetoothManualChooser(enable) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      content.mojom.WebTestControlHost_SetBluetoothManualChooser_ParamsSpec,
      null,
      [enable],
      false);
  }

  getBluetoothManualChooserEvents() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ParamsSpec,
      content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ResponseParamsSpec,
      [],
      false);
  }

  setPopupBlockingEnabled(block_popups) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      content.mojom.WebTestControlHost_SetPopupBlockingEnabled_ParamsSpec,
      null,
      [block_popups],
      false);
  }

  loadURLForFrame(url, frame_name) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      content.mojom.WebTestControlHost_LoadURLForFrame_ParamsSpec,
      null,
      [url, frame_name],
      false);
  }

  simulateScreenOrientationChanged() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      content.mojom.WebTestControlHost_SimulateScreenOrientationChanged_ParamsSpec,
      null,
      [],
      false);
  }

  setPermission(name, status, origin, embedding_origin) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      content.mojom.WebTestControlHost_SetPermission_ParamsSpec,
      null,
      [name, status, origin, embedding_origin],
      false);
  }

  blockThirdPartyCookies(block) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      content.mojom.WebTestControlHost_BlockThirdPartyCookies_ParamsSpec,
      null,
      [block],
      false);
  }

  getWritableDirectory() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      content.mojom.WebTestControlHost_GetWritableDirectory_ParamsSpec,
      content.mojom.WebTestControlHost_GetWritableDirectory_ResponseParamsSpec,
      [],
      false);
  }

  setFilePathForMockFileDialog(path) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      content.mojom.WebTestControlHost_SetFilePathForMockFileDialog_ParamsSpec,
      null,
      [path],
      false);
  }

  createSubresourceFilterRulesetFile(disallowed_suffixes) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ParamsSpec,
      content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ResponseParamsSpec,
      [disallowed_suffixes],
      false);
  }

  focusDevtoolsSecondaryWindow() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      content.mojom.WebTestControlHost_FocusDevtoolsSecondaryWindow_ParamsSpec,
      null,
      [],
      false);
  }

  setTrustTokenKeyCommitments(raw_commitments) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ParamsSpec,
      content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ResponseParamsSpec,
      [raw_commitments],
      false);
  }

  clearTrustTokenState() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      content.mojom.WebTestControlHost_ClearTrustTokenState_ParamsSpec,
      content.mojom.WebTestControlHost_ClearTrustTokenState_ResponseParamsSpec,
      [],
      false);
  }

  simulateWebNotificationClick(title, action_index, reply) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      content.mojom.WebTestControlHost_SimulateWebNotificationClick_ParamsSpec,
      null,
      [title, action_index, reply],
      false);
  }

  simulateWebNotificationClose(title, by_user) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      content.mojom.WebTestControlHost_SimulateWebNotificationClose_ParamsSpec,
      null,
      [title, by_user],
      false);
  }

  simulateWebContentIndexDelete(id) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      content.mojom.WebTestControlHost_SimulateWebContentIndexDelete_ParamsSpec,
      null,
      [id],
      false);
  }

  webTestRuntimeFlagsChanged(changed_web_test_runtime_flags) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      content.mojom.WebTestControlHost_WebTestRuntimeFlagsChanged_ParamsSpec,
      null,
      [changed_web_test_runtime_flags],
      false);
  }

  registerIsolatedFileSystem(file_paths) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ParamsSpec,
      content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ResponseParamsSpec,
      [file_paths],
      false);
  }

  dropPointerLock() {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      content.mojom.WebTestControlHost_DropPointerLock_ParamsSpec,
      null,
      [],
      false);
  }

  setPointerLockWillFail() {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      content.mojom.WebTestControlHost_SetPointerLockWillFail_ParamsSpec,
      null,
      [],
      false);
  }

  setPointerLockWillRespondAsynchronously() {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      content.mojom.WebTestControlHost_SetPointerLockWillRespondAsynchronously_ParamsSpec,
      null,
      [],
      false);
  }

  allowPointerLock() {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      content.mojom.WebTestControlHost_AllowPointerLock_ParamsSpec,
      null,
      [],
      false);
  }

  workItemAdded(work_item) {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      content.mojom.WebTestControlHost_WorkItemAdded_ParamsSpec,
      null,
      [work_item],
      false);
  }

  requestWorkItem() {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      content.mojom.WebTestControlHost_RequestWorkItem_ParamsSpec,
      null,
      [],
      false);
  }

  workQueueStatesChanged(changed_work_queue_states) {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      content.mojom.WebTestControlHost_WorkQueueStatesChanged_ParamsSpec,
      null,
      [changed_work_queue_states],
      false);
  }

  setAcceptLanguages(accept_languages) {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      content.mojom.WebTestControlHost_SetAcceptLanguages_ParamsSpec,
      null,
      [accept_languages],
      false);
  }

  setRegisterProtocolHandlerMode(mode) {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      content.mojom.WebTestControlHost_SetRegisterProtocolHandlerMode_ParamsSpec,
      null,
      [mode],
      false);
  }

  enableAutoResize(min_size, max_size) {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      content.mojom.WebTestControlHost_EnableAutoResize_ParamsSpec,
      null,
      [min_size, max_size],
      false);
  }

  disableAutoResize(new_size) {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      content.mojom.WebTestControlHost_DisableAutoResize_ParamsSpec,
      null,
      [new_size],
      false);
  }

};

content.mojom.WebTestControlHost.getRemote = function() {
  let remote = new content.mojom.WebTestControlHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.WebTestControlHost',
    'context');
  return remote.$;
};

content.mojom.WebTestControlHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
    this.ordinalMap.set(17, 17); // Default ordinal 17 -> Index 17
    this.ordinalMap.set(18, 18); // Default ordinal 18 -> Index 18
    this.ordinalMap.set(19, 19); // Default ordinal 19 -> Index 19
    this.ordinalMap.set(20, 20); // Default ordinal 20 -> Index 20
    this.ordinalMap.set(21, 21); // Default ordinal 21 -> Index 21
    this.ordinalMap.set(22, 22); // Default ordinal 22 -> Index 22
    this.ordinalMap.set(23, 23); // Default ordinal 23 -> Index 23
    this.ordinalMap.set(24, 24); // Default ordinal 24 -> Index 24
    this.ordinalMap.set(25, 25); // Default ordinal 25 -> Index 25
    this.ordinalMap.set(26, 26); // Default ordinal 26 -> Index 26
    this.ordinalMap.set(27, 27); // Default ordinal 27 -> Index 27
    this.ordinalMap.set(28, 28); // Default ordinal 28 -> Index 28
    this.ordinalMap.set(29, 29); // Default ordinal 29 -> Index 29
    this.ordinalMap.set(30, 30); // Default ordinal 30 -> Index 30
    this.ordinalMap.set(31, 31); // Default ordinal 31 -> Index 31
    this.ordinalMap.set(32, 32); // Default ordinal 32 -> Index 32
    this.ordinalMap.set(33, 33); // Default ordinal 33 -> Index 33
    this.ordinalMap.set(34, 34); // Default ordinal 34 -> Index 34
    this.ordinalMap.set(35, 35); // Default ordinal 35 -> Index 35
    this.ordinalMap.set(36, 36); // Default ordinal 36 -> Index 36
    this.ordinalMap.set(37, 37); // Default ordinal 37 -> Index 37
    this.ordinalMap.set(38, 38); // Default ordinal 38 -> Index 38
    this.ordinalMap.set(39, 39); // Default ordinal 39 -> Index 39
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_InitiateCaptureDump_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.initiateCaptureDump');
          const result = this.impl.initiateCaptureDump(params.result, params.capture_navigation_history, params.capture_pixels);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_TestFinishedInSecondaryRenderer_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.testFinishedInSecondaryRenderer');
          const result = this.impl.testFinishedInSecondaryRenderer();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_PrintMessageToStderr_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.printMessageToStderr');
          const result = this.impl.printMessageToStderr(params.message);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_PrintMessage_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.printMessage');
          const result = this.impl.printMessage(params.message);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_OverridePreferences_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.overridePreferences');
          const result = this.impl.overridePreferences(params.web_preferences);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_Reload_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.reload');
          const result = this.impl.reload();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_CheckForLeakedWindows_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.checkForLeakedWindows');
          const result = this.impl.checkForLeakedWindows();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_SetMainWindowHidden_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setMainWindowHidden');
          const result = this.impl.setMainWindowHidden(params.hidden);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_SetFrameWindowHidden_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setFrameWindowHidden');
          const result = this.impl.setFrameWindowHidden(params.frame_token, params.hidden);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_GoToOffset_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.goToOffset');
          const result = this.impl.goToOffset(params.offset);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_SendBluetoothManualChooserEvent_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.sendBluetoothManualChooserEvent');
          const result = this.impl.sendBluetoothManualChooserEvent(params.event, params.argument);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_SetBluetoothManualChooser_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setBluetoothManualChooser');
          const result = this.impl.setBluetoothManualChooser(params.enable);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getBluetoothManualChooserEvents');
          const result = this.impl.getBluetoothManualChooserEvents();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_SetPopupBlockingEnabled_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setPopupBlockingEnabled');
          const result = this.impl.setPopupBlockingEnabled(params.block_popups);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_LoadURLForFrame_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.loadURLForFrame');
          const result = this.impl.loadURLForFrame(params.url, params.frame_name);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_SimulateScreenOrientationChanged_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.simulateScreenOrientationChanged');
          const result = this.impl.simulateScreenOrientationChanged();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_SetPermission_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setPermission');
          const result = this.impl.setPermission(params.name, params.status, params.origin, params.embedding_origin);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_BlockThirdPartyCookies_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.blockThirdPartyCookies');
          const result = this.impl.blockThirdPartyCookies(params.block);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_GetWritableDirectory_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getWritableDirectory');
          const result = this.impl.getWritableDirectory();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.WebTestControlHost_GetWritableDirectory_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_SetFilePathForMockFileDialog_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setFilePathForMockFileDialog');
          const result = this.impl.setFilePathForMockFileDialog(params.path);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.createSubresourceFilterRulesetFile');
          const result = this.impl.createSubresourceFilterRulesetFile(params.disallowed_suffixes);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_FocusDevtoolsSecondaryWindow_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.focusDevtoolsSecondaryWindow');
          const result = this.impl.focusDevtoolsSecondaryWindow();
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setTrustTokenKeyCommitments');
          const result = this.impl.setTrustTokenKeyCommitments(params.raw_commitments);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_ClearTrustTokenState_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.clearTrustTokenState');
          const result = this.impl.clearTrustTokenState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.WebTestControlHost_ClearTrustTokenState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_SimulateWebNotificationClick_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.simulateWebNotificationClick');
          const result = this.impl.simulateWebNotificationClick(params.title, params.action_index, params.reply);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_SimulateWebNotificationClose_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.simulateWebNotificationClose');
          const result = this.impl.simulateWebNotificationClose(params.title, params.by_user);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_SimulateWebContentIndexDelete_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.simulateWebContentIndexDelete');
          const result = this.impl.simulateWebContentIndexDelete(params.id);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_WebTestRuntimeFlagsChanged_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.webTestRuntimeFlagsChanged');
          const result = this.impl.webTestRuntimeFlagsChanged(params.changed_web_test_runtime_flags);
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.registerIsolatedFileSystem');
          const result = this.impl.registerIsolatedFileSystem(params.file_paths);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_DropPointerLock_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.dropPointerLock');
          const result = this.impl.dropPointerLock();
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_SetPointerLockWillFail_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setPointerLockWillFail');
          const result = this.impl.setPointerLockWillFail();
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_SetPointerLockWillRespondAsynchronously_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setPointerLockWillRespondAsynchronously');
          const result = this.impl.setPointerLockWillRespondAsynchronously();
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_AllowPointerLock_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.allowPointerLock');
          const result = this.impl.allowPointerLock();
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_WorkItemAdded_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.workItemAdded');
          const result = this.impl.workItemAdded(params.work_item);
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_RequestWorkItem_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.requestWorkItem');
          const result = this.impl.requestWorkItem();
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_WorkQueueStatesChanged_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.workQueueStatesChanged');
          const result = this.impl.workQueueStatesChanged(params.changed_work_queue_states);
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_SetAcceptLanguages_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setAcceptLanguages');
          const result = this.impl.setAcceptLanguages(params.accept_languages);
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_SetRegisterProtocolHandlerMode_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setRegisterProtocolHandlerMode');
          const result = this.impl.setRegisterProtocolHandlerMode(params.mode);
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_EnableAutoResize_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.enableAutoResize');
          const result = this.impl.enableAutoResize(params.min_size, params.max_size);
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.WebTestControlHost_DisableAutoResize_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.disableAutoResize');
          const result = this.impl.disableAutoResize(params.new_size);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.WebTestControlHostReceiver = content.mojom.WebTestControlHostReceiver;

content.mojom.WebTestControlHostPtr = content.mojom.WebTestControlHostRemote;
content.mojom.WebTestControlHostRequest = content.mojom.WebTestControlHostPendingReceiver;


// Interface: NonAssociatedWebTestControlHost
mojo.internal.Struct(
    content.mojom.NonAssociatedWebTestControlHost_SetLCPPNavigationHint_ParamsSpec, 'content.mojom.NonAssociatedWebTestControlHost_SetLCPPNavigationHint_Params', [
      mojo.internal.StructField('hint', 0, 0, blink.mojom.LCPCriticalPathPredictorNavigationTimeHintSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.NonAssociatedWebTestControlHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.NonAssociatedWebTestControlHostRemote = class {
  static get $interfaceName() {
    return 'content.mojom.NonAssociatedWebTestControlHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.NonAssociatedWebTestControlHostPendingReceiver,
      handle);
    this.$ = new content.mojom.NonAssociatedWebTestControlHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.NonAssociatedWebTestControlHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setLCPPNavigationHint(hint) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.NonAssociatedWebTestControlHost_SetLCPPNavigationHint_ParamsSpec,
      null,
      [hint],
      false);
  }

};

content.mojom.NonAssociatedWebTestControlHost.getRemote = function() {
  let remote = new content.mojom.NonAssociatedWebTestControlHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.NonAssociatedWebTestControlHost',
    'context');
  return remote.$;
};

content.mojom.NonAssociatedWebTestControlHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.NonAssociatedWebTestControlHost_SetLCPPNavigationHint_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setLCPPNavigationHint');
          const result = this.impl.setLCPPNavigationHint(params.hint);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.NonAssociatedWebTestControlHostReceiver = content.mojom.NonAssociatedWebTestControlHostReceiver;

content.mojom.NonAssociatedWebTestControlHostPtr = content.mojom.NonAssociatedWebTestControlHostRemote;
content.mojom.NonAssociatedWebTestControlHostRequest = content.mojom.NonAssociatedWebTestControlHostPendingReceiver;

