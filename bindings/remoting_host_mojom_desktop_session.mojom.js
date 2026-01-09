// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/desktop_session.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};


// Enum: Encoding
remoting.mojom.Encoding = {
};

// Enum: SamplingRate
remoting.mojom.SamplingRate = {
};

// Enum: BytesPerSample
remoting.mojom.BytesPerSample = {
};

// Enum: Channels
remoting.mojom.Channels = {
};

// Enum: MouseButton
remoting.mojom.MouseButton = {
};

// Enum: TouchEventType
remoting.mojom.TouchEventType = {
};

// Enum: UrlForwarderState
remoting.mojom.UrlForwarderState = {
};

// Enum: Type
remoting.mojom.Type = {
};

// Enum: ProtocolErrorCode
remoting.mojom.ProtocolErrorCode = {
};

// Struct: AudioPacket
remoting.mojom.AudioPacket = class {
  constructor(values = {}) {
  }
};

// Struct: ClipboardEvent
remoting.mojom.ClipboardEvent = class {
  constructor(values = {}) {
    this.data = values.data !== undefined ? values.data : "";
  }
};

// Struct: KeyEvent
remoting.mojom.KeyEvent = class {
  constructor(values = {}) {
    this.lock_states = values.lock_states !== undefined ? values.lock_states : 0;
    this.lock = values.lock !== undefined ? values.lock : null;
    this.num_lock_state = values.num_lock_state !== undefined ? values.num_lock_state : false;
  }
};

// Struct: MouseEvent
remoting.mojom.MouseEvent = class {
  constructor(values = {}) {
    this.delta_y = values.delta_y !== undefined ? values.delta_y : 0;
  }
};

// Struct: TextEvent
remoting.mojom.TextEvent = class {
  constructor(values = {}) {
    this.text = values.text !== undefined ? values.text : "";
  }
};

// Struct: TouchEventPoint
remoting.mojom.TouchEventPoint = class {
  constructor(values = {}) {
    this.position = values.position !== undefined ? values.position : 0;
    this.pressure = values.pressure !== undefined ? values.pressure : 0;
  }
};

// Struct: TouchEvent
remoting.mojom.TouchEvent = class {
  constructor(values = {}) {
    this.touch_points = values.touch_points !== undefined ? values.touch_points : 0;
  }
};

// Struct: FractionalCoordinate
remoting.mojom.FractionalCoordinate = class {
  constructor(values = {}) {
    this.screen_id = values.screen_id !== undefined ? values.screen_id : 0;
  }
};

// Struct: DesktopEnvironmentOptions
remoting.mojom.DesktopEnvironmentOptions = class {
  constructor(values = {}) {
    this.desktop_capture_options = values.desktop_capture_options !== undefined ? values.desktop_capture_options : 0;
  }
};

// Struct: ScreenResolution
remoting.mojom.ScreenResolution = class {
  constructor(values = {}) {
    this.dpi = values.dpi !== undefined ? values.dpi : null;
  }
};

// Struct: FileTransferError
remoting.mojom.FileTransferError = class {
  constructor(values = {}) {
  }
};

// Struct: BeginFileReadSuccess
remoting.mojom.BeginFileReadSuccess = class {
  constructor(values = {}) {
    this.size = values.size !== undefined ? values.size : 0;
  }
};

// Struct: BeginFileWriteSuccess
remoting.mojom.BeginFileWriteSuccess = class {
  constructor(values = {}) {
    this.file_writer = values.file_writer !== undefined ? values.file_writer : null;
  }
};

// Struct: CreateVideoCapturerResult
remoting.mojom.CreateVideoCapturerResult = class {
  constructor(values = {}) {
    this.video_capturer_event_handler = values.video_capturer_event_handler !== undefined ? values.video_capturer_event_handler : null;
  }
};

// Struct: VideoTrackLayout
remoting.mojom.VideoTrackLayout = class {
  constructor(values = {}) {
    this.screen_id = values.screen_id !== undefined ? values.screen_id : 0;
    this.display_name = values.display_name !== undefined ? values.display_name : 0;
  }
};

// Struct: VideoLayout
remoting.mojom.VideoLayout = class {
  constructor(values = {}) {
    this.primary_screen_id = values.primary_screen_id !== undefined ? values.primary_screen_id : 0;
  }
};

