// MojoJS Core Polyfills & Initialization
// Extracted from index.html to satisfy CSP (no unsafe-inline)

(function () {
  // Core polyfills needed by mojom dependencies
  if (typeof mojo !== "undefined") {
    mojo.internal = mojo.internal || {};
    mojo.internal.interfaceSupport = mojo.internal.interfaceSupport || {};
    mojo.internal.Union = function (objectToBlessAsType, name, fields) {
      const unionSpec = { name, fields };
      objectToBlessAsType.$ = {
        unionSpec: unionSpec,
        encode: function (value, encoder, byteOffset, bitOffset, nullable) {
          encoder.encodeUnion(unionSpec, byteOffset, value);
        },
        decode: function (decoder, byteOffset, bitOffset, nullable) {
          return decoder.decodeUnion(unionSpec, byteOffset);
        },
        computeDimensions: function (value, nullable) {
          return mojo.internal.computeUnionDimensions(
            unionSpec,
            nullable,
            value,
          );
        },
        arrayElementSize: (nullable) => (nullable ? 8 : 16),
        encodeNull: function (encoder, byteOffset) {},
        isValidObjectKeyType: false,
      };
    };
  }
})();
