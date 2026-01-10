// Auto-generated MojoJS binding
// Source: chromium_src/ui/gl/mojom/gl_implementation.mojom
// Module: gl.mojom

'use strict';

// Module namespace
var gl = gl || {};
gl.mojom = gl.mojom || {};


// Enum: GLImplementation
gl.mojom.GLImplementation = {
  kGLImplementationNone: 0,
  kGLImplementationEGLGLES2: 1,
  kGLImplementationMockGL: 2,
  kGLImplementationStubGL: 3,
  kGLImplementationDisabled: 4,
  kGLImplementationEGLANGLE: 5,
};
gl.mojom.GLImplementationSpec = { $: mojo.internal.Enum() };

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
gl.mojom.ANGLEImplementationSpec = { $: mojo.internal.Enum() };

// Struct: GLImplementationParts
gl.mojom.GLImplementationPartsSpec = {
  $: {
    structSpec: {
      name: 'gl.mojom.GLImplementationParts',
      packedSize: 16,
      fields: [
        { name: 'gl', packedOffset: 0, packedBitOffset: 0, type: gl.mojom.GLImplementationSpec, nullable: false, minVersion: 0 },
        { name: 'angle', packedOffset: 4, packedBitOffset: 0, type: gl.mojom.ANGLEImplementationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
