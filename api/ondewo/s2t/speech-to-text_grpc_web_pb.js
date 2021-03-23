/**
 * @fileoverview gRPC-Web generated client stub for ondewo.s2t
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.ondewo = {};
proto.ondewo.s2t = require('./speech-to-text_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.s2t.Speech2TextClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.s2t.Speech2TextPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.s2t.TranscribeFileRequest,
 *   !proto.ondewo.s2t.TranscribeFileResponse>}
 */
const methodDescriptor_Speech2Text_TranscribeFile = new grpc.web.MethodDescriptor(
  '/ondewo.s2t.Speech2Text/TranscribeFile',
  grpc.web.MethodType.UNARY,
  proto.ondewo.s2t.TranscribeFileRequest,
  proto.ondewo.s2t.TranscribeFileResponse,
  /**
   * @param {!proto.ondewo.s2t.TranscribeFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.s2t.TranscribeFileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.s2t.TranscribeFileRequest,
 *   !proto.ondewo.s2t.TranscribeFileResponse>}
 */
const methodInfo_Speech2Text_TranscribeFile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.s2t.TranscribeFileResponse,
  /**
   * @param {!proto.ondewo.s2t.TranscribeFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.s2t.TranscribeFileResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.s2t.TranscribeFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.s2t.TranscribeFileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.s2t.TranscribeFileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.s2t.Speech2TextClient.prototype.transcribeFile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.s2t.Speech2Text/TranscribeFile',
      request,
      metadata || {},
      methodDescriptor_Speech2Text_TranscribeFile,
      callback);
};


/**
 * @param {!proto.ondewo.s2t.TranscribeFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.s2t.TranscribeFileResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.s2t.Speech2TextPromiseClient.prototype.transcribeFile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.s2t.Speech2Text/TranscribeFile',
      request,
      metadata || {},
      methodDescriptor_Speech2Text_TranscribeFile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.s2t.S2tPipelineId,
 *   !proto.ondewo.s2t.Speech2TextConfig>}
 */
const methodDescriptor_Speech2Text_GetS2tPipeline = new grpc.web.MethodDescriptor(
  '/ondewo.s2t.Speech2Text/GetS2tPipeline',
  grpc.web.MethodType.UNARY,
  proto.ondewo.s2t.S2tPipelineId,
  proto.ondewo.s2t.Speech2TextConfig,
  /**
   * @param {!proto.ondewo.s2t.S2tPipelineId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.s2t.Speech2TextConfig.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.s2t.S2tPipelineId,
 *   !proto.ondewo.s2t.Speech2TextConfig>}
 */
const methodInfo_Speech2Text_GetS2tPipeline = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.s2t.Speech2TextConfig,
  /**
   * @param {!proto.ondewo.s2t.S2tPipelineId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.s2t.Speech2TextConfig.deserializeBinary
);


/**
 * @param {!proto.ondewo.s2t.S2tPipelineId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.s2t.Speech2TextConfig)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.s2t.Speech2TextConfig>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.s2t.Speech2TextClient.prototype.getS2tPipeline =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.s2t.Speech2Text/GetS2tPipeline',
      request,
      metadata || {},
      methodDescriptor_Speech2Text_GetS2tPipeline,
      callback);
};


/**
 * @param {!proto.ondewo.s2t.S2tPipelineId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.s2t.Speech2TextConfig>}
 *     Promise that resolves to the response
 */
proto.ondewo.s2t.Speech2TextPromiseClient.prototype.getS2tPipeline =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.s2t.Speech2Text/GetS2tPipeline',
      request,
      metadata || {},
      methodDescriptor_Speech2Text_GetS2tPipeline);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.s2t.Speech2TextConfig,
 *   !proto.ondewo.s2t.S2tPipelineId>}
 */
