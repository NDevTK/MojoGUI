// Auto-generated MojoJS binding
// Source: chromium_src/content/web_test/common/web_test.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Enum: AutoResponseMode
content.mojom.AutoResponseMode = {
  kNone: 0,
  kAutoAccept: 1,
  kAutoReject: 2,
};

// Interface: WebTestRenderFrame
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
      content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ParamsSpec.$,
      null,
      []);
  }

  dumpFrameLayout() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.WebTestRenderFrame_DumpFrameLayout_ParamsSpec.$,
      content.mojom.WebTestRenderFrame_DumpFrameLayout_ResponseParamsSpec.$,
      []);
  }

  setTestConfiguration(config, starting_test) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.WebTestRenderFrame_SetTestConfiguration_ParamsSpec.$,
      null,
      [config, starting_test]);
  }

  onDeactivated() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.WebTestRenderFrame_OnDeactivated_ParamsSpec.$,
      null,
      []);
  }

  onReactivated() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      content.mojom.WebTestRenderFrame_OnReactivated_ParamsSpec.$,
      null,
      []);
  }

  blockTestUntilStart() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      content.mojom.WebTestRenderFrame_BlockTestUntilStart_ParamsSpec.$,
      null,
      []);
  }

  startTest() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      content.mojom.WebTestRenderFrame_StartTest_ParamsSpec.$,
      null,
      []);
  }

  setupRendererProcessForNonTestWindow() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      content.mojom.WebTestRenderFrame_SetupRendererProcessForNonTestWindow_ParamsSpec.$,
      null,
      []);
  }

  replicateWebTestRuntimeFlagsChanges(changed_layout_test_runtime_flags) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      content.mojom.WebTestRenderFrame_ReplicateWebTestRuntimeFlagsChanges_ParamsSpec.$,
      null,
      [changed_layout_test_runtime_flags]);
  }

  testFinishedFromSecondaryRenderer() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      content.mojom.WebTestRenderFrame_TestFinishedFromSecondaryRenderer_ParamsSpec.$,
      null,
      []);
  }

  resetRendererAfterWebTest() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      content.mojom.WebTestRenderFrame_ResetRendererAfterWebTest_ParamsSpec.$,
      null,
      []);
  }

  processWorkItem(work_item) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      content.mojom.WebTestRenderFrame_ProcessWorkItem_ParamsSpec.$,
      null,
      [work_item]);
  }

  replicateWorkQueueStates(work_queue_states) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      content.mojom.WebTestRenderFrame_ReplicateWorkQueueStates_ParamsSpec.$,
      null,
      [work_queue_states]);
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
}};

// ParamsSpec for SynchronouslyCompositeAfterTest
content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestRenderFrame.SynchronouslyCompositeAfterTest_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for DumpFrameLayout
content.mojom.WebTestRenderFrame_DumpFrameLayout_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestRenderFrame.DumpFrameLayout_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

content.mojom.WebTestRenderFrame_DumpFrameLayout_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestRenderFrame.DumpFrameLayout_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'frame_layout_dump', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetTestConfiguration
content.mojom.WebTestRenderFrame_SetTestConfiguration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestRenderFrame.SetTestConfiguration_Params',
      packedSize: 24,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'starting_test', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnDeactivated
