// Auto-generated MojoJS binding
// Source: chromium_src/components/data_sharing/public/protocol/group_data.mojom
// Module: data_sharing.mojom

'use strict';

// Module namespace
var data_sharing = data_sharing || {};
data_sharing.mojom = data_sharing.mojom || {};


// Enum: MemberRole
data_sharing.mojom.MemberRole = {
  kUnspecified: 0,
  kOwner: 1,
  kMember: 2,
  kInvitee: 3,
  kFormerMember: 4,
};

// Struct: GroupMember
data_sharing.mojom.GroupMemberSpec = {
  $: {
    structSpec: {
      name: 'data_sharing.mojom.GroupMember',
      packedSize: 16,
      fields: [
        { name: 'last_updated_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GroupData
data_sharing.mojom.GroupDataSpec = {
  $: {
    structSpec: {
      name: 'data_sharing.mojom.GroupData',
      packedSize: 16,
      fields: [
        { name: 'access_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