// Struct: SourceLocation
remoting.mojom.SourceLocation = class {
  constructor(values = {}) {
    this.line_number = values.line_number !== undefined ? values.line_number : 0;
  }
};

// Interface: DesktopSessionRequestHandler
remoting.mojom.DesktopSessionRequestHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remoting.mojom.DesktopSessionRequestHandler';
  }

  connectDesktopChannel(desktop_pipe) {
    // Method: ConnectDesktopChannel
    // Call: ConnectDesktopChannel(desktop_pipe)
  }

  injectSecureAttentionSequence() {
    // Method: InjectSecureAttentionSequence
    // Call: InjectSecureAttentionSequence()
  }

  crashNetworkProcess() {
    // Method: CrashNetworkProcess
    // Call: CrashNetworkProcess()
  }

};

remoting.mojom.DesktopSessionRequestHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DesktopSessionManager
remoting.mojom.DesktopSessionManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remoting.mojom.DesktopSessionManager';
  }

  createDesktopSession(terminal_id, screen_resolution, is_virtual_terminal) {
    // Method: CreateDesktopSession
    // Call: CreateDesktopSession(terminal_id, screen_resolution, is_virtual_terminal)
  }

  closeDesktopSession(terminal_id) {
    // Method: CloseDesktopSession
    // Call: CloseDesktopSession(terminal_id)
  }

  setScreenResolution(terminal_id, screen_resolution) {
    // Method: SetScreenResolution
    // Call: SetScreenResolution(terminal_id, screen_resolution)
  }

};

remoting.mojom.DesktopSessionManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DesktopSessionAgent
remoting.mojom.DesktopSessionAgentPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remoting.mojom.DesktopSessionAgent';
  }

  start(authenticated_jid, resolution, options) {
    // Method: Start
    return new Promise((resolve) => {
      // Call: Start(authenticated_jid, resolution, options)
      resolve({});
    });
  }

};

remoting.mojom.DesktopSessionAgentRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FileWriter
remoting.mojom.FileWriterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remoting.mojom.FileWriter';
  }

  writeChunk(data) {
    // Method: WriteChunk
    return new Promise((resolve) => {
      // Call: WriteChunk(data)
      resolve({});
    });
  }

  closeFile() {
    // Method: CloseFile
    return new Promise((resolve) => {
      // Call: CloseFile()
      resolve({});
    });
  }

};

remoting.mojom.FileWriterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FileReader
remoting.mojom.FileReaderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remoting.mojom.FileReader';
  }

  readChunk(bytes_to_read) {
    // Method: ReadChunk
    return new Promise((resolve) => {
      // Call: ReadChunk(bytes_to_read)
      resolve({});
    });
  }

};

remoting.mojom.FileReaderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DesktopSessionControl
remoting.mojom.DesktopSessionControlPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remoting.mojom.DesktopSessionControl';
  }

  createVideoCapturer(desktop_display_id) {
    // Method: CreateVideoCapturer
    return new Promise((resolve) => {
      // Call: CreateVideoCapturer(desktop_display_id)
      resolve({});
    });
  }

  setScreenResolution(new_resolution) {
    // Method: SetScreenResolution
    // Call: SetScreenResolution(new_resolution)
  }

  lockWorkstation() {
    // Method: LockWorkstation
    // Call: LockWorkstation()
  }

  injectSendAttentionSequence() {
    // Method: InjectSendAttentionSequence
    // Call: InjectSendAttentionSequence()
  }

  injectClipboardEvent(event) {
    // Method: InjectClipboardEvent
    // Call: InjectClipboardEvent(event)
  }

  injectKeyEvent(event) {
    // Method: InjectKeyEvent
    // Call: InjectKeyEvent(event)
  }

  injectMouseEvent(event) {
    // Method: InjectMouseEvent
    // Call: InjectMouseEvent(event)
  }

  injectTextEvent(event) {
    // Method: InjectTextEvent
    // Call: InjectTextEvent(event)
  }

  injectTouchEvent(event) {
    // Method: InjectTouchEvent
    // Call: InjectTouchEvent(event)
  }

  setUpUrlForwarder() {
    // Method: SetUpUrlForwarder
    // Call: SetUpUrlForwarder()
  }

  signalWebAuthnExtension() {
    // Method: SignalWebAuthnExtension
    // Call: SignalWebAuthnExtension()
  }

  beginFileRead() {
    // Method: BeginFileRead
    return new Promise((resolve) => {
      // Call: BeginFileRead()
      resolve({});
    });
  }

  beginFileWrite(file_path) {
    // Method: BeginFileWrite
    return new Promise((resolve) => {
      // Call: BeginFileWrite(file_path)
      resolve({});
    });
  }

  setHostCursorRenderedByClient() {
    // Method: SetHostCursorRenderedByClient
    // Call: SetHostCursorRenderedByClient()
  }

};