const methodDescriptor_Speech2Text_CreateS2tPipeline = new grpc.web.MethodDescriptor(
  '/ondewo.s2t.Speech2Text/CreateS2tPipeline',
  grpc.web.MethodType.UNARY,
  proto.ondewo.s2t.Speech2TextConfig,
  proto.ondewo.s2t.S2tPipelineId,
  /**
   * @param {!proto.ondewo.s2t.Speech2TextConfig} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.s2t.S2tPipelineId.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.s2t.Speech2TextConfig,
 *   !proto.ondewo.s2t.S2tPipelineId>}
 */
const methodInfo_Speech2Text_CreateS2tPipeline = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.s2t.S2tPipelineId,
  /**
   * @param {!proto.ondewo.s2t.Speech2TextConfig} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.s2t.S2tPipelineId.deserializeBinary
);


/**
 * @param {!proto.ondewo.s2t.Speech2TextConfig} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.s2t.S2tPipelineId)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.s2t.S2tPipelineId>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.s2t.Speech2TextClient.prototype.createS2tPipeline =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.s2t.Speech2Text/CreateS2tPipeline',
      request,
      metadata || {},
      methodDescriptor_Speech2Text_CreateS2tPipeline,
      callback);
};


/**
 * @param {!proto.ondewo.s2t.Speech2TextConfig} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.s2t.S2tPipelineId>}
 *     Promise that resolves to the response
 */
proto.ondewo.s2t.Speech2TextPromiseClient.prototype.createS2tPipeline =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.s2t.Speech2Text/CreateS2tPipeline',
      request,
      metadata || {},
      methodDescriptor_Speech2Text_CreateS2tPipeline);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.s2t.S2tPipelineId,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Speech2Text_DeleteS2tPipeline = new grpc.web.MethodDescriptor(
  '/ondewo.s2t.Speech2Text/DeleteS2tPipeline',
  grpc.web.MethodType.UNARY,
  proto.ondewo.s2t.S2tPipelineId,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.ondewo.s2t.S2tPipelineId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.s2t.S2tPipelineId,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Speech2Text_DeleteS2tPipeline = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.ondewo.s2t.S2tPipelineId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.ondewo.s2t.S2tPipelineId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.s2t.Speech2TextClient.prototype.deleteS2tPipeline =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.s2t.Speech2Text/DeleteS2tPipeline',
      request,
      metadata || {},
      methodDescriptor_Speech2Text_DeleteS2tPipeline,
      callback);
};


/**
 * @param {!proto.ondewo.s2t.S2tPipelineId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.s2t.Speech2TextPromiseClient.prototype.deleteS2tPipeline =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.s2t.Speech2Text/DeleteS2tPipeline',
      request,
      metadata || {},
      methodDescriptor_Speech2Text_DeleteS2tPipeline);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.s2t.Speech2TextConfig,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Speech2Text_UpdateS2tPipeline = new grpc.web.MethodDescriptor(
  '/ondewo.s2t.Speech2Text/UpdateS2tPipeline',
  grpc.web.MethodType.UNARY,
  proto.ondewo.s2t.Speech2TextConfig,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.ondewo.s2t.Speech2TextConfig} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.s2t.Speech2TextConfig,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Speech2Text_UpdateS2tPipeline = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.ondewo.s2t.Speech2TextConfig} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.ondewo.s2t.Speech2TextConfig} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.s2t.Speech2TextClient.prototype.updateS2tPipeline =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.s2t.Speech2Text/UpdateS2tPipeline',
      request,
      metadata || {},
      methodDescriptor_Speech2Text_UpdateS2tPipeline,
      callback);
};


/**
 * @param {!proto.ondewo.s2t.Speech2TextConfig} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.s2t.Speech2TextPromiseClient.prototype.updateS2tPipeline =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.s2t.Speech2Text/UpdateS2tPipeline',
      request,
      metadata || {},
      methodDescriptor_Speech2Text_UpdateS2tPipeline);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.s2t.ListS2tPipelinesRequest,
 *   !proto.ondewo.s2t.ListS2tPipelinesResponse>}
 */
