// Auto-generated MojoJS binding
// Source: chromium_src/content/web_test/common/web_test.mojom
// Module: content.mojom

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
  synchronouslyCompositeAfterTest() {
    return this.$.synchronouslyCompositeAfterTest();
  }
  dumpFrameLayout() {
    return this.$.dumpFrameLayout();
  }
  setTestConfiguration(config, starting_test) {
    return this.$.setTestConfiguration(config, starting_test);
  }
  onDeactivated() {
    return this.$.onDeactivated();
  }
  onReactivated() {
    return this.$.onReactivated();
  }
  blockTestUntilStart() {
    return this.$.blockTestUntilStart();
  }
  startTest() {
    return this.$.startTest();
  }
  setupRendererProcessForNonTestWindow() {
    return this.$.setupRendererProcessForNonTestWindow();
  }
  replicateWebTestRuntimeFlagsChanges(changed_layout_test_runtime_flags) {
    return this.$.replicateWebTestRuntimeFlagsChanges(changed_layout_test_runtime_flags);
  }
  testFinishedFromSecondaryRenderer() {
    return this.$.testFinishedFromSecondaryRenderer();
  }
  resetRendererAfterWebTest() {
    return this.$.resetRendererAfterWebTest();
  }
  processWorkItem(work_item) {
    return this.$.processWorkItem(work_item);
  }
  replicateWorkQueueStates(work_queue_states) {
    return this.$.replicateWorkQueueStates(work_queue_states);
  }
};