content.mojom.WebTestRenderFrame_OnDeactivated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestRenderFrame.OnDeactivated_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnReactivated
content.mojom.WebTestRenderFrame_OnReactivated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestRenderFrame.OnReactivated_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for BlockTestUntilStart
content.mojom.WebTestRenderFrame_BlockTestUntilStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestRenderFrame.BlockTestUntilStart_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for StartTest
content.mojom.WebTestRenderFrame_StartTest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestRenderFrame.StartTest_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetupRendererProcessForNonTestWindow
content.mojom.WebTestRenderFrame_SetupRendererProcessForNonTestWindow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestRenderFrame.SetupRendererProcessForNonTestWindow_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ReplicateWebTestRuntimeFlagsChanges
content.mojom.WebTestRenderFrame_ReplicateWebTestRuntimeFlagsChanges_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestRenderFrame.ReplicateWebTestRuntimeFlagsChanges_Params',
      packedSize: 16,
      fields: [
        { name: 'changed_layout_test_runtime_flags', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for TestFinishedFromSecondaryRenderer
content.mojom.WebTestRenderFrame_TestFinishedFromSecondaryRenderer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestRenderFrame.TestFinishedFromSecondaryRenderer_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ResetRendererAfterWebTest
content.mojom.WebTestRenderFrame_ResetRendererAfterWebTest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestRenderFrame.ResetRendererAfterWebTest_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ProcessWorkItem
content.mojom.WebTestRenderFrame_ProcessWorkItem_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestRenderFrame.ProcessWorkItem_Params',
      packedSize: 16,
      fields: [
        { name: 'work_item', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ReplicateWorkQueueStates
content.mojom.WebTestRenderFrame_ReplicateWorkQueueStates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestRenderFrame.ReplicateWorkQueueStates_Params',
      packedSize: 16,
      fields: [
        { name: 'work_queue_states', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
content.mojom.WebTestRenderFramePtr = content.mojom.WebTestRenderFrameRemote;
content.mojom.WebTestRenderFrameRequest = content.mojom.WebTestRenderFramePendingReceiver;


// Interface: WebTestControlHost
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
      content.mojom.WebTestControlHost_InitiateCaptureDump_ParamsSpec.$,
      null,
      [result, capture_navigation_history, capture_pixels]);
  }

  testFinishedInSecondaryRenderer() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.WebTestControlHost_TestFinishedInSecondaryRenderer_ParamsSpec.$,
      null,
      []);
  }

  printMessageToStderr(message) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.WebTestControlHost_PrintMessageToStderr_ParamsSpec.$,
      null,
      [message]);
  }

  printMessage(message) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.WebTestControlHost_PrintMessage_ParamsSpec.$,
      null,
      [message]);
  }

  overridePreferences(web_preferences) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      content.mojom.WebTestControlHost_OverridePreferences_ParamsSpec.$,
      null,
      [web_preferences]);
  }

  reload() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      content.mojom.WebTestControlHost_Reload_ParamsSpec.$,
      null,
      []);
  }

  checkForLeakedWindows() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      content.mojom.WebTestControlHost_CheckForLeakedWindows_ParamsSpec.$,
      null,
      []);
  }

  setMainWindowHidden(hidden) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      content.mojom.WebTestControlHost_SetMainWindowHidden_ParamsSpec.$,
      null,
      [hidden]);
  }

  setFrameWindowHidden(frame_token, hidden) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      content.mojom.WebTestControlHost_SetFrameWindowHidden_ParamsSpec.$,
      null,
      [frame_token, hidden]);
  }

  goToOffset(offset) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      content.mojom.WebTestControlHost_GoToOffset_ParamsSpec.$,
      null,
      [offset]);
  }

  sendBluetoothManualChooserEvent(event, argument) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      content.mojom.WebTestControlHost_SendBluetoothManualChooserEvent_ParamsSpec.$,
      null,
      [event, argument]);
  }

  setBluetoothManualChooser(enable) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      content.mojom.WebTestControlHost_SetBluetoothManualChooser_ParamsSpec.$,
      null,
      [enable]);
  }

  getBluetoothManualChooserEvents() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ParamsSpec.$,
      content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ResponseParamsSpec.$,
      []);
  }

  setPopupBlockingEnabled(block_popups) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      content.mojom.WebTestControlHost_SetPopupBlockingEnabled_ParamsSpec.$,
      null,
      [block_popups]);
  }

  loadURLForFrame(url, frame_name) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      content.mojom.WebTestControlHost_LoadURLForFrame_ParamsSpec.$,
      null,
      [url, frame_name]);
  }

  simulateScreenOrientationChanged() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      content.mojom.WebTestControlHost_SimulateScreenOrientationChanged_ParamsSpec.$,
      null,
      []);
  }

  setPermission(name, status, origin, embedding_origin) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      content.mojom.WebTestControlHost_SetPermission_ParamsSpec.$,
      null,
      [name, status, origin, embedding_origin]);
  }

  blockThirdPartyCookies(block) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      content.mojom.WebTestControlHost_BlockThirdPartyCookies_ParamsSpec.$,
      null,
      [block]);
  }

  getWritableDirectory() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      content.mojom.WebTestControlHost_GetWritableDirectory_ParamsSpec.$,
      content.mojom.WebTestControlHost_GetWritableDirectory_ResponseParamsSpec.$,
      []);
  }

  setFilePathForMockFileDialog(path) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      content.mojom.WebTestControlHost_SetFilePathForMockFileDialog_ParamsSpec.$,
      null,
      [path]);
  }

  createSubresourceFilterRulesetFile(disallowed_suffixes) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ParamsSpec.$,
      content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ResponseParamsSpec.$,
      [disallowed_suffixes]);
  }

  focusDevtoolsSecondaryWindow() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      content.mojom.WebTestControlHost_FocusDevtoolsSecondaryWindow_ParamsSpec.$,
      null,
      []);
  }

  setTrustTokenKeyCommitments(raw_commitments) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ParamsSpec.$,
      null,
      [raw_commitments]);
  }

  clearTrustTokenState() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      content.mojom.WebTestControlHost_ClearTrustTokenState_ParamsSpec.$,
      null,
      []);
  }

  simulateWebNotificationClick(title, action_index, reply) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      content.mojom.WebTestControlHost_SimulateWebNotificationClick_ParamsSpec.$,
      null,
      [title, action_index, reply]);
  }

  simulateWebNotificationClose(title, by_user) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      content.mojom.WebTestControlHost_SimulateWebNotificationClose_ParamsSpec.$,
      null,
      [title, by_user]);
  }

  simulateWebContentIndexDelete(id) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      content.mojom.WebTestControlHost_SimulateWebContentIndexDelete_ParamsSpec.$,
      null,
      [id]);
  }

  webTestRuntimeFlagsChanged(changed_web_test_runtime_flags) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      content.mojom.WebTestControlHost_WebTestRuntimeFlagsChanged_ParamsSpec.$,
      null,
      [changed_web_test_runtime_flags]);
  }

  registerIsolatedFileSystem(file_paths) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ParamsSpec.$,
      content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ResponseParamsSpec.$,
      [file_paths]);
  }

  dropPointerLock() {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      content.mojom.WebTestControlHost_DropPointerLock_ParamsSpec.$,
      null,
      []);
  }

  setPointerLockWillFail() {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      content.mojom.WebTestControlHost_SetPointerLockWillFail_ParamsSpec.$,
      null,
      []);
  }

  setPointerLockWillRespondAsynchronously() {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      content.mojom.WebTestControlHost_SetPointerLockWillRespondAsynchronously_ParamsSpec.$,
      null,
      []);
  }

  allowPointerLock() {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      content.mojom.WebTestControlHost_AllowPointerLock_ParamsSpec.$,
      null,
      []);
  }

  workItemAdded(work_item) {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      content.mojom.WebTestControlHost_WorkItemAdded_ParamsSpec.$,
      null,
      [work_item]);
  }

  requestWorkItem() {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      content.mojom.WebTestControlHost_RequestWorkItem_ParamsSpec.$,
      null,
      []);
  }

  workQueueStatesChanged(changed_work_queue_states) {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      content.mojom.WebTestControlHost_WorkQueueStatesChanged_ParamsSpec.$,
      null,
      [changed_work_queue_states]);
  }

  setAcceptLanguages(accept_languages) {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      content.mojom.WebTestControlHost_SetAcceptLanguages_ParamsSpec.$,
      null,
      [accept_languages]);
  }

  setRegisterProtocolHandlerMode(mode) {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      content.mojom.WebTestControlHost_SetRegisterProtocolHandlerMode_ParamsSpec.$,
      null,
      [mode]);
  }

  enableAutoResize(min_size, max_size) {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      content.mojom.WebTestControlHost_EnableAutoResize_ParamsSpec.$,
      null,
      [min_size, max_size]);
  }

  disableAutoResize(new_size) {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      content.mojom.WebTestControlHost_DisableAutoResize_ParamsSpec.$,
      null,
      [new_size]);
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
}};

