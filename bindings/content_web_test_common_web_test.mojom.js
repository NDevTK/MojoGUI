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

// Struct: WebTestRunTestConfiguration
content.mojom.WebTestRunTestConfiguration = class {
  constructor(values = {}) {
    this.protocol_mode = values.protocol_mode !== undefined ? values.protocol_mode : 0;
  }
};

// Struct: WebTestRendererDumpResult
content.mojom.WebTestRendererDumpResult = class {
  constructor(values = {}) {
    this.selection_rect = values.selection_rect !== undefined ? values.selection_rect : 0;
  }
};

// Struct: WorkItemBackForward
content.mojom.WorkItemBackForward = class {
  constructor(values = {}) {
    this.distance = values.distance !== undefined ? values.distance : 0;
  }
};

// Struct: WorkItemLoad
content.mojom.WorkItemLoad = class {
  constructor(values = {}) {
    this.url = values.url !== undefined ? values.url : "";
    this.target = values.target !== undefined ? values.target : "";
  }
};

// Struct: WorkItemReload
content.mojom.WorkItemReload = class {
  constructor(values = {}) {
  }
};

// Struct: WorkItemLoadingScript
content.mojom.WorkItemLoadingScript = class {
  constructor(values = {}) {
    this.script = values.script !== undefined ? values.script : "";
  }
};

// Struct: WorkItemNonLoadingScript
content.mojom.WorkItemNonLoadingScript = class {
  constructor(values = {}) {
    this.script = values.script !== undefined ? values.script : "";
  }
};

// Interface: WebTestRenderFrame
content.mojom.WebTestRenderFramePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.WebTestRenderFrame';
  }

  synchronouslyCompositeAfterTest() {
    // Method: SynchronouslyCompositeAfterTest
    // Call: SynchronouslyCompositeAfterTest()
  }

  dumpFrameLayout() {
    // Method: DumpFrameLayout
    return new Promise((resolve) => {
      // Call: DumpFrameLayout()
      resolve({});
    });
  }

  setTestConfiguration(config, starting_test) {
    // Method: SetTestConfiguration
    // Call: SetTestConfiguration(config, starting_test)
  }

  onDeactivated() {
    // Method: OnDeactivated
    // Call: OnDeactivated()
  }

  onReactivated() {
    // Method: OnReactivated
    // Call: OnReactivated()
  }

  blockTestUntilStart() {
    // Method: BlockTestUntilStart
    // Call: BlockTestUntilStart()
  }

  startTest() {
    // Method: StartTest
    // Call: StartTest()
  }

  setupRendererProcessForNonTestWindow() {
    // Method: SetupRendererProcessForNonTestWindow
    // Call: SetupRendererProcessForNonTestWindow()
  }

  replicateWebTestRuntimeFlagsChanges(changed_layout_test_runtime_flags) {
    // Method: ReplicateWebTestRuntimeFlagsChanges
    // Call: ReplicateWebTestRuntimeFlagsChanges(changed_layout_test_runtime_flags)
  }

  testFinishedFromSecondaryRenderer() {
    // Method: TestFinishedFromSecondaryRenderer
    // Call: TestFinishedFromSecondaryRenderer()
  }

  resetRendererAfterWebTest() {
    // Method: ResetRendererAfterWebTest
    // Call: ResetRendererAfterWebTest()
  }

  processWorkItem(work_item) {
    // Method: ProcessWorkItem
    // Call: ProcessWorkItem(work_item)
  }

  replicateWorkQueueStates(work_queue_states) {
    // Method: ReplicateWorkQueueStates
    // Call: ReplicateWorkQueueStates(work_queue_states)
  }

};