remoting.mojom.DesktopSessionControlRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: VideoCapturer
remoting.mojom.VideoCapturerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remoting.mojom.VideoCapturer';
  }

  captureFrame() {
    // Method: CaptureFrame
    // Call: CaptureFrame()
  }

  setComposeEnabled(enabled) {
    // Method: SetComposeEnabled
    // Call: SetComposeEnabled(enabled)
  }

};

remoting.mojom.VideoCapturerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: VideoCapturerEventHandler
remoting.mojom.VideoCapturerEventHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remoting.mojom.VideoCapturerEventHandler';
  }

  onSharedMemoryRegionCreated(id, region, size) {
    // Method: OnSharedMemoryRegionCreated
    // Call: OnSharedMemoryRegionCreated(id, region, size)
  }

  onSharedMemoryRegionReleased(id) {
    // Method: OnSharedMemoryRegionReleased
    // Call: OnSharedMemoryRegionReleased(id)
  }

  onCaptureResult(result) {
    // Method: OnCaptureResult
    // Call: OnCaptureResult(result)
  }

};

remoting.mojom.VideoCapturerEventHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DesktopSessionEventHandler
remoting.mojom.DesktopSessionEventHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remoting.mojom.DesktopSessionEventHandler';
  }

  onClipboardEvent(event) {
    // Method: OnClipboardEvent
    // Call: OnClipboardEvent(event)
  }

  onUrlForwarderStateChange(state) {
    // Method: OnUrlForwarderStateChange
    // Call: OnUrlForwarderStateChange(state)
  }

  onAudioPacket(audio_packet) {
    // Method: OnAudioPacket
    // Call: OnAudioPacket(audio_packet)
  }

  onDesktopDisplayChanged(layout) {
    // Method: OnDesktopDisplayChanged
    // Call: OnDesktopDisplayChanged(layout)
  }

  onMouseCursorChanged(mouse_cursor) {
    // Method: OnMouseCursorChanged
    // Call: OnMouseCursorChanged(mouse_cursor)
  }

  onMouseCursorFractionalPositionChanged(position) {
    // Method: OnMouseCursorFractionalPositionChanged
    // Call: OnMouseCursorFractionalPositionChanged(position)
  }

  onKeyboardLayoutChanged(keyboard_layout) {
    // Method: OnKeyboardLayoutChanged
    // Call: OnKeyboardLayoutChanged(keyboard_layout)
  }

  onLocalMouseMoveDetected(new_position) {
    // Method: OnLocalMouseMoveDetected
    // Call: OnLocalMouseMoveDetected(new_position)
  }

  onLocalKeyboardInputDetected(usb_keycode) {
    // Method: OnLocalKeyboardInputDetected
    // Call: OnLocalKeyboardInputDetected(usb_keycode)
  }

};

remoting.mojom.DesktopSessionEventHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DesktopSessionStateHandler
remoting.mojom.DesktopSessionStateHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remoting.mojom.DesktopSessionStateHandler';
  }

  disconnectSession(error_code, error_details, error_location) {
    // Method: DisconnectSession
    // Call: DisconnectSession(error_code, error_details, error_location)
  }

};

remoting.mojom.DesktopSessionStateHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WorkerProcessControl
remoting.mojom.WorkerProcessControlPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remoting.mojom.WorkerProcessControl';
  }

  crashProcess(function_name, file_name, line_number) {
    // Method: CrashProcess
    // Call: CrashProcess(function_name, file_name, line_number)
  }

};

remoting.mojom.WorkerProcessControlRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