// ParamsSpec for InitiateCaptureDump
content.mojom.WebTestControlHost_InitiateCaptureDump_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.InitiateCaptureDump_Params',
      packedSize: 32,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'capture_navigation_history', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'capture_pixels', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for TestFinishedInSecondaryRenderer
content.mojom.WebTestControlHost_TestFinishedInSecondaryRenderer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.TestFinishedInSecondaryRenderer_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for PrintMessageToStderr
content.mojom.WebTestControlHost_PrintMessageToStderr_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.PrintMessageToStderr_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for PrintMessage
content.mojom.WebTestControlHost_PrintMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.PrintMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OverridePreferences
content.mojom.WebTestControlHost_OverridePreferences_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.OverridePreferences_Params',
      packedSize: 16,
      fields: [
        { name: 'web_preferences', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for Reload
content.mojom.WebTestControlHost_Reload_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.Reload_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for CheckForLeakedWindows
content.mojom.WebTestControlHost_CheckForLeakedWindows_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.CheckForLeakedWindows_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetMainWindowHidden
content.mojom.WebTestControlHost_SetMainWindowHidden_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.SetMainWindowHidden_Params',
      packedSize: 16,
      fields: [
        { name: 'hidden', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetFrameWindowHidden
content.mojom.WebTestControlHost_SetFrameWindowHidden_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.SetFrameWindowHidden_Params',
      packedSize: 24,
      fields: [
        { name: 'frame_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'hidden', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for GoToOffset
content.mojom.WebTestControlHost_GoToOffset_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.GoToOffset_Params',
      packedSize: 16,
      fields: [
        { name: 'offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SendBluetoothManualChooserEvent
content.mojom.WebTestControlHost_SendBluetoothManualChooserEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.SendBluetoothManualChooserEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'argument', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetBluetoothManualChooser
content.mojom.WebTestControlHost_SetBluetoothManualChooser_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.SetBluetoothManualChooser_Params',
      packedSize: 16,
      fields: [
        { name: 'enable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for GetBluetoothManualChooserEvents
content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.GetBluetoothManualChooserEvents_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.GetBluetoothManualChooserEvents_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'events', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetPopupBlockingEnabled
content.mojom.WebTestControlHost_SetPopupBlockingEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.SetPopupBlockingEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'block_popups', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for LoadURLForFrame
content.mojom.WebTestControlHost_LoadURLForFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.LoadURLForFrame_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'frame_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SimulateScreenOrientationChanged
content.mojom.WebTestControlHost_SimulateScreenOrientationChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.SimulateScreenOrientationChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetPermission
content.mojom.WebTestControlHost_SetPermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.SetPermission_Params',
      packedSize: 40,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'origin', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'embedding_origin', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for BlockThirdPartyCookies
content.mojom.WebTestControlHost_BlockThirdPartyCookies_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.BlockThirdPartyCookies_Params',
      packedSize: 16,
      fields: [
        { name: 'block', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for GetWritableDirectory
content.mojom.WebTestControlHost_GetWritableDirectory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.GetWritableDirectory_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

content.mojom.WebTestControlHost_GetWritableDirectory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.GetWritableDirectory_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetFilePathForMockFileDialog
content.mojom.WebTestControlHost_SetFilePathForMockFileDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.SetFilePathForMockFileDialog_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for CreateSubresourceFilterRulesetFile
content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.CreateSubresourceFilterRulesetFile_Params',
      packedSize: 16,
      fields: [
        { name: 'disallowed_suffixes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.CreateSubresourceFilterRulesetFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'file', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for FocusDevtoolsSecondaryWindow
content.mojom.WebTestControlHost_FocusDevtoolsSecondaryWindow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.FocusDevtoolsSecondaryWindow_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetTrustTokenKeyCommitments
content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.SetTrustTokenKeyCommitments_Params',
      packedSize: 16,
      fields: [
        { name: 'raw_commitments', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ClearTrustTokenState
content.mojom.WebTestControlHost_ClearTrustTokenState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.ClearTrustTokenState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SimulateWebNotificationClick
content.mojom.WebTestControlHost_SimulateWebNotificationClick_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.SimulateWebNotificationClick_Params',
      packedSize: 32,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'action_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'reply', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SimulateWebNotificationClose
content.mojom.WebTestControlHost_SimulateWebNotificationClose_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.SimulateWebNotificationClose_Params',
      packedSize: 24,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'by_user', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SimulateWebContentIndexDelete
content.mojom.WebTestControlHost_SimulateWebContentIndexDelete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.SimulateWebContentIndexDelete_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for WebTestRuntimeFlagsChanged
content.mojom.WebTestControlHost_WebTestRuntimeFlagsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.WebTestRuntimeFlagsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'changed_web_test_runtime_flags', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RegisterIsolatedFileSystem
content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.RegisterIsolatedFileSystem_Params',
      packedSize: 16,
      fields: [
        { name: 'file_paths', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.RegisterIsolatedFileSystem_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'filesystem_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for DropPointerLock
content.mojom.WebTestControlHost_DropPointerLock_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.DropPointerLock_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetPointerLockWillFail
content.mojom.WebTestControlHost_SetPointerLockWillFail_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.SetPointerLockWillFail_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetPointerLockWillRespondAsynchronously
content.mojom.WebTestControlHost_SetPointerLockWillRespondAsynchronously_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.SetPointerLockWillRespondAsynchronously_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for AllowPointerLock
content.mojom.WebTestControlHost_AllowPointerLock_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.AllowPointerLock_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for WorkItemAdded
content.mojom.WebTestControlHost_WorkItemAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.WorkItemAdded_Params',
      packedSize: 16,
      fields: [
        { name: 'work_item', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RequestWorkItem
content.mojom.WebTestControlHost_RequestWorkItem_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.RequestWorkItem_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for WorkQueueStatesChanged
content.mojom.WebTestControlHost_WorkQueueStatesChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.WorkQueueStatesChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'changed_work_queue_states', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetAcceptLanguages
content.mojom.WebTestControlHost_SetAcceptLanguages_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.SetAcceptLanguages_Params',
      packedSize: 16,
      fields: [
        { name: 'accept_languages', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetRegisterProtocolHandlerMode
content.mojom.WebTestControlHost_SetRegisterProtocolHandlerMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.SetRegisterProtocolHandlerMode_Params',
      packedSize: 16,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for EnableAutoResize
content.mojom.WebTestControlHost_EnableAutoResize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.EnableAutoResize_Params',
      packedSize: 24,
      fields: [
        { name: 'min_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'max_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for DisableAutoResize
content.mojom.WebTestControlHost_DisableAutoResize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestControlHost.DisableAutoResize_Params',
      packedSize: 16,
      fields: [
        { name: 'new_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
content.mojom.WebTestControlHostPtr = content.mojom.WebTestControlHostRemote;
content.mojom.WebTestControlHostRequest = content.mojom.WebTestControlHostPendingReceiver;


// Interface: NonAssociatedWebTestControlHost
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
      content.mojom.NonAssociatedWebTestControlHost_SetLCPPNavigationHint_ParamsSpec.$,
      null,
      [hint]);
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
}};

// ParamsSpec for SetLCPPNavigationHint
content.mojom.NonAssociatedWebTestControlHost_SetLCPPNavigationHint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.NonAssociatedWebTestControlHost.SetLCPPNavigationHint_Params',
      packedSize: 16,
      fields: [
        { name: 'hint', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
content.mojom.NonAssociatedWebTestControlHostPtr = content.mojom.NonAssociatedWebTestControlHostRemote;
content.mojom.NonAssociatedWebTestControlHostRequest = content.mojom.NonAssociatedWebTestControlHostPendingReceiver;