content.mojom.WebTestRenderFrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebTestRenderFrame', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  synchronouslyCompositeAfterTest() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ParamsSpec,
      content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ResponseParamsSpec,
      [],
      false);
  }

  dumpFrameLayout() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      content.mojom.WebTestRenderFrame_DumpFrameLayout_ParamsSpec,
      content.mojom.WebTestRenderFrame_DumpFrameLayout_ResponseParamsSpec,
      [],
      false);
  }

  setTestConfiguration(config, starting_test) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      content.mojom.WebTestRenderFrame_SetTestConfiguration_ParamsSpec,
      null,
      [config, starting_test],
      false);
  }

  onDeactivated() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      content.mojom.WebTestRenderFrame_OnDeactivated_ParamsSpec,
      null,
      [],
      false);
  }

  onReactivated() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      content.mojom.WebTestRenderFrame_OnReactivated_ParamsSpec,
      null,
      [],
      false);
  }

  blockTestUntilStart() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      content.mojom.WebTestRenderFrame_BlockTestUntilStart_ParamsSpec,
      null,
      [],
      false);
  }

  startTest() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      content.mojom.WebTestRenderFrame_StartTest_ParamsSpec,
      null,
      [],
      false);
  }

  setupRendererProcessForNonTestWindow() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      content.mojom.WebTestRenderFrame_SetupRendererProcessForNonTestWindow_ParamsSpec,
      null,
      [],
      false);
  }

  replicateWebTestRuntimeFlagsChanges(changed_layout_test_runtime_flags) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      content.mojom.WebTestRenderFrame_ReplicateWebTestRuntimeFlagsChanges_ParamsSpec,
      null,
      [changed_layout_test_runtime_flags],
      false);
  }

  testFinishedFromSecondaryRenderer() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      content.mojom.WebTestRenderFrame_TestFinishedFromSecondaryRenderer_ParamsSpec,
      null,
      [],
      false);
  }

  resetRendererAfterWebTest() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      content.mojom.WebTestRenderFrame_ResetRendererAfterWebTest_ParamsSpec,
      null,
      [],
      false);
  }

  processWorkItem(work_item) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      content.mojom.WebTestRenderFrame_ProcessWorkItem_ParamsSpec,
      null,
      [work_item],
      false);
  }

  replicateWorkQueueStates(work_queue_states) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('WebTestRenderFrame', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestRenderFrame_DumpFrameLayout_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestRenderFrame_SetTestConfiguration_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestRenderFrame_OnDeactivated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestRenderFrame_OnReactivated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestRenderFrame_BlockTestUntilStart_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestRenderFrame_StartTest_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestRenderFrame_SetupRendererProcessForNonTestWindow_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestRenderFrame_ReplicateWebTestRuntimeFlagsChanges_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestRenderFrame_TestFinishedFromSecondaryRenderer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestRenderFrame_ResetRendererAfterWebTest_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestRenderFrame_ProcessWorkItem_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestRenderFrame_ReplicateWorkQueueStates_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(content.mojom.WebTestRenderFrame_DumpFrameLayout_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(content.mojom.WebTestRenderFrame_SetTestConfiguration_ParamsSpec.$.structSpec);
          const result = this.impl.setTestConfiguration(params.config, params.starting_test);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestRenderFrame_OnDeactivated_ParamsSpec.$.structSpec);
          const result = this.impl.onDeactivated();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestRenderFrame_OnReactivated_ParamsSpec.$.structSpec);
          const result = this.impl.onReactivated();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestRenderFrame_BlockTestUntilStart_ParamsSpec.$.structSpec);
          const result = this.impl.blockTestUntilStart();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestRenderFrame_StartTest_ParamsSpec.$.structSpec);
          const result = this.impl.startTest();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestRenderFrame_SetupRendererProcessForNonTestWindow_ParamsSpec.$.structSpec);
          const result = this.impl.setupRendererProcessForNonTestWindow();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestRenderFrame_ReplicateWebTestRuntimeFlagsChanges_ParamsSpec.$.structSpec);
          const result = this.impl.replicateWebTestRuntimeFlagsChanges(params.changed_layout_test_runtime_flags);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestRenderFrame_TestFinishedFromSecondaryRenderer_ParamsSpec.$.structSpec);
          const result = this.impl.testFinishedFromSecondaryRenderer();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestRenderFrame_ResetRendererAfterWebTest_ParamsSpec.$.structSpec);
          const result = this.impl.resetRendererAfterWebTest();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestRenderFrame_ProcessWorkItem_ParamsSpec.$.structSpec);
          const result = this.impl.processWorkItem(params.work_item);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestRenderFrame_ReplicateWorkQueueStates_ParamsSpec.$.structSpec);
          const result = this.impl.replicateWorkQueueStates(params.work_queue_states);
          break;
        }
      }
      } catch (err) {}
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
  initiateCaptureDump(result, capture_navigation_history, capture_pixels) {
    return this.$.initiateCaptureDump(result, capture_navigation_history, capture_pixels);
  }
  testFinishedInSecondaryRenderer() {
    return this.$.testFinishedInSecondaryRenderer();
  }
  printMessageToStderr(message) {
    return this.$.printMessageToStderr(message);
  }
  printMessage(message) {
    return this.$.printMessage(message);
  }
  overridePreferences(web_preferences) {
    return this.$.overridePreferences(web_preferences);
  }
  reload() {
    return this.$.reload();
  }
  checkForLeakedWindows() {
    return this.$.checkForLeakedWindows();
  }
  setMainWindowHidden(hidden) {
    return this.$.setMainWindowHidden(hidden);
  }
  setFrameWindowHidden(frame_token, hidden) {
    return this.$.setFrameWindowHidden(frame_token, hidden);
  }
  goToOffset(offset) {
    return this.$.goToOffset(offset);
  }
  sendBluetoothManualChooserEvent(event, argument) {
    return this.$.sendBluetoothManualChooserEvent(event, argument);
  }
  setBluetoothManualChooser(enable) {
    return this.$.setBluetoothManualChooser(enable);
  }
  getBluetoothManualChooserEvents() {
    return this.$.getBluetoothManualChooserEvents();
  }
  setPopupBlockingEnabled(block_popups) {
    return this.$.setPopupBlockingEnabled(block_popups);
  }
  loadURLForFrame(url, frame_name) {
    return this.$.loadURLForFrame(url, frame_name);
  }
  simulateScreenOrientationChanged() {
    return this.$.simulateScreenOrientationChanged();
  }
  setPermission(name, status, origin, embedding_origin) {
    return this.$.setPermission(name, status, origin, embedding_origin);
  }
  blockThirdPartyCookies(block) {
    return this.$.blockThirdPartyCookies(block);
  }
  getWritableDirectory() {
    return this.$.getWritableDirectory();
  }
  setFilePathForMockFileDialog(path) {
    return this.$.setFilePathForMockFileDialog(path);
  }
  createSubresourceFilterRulesetFile(disallowed_suffixes) {
    return this.$.createSubresourceFilterRulesetFile(disallowed_suffixes);
  }
  focusDevtoolsSecondaryWindow() {
    return this.$.focusDevtoolsSecondaryWindow();
  }
  setTrustTokenKeyCommitments(raw_commitments) {
    return this.$.setTrustTokenKeyCommitments(raw_commitments);
  }
  clearTrustTokenState() {
    return this.$.clearTrustTokenState();
  }
  simulateWebNotificationClick(title, action_index, reply) {
    return this.$.simulateWebNotificationClick(title, action_index, reply);
  }
  simulateWebNotificationClose(title, by_user) {
    return this.$.simulateWebNotificationClose(title, by_user);
  }
  simulateWebContentIndexDelete(id) {
    return this.$.simulateWebContentIndexDelete(id);
  }
  webTestRuntimeFlagsChanged(changed_web_test_runtime_flags) {
    return this.$.webTestRuntimeFlagsChanged(changed_web_test_runtime_flags);
  }
  registerIsolatedFileSystem(file_paths) {
    return this.$.registerIsolatedFileSystem(file_paths);
  }
  dropPointerLock() {
    return this.$.dropPointerLock();
  }
  setPointerLockWillFail() {
    return this.$.setPointerLockWillFail();
  }
  setPointerLockWillRespondAsynchronously() {
    return this.$.setPointerLockWillRespondAsynchronously();
  }
  allowPointerLock() {
    return this.$.allowPointerLock();
  }
  workItemAdded(work_item) {
    return this.$.workItemAdded(work_item);
  }
  requestWorkItem() {
    return this.$.requestWorkItem();
  }
  workQueueStatesChanged(changed_work_queue_states) {
    return this.$.workQueueStatesChanged(changed_work_queue_states);
  }
  setAcceptLanguages(accept_languages) {
    return this.$.setAcceptLanguages(accept_languages);
  }
  setRegisterProtocolHandlerMode(mode) {
    return this.$.setRegisterProtocolHandlerMode(mode);
  }
  enableAutoResize(min_size, max_size) {
    return this.$.enableAutoResize(min_size, max_size);
  }
  disableAutoResize(new_size) {
    return this.$.disableAutoResize(new_size);
  }
};

