// MojoJS Post-Load Aliasing
// Extracted from index.html to satisfy CSP (no unsafe-inline)

(function () {
  if (typeof mojo !== "undefined") {
    const b = mojo.internal.bindings && mojo.internal.bindings.mojo;

    // Pipe Control
    if (b && b.pipe_control) {
      mojo.pipeControl = b.pipe_control;
      mojo.pipeControl.RUN_OR_CLOSE_PIPE_MESSAGE_ID =
        b.pipe_control.kRunOrClosePipeMessageId || 0xfffffffe;
    } else {
      mojo.pipeControl = mojo.pipeControl || {
        RUN_OR_CLOSE_PIPE_MESSAGE_ID: 0xfffffffe,
      };
    }

    // Interface Control
    if (b && b.interface_control) {
      mojo.interfaceControl = b.interface_control;
      mojo.interfaceControl.RUN_MESSAGE_ID =
        b.interface_control.kRunMessageId || 0xffffffff;
      mojo.interfaceControl.RUN_OUTPUT_MESSAGE_ID =
        b.interface_control.kRunMessageId || 0xffffffff;
    } else {
      mojo.interfaceControl = mojo.interfaceControl || {
        RUN_MESSAGE_ID: 0xffffffff,
        RUN_OUTPUT_MESSAGE_ID: 0xffffffff,
      };
    }
  }
})();