content.mojom.WebTestRenderFrameRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WebTestControlHost
content.mojom.WebTestControlHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.WebTestControlHost';
  }

  initiateCaptureDump(result, capture_navigation_history, capture_pixels) {
    // Method: InitiateCaptureDump
    // Call: InitiateCaptureDump(result, capture_navigation_history, capture_pixels)
  }

  testFinishedInSecondaryRenderer() {
    // Method: TestFinishedInSecondaryRenderer
    // Call: TestFinishedInSecondaryRenderer()
  }

  printMessageToStderr(message) {
    // Method: PrintMessageToStderr
    // Call: PrintMessageToStderr(message)
  }

  printMessage(message) {
    // Method: PrintMessage
    // Call: PrintMessage(message)
  }

  overridePreferences(web_preferences) {
    // Method: OverridePreferences
    // Call: OverridePreferences(web_preferences)
  }

  reload() {
    // Method: Reload
    // Call: Reload()
  }

  checkForLeakedWindows() {
    // Method: CheckForLeakedWindows
    // Call: CheckForLeakedWindows()
  }

  setMainWindowHidden(hidden) {
    // Method: SetMainWindowHidden
    // Call: SetMainWindowHidden(hidden)
  }

  setFrameWindowHidden(frame_token, hidden) {
    // Method: SetFrameWindowHidden
    // Call: SetFrameWindowHidden(frame_token, hidden)
  }

  goToOffset(offset) {
    // Method: GoToOffset
    // Call: GoToOffset(offset)
  }

  sendBluetoothManualChooserEvent(event, argument) {
    // Method: SendBluetoothManualChooserEvent
    // Call: SendBluetoothManualChooserEvent(event, argument)
  }

  setBluetoothManualChooser(enable) {
    // Method: SetBluetoothManualChooser
    // Call: SetBluetoothManualChooser(enable)
  }

  getBluetoothManualChooserEvents() {
    // Method: GetBluetoothManualChooserEvents
    return new Promise((resolve) => {
      // Call: GetBluetoothManualChooserEvents()
      resolve({});
    });
  }

  setPopupBlockingEnabled(block_popups) {
    // Method: SetPopupBlockingEnabled
    // Call: SetPopupBlockingEnabled(block_popups)
  }

  loadURLForFrame(url, frame_name) {
    // Method: LoadURLForFrame
    // Call: LoadURLForFrame(url, frame_name)
  }

  simulateScreenOrientationChanged() {
    // Method: SimulateScreenOrientationChanged
    // Call: SimulateScreenOrientationChanged()
  }

  setPermission(name, status, origin, embedding_origin) {
    // Method: SetPermission
    // Call: SetPermission(name, status, origin, embedding_origin)
  }

  blockThirdPartyCookies(block) {
    // Method: BlockThirdPartyCookies
    // Call: BlockThirdPartyCookies(block)
  }

  getWritableDirectory() {
    // Method: GetWritableDirectory
    return new Promise((resolve) => {
      // Call: GetWritableDirectory()
      resolve({});
    });
  }

  setFilePathForMockFileDialog(path) {
    // Method: SetFilePathForMockFileDialog
    // Call: SetFilePathForMockFileDialog(path)
  }

  createSubresourceFilterRulesetFile(disallowed_suffixes) {
    // Method: CreateSubresourceFilterRulesetFile
    return new Promise((resolve) => {
      // Call: CreateSubresourceFilterRulesetFile(disallowed_suffixes)
      resolve({});
    });
  }

  focusDevtoolsSecondaryWindow() {
    // Method: FocusDevtoolsSecondaryWindow
    // Call: FocusDevtoolsSecondaryWindow()
  }

  setTrustTokenKeyCommitments(raw_commitments) {
    // Method: SetTrustTokenKeyCommitments
    // Call: SetTrustTokenKeyCommitments(raw_commitments)
  }

  clearTrustTokenState() {
    // Method: ClearTrustTokenState
    // Call: ClearTrustTokenState()
  }

  simulateWebNotificationClick(title, action_index, reply) {
    // Method: SimulateWebNotificationClick
    // Call: SimulateWebNotificationClick(title, action_index, reply)
  }

  simulateWebNotificationClose(title, by_user) {
    // Method: SimulateWebNotificationClose
    // Call: SimulateWebNotificationClose(title, by_user)
  }

  simulateWebContentIndexDelete(id) {
    // Method: SimulateWebContentIndexDelete
    // Call: SimulateWebContentIndexDelete(id)
  }

  webTestRuntimeFlagsChanged(changed_web_test_runtime_flags) {
    // Method: WebTestRuntimeFlagsChanged
    // Call: WebTestRuntimeFlagsChanged(changed_web_test_runtime_flags)
  }

  registerIsolatedFileSystem(file_paths) {
    // Method: RegisterIsolatedFileSystem
    return new Promise((resolve) => {
      // Call: RegisterIsolatedFileSystem(file_paths)
      resolve({});
    });
  }

  dropPointerLock() {
    // Method: DropPointerLock
    // Call: DropPointerLock()
  }

  setPointerLockWillFail() {
    // Method: SetPointerLockWillFail
    // Call: SetPointerLockWillFail()
  }

  setPointerLockWillRespondAsynchronously() {
    // Method: SetPointerLockWillRespondAsynchronously
    // Call: SetPointerLockWillRespondAsynchronously()
  }

  allowPointerLock() {
    // Method: AllowPointerLock
    // Call: AllowPointerLock()
  }

  workItemAdded(work_item) {
    // Method: WorkItemAdded
    // Call: WorkItemAdded(work_item)
  }

  requestWorkItem() {
    // Method: RequestWorkItem
    // Call: RequestWorkItem()
  }

  workQueueStatesChanged(changed_work_queue_states) {
    // Method: WorkQueueStatesChanged
    // Call: WorkQueueStatesChanged(changed_work_queue_states)
  }

  setAcceptLanguages(accept_languages) {
    // Method: SetAcceptLanguages
    // Call: SetAcceptLanguages(accept_languages)
  }

};

content.mojom.WebTestControlHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NonAssociatedWebTestControlHost
content.mojom.NonAssociatedWebTestControlHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.NonAssociatedWebTestControlHost';
  }

  setLCPPNavigationHint(hint) {
    // Method: SetLCPPNavigationHint
    // Call: SetLCPPNavigationHint(hint)
  }

};

content.mojom.NonAssociatedWebTestControlHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