content.mojom.WebTestControlHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebTestControlHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  initiateCaptureDump(result, capture_navigation_history, capture_pixels) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.WebTestControlHost_InitiateCaptureDump_ParamsSpec,
      null,
      [result, capture_navigation_history, capture_pixels],
      false);
  }

  testFinishedInSecondaryRenderer() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      content.mojom.WebTestControlHost_TestFinishedInSecondaryRenderer_ParamsSpec,
      null,
      [],
      false);
  }

  printMessageToStderr(message) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      content.mojom.WebTestControlHost_PrintMessageToStderr_ParamsSpec,
      null,
      [message],
      false);
  }

  printMessage(message) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      content.mojom.WebTestControlHost_PrintMessage_ParamsSpec,
      null,
      [message],
      false);
  }

  overridePreferences(web_preferences) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      content.mojom.WebTestControlHost_OverridePreferences_ParamsSpec,
      null,
      [web_preferences],
      false);
  }

  reload() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      content.mojom.WebTestControlHost_Reload_ParamsSpec,
      null,
      [],
      false);
  }

  checkForLeakedWindows() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      content.mojom.WebTestControlHost_CheckForLeakedWindows_ParamsSpec,
      null,
      [],
      false);
  }

  setMainWindowHidden(hidden) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      content.mojom.WebTestControlHost_SetMainWindowHidden_ParamsSpec,
      null,
      [hidden],
      false);
  }

  setFrameWindowHidden(frame_token, hidden) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      content.mojom.WebTestControlHost_SetFrameWindowHidden_ParamsSpec,
      null,
      [frame_token, hidden],
      false);
  }

  goToOffset(offset) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      content.mojom.WebTestControlHost_GoToOffset_ParamsSpec,
      null,
      [offset],
      false);
  }

  sendBluetoothManualChooserEvent(event, argument) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      content.mojom.WebTestControlHost_SendBluetoothManualChooserEvent_ParamsSpec,
      null,
      [event, argument],
      false);
  }

  setBluetoothManualChooser(enable) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      content.mojom.WebTestControlHost_SetBluetoothManualChooser_ParamsSpec,
      null,
      [enable],
      false);
  }

  getBluetoothManualChooserEvents() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ParamsSpec,
      content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ResponseParamsSpec,
      [],
      false);
  }

  setPopupBlockingEnabled(block_popups) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      content.mojom.WebTestControlHost_SetPopupBlockingEnabled_ParamsSpec,
      null,
      [block_popups],
      false);
  }

  loadURLForFrame(url, frame_name) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      content.mojom.WebTestControlHost_LoadURLForFrame_ParamsSpec,
      null,
      [url, frame_name],
      false);
  }

  simulateScreenOrientationChanged() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      content.mojom.WebTestControlHost_SimulateScreenOrientationChanged_ParamsSpec,
      null,
      [],
      false);
  }

  setPermission(name, status, origin, embedding_origin) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      content.mojom.WebTestControlHost_SetPermission_ParamsSpec,
      null,
      [name, status, origin, embedding_origin],
      false);
  }

  blockThirdPartyCookies(block) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      content.mojom.WebTestControlHost_BlockThirdPartyCookies_ParamsSpec,
      null,
      [block],
      false);
  }

  getWritableDirectory() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      content.mojom.WebTestControlHost_GetWritableDirectory_ParamsSpec,
      content.mojom.WebTestControlHost_GetWritableDirectory_ResponseParamsSpec,
      [],
      false);
  }

  setFilePathForMockFileDialog(path) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      content.mojom.WebTestControlHost_SetFilePathForMockFileDialog_ParamsSpec,
      null,
      [path],
      false);
  }

  createSubresourceFilterRulesetFile(disallowed_suffixes) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ParamsSpec,
      content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ResponseParamsSpec,
      [disallowed_suffixes],
      false);
  }

  focusDevtoolsSecondaryWindow() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      content.mojom.WebTestControlHost_FocusDevtoolsSecondaryWindow_ParamsSpec,
      null,
      [],
      false);
  }

  setTrustTokenKeyCommitments(raw_commitments) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ParamsSpec,
      content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ResponseParamsSpec,
      [raw_commitments],
      false);
  }

  clearTrustTokenState() {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      content.mojom.WebTestControlHost_ClearTrustTokenState_ParamsSpec,
      content.mojom.WebTestControlHost_ClearTrustTokenState_ResponseParamsSpec,
      [],
      false);
  }

  simulateWebNotificationClick(title, action_index, reply) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      content.mojom.WebTestControlHost_SimulateWebNotificationClick_ParamsSpec,
      null,
      [title, action_index, reply],
      false);
  }

  simulateWebNotificationClose(title, by_user) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      content.mojom.WebTestControlHost_SimulateWebNotificationClose_ParamsSpec,
      null,
      [title, by_user],
      false);
  }

  simulateWebContentIndexDelete(id) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      content.mojom.WebTestControlHost_SimulateWebContentIndexDelete_ParamsSpec,
      null,
      [id],
      false);
  }

  webTestRuntimeFlagsChanged(changed_web_test_runtime_flags) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      content.mojom.WebTestControlHost_WebTestRuntimeFlagsChanged_ParamsSpec,
      null,
      [changed_web_test_runtime_flags],
      false);
  }

  registerIsolatedFileSystem(file_paths) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ParamsSpec,
      content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ResponseParamsSpec,
      [file_paths],
      false);
  }

  dropPointerLock() {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      content.mojom.WebTestControlHost_DropPointerLock_ParamsSpec,
      null,
      [],
      false);
  }

  setPointerLockWillFail() {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      content.mojom.WebTestControlHost_SetPointerLockWillFail_ParamsSpec,
      null,
      [],
      false);
  }

  setPointerLockWillRespondAsynchronously() {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      content.mojom.WebTestControlHost_SetPointerLockWillRespondAsynchronously_ParamsSpec,
      null,
      [],
      false);
  }

  allowPointerLock() {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      content.mojom.WebTestControlHost_AllowPointerLock_ParamsSpec,
      null,
      [],
      false);
  }

  workItemAdded(work_item) {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      content.mojom.WebTestControlHost_WorkItemAdded_ParamsSpec,
      null,
      [work_item],
      false);
  }

  requestWorkItem() {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      content.mojom.WebTestControlHost_RequestWorkItem_ParamsSpec,
      null,
      [],
      false);
  }

  workQueueStatesChanged(changed_work_queue_states) {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      content.mojom.WebTestControlHost_WorkQueueStatesChanged_ParamsSpec,
      null,
      [changed_work_queue_states],
      false);
  }

  setAcceptLanguages(accept_languages) {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      content.mojom.WebTestControlHost_SetAcceptLanguages_ParamsSpec,
      null,
      [accept_languages],
      false);
  }

  setRegisterProtocolHandlerMode(mode) {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      content.mojom.WebTestControlHost_SetRegisterProtocolHandlerMode_ParamsSpec,
      null,
      [mode],
      false);
  }

  enableAutoResize(min_size, max_size) {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      content.mojom.WebTestControlHost_EnableAutoResize_ParamsSpec,
      null,
      [min_size, max_size],
      false);
  }

  disableAutoResize(new_size) {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('WebTestControlHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(content.mojom.WebTestControlHost_InitiateCaptureDump_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_TestFinishedInSecondaryRenderer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_PrintMessageToStderr_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_PrintMessage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_OverridePreferences_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_Reload_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_CheckForLeakedWindows_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_SetMainWindowHidden_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_SetFrameWindowHidden_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_GoToOffset_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_SendBluetoothManualChooserEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_SetBluetoothManualChooser_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_SetPopupBlockingEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_LoadURLForFrame_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_SimulateScreenOrientationChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_SetPermission_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_BlockThirdPartyCookies_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_GetWritableDirectory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_SetFilePathForMockFileDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ParamsSpec);
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_FocusDevtoolsSecondaryWindow_ParamsSpec);
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ParamsSpec);
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_ClearTrustTokenState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_SimulateWebNotificationClick_ParamsSpec);
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_SimulateWebNotificationClose_ParamsSpec);
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_SimulateWebContentIndexDelete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_WebTestRuntimeFlagsChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ParamsSpec);
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_DropPointerLock_ParamsSpec);
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_SetPointerLockWillFail_ParamsSpec);
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_SetPointerLockWillRespondAsynchronously_ParamsSpec);
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_AllowPointerLock_ParamsSpec);
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_WorkItemAdded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_RequestWorkItem_ParamsSpec);
             this.mapOrdinal(header.ordinal, 34);
             dispatchId = 34;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_WorkQueueStatesChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 35);
             dispatchId = 35;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_SetAcceptLanguages_ParamsSpec);
             this.mapOrdinal(header.ordinal, 36);
             dispatchId = 36;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_SetRegisterProtocolHandlerMode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 37);
             dispatchId = 37;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_EnableAutoResize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 38);
             dispatchId = 38;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestControlHost_DisableAutoResize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 39);
             dispatchId = 39;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_InitiateCaptureDump_ParamsSpec.$.structSpec);
          const result = this.impl.initiateCaptureDump(params.result, params.capture_navigation_history, params.capture_pixels);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_TestFinishedInSecondaryRenderer_ParamsSpec.$.structSpec);
          const result = this.impl.testFinishedInSecondaryRenderer();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_PrintMessageToStderr_ParamsSpec.$.structSpec);
          const result = this.impl.printMessageToStderr(params.message);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_PrintMessage_ParamsSpec.$.structSpec);
          const result = this.impl.printMessage(params.message);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_OverridePreferences_ParamsSpec.$.structSpec);
          const result = this.impl.overridePreferences(params.web_preferences);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_Reload_ParamsSpec.$.structSpec);
          const result = this.impl.reload();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_CheckForLeakedWindows_ParamsSpec.$.structSpec);
          const result = this.impl.checkForLeakedWindows();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_SetMainWindowHidden_ParamsSpec.$.structSpec);
          const result = this.impl.setMainWindowHidden(params.hidden);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_SetFrameWindowHidden_ParamsSpec.$.structSpec);
          const result = this.impl.setFrameWindowHidden(params.frame_token, params.hidden);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_GoToOffset_ParamsSpec.$.structSpec);
          const result = this.impl.goToOffset(params.offset);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_SendBluetoothManualChooserEvent_ParamsSpec.$.structSpec);
          const result = this.impl.sendBluetoothManualChooserEvent(params.event, params.argument);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_SetBluetoothManualChooser_ParamsSpec.$.structSpec);
          const result = this.impl.setBluetoothManualChooser(params.enable);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_SetPopupBlockingEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.setPopupBlockingEnabled(params.block_popups);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_LoadURLForFrame_ParamsSpec.$.structSpec);
          const result = this.impl.loadURLForFrame(params.url, params.frame_name);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_SimulateScreenOrientationChanged_ParamsSpec.$.structSpec);
          const result = this.impl.simulateScreenOrientationChanged();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_SetPermission_ParamsSpec.$.structSpec);
          const result = this.impl.setPermission(params.name, params.status, params.origin, params.embedding_origin);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_BlockThirdPartyCookies_ParamsSpec.$.structSpec);
          const result = this.impl.blockThirdPartyCookies(params.block);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_GetWritableDirectory_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_SetFilePathForMockFileDialog_ParamsSpec.$.structSpec);
          const result = this.impl.setFilePathForMockFileDialog(params.path);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_FocusDevtoolsSecondaryWindow_ParamsSpec.$.structSpec);
          const result = this.impl.focusDevtoolsSecondaryWindow();
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_ClearTrustTokenState_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_SimulateWebNotificationClick_ParamsSpec.$.structSpec);
          const result = this.impl.simulateWebNotificationClick(params.title, params.action_index, params.reply);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_SimulateWebNotificationClose_ParamsSpec.$.structSpec);
          const result = this.impl.simulateWebNotificationClose(params.title, params.by_user);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_SimulateWebContentIndexDelete_ParamsSpec.$.structSpec);
          const result = this.impl.simulateWebContentIndexDelete(params.id);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_WebTestRuntimeFlagsChanged_ParamsSpec.$.structSpec);
          const result = this.impl.webTestRuntimeFlagsChanged(params.changed_web_test_runtime_flags);
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_DropPointerLock_ParamsSpec.$.structSpec);
          const result = this.impl.dropPointerLock();
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_SetPointerLockWillFail_ParamsSpec.$.structSpec);
          const result = this.impl.setPointerLockWillFail();
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_SetPointerLockWillRespondAsynchronously_ParamsSpec.$.structSpec);
          const result = this.impl.setPointerLockWillRespondAsynchronously();
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_AllowPointerLock_ParamsSpec.$.structSpec);
          const result = this.impl.allowPointerLock();
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_WorkItemAdded_ParamsSpec.$.structSpec);
          const result = this.impl.workItemAdded(params.work_item);
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_RequestWorkItem_ParamsSpec.$.structSpec);
          const result = this.impl.requestWorkItem();
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_WorkQueueStatesChanged_ParamsSpec.$.structSpec);
          const result = this.impl.workQueueStatesChanged(params.changed_work_queue_states);
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_SetAcceptLanguages_ParamsSpec.$.structSpec);
          const result = this.impl.setAcceptLanguages(params.accept_languages);
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_SetRegisterProtocolHandlerMode_ParamsSpec.$.structSpec);
          const result = this.impl.setRegisterProtocolHandlerMode(params.mode);
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_EnableAutoResize_ParamsSpec.$.structSpec);
          const result = this.impl.enableAutoResize(params.min_size, params.max_size);
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestControlHost_DisableAutoResize_ParamsSpec.$.structSpec);
          const result = this.impl.disableAutoResize(params.new_size);
          break;
        }
      }
      } catch (err) {}
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
  setLCPPNavigationHint(hint) {
    return this.$.setLCPPNavigationHint(hint);
  }
};

content.mojom.NonAssociatedWebTestControlHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NonAssociatedWebTestControlHost', [
      { explicit: null },
    ]);
  }

  setLCPPNavigationHint(hint) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('NonAssociatedWebTestControlHost', [
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
             decoder.decodeStructInline(content.mojom.NonAssociatedWebTestControlHost_SetLCPPNavigationHint_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.NonAssociatedWebTestControlHost_SetLCPPNavigationHint_ParamsSpec.$.structSpec);
          const result = this.impl.setLCPPNavigationHint(params.hint);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

content.mojom.NonAssociatedWebTestControlHostReceiver = content.mojom.NonAssociatedWebTestControlHostReceiver;

content.mojom.NonAssociatedWebTestControlHostPtr = content.mojom.NonAssociatedWebTestControlHostRemote;
content.mojom.NonAssociatedWebTestControlHostRequest = content.mojom.NonAssociatedWebTestControlHostPendingReceiver;