const methodDescriptor_Speech2Text_ListS2tPipelines = new grpc.web.MethodDescriptor(
  '/ondewo.s2t.Speech2Text/ListS2tPipelines',
  grpc.web.MethodType.UNARY,
  proto.ondewo.s2t.ListS2tPipelinesRequest,
  proto.ondewo.s2t.ListS2tPipelinesResponse,
  /**
   * @param {!proto.ondewo.s2t.ListS2tPipelinesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.s2t.ListS2tPipelinesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.s2t.ListS2tPipelinesRequest,
 *   !proto.ondewo.s2t.ListS2tPipelinesResponse>}
 */
const methodInfo_Speech2Text_ListS2tPipelines = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.s2t.ListS2tPipelinesResponse,
  /**
   * @param {!proto.ondewo.s2t.ListS2tPipelinesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.s2t.ListS2tPipelinesResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.s2t.ListS2tPipelinesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.s2t.ListS2tPipelinesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.s2t.ListS2tPipelinesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.s2t.Speech2TextClient.prototype.listS2tPipelines =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.s2t.Speech2Text/ListS2tPipelines',
      request,
      metadata || {},
      methodDescriptor_Speech2Text_ListS2tPipelines,
      callback);
};


/**
 * @param {!proto.ondewo.s2t.ListS2tPipelinesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.s2t.ListS2tPipelinesResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.s2t.Speech2TextPromiseClient.prototype.listS2tPipelines =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.s2t.Speech2Text/ListS2tPipelines',
      request,
      metadata || {},
      methodDescriptor_Speech2Text_ListS2tPipelines);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.s2t.ListS2tLanguagesRequest,
 *   !proto.ondewo.s2t.ListS2tLanguagesResponse>}
 */
const methodDescriptor_Speech2Text_ListS2tLanguages = new grpc.web.MethodDescriptor(
  '/ondewo.s2t.Speech2Text/ListS2tLanguages',
  grpc.web.MethodType.UNARY,
  proto.ondewo.s2t.ListS2tLanguagesRequest,
  proto.ondewo.s2t.ListS2tLanguagesResponse,
  /**
   * @param {!proto.ondewo.s2t.ListS2tLanguagesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.s2t.ListS2tLanguagesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.s2t.ListS2tLanguagesRequest,
 *   !proto.ondewo.s2t.ListS2tLanguagesResponse>}
 */
const methodInfo_Speech2Text_ListS2tLanguages = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.s2t.ListS2tLanguagesResponse,
  /**
   * @param {!proto.ondewo.s2t.ListS2tLanguagesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.s2t.ListS2tLanguagesResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.s2t.ListS2tLanguagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.s2t.ListS2tLanguagesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.s2t.ListS2tLanguagesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.s2t.Speech2TextClient.prototype.listS2tLanguages =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.s2t.Speech2Text/ListS2tLanguages',
      request,
      metadata || {},
      methodDescriptor_Speech2Text_ListS2tLanguages,
      callback);
};


/**
 * @param {!proto.ondewo.s2t.ListS2tLanguagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.s2t.ListS2tLanguagesResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.s2t.Speech2TextPromiseClient.prototype.listS2tLanguages =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.s2t.Speech2Text/ListS2tLanguages',
      request,
      metadata || {},
      methodDescriptor_Speech2Text_ListS2tLanguages);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.s2t.ListS2tDomainsRequest,
 *   !proto.ondewo.s2t.ListS2tDomainsResponse>}
 */
const methodDescriptor_Speech2Text_ListS2tDomains = new grpc.web.MethodDescriptor(
  '/ondewo.s2t.Speech2Text/ListS2tDomains',
  grpc.web.MethodType.UNARY,
  proto.ondewo.s2t.ListS2tDomainsRequest,
  proto.ondewo.s2t.ListS2tDomainsResponse,
  /**
   * @param {!proto.ondewo.s2t.ListS2tDomainsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.s2t.ListS2tDomainsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.s2t.ListS2tDomainsRequest,
 *   !proto.ondewo.s2t.ListS2tDomainsResponse>}
 */
const methodInfo_Speech2Text_ListS2tDomains = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.s2t.ListS2tDomainsResponse,
  /**
   * @param {!proto.ondewo.s2t.ListS2tDomainsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.s2t.ListS2tDomainsResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.s2t.ListS2tDomainsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.s2t.ListS2tDomainsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.s2t.ListS2tDomainsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.s2t.Speech2TextClient.prototype.listS2tDomains =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.s2t.Speech2Text/ListS2tDomains',
      request,
      metadata || {},
      methodDescriptor_Speech2Text_ListS2tDomains,
      callback);
};


/**
 * @param {!proto.ondewo.s2t.ListS2tDomainsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.s2t.ListS2tDomainsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.s2t.Speech2TextPromiseClient.prototype.listS2tDomains =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.s2t.Speech2Text/ListS2tDomains',
      request,
      metadata || {},
      methodDescriptor_Speech2Text_ListS2tDomains);
};


module.exports = proto.ondewo.s2t;

