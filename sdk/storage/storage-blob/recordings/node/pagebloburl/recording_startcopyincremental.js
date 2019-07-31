let nock = require('nock');

module.exports.testInfo = {"container":"container156404687278009493","blob":"blob156404687305004902","page":"page156404687387902986"}

nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156404687278009493')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Thu, 25 Jul 2019 09:24:14 GMT',
  'ETag',
  '"0x8D710E1DC711568"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '3f4d55d2-701e-006c-4bca-429545000000',
  'x-ms-version',
  '2018-11-09',
  'Date',
  'Thu, 25 Jul 2019 09:24:14 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156404687278009493/blob156404687305004902')
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Thu, 25 Jul 2019 09:24:15 GMT',
  'ETag',
  '"0x8D710E1DC9B2EFF"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'f3724e27-301e-006b-79ca-4263c0000000',
  'x-ms-version',
  '2018-11-09',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Thu, 25 Jul 2019 09:24:14 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156404687278009493/blob156404687305004902', "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb")
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Content-MD5',
  'u+ZALNybfiA2/JfpqRcmzQ==',
  'Last-Modified',
  'Thu, 25 Jul 2019 09:24:15 GMT',
  'ETag',
  '"0x8D710E1DCC701F6"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '50c32928-c01e-00d4-24ca-4277b6000000',
  'x-ms-version',
  '2018-11-09',
  'x-ms-request-server-encrypted',
  'true',
  'x-ms-blob-sequence-number',
  '0',
  'Date',
  'Thu, 25 Jul 2019 09:24:15 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156404687278009493/blob156404687305004902')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Thu, 25 Jul 2019 09:24:15 GMT',
  'ETag',
  '"0x8D710E1DCC701F6"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '5e3f74d0-401e-006f-57ca-429642000000',
  'x-ms-version',
  '2018-11-09',
  'x-ms-snapshot',
  '2019-07-25T09:24:15.6632175Z',
  'x-ms-request-server-encrypted',
  'false',
  'Date',
  'Thu, 25 Jul 2019 09:24:14 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156404687278009493', "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><SignedIdentifiers/>")
  .query(true)
  .reply(200, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Thu, 25 Jul 2019 09:24:16 GMT',
  'ETag',
  '"0x8D710E1DD2E5283"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'b5d1d387-201e-013f-5cca-42cf1f000000',
  'x-ms-version',
  '2018-11-09',
  'Date',
  'Thu, 25 Jul 2019 09:24:15 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156404687278009493/page156404687387902986')
  .query(true)
  .reply(202, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Thu, 25 Jul 2019 09:24:21 GMT',
  'ETag',
  '"0x8D710E1E05E665E"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'eacc103c-901e-00a1-49ca-42f00d000000',
  'x-ms-version',
  '2018-11-09',
  'x-ms-copy-id',
  '4c143bff-b41f-4575-a411-31580a57bc22',
  'x-ms-copy-status',
  'pending',
  'Date',
  'Thu, 25 Jul 2019 09:24:20 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .head('/container156404687278009493/page156404687387902986')
  .reply(200, "", [ 'Content-Length',
  '1024',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Thu, 25 Jul 2019 09:24:21 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D710E1E06D3623"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '74fc54ca-d01e-0103-7fca-427bc4000000',
  'x-ms-version',
  '2018-11-09',
  'x-ms-tag-count',
  '0',
  'x-ms-meta-sourcemeta',
  'val',
  'x-ms-creation-time',
  'Thu, 25 Jul 2019 09:24:21 GMT',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-blob-type',
  'PageBlob',
  'x-ms-blob-sequence-number',
  '0',
  'x-ms-copy-id',
  '4c143bff-b41f-4575-a411-31580a57bc22',
  'x-ms-copy-source',
  'https://fakestorageaccount.blob.core.windows.net/container156404687278009493/blob156404687305004902?snapshot=2019-07-25T09:24:15.6632175Z',
  'x-ms-copy-status',
  'success',
  'x-ms-copy-progress',
  '1024/1024',
  'x-ms-copy-completion-time',
  'Thu, 25 Jul 2019 09:24:21 GMT',
  'x-ms-incremental-copy',
  'true',
  'x-ms-copy-destination-snapshot',
  '2019-07-25T09:24:21.5244276Z',
  'x-ms-server-encrypted',
  'true',
  'x-ms-access-tier',
  'Hot',
  'x-ms-access-tier-inferred',
  'true',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,Server,x-ms-version,x-ms-tag-count,x-ms-meta-sourcemeta,Content-Type,Last-Modified,ETag,x-ms-creation-time,x-ms-lease-status,x-ms-lease-state,x-ms-blob-type,x-ms-blob-sequence-number,x-ms-copy-id,x-ms-copy-source,x-ms-copy-status,x-ms-copy-progress,x-ms-copy-completion-time,x-ms-incremental-copy,x-ms-copy-destination-snapshot,x-ms-server-encrypted,x-ms-access-tier,x-ms-access-tier-inferred,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Thu, 25 Jul 2019 09:24:23 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .get('/container156404687278009493')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://fakestorageaccount.blob.core.windows.net/\" ContainerName=\"container156404687278009493\"><Blobs><Blob><Name>blob156404687305004902</Name><Snapshot>2019-07-25T09:24:15.6632175Z</Snapshot><Properties><Creation-Time>Thu, 25 Jul 2019 09:24:15 GMT</Creation-Time><Last-Modified>Thu, 25 Jul 2019 09:24:15 GMT</Last-Modified><Etag>0x8D710E1DCC701F6</Etag><Content-Length>1024</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-MD5 /><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><AccessTier>Hot</AccessTier><AccessTierInferred>true</AccessTierInferred><ServerEncrypted>true</ServerEncrypted><TagCount>0</TagCount></Properties></Blob><Blob><Name>blob156404687305004902</Name><Properties><Creation-Time>Thu, 25 Jul 2019 09:24:15 GMT</Creation-Time><Last-Modified>Thu, 25 Jul 2019 09:24:15 GMT</Last-Modified><Etag>0x8D710E1DCC701F6</Etag><Content-Length>1024</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-MD5 /><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><AccessTier>Hot</AccessTier><AccessTierInferred>true</AccessTierInferred><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState><ServerEncrypted>true</ServerEncrypted><TagCount>0</TagCount></Properties></Blob><Blob><Name>page156404687387902986</Name><Snapshot>2019-07-25T09:24:21.5244276Z</Snapshot><Properties><Creation-Time>Thu, 25 Jul 2019 09:24:21 GMT</Creation-Time><Last-Modified>Thu, 25 Jul 2019 09:24:21 GMT</Last-Modified><Etag>0x8D710E1E06E95F4</Etag><Content-Length>1024</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-MD5 /><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><AccessTier>Hot</AccessTier><AccessTierInferred>true</AccessTierInferred><CopyId>4c143bff-b41f-4575-a411-31580a57bc22</CopyId><CopySource>https://fakestorageaccount.blob.core.windows.net/container156404687278009493/blob156404687305004902?snapshot=2019-07-25T09:24:15.6632175Z</CopySource><CopyStatus>success</CopyStatus><CopyProgress>1024/1024</CopyProgress><CopyCompletionTime>Thu, 25 Jul 2019 09:24:21 GMT</CopyCompletionTime><IncrementalCopy>true</IncrementalCopy><CopyDestinationSnapshot>2019-07-25T09:24:21.5244276Z</CopyDestinationSnapshot><ServerEncrypted>true</ServerEncrypted><TagCount>0</TagCount></Properties></Blob><Blob><Name>page156404687387902986</Name><Properties><Creation-Time>Thu, 25 Jul 2019 09:24:21 GMT</Creation-Time><Last-Modified>Thu, 25 Jul 2019 09:24:21 GMT</Last-Modified><Etag>0x8D710E1E06D3623</Etag><Content-Length>1024</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-MD5 /><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><AccessTier>Hot</AccessTier><AccessTierInferred>true</AccessTierInferred><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState><CopyId>4c143bff-b41f-4575-a411-31580a57bc22</CopyId><CopySource>https://fakestorageaccount.blob.core.windows.net/container156404687278009493/blob156404687305004902?snapshot=2019-07-25T09:24:15.6632175Z</CopySource><CopyStatus>success</CopyStatus><CopyProgress>1024/1024</CopyProgress><CopyCompletionTime>Thu, 25 Jul 2019 09:24:21 GMT</CopyCompletionTime><IncrementalCopy>true</IncrementalCopy><CopyDestinationSnapshot>2019-07-25T09:24:21.5244276Z</CopyDestinationSnapshot><ServerEncrypted>true</ServerEncrypted><TagCount>0</TagCount></Properties></Blob></Blobs><NextMarker /></EnumerationResults>", [ 'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '276f7f3d-201e-0074-1cca-42b8d0000000',
  'x-ms-version',
  '2018-11-09',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,Server,x-ms-version,Content-Type,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Thu, 25 Jul 2019 09:24:24 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156404687278009493/blob156404687305004902', "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc")
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Content-MD5',
  'I2Pl5jQ6Lyr9HgxzPysQ9A==',
  'Last-Modified',
  'Thu, 25 Jul 2019 09:24:25 GMT',
  'ETag',
  '"0x8D710E1E2B435FB"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '86746ca5-501e-0016-39ca-42ff08000000',
  'x-ms-version',
  '2018-11-09',
  'x-ms-request-server-encrypted',
  'true',
  'x-ms-blob-sequence-number',
  '0',
  'Date',
  'Thu, 25 Jul 2019 09:24:24 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156404687278009493/blob156404687305004902')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Thu, 25 Jul 2019 09:24:25 GMT',
  'ETag',
  '"0x8D710E1E2B435FB"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '886263c2-201e-0019-17ca-4212fe000000',
  'x-ms-version',
  '2018-11-09',
  'x-ms-snapshot',
  '2019-07-25T09:24:25.6083614Z',
  'x-ms-request-server-encrypted',
  'false',
  'Date',
  'Thu, 25 Jul 2019 09:24:25 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156404687278009493/page156404687387902986')
  .query(true)
  .reply(202, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Thu, 25 Jul 2019 09:24:26 GMT',
  'ETag',
  '"0x8D710E1E36A8822"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '09c9b550-001e-004a-27ca-420ef1000000',
  'x-ms-version',
  '2018-11-09',
  'x-ms-copy-id',
  '72c6982c-9f19-4d63-a089-384d4838062d',
  'x-ms-copy-status',
  'pending',
  'Date',
  'Thu, 25 Jul 2019 09:24:26 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .head('/container156404687278009493/page156404687387902986')
  .reply(200, "", [ 'Content-Length',
  '1024',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Thu, 25 Jul 2019 09:24:26 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D710E1E36E596A"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '51aa841c-001e-0005-44ca-42cae9000000',
  'x-ms-version',
  '2018-11-09',
  'x-ms-tag-count',
  '0',
  'x-ms-meta-sourcemeta',
  'val',
  'x-ms-creation-time',
  'Thu, 25 Jul 2019 09:24:21 GMT',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-blob-type',
  'PageBlob',
  'x-ms-blob-sequence-number',
  '0',
  'x-ms-copy-id',
  '72c6982c-9f19-4d63-a089-384d4838062d',
  'x-ms-copy-source',
  'https://fakestorageaccount.blob.core.windows.net/container156404687278009493/blob156404687305004902?snapshot=2019-07-25T09:24:25.6083614Z',
  'x-ms-copy-status',
  'success',
  'x-ms-copy-progress',
  '1024/1024',
  'x-ms-copy-completion-time',
  'Thu, 25 Jul 2019 09:24:26 GMT',
  'x-ms-incremental-copy',
  'true',
  'x-ms-copy-destination-snapshot',
  '2019-07-25T09:24:26.5660498Z',
  'x-ms-server-encrypted',
  'true',
  'x-ms-access-tier',
  'Hot',
  'x-ms-access-tier-inferred',
  'true',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,Server,x-ms-version,x-ms-tag-count,x-ms-meta-sourcemeta,Content-Type,Last-Modified,ETag,x-ms-creation-time,x-ms-lease-status,x-ms-lease-state,x-ms-blob-type,x-ms-blob-sequence-number,x-ms-copy-id,x-ms-copy-source,x-ms-copy-status,x-ms-copy-progress,x-ms-copy-completion-time,x-ms-incremental-copy,x-ms-copy-destination-snapshot,x-ms-server-encrypted,x-ms-access-tier,x-ms-access-tier-inferred,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Thu, 25 Jul 2019 09:24:30 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .get('/container156404687278009493')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://fakestorageaccount.blob.core.windows.net/\" ContainerName=\"container156404687278009493\"><Blobs><Blob><Name>blob156404687305004902</Name><Snapshot>2019-07-25T09:24:15.6632175Z</Snapshot><Properties><Creation-Time>Thu, 25 Jul 2019 09:24:15 GMT</Creation-Time><Last-Modified>Thu, 25 Jul 2019 09:24:15 GMT</Last-Modified><Etag>0x8D710E1DCC701F6</Etag><Content-Length>1024</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-MD5 /><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><AccessTier>Hot</AccessTier><AccessTierInferred>true</AccessTierInferred><ServerEncrypted>true</ServerEncrypted><TagCount>0</TagCount></Properties></Blob><Blob><Name>blob156404687305004902</Name><Snapshot>2019-07-25T09:24:25.6083614Z</Snapshot><Properties><Creation-Time>Thu, 25 Jul 2019 09:24:15 GMT</Creation-Time><Last-Modified>Thu, 25 Jul 2019 09:24:25 GMT</Last-Modified><Etag>0x8D710E1E2B435FB</Etag><Content-Length>1024</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-MD5 /><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><AccessTier>Hot</AccessTier><AccessTierInferred>true</AccessTierInferred><ServerEncrypted>true</ServerEncrypted><TagCount>0</TagCount></Properties></Blob><Blob><Name>blob156404687305004902</Name><Properties><Creation-Time>Thu, 25 Jul 2019 09:24:15 GMT</Creation-Time><Last-Modified>Thu, 25 Jul 2019 09:24:25 GMT</Last-Modified><Etag>0x8D710E1E2B435FB</Etag><Content-Length>1024</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-MD5 /><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><AccessTier>Hot</AccessTier><AccessTierInferred>true</AccessTierInferred><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState><ServerEncrypted>true</ServerEncrypted><TagCount>0</TagCount></Properties></Blob><Blob><Name>page156404687387902986</Name><Snapshot>2019-07-25T09:24:21.5244276Z</Snapshot><Properties><Creation-Time>Thu, 25 Jul 2019 09:24:21 GMT</Creation-Time><Last-Modified>Thu, 25 Jul 2019 09:24:21 GMT</Last-Modified><Etag>0x8D710E1E06E95F4</Etag><Content-Length>1024</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-MD5 /><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><AccessTier>Hot</AccessTier><AccessTierInferred>true</AccessTierInferred><CopyId>4c143bff-b41f-4575-a411-31580a57bc22</CopyId><CopySource>https://fakestorageaccount.blob.core.windows.net/container156404687278009493/blob156404687305004902?snapshot=2019-07-25T09:24:15.6632175Z</CopySource><CopyStatus>success</CopyStatus><CopyProgress>1024/1024</CopyProgress><CopyCompletionTime>Thu, 25 Jul 2019 09:24:21 GMT</CopyCompletionTime><IncrementalCopy>true</IncrementalCopy><CopyDestinationSnapshot>2019-07-25T09:24:21.5244276Z</CopyDestinationSnapshot><ServerEncrypted>true</ServerEncrypted><TagCount>0</TagCount></Properties></Blob><Blob><Name>page156404687387902986</Name><Snapshot>2019-07-25T09:24:26.5660498Z</Snapshot><Properties><Creation-Time>Thu, 25 Jul 2019 09:24:21 GMT</Creation-Time><Last-Modified>Thu, 25 Jul 2019 09:24:26 GMT</Last-Modified><Etag>0x8D710E1E36FE052</Etag><Content-Length>1024</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-MD5 /><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><AccessTier>Hot</AccessTier><AccessTierInferred>true</AccessTierInferred><CopyId>72c6982c-9f19-4d63-a089-384d4838062d</CopyId><CopySource>https://fakestorageaccount.blob.core.windows.net/container156404687278009493/blob156404687305004902?snapshot=2019-07-25T09:24:25.6083614Z</CopySource><CopyStatus>success</CopyStatus><CopyProgress>1024/1024</CopyProgress><CopyCompletionTime>Thu, 25 Jul 2019 09:24:26 GMT</CopyCompletionTime><IncrementalCopy>true</IncrementalCopy><CopyDestinationSnapshot>2019-07-25T09:24:26.5660498Z</CopyDestinationSnapshot><ServerEncrypted>true</ServerEncrypted><TagCount>0</TagCount></Properties></Blob><Blob><Name>page156404687387902986</Name><Properties><Creation-Time>Thu, 25 Jul 2019 09:24:21 GMT</Creation-Time><Last-Modified>Thu, 25 Jul 2019 09:24:26 GMT</Last-Modified><Etag>0x8D710E1E36E596A</Etag><Content-Length>1024</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-MD5 /><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><AccessTier>Hot</AccessTier><AccessTierInferred>true</AccessTierInferred><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState><CopyId>72c6982c-9f19-4d63-a089-384d4838062d</CopyId><CopySource>https://fakestorageaccount.blob.core.windows.net/container156404687278009493/blob156404687305004902?snapshot=2019-07-25T09:24:25.6083614Z</CopySource><CopyStatus>success</CopyStatus><CopyProgress>1024/1024</CopyProgress><CopyCompletionTime>Thu, 25 Jul 2019 09:24:26 GMT</CopyCompletionTime><IncrementalCopy>true</IncrementalCopy><CopyDestinationSnapshot>2019-07-25T09:24:26.5660498Z</CopyDestinationSnapshot><ServerEncrypted>true</ServerEncrypted><TagCount>0</TagCount></Properties></Blob></Blobs><NextMarker /></EnumerationResults>", [ 'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'b3574af6-d01e-0121-75ca-4215f2000000',
  'x-ms-version',
  '2018-11-09',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,Server,x-ms-version,Content-Type,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Thu, 25 Jul 2019 09:24:29 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .head('/container156404687278009493/page156404687387902986')
  .reply(200, "", [ 'Content-Length',
  '1024',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Thu, 25 Jul 2019 09:24:26 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D710E1E36E596A"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'd32b49fe-c01e-00f6-44ca-421980000000',
  'x-ms-version',
  '2018-11-09',
  'x-ms-tag-count',
  '0',
  'x-ms-meta-sourcemeta',
  'val',
  'x-ms-creation-time',
  'Thu, 25 Jul 2019 09:24:21 GMT',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-blob-type',
  'PageBlob',
  'x-ms-blob-sequence-number',
  '0',
  'x-ms-copy-id',
  '72c6982c-9f19-4d63-a089-384d4838062d',
  'x-ms-copy-source',
  'https://fakestorageaccount.blob.core.windows.net/container156404687278009493/blob156404687305004902?snapshot=2019-07-25T09:24:25.6083614Z',
  'x-ms-copy-status',
  'success',
  'x-ms-copy-progress',
  '1024/1024',
  'x-ms-copy-completion-time',
  'Thu, 25 Jul 2019 09:24:26 GMT',
  'x-ms-incremental-copy',
  'true',
  'x-ms-copy-destination-snapshot',
  '2019-07-25T09:24:26.5660498Z',
  'x-ms-server-encrypted',
  'true',
  'x-ms-access-tier',
  'Hot',
  'x-ms-access-tier-inferred',
  'true',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,Server,x-ms-version,x-ms-tag-count,x-ms-meta-sourcemeta,Content-Type,Last-Modified,ETag,x-ms-creation-time,x-ms-lease-status,x-ms-lease-state,x-ms-blob-type,x-ms-blob-sequence-number,x-ms-copy-id,x-ms-copy-source,x-ms-copy-status,x-ms-copy-progress,x-ms-copy-completion-time,x-ms-incremental-copy,x-ms-copy-destination-snapshot,x-ms-server-encrypted,x-ms-access-tier,x-ms-access-tier-inferred,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Thu, 25 Jul 2019 09:24:29 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/container156404687278009493')
  .query(true)
  .reply(202, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'a1075955-301e-0006-1eca-42c9ee000000',
  'x-ms-version',
  '2018-11-09',
  'Date',
  'Thu, 25 Jul 2019 09:24:31 GMT',
  'Connection',
  'close' ]);
