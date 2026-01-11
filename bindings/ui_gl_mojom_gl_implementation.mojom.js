// Auto-generated MojoJS binding
// Source: chromium_src/ui/gl/mojom/gl_implementation.mojom
// Module: gl.mojom

// Module namespace
var gl = gl || {};
gl.mojom = gl.mojom || {};

gl.mojom.GLImplementationSpec = { $: mojo.internal.Enum() };
gl.mojom.ANGLEImplementationSpec = { $: mojo.internal.Enum() };
gl.mojom.GLImplementationPartsSpec = { $: {} };

// Enum: GLImplementation
gl.mojom.GLImplementation = {
  kGLImplementationNone: 0,
  kGLImplementationEGLGLES2: 1,
  kGLImplementationMockGL: 2,
  kGLImplementationStubGL: 3,
  kGLImplementationDisabled: 4,
  kGLImplementationEGLANGLE: 5,
};

// Enum: ANGLEImplementation
gl.mojom.ANGLEImplementation = {
  kNone: 0,
  kD3D9: 1,
  kD3D11: 2,
  kOpenGL: 3,
  kOpenGLES: 4,
  kNull: 5,
  kVulkan: 6,
  kSwiftShader: 7,
  kMetal: 8,
  kD3D11Warp: 9,
  kDefault: 10,
};

// Struct: GLImplementationParts
mojo.internal.Struct(
    gl.mojom.GLImplementationPartsSpec, 'gl.mojom.GLImplementationParts', [
      mojo.internal.StructField('gl', 0, 0, gl.mojom.GLImplementationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('angle', 8, 0, gl.mojom.ANGLEImplementationSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);
