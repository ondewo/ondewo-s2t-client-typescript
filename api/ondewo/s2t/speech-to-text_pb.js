// source: ondewo/s2t/speech-to-text.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = function () {
	return this || window || global || self || Function('return this')();
}.call(null);

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.ondewo.s2t.AcousticModels', null, global);
goog.exportSymbol('proto.ondewo.s2t.AddDataToUserLanguageModelRequest', null, global);
goog.exportSymbol('proto.ondewo.s2t.CkptFile', null, global);
goog.exportSymbol('proto.ondewo.s2t.CreateUserLanguageModelRequest', null, global);
goog.exportSymbol('proto.ondewo.s2t.Decoding', null, global);
goog.exportSymbol('proto.ondewo.s2t.DeleteUserLanguageModelRequest', null, global);
goog.exportSymbol('proto.ondewo.s2t.LanguageModelPipelineId', null, global);
goog.exportSymbol('proto.ondewo.s2t.LanguageModels', null, global);
goog.exportSymbol('proto.ondewo.s2t.ListS2tDomainsRequest', null, global);
goog.exportSymbol('proto.ondewo.s2t.ListS2tDomainsResponse', null, global);
goog.exportSymbol('proto.ondewo.s2t.ListS2tLanguageModelsRequest', null, global);
goog.exportSymbol('proto.ondewo.s2t.ListS2tLanguageModelsResponse', null, global);
goog.exportSymbol('proto.ondewo.s2t.ListS2tLanguagesRequest', null, global);
goog.exportSymbol('proto.ondewo.s2t.ListS2tLanguagesResponse', null, global);
goog.exportSymbol('proto.ondewo.s2t.ListS2tPipelinesRequest', null, global);
goog.exportSymbol('proto.ondewo.s2t.ListS2tPipelinesResponse', null, global);
goog.exportSymbol('proto.ondewo.s2t.Logging', null, global);
goog.exportSymbol('proto.ondewo.s2t.Matchbox', null, global);
goog.exportSymbol('proto.ondewo.s2t.PostProcessing', null, global);
goog.exportSymbol('proto.ondewo.s2t.PostProcessingOptions', null, global);
goog.exportSymbol('proto.ondewo.s2t.PostProcessors', null, global);
goog.exportSymbol('proto.ondewo.s2t.PtFiles', null, global);
goog.exportSymbol('proto.ondewo.s2t.Pyannote', null, global);
goog.exportSymbol('proto.ondewo.s2t.Pyannote.OneofLogScaleCase', null, global);
goog.exportSymbol('proto.ondewo.s2t.Quartznet', null, global);
goog.exportSymbol('proto.ondewo.s2t.QuartznetTriton', null, global);
goog.exportSymbol('proto.ondewo.s2t.S2TDescription', null, global);
goog.exportSymbol('proto.ondewo.s2t.S2TGetServiceInfoResponse', null, global);
goog.exportSymbol('proto.ondewo.s2t.S2TInference', null, global);
goog.exportSymbol('proto.ondewo.s2t.S2TNormalization', null, global);
goog.exportSymbol('proto.ondewo.s2t.S2tPipelineId', null, global);
goog.exportSymbol('proto.ondewo.s2t.Speech2TextConfig', null, global);
goog.exportSymbol('proto.ondewo.s2t.StreamingServer', null, global);
goog.exportSymbol('proto.ondewo.s2t.StreamingSpeechRecognition', null, global);
goog.exportSymbol('proto.ondewo.s2t.SymSpell', null, global);
goog.exportSymbol('proto.ondewo.s2t.TrainUserLanguageModelRequest', null, global);
goog.exportSymbol('proto.ondewo.s2t.TranscribeFileRequest', null, global);
goog.exportSymbol('proto.ondewo.s2t.TranscribeFileResponse', null, global);
goog.exportSymbol('proto.ondewo.s2t.TranscribeRequestConfig', null, global);
goog.exportSymbol('proto.ondewo.s2t.TranscribeRequestConfig.OneofLanguageModelNameCase', null, global);
goog.exportSymbol('proto.ondewo.s2t.TranscribeRequestConfig.OneofPostProcessingCase', null, global);
goog.exportSymbol('proto.ondewo.s2t.TranscribeRequestConfig.OneofReturnOptionsCase', null, global);
goog.exportSymbol('proto.ondewo.s2t.TranscribeRequestConfig.OneofUtteranceDetectionCase', null, global);
goog.exportSymbol('proto.ondewo.s2t.TranscribeRequestConfig.VoiceActivityDetectionCase', null, global);
goog.exportSymbol('proto.ondewo.s2t.TranscribeStreamRequest', null, global);
goog.exportSymbol('proto.ondewo.s2t.TranscribeStreamResponse', null, global);
goog.exportSymbol('proto.ondewo.s2t.TranscribeStreamResponse.OneofConfigCase', null, global);
goog.exportSymbol('proto.ondewo.s2t.Transcription', null, global);
goog.exportSymbol('proto.ondewo.s2t.TranscriptionReturnOptions', null, global);
goog.exportSymbol('proto.ondewo.s2t.UtteranceDetectionOptions', null, global);
goog.exportSymbol('proto.ondewo.s2t.UtteranceDetectionOptions.OneofTranscribeNotFinalCase', null, global);
goog.exportSymbol('proto.ondewo.s2t.VoiceActivityDetection', null, global);
goog.exportSymbol('proto.ondewo.s2t.Wav2Vec', null, global);
goog.exportSymbol('proto.ondewo.s2t.Wav2VecTriton', null, global);
goog.exportSymbol('proto.ondewo.s2t.Whisper', null, global);
goog.exportSymbol('proto.ondewo.s2t.WhisperTriton', null, global);
goog.exportSymbol('proto.ondewo.s2t.WordTiming', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.TranscribeRequestConfig = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ondewo.s2t.TranscribeRequestConfig.oneofGroups_);
};
goog.inherits(proto.ondewo.s2t.TranscribeRequestConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.TranscribeRequestConfig.displayName = 'proto.ondewo.s2t.TranscribeRequestConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.TranscriptionReturnOptions = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.TranscriptionReturnOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.TranscriptionReturnOptions.displayName = 'proto.ondewo.s2t.TranscriptionReturnOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.UtteranceDetectionOptions = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ondewo.s2t.UtteranceDetectionOptions.oneofGroups_);
};
goog.inherits(proto.ondewo.s2t.UtteranceDetectionOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.UtteranceDetectionOptions.displayName = 'proto.ondewo.s2t.UtteranceDetectionOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.PostProcessingOptions = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.PostProcessingOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.PostProcessingOptions.displayName = 'proto.ondewo.s2t.PostProcessingOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.TranscribeStreamRequest = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.TranscribeStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.TranscribeStreamRequest.displayName = 'proto.ondewo.s2t.TranscribeStreamRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.Transcription = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.Transcription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.Transcription.displayName = 'proto.ondewo.s2t.Transcription';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.TranscribeStreamResponse = function (opt_data) {
	jspb.Message.initialize(
		this,
		opt_data,
		0,
		-1,
		proto.ondewo.s2t.TranscribeStreamResponse.repeatedFields_,
		proto.ondewo.s2t.TranscribeStreamResponse.oneofGroups_
	);
};
goog.inherits(proto.ondewo.s2t.TranscribeStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.TranscribeStreamResponse.displayName = 'proto.ondewo.s2t.TranscribeStreamResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.TranscribeFileRequest = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.TranscribeFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.TranscribeFileRequest.displayName = 'proto.ondewo.s2t.TranscribeFileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.TranscribeFileResponse = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.s2t.TranscribeFileResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.s2t.TranscribeFileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.TranscribeFileResponse.displayName = 'proto.ondewo.s2t.TranscribeFileResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.WordTiming = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.WordTiming, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.WordTiming.displayName = 'proto.ondewo.s2t.WordTiming';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.S2tPipelineId = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.S2tPipelineId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.S2tPipelineId.displayName = 'proto.ondewo.s2t.S2tPipelineId';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.ListS2tPipelinesRequest = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.s2t.ListS2tPipelinesRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.s2t.ListS2tPipelinesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.ListS2tPipelinesRequest.displayName = 'proto.ondewo.s2t.ListS2tPipelinesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.ListS2tPipelinesResponse = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.s2t.ListS2tPipelinesResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.s2t.ListS2tPipelinesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.ListS2tPipelinesResponse.displayName = 'proto.ondewo.s2t.ListS2tPipelinesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.ListS2tLanguagesRequest = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.s2t.ListS2tLanguagesRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.s2t.ListS2tLanguagesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.ListS2tLanguagesRequest.displayName = 'proto.ondewo.s2t.ListS2tLanguagesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.ListS2tLanguagesResponse = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.s2t.ListS2tLanguagesResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.s2t.ListS2tLanguagesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.ListS2tLanguagesResponse.displayName = 'proto.ondewo.s2t.ListS2tLanguagesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.ListS2tDomainsRequest = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.s2t.ListS2tDomainsRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.s2t.ListS2tDomainsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.ListS2tDomainsRequest.displayName = 'proto.ondewo.s2t.ListS2tDomainsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.ListS2tDomainsResponse = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.s2t.ListS2tDomainsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.s2t.ListS2tDomainsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.ListS2tDomainsResponse.displayName = 'proto.ondewo.s2t.ListS2tDomainsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.S2TGetServiceInfoResponse = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.S2TGetServiceInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.S2TGetServiceInfoResponse.displayName = 'proto.ondewo.s2t.S2TGetServiceInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.Speech2TextConfig = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.Speech2TextConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.Speech2TextConfig.displayName = 'proto.ondewo.s2t.Speech2TextConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.S2TDescription = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.S2TDescription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.S2TDescription.displayName = 'proto.ondewo.s2t.S2TDescription';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.S2TInference = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.S2TInference, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.S2TInference.displayName = 'proto.ondewo.s2t.S2TInference';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.AcousticModels = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.AcousticModels, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.AcousticModels.displayName = 'proto.ondewo.s2t.AcousticModels';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.Whisper = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.Whisper, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.Whisper.displayName = 'proto.ondewo.s2t.Whisper';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.WhisperTriton = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.WhisperTriton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.WhisperTriton.displayName = 'proto.ondewo.s2t.WhisperTriton';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.Wav2Vec = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.Wav2Vec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.Wav2Vec.displayName = 'proto.ondewo.s2t.Wav2Vec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.Wav2VecTriton = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.Wav2VecTriton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.Wav2VecTriton.displayName = 'proto.ondewo.s2t.Wav2VecTriton';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.Quartznet = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.Quartznet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.Quartznet.displayName = 'proto.ondewo.s2t.Quartznet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.PtFiles = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.PtFiles, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.PtFiles.displayName = 'proto.ondewo.s2t.PtFiles';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.CkptFile = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.CkptFile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.CkptFile.displayName = 'proto.ondewo.s2t.CkptFile';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.QuartznetTriton = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.QuartznetTriton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.QuartznetTriton.displayName = 'proto.ondewo.s2t.QuartznetTriton';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.LanguageModels = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.LanguageModels, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.LanguageModels.displayName = 'proto.ondewo.s2t.LanguageModels';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.StreamingServer = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.StreamingServer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.StreamingServer.displayName = 'proto.ondewo.s2t.StreamingServer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.StreamingSpeechRecognition = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.StreamingSpeechRecognition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.StreamingSpeechRecognition.displayName = 'proto.ondewo.s2t.StreamingSpeechRecognition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.VoiceActivityDetection = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.VoiceActivityDetection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.VoiceActivityDetection.displayName = 'proto.ondewo.s2t.VoiceActivityDetection';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.Pyannote = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ondewo.s2t.Pyannote.oneofGroups_);
};
goog.inherits(proto.ondewo.s2t.Pyannote, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.Pyannote.displayName = 'proto.ondewo.s2t.Pyannote';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.Matchbox = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.Matchbox, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.Matchbox.displayName = 'proto.ondewo.s2t.Matchbox';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.PostProcessing = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.s2t.PostProcessing.repeatedFields_, null);
};
goog.inherits(proto.ondewo.s2t.PostProcessing, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.PostProcessing.displayName = 'proto.ondewo.s2t.PostProcessing';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.PostProcessors = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.PostProcessors, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.PostProcessors.displayName = 'proto.ondewo.s2t.PostProcessors';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.SymSpell = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.SymSpell, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.SymSpell.displayName = 'proto.ondewo.s2t.SymSpell';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.S2TNormalization = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.S2TNormalization, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.S2TNormalization.displayName = 'proto.ondewo.s2t.S2TNormalization';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.Logging = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.Logging, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.Logging.displayName = 'proto.ondewo.s2t.Logging';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.ListS2tLanguageModelsRequest = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.s2t.ListS2tLanguageModelsRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.s2t.ListS2tLanguageModelsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.ListS2tLanguageModelsRequest.displayName = 'proto.ondewo.s2t.ListS2tLanguageModelsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.LanguageModelPipelineId = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.s2t.LanguageModelPipelineId.repeatedFields_, null);
};
goog.inherits(proto.ondewo.s2t.LanguageModelPipelineId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.LanguageModelPipelineId.displayName = 'proto.ondewo.s2t.LanguageModelPipelineId';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.ListS2tLanguageModelsResponse = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.s2t.ListS2tLanguageModelsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.s2t.ListS2tLanguageModelsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.ListS2tLanguageModelsResponse.displayName = 'proto.ondewo.s2t.ListS2tLanguageModelsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.CreateUserLanguageModelRequest = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.CreateUserLanguageModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.CreateUserLanguageModelRequest.displayName = 'proto.ondewo.s2t.CreateUserLanguageModelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.DeleteUserLanguageModelRequest = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.DeleteUserLanguageModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.DeleteUserLanguageModelRequest.displayName = 'proto.ondewo.s2t.DeleteUserLanguageModelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.AddDataToUserLanguageModelRequest = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.AddDataToUserLanguageModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.AddDataToUserLanguageModelRequest.displayName = 'proto.ondewo.s2t.AddDataToUserLanguageModelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.s2t.TrainUserLanguageModelRequest = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.s2t.TrainUserLanguageModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.ondewo.s2t.TrainUserLanguageModelRequest.displayName = 'proto.ondewo.s2t.TrainUserLanguageModelRequest';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ondewo.s2t.TranscribeRequestConfig.oneofGroups_ = [[3], [4], [5], [6, 7], [8]];

/**
 * @enum {number}
 */
proto.ondewo.s2t.TranscribeRequestConfig.OneofLanguageModelNameCase = {
	ONEOF_LANGUAGE_MODEL_NAME_NOT_SET: 0,
	LANGUAGE_MODEL_NAME: 3
};

/**
 * @return {proto.ondewo.s2t.TranscribeRequestConfig.OneofLanguageModelNameCase}
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.getOneofLanguageModelNameCase = function () {
	return /** @type {proto.ondewo.s2t.TranscribeRequestConfig.OneofLanguageModelNameCase} */ (
		jspb.Message.computeOneofCase(this, proto.ondewo.s2t.TranscribeRequestConfig.oneofGroups_[0])
	);
};

/**
 * @enum {number}
 */
proto.ondewo.s2t.TranscribeRequestConfig.OneofPostProcessingCase = {
	ONEOF_POST_PROCESSING_NOT_SET: 0,
	POST_PROCESSING: 4
};

/**
 * @return {proto.ondewo.s2t.TranscribeRequestConfig.OneofPostProcessingCase}
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.getOneofPostProcessingCase = function () {
	return /** @type {proto.ondewo.s2t.TranscribeRequestConfig.OneofPostProcessingCase} */ (
		jspb.Message.computeOneofCase(this, proto.ondewo.s2t.TranscribeRequestConfig.oneofGroups_[1])
	);
};

/**
 * @enum {number}
 */
proto.ondewo.s2t.TranscribeRequestConfig.OneofUtteranceDetectionCase = {
	ONEOF_UTTERANCE_DETECTION_NOT_SET: 0,
	UTTERANCE_DETECTION: 5
};

/**
 * @return {proto.ondewo.s2t.TranscribeRequestConfig.OneofUtteranceDetectionCase}
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.getOneofUtteranceDetectionCase = function () {
	return /** @type {proto.ondewo.s2t.TranscribeRequestConfig.OneofUtteranceDetectionCase} */ (
		jspb.Message.computeOneofCase(this, proto.ondewo.s2t.TranscribeRequestConfig.oneofGroups_[2])
	);
};

/**
 * @enum {number}
 */
proto.ondewo.s2t.TranscribeRequestConfig.VoiceActivityDetectionCase = {
	VOICE_ACTIVITY_DETECTION_NOT_SET: 0,
	PYANNOTE: 6,
	MATCHBOX: 7
};

/**
 * @return {proto.ondewo.s2t.TranscribeRequestConfig.VoiceActivityDetectionCase}
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.getVoiceActivityDetectionCase = function () {
	return /** @type {proto.ondewo.s2t.TranscribeRequestConfig.VoiceActivityDetectionCase} */ (
		jspb.Message.computeOneofCase(this, proto.ondewo.s2t.TranscribeRequestConfig.oneofGroups_[3])
	);
};

/**
 * @enum {number}
 */
proto.ondewo.s2t.TranscribeRequestConfig.OneofReturnOptionsCase = {
	ONEOF_RETURN_OPTIONS_NOT_SET: 0,
	RETURN_OPTIONS: 8
};

/**
 * @return {proto.ondewo.s2t.TranscribeRequestConfig.OneofReturnOptionsCase}
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.getOneofReturnOptionsCase = function () {
	return /** @type {proto.ondewo.s2t.TranscribeRequestConfig.OneofReturnOptionsCase} */ (
		jspb.Message.computeOneofCase(this, proto.ondewo.s2t.TranscribeRequestConfig.oneofGroups_[4])
	);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.TranscribeRequestConfig.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.TranscribeRequestConfig.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.TranscribeRequestConfig} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.TranscribeRequestConfig.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				s2tPipelineId: jspb.Message.getFieldWithDefault(msg, 1, ''),
				decoding: jspb.Message.getFieldWithDefault(msg, 2, 0),
				languageModelName: jspb.Message.getFieldWithDefault(msg, 3, ''),
				postProcessing:
					(f = msg.getPostProcessing()) && proto.ondewo.s2t.PostProcessingOptions.toObject(includeInstance, f),
				utteranceDetection:
					(f = msg.getUtteranceDetection()) && proto.ondewo.s2t.UtteranceDetectionOptions.toObject(includeInstance, f),
				pyannote: (f = msg.getPyannote()) && proto.ondewo.s2t.Pyannote.toObject(includeInstance, f),
				matchbox: (f = msg.getMatchbox()) && proto.ondewo.s2t.Matchbox.toObject(includeInstance, f),
				returnOptions:
					(f = msg.getReturnOptions()) && proto.ondewo.s2t.TranscriptionReturnOptions.toObject(includeInstance, f)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.TranscribeRequestConfig}
 */
proto.ondewo.s2t.TranscribeRequestConfig.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.TranscribeRequestConfig();
	return proto.ondewo.s2t.TranscribeRequestConfig.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.TranscribeRequestConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.TranscribeRequestConfig}
 */
proto.ondewo.s2t.TranscribeRequestConfig.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.setS2tPipelineId(value);
				break;
			case 2:
				var value = /** @type {!proto.ondewo.s2t.Decoding} */ (reader.readEnum());
				msg.setDecoding(value);
				break;
			case 3:
				var value = /** @type {string} */ (reader.readString());
				msg.setLanguageModelName(value);
				break;
			case 4:
				var value = new proto.ondewo.s2t.PostProcessingOptions();
				reader.readMessage(value, proto.ondewo.s2t.PostProcessingOptions.deserializeBinaryFromReader);
				msg.setPostProcessing(value);
				break;
			case 5:
				var value = new proto.ondewo.s2t.UtteranceDetectionOptions();
				reader.readMessage(value, proto.ondewo.s2t.UtteranceDetectionOptions.deserializeBinaryFromReader);
				msg.setUtteranceDetection(value);
				break;
			case 6:
				var value = new proto.ondewo.s2t.Pyannote();
				reader.readMessage(value, proto.ondewo.s2t.Pyannote.deserializeBinaryFromReader);
				msg.setPyannote(value);
				break;
			case 7:
				var value = new proto.ondewo.s2t.Matchbox();
				reader.readMessage(value, proto.ondewo.s2t.Matchbox.deserializeBinaryFromReader);
				msg.setMatchbox(value);
				break;
			case 8:
				var value = new proto.ondewo.s2t.TranscriptionReturnOptions();
				reader.readMessage(value, proto.ondewo.s2t.TranscriptionReturnOptions.deserializeBinaryFromReader);
				msg.setReturnOptions(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.TranscribeRequestConfig.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.TranscribeRequestConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.TranscribeRequestConfig.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getS2tPipelineId();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getDecoding();
	if (f !== 0.0) {
		writer.writeEnum(2, f);
	}
	f = /** @type {string} */ (jspb.Message.getField(message, 3));
	if (f != null) {
		writer.writeString(3, f);
	}
	f = message.getPostProcessing();
	if (f != null) {
		writer.writeMessage(4, f, proto.ondewo.s2t.PostProcessingOptions.serializeBinaryToWriter);
	}
	f = message.getUtteranceDetection();
	if (f != null) {
		writer.writeMessage(5, f, proto.ondewo.s2t.UtteranceDetectionOptions.serializeBinaryToWriter);
	}
	f = message.getPyannote();
	if (f != null) {
		writer.writeMessage(6, f, proto.ondewo.s2t.Pyannote.serializeBinaryToWriter);
	}
	f = message.getMatchbox();
	if (f != null) {
		writer.writeMessage(7, f, proto.ondewo.s2t.Matchbox.serializeBinaryToWriter);
	}
	f = message.getReturnOptions();
	if (f != null) {
		writer.writeMessage(8, f, proto.ondewo.s2t.TranscriptionReturnOptions.serializeBinaryToWriter);
	}
};

/**
 * optional string s2t_pipeline_id = 1;
 * @return {string}
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.getS2tPipelineId = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.TranscribeRequestConfig} returns this
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.setS2tPipelineId = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional Decoding decoding = 2;
 * @return {!proto.ondewo.s2t.Decoding}
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.getDecoding = function () {
	return /** @type {!proto.ondewo.s2t.Decoding} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {!proto.ondewo.s2t.Decoding} value
 * @return {!proto.ondewo.s2t.TranscribeRequestConfig} returns this
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.setDecoding = function (value) {
	return jspb.Message.setProto3EnumField(this, 2, value);
};

/**
 * optional string language_model_name = 3;
 * @return {string}
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.getLanguageModelName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.TranscribeRequestConfig} returns this
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.setLanguageModelName = function (value) {
	return jspb.Message.setOneofField(this, 3, proto.ondewo.s2t.TranscribeRequestConfig.oneofGroups_[0], value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.s2t.TranscribeRequestConfig} returns this
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.clearLanguageModelName = function () {
	return jspb.Message.setOneofField(this, 3, proto.ondewo.s2t.TranscribeRequestConfig.oneofGroups_[0], undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.hasLanguageModelName = function () {
	return jspb.Message.getField(this, 3) != null;
};

/**
 * optional PostProcessingOptions post_processing = 4;
 * @return {?proto.ondewo.s2t.PostProcessingOptions}
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.getPostProcessing = function () {
	return /** @type{?proto.ondewo.s2t.PostProcessingOptions} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.s2t.PostProcessingOptions, 4)
	);
};

/**
 * @param {?proto.ondewo.s2t.PostProcessingOptions|undefined} value
 * @return {!proto.ondewo.s2t.TranscribeRequestConfig} returns this
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.setPostProcessing = function (value) {
	return jspb.Message.setOneofWrapperField(this, 4, proto.ondewo.s2t.TranscribeRequestConfig.oneofGroups_[1], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.TranscribeRequestConfig} returns this
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.clearPostProcessing = function () {
	return this.setPostProcessing(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.hasPostProcessing = function () {
	return jspb.Message.getField(this, 4) != null;
};

/**
 * optional UtteranceDetectionOptions utterance_detection = 5;
 * @return {?proto.ondewo.s2t.UtteranceDetectionOptions}
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.getUtteranceDetection = function () {
	return /** @type{?proto.ondewo.s2t.UtteranceDetectionOptions} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.s2t.UtteranceDetectionOptions, 5)
	);
};

/**
 * @param {?proto.ondewo.s2t.UtteranceDetectionOptions|undefined} value
 * @return {!proto.ondewo.s2t.TranscribeRequestConfig} returns this
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.setUtteranceDetection = function (value) {
	return jspb.Message.setOneofWrapperField(this, 5, proto.ondewo.s2t.TranscribeRequestConfig.oneofGroups_[2], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.TranscribeRequestConfig} returns this
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.clearUtteranceDetection = function () {
	return this.setUtteranceDetection(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.hasUtteranceDetection = function () {
	return jspb.Message.getField(this, 5) != null;
};

/**
 * optional Pyannote pyannote = 6;
 * @return {?proto.ondewo.s2t.Pyannote}
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.getPyannote = function () {
	return /** @type{?proto.ondewo.s2t.Pyannote} */ (jspb.Message.getWrapperField(this, proto.ondewo.s2t.Pyannote, 6));
};

/**
 * @param {?proto.ondewo.s2t.Pyannote|undefined} value
 * @return {!proto.ondewo.s2t.TranscribeRequestConfig} returns this
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.setPyannote = function (value) {
	return jspb.Message.setOneofWrapperField(this, 6, proto.ondewo.s2t.TranscribeRequestConfig.oneofGroups_[3], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.TranscribeRequestConfig} returns this
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.clearPyannote = function () {
	return this.setPyannote(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.hasPyannote = function () {
	return jspb.Message.getField(this, 6) != null;
};

/**
 * optional Matchbox matchbox = 7;
 * @return {?proto.ondewo.s2t.Matchbox}
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.getMatchbox = function () {
	return /** @type{?proto.ondewo.s2t.Matchbox} */ (jspb.Message.getWrapperField(this, proto.ondewo.s2t.Matchbox, 7));
};

/**
 * @param {?proto.ondewo.s2t.Matchbox|undefined} value
 * @return {!proto.ondewo.s2t.TranscribeRequestConfig} returns this
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.setMatchbox = function (value) {
	return jspb.Message.setOneofWrapperField(this, 7, proto.ondewo.s2t.TranscribeRequestConfig.oneofGroups_[3], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.TranscribeRequestConfig} returns this
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.clearMatchbox = function () {
	return this.setMatchbox(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.hasMatchbox = function () {
	return jspb.Message.getField(this, 7) != null;
};

/**
 * optional TranscriptionReturnOptions return_options = 8;
 * @return {?proto.ondewo.s2t.TranscriptionReturnOptions}
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.getReturnOptions = function () {
	return /** @type{?proto.ondewo.s2t.TranscriptionReturnOptions} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.s2t.TranscriptionReturnOptions, 8)
	);
};

/**
 * @param {?proto.ondewo.s2t.TranscriptionReturnOptions|undefined} value
 * @return {!proto.ondewo.s2t.TranscribeRequestConfig} returns this
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.setReturnOptions = function (value) {
	return jspb.Message.setOneofWrapperField(this, 8, proto.ondewo.s2t.TranscribeRequestConfig.oneofGroups_[4], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.TranscribeRequestConfig} returns this
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.clearReturnOptions = function () {
	return this.setReturnOptions(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.TranscribeRequestConfig.prototype.hasReturnOptions = function () {
	return jspb.Message.getField(this, 8) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.TranscriptionReturnOptions.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.TranscriptionReturnOptions.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.TranscriptionReturnOptions} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.TranscriptionReturnOptions.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				returnStartOfSpeech: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
				returnAudio: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
				returnAlternativeTranscriptions: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
				returnConfidenceScore: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
				returnWordTiming: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.TranscriptionReturnOptions}
 */
proto.ondewo.s2t.TranscriptionReturnOptions.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.TranscriptionReturnOptions();
	return proto.ondewo.s2t.TranscriptionReturnOptions.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.TranscriptionReturnOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.TranscriptionReturnOptions}
 */
proto.ondewo.s2t.TranscriptionReturnOptions.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {boolean} */ (reader.readBool());
				msg.setReturnStartOfSpeech(value);
				break;
			case 2:
				var value = /** @type {boolean} */ (reader.readBool());
				msg.setReturnAudio(value);
				break;
			case 3:
				var value = /** @type {boolean} */ (reader.readBool());
				msg.setReturnAlternativeTranscriptions(value);
				break;
			case 4:
				var value = /** @type {boolean} */ (reader.readBool());
				msg.setReturnConfidenceScore(value);
				break;
			case 8:
				var value = /** @type {boolean} */ (reader.readBool());
				msg.setReturnWordTiming(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.TranscriptionReturnOptions.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.TranscriptionReturnOptions.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.TranscriptionReturnOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.TranscriptionReturnOptions.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getReturnStartOfSpeech();
	if (f) {
		writer.writeBool(1, f);
	}
	f = message.getReturnAudio();
	if (f) {
		writer.writeBool(2, f);
	}
	f = message.getReturnAlternativeTranscriptions();
	if (f) {
		writer.writeBool(3, f);
	}
	f = message.getReturnConfidenceScore();
	if (f) {
		writer.writeBool(4, f);
	}
	f = message.getReturnWordTiming();
	if (f) {
		writer.writeBool(8, f);
	}
};

/**
 * optional bool return_start_of_speech = 1;
 * @return {boolean}
 */
proto.ondewo.s2t.TranscriptionReturnOptions.prototype.getReturnStartOfSpeech = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.s2t.TranscriptionReturnOptions} returns this
 */
proto.ondewo.s2t.TranscriptionReturnOptions.prototype.setReturnStartOfSpeech = function (value) {
	return jspb.Message.setProto3BooleanField(this, 1, value);
};

/**
 * optional bool return_audio = 2;
 * @return {boolean}
 */
proto.ondewo.s2t.TranscriptionReturnOptions.prototype.getReturnAudio = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.s2t.TranscriptionReturnOptions} returns this
 */
proto.ondewo.s2t.TranscriptionReturnOptions.prototype.setReturnAudio = function (value) {
	return jspb.Message.setProto3BooleanField(this, 2, value);
};

/**
 * optional bool return_alternative_transcriptions = 3;
 * @return {boolean}
 */
proto.ondewo.s2t.TranscriptionReturnOptions.prototype.getReturnAlternativeTranscriptions = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.s2t.TranscriptionReturnOptions} returns this
 */
proto.ondewo.s2t.TranscriptionReturnOptions.prototype.setReturnAlternativeTranscriptions = function (value) {
	return jspb.Message.setProto3BooleanField(this, 3, value);
};

/**
 * optional bool return_confidence_score = 4;
 * @return {boolean}
 */
proto.ondewo.s2t.TranscriptionReturnOptions.prototype.getReturnConfidenceScore = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.s2t.TranscriptionReturnOptions} returns this
 */
proto.ondewo.s2t.TranscriptionReturnOptions.prototype.setReturnConfidenceScore = function (value) {
	return jspb.Message.setProto3BooleanField(this, 4, value);
};

/**
 * optional bool return_word_timing = 8;
 * @return {boolean}
 */
proto.ondewo.s2t.TranscriptionReturnOptions.prototype.getReturnWordTiming = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.s2t.TranscriptionReturnOptions} returns this
 */
proto.ondewo.s2t.TranscriptionReturnOptions.prototype.setReturnWordTiming = function (value) {
	return jspb.Message.setProto3BooleanField(this, 8, value);
};

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ondewo.s2t.UtteranceDetectionOptions.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.ondewo.s2t.UtteranceDetectionOptions.OneofTranscribeNotFinalCase = {
	ONEOF_TRANSCRIBE_NOT_FINAL_NOT_SET: 0,
	TRANSCRIBE_NOT_FINAL: 1
};

/**
 * @return {proto.ondewo.s2t.UtteranceDetectionOptions.OneofTranscribeNotFinalCase}
 */
proto.ondewo.s2t.UtteranceDetectionOptions.prototype.getOneofTranscribeNotFinalCase = function () {
	return /** @type {proto.ondewo.s2t.UtteranceDetectionOptions.OneofTranscribeNotFinalCase} */ (
		jspb.Message.computeOneofCase(this, proto.ondewo.s2t.UtteranceDetectionOptions.oneofGroups_[0])
	);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.UtteranceDetectionOptions.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.UtteranceDetectionOptions.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.UtteranceDetectionOptions} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.UtteranceDetectionOptions.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				transcribeNotFinal: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
				startOfUtteranceThreshold: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
				endOfUtteranceThreshold: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
				nextChunkTimeout: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.UtteranceDetectionOptions}
 */
proto.ondewo.s2t.UtteranceDetectionOptions.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.UtteranceDetectionOptions();
	return proto.ondewo.s2t.UtteranceDetectionOptions.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.UtteranceDetectionOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.UtteranceDetectionOptions}
 */
proto.ondewo.s2t.UtteranceDetectionOptions.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {boolean} */ (reader.readBool());
				msg.setTranscribeNotFinal(value);
				break;
			case 2:
				var value = /** @type {number} */ (reader.readFloat());
				msg.setStartOfUtteranceThreshold(value);
				break;
			case 3:
				var value = /** @type {number} */ (reader.readFloat());
				msg.setEndOfUtteranceThreshold(value);
				break;
			case 4:
				var value = /** @type {number} */ (reader.readFloat());
				msg.setNextChunkTimeout(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.UtteranceDetectionOptions.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.UtteranceDetectionOptions.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.UtteranceDetectionOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.UtteranceDetectionOptions.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
	if (f != null) {
		writer.writeBool(1, f);
	}
	f = message.getStartOfUtteranceThreshold();
	if (f !== 0.0) {
		writer.writeFloat(2, f);
	}
	f = message.getEndOfUtteranceThreshold();
	if (f !== 0.0) {
		writer.writeFloat(3, f);
	}
	f = message.getNextChunkTimeout();
	if (f !== 0.0) {
		writer.writeFloat(4, f);
	}
};

/**
 * optional bool transcribe_not_final = 1;
 * @return {boolean}
 */
proto.ondewo.s2t.UtteranceDetectionOptions.prototype.getTranscribeNotFinal = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.s2t.UtteranceDetectionOptions} returns this
 */
proto.ondewo.s2t.UtteranceDetectionOptions.prototype.setTranscribeNotFinal = function (value) {
	return jspb.Message.setOneofField(this, 1, proto.ondewo.s2t.UtteranceDetectionOptions.oneofGroups_[0], value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.s2t.UtteranceDetectionOptions} returns this
 */
proto.ondewo.s2t.UtteranceDetectionOptions.prototype.clearTranscribeNotFinal = function () {
	return jspb.Message.setOneofField(this, 1, proto.ondewo.s2t.UtteranceDetectionOptions.oneofGroups_[0], undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.UtteranceDetectionOptions.prototype.hasTranscribeNotFinal = function () {
	return jspb.Message.getField(this, 1) != null;
};

/**
 * optional float start_of_utterance_threshold = 2;
 * @return {number}
 */
proto.ondewo.s2t.UtteranceDetectionOptions.prototype.getStartOfUtteranceThreshold = function () {
	return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.s2t.UtteranceDetectionOptions} returns this
 */
proto.ondewo.s2t.UtteranceDetectionOptions.prototype.setStartOfUtteranceThreshold = function (value) {
	return jspb.Message.setProto3FloatField(this, 2, value);
};

/**
 * optional float end_of_utterance_threshold = 3;
 * @return {number}
 */
proto.ondewo.s2t.UtteranceDetectionOptions.prototype.getEndOfUtteranceThreshold = function () {
	return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.s2t.UtteranceDetectionOptions} returns this
 */
proto.ondewo.s2t.UtteranceDetectionOptions.prototype.setEndOfUtteranceThreshold = function (value) {
	return jspb.Message.setProto3FloatField(this, 3, value);
};

/**
 * optional float next_chunk_timeout = 4;
 * @return {number}
 */
proto.ondewo.s2t.UtteranceDetectionOptions.prototype.getNextChunkTimeout = function () {
	return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.s2t.UtteranceDetectionOptions} returns this
 */
proto.ondewo.s2t.UtteranceDetectionOptions.prototype.setNextChunkTimeout = function (value) {
	return jspb.Message.setProto3FloatField(this, 4, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.PostProcessingOptions.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.PostProcessingOptions.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.PostProcessingOptions} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.PostProcessingOptions.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				spellingCorrection: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
				normalize: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
				config: (f = msg.getConfig()) && proto.ondewo.s2t.PostProcessing.toObject(includeInstance, f)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.PostProcessingOptions}
 */
proto.ondewo.s2t.PostProcessingOptions.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.PostProcessingOptions();
	return proto.ondewo.s2t.PostProcessingOptions.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.PostProcessingOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.PostProcessingOptions}
 */
proto.ondewo.s2t.PostProcessingOptions.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {boolean} */ (reader.readBool());
				msg.setSpellingCorrection(value);
				break;
			case 2:
				var value = /** @type {boolean} */ (reader.readBool());
				msg.setNormalize(value);
				break;
			case 3:
				var value = new proto.ondewo.s2t.PostProcessing();
				reader.readMessage(value, proto.ondewo.s2t.PostProcessing.deserializeBinaryFromReader);
				msg.setConfig(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.PostProcessingOptions.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.PostProcessingOptions.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.PostProcessingOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.PostProcessingOptions.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getSpellingCorrection();
	if (f) {
		writer.writeBool(1, f);
	}
	f = message.getNormalize();
	if (f) {
		writer.writeBool(2, f);
	}
	f = message.getConfig();
	if (f != null) {
		writer.writeMessage(3, f, proto.ondewo.s2t.PostProcessing.serializeBinaryToWriter);
	}
};

/**
 * optional bool spelling_correction = 1;
 * @return {boolean}
 */
proto.ondewo.s2t.PostProcessingOptions.prototype.getSpellingCorrection = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.s2t.PostProcessingOptions} returns this
 */
proto.ondewo.s2t.PostProcessingOptions.prototype.setSpellingCorrection = function (value) {
	return jspb.Message.setProto3BooleanField(this, 1, value);
};

/**
 * optional bool normalize = 2;
 * @return {boolean}
 */
proto.ondewo.s2t.PostProcessingOptions.prototype.getNormalize = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.s2t.PostProcessingOptions} returns this
 */
proto.ondewo.s2t.PostProcessingOptions.prototype.setNormalize = function (value) {
	return jspb.Message.setProto3BooleanField(this, 2, value);
};

/**
 * optional PostProcessing config = 3;
 * @return {?proto.ondewo.s2t.PostProcessing}
 */
proto.ondewo.s2t.PostProcessingOptions.prototype.getConfig = function () {
	return /** @type{?proto.ondewo.s2t.PostProcessing} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.s2t.PostProcessing, 3)
	);
};

/**
 * @param {?proto.ondewo.s2t.PostProcessing|undefined} value
 * @return {!proto.ondewo.s2t.PostProcessingOptions} returns this
 */
proto.ondewo.s2t.PostProcessingOptions.prototype.setConfig = function (value) {
	return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.PostProcessingOptions} returns this
 */
proto.ondewo.s2t.PostProcessingOptions.prototype.clearConfig = function () {
	return this.setConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.PostProcessingOptions.prototype.hasConfig = function () {
	return jspb.Message.getField(this, 3) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.TranscribeStreamRequest.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.TranscribeStreamRequest.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.TranscribeStreamRequest} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.TranscribeStreamRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				audioChunk: msg.getAudioChunk_asB64(),
				endOfStream: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
				config: (f = msg.getConfig()) && proto.ondewo.s2t.TranscribeRequestConfig.toObject(includeInstance, f),
				muteAudio: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.TranscribeStreamRequest}
 */
proto.ondewo.s2t.TranscribeStreamRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.TranscribeStreamRequest();
	return proto.ondewo.s2t.TranscribeStreamRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.TranscribeStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.TranscribeStreamRequest}
 */
proto.ondewo.s2t.TranscribeStreamRequest.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {!Uint8Array} */ (reader.readBytes());
				msg.setAudioChunk(value);
				break;
			case 2:
				var value = /** @type {boolean} */ (reader.readBool());
				msg.setEndOfStream(value);
				break;
			case 3:
				var value = new proto.ondewo.s2t.TranscribeRequestConfig();
				reader.readMessage(value, proto.ondewo.s2t.TranscribeRequestConfig.deserializeBinaryFromReader);
				msg.setConfig(value);
				break;
			case 4:
				var value = /** @type {boolean} */ (reader.readBool());
				msg.setMuteAudio(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.TranscribeStreamRequest.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.TranscribeStreamRequest.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.TranscribeStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.TranscribeStreamRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getAudioChunk_asU8();
	if (f.length > 0) {
		writer.writeBytes(1, f);
	}
	f = message.getEndOfStream();
	if (f) {
		writer.writeBool(2, f);
	}
	f = message.getConfig();
	if (f != null) {
		writer.writeMessage(3, f, proto.ondewo.s2t.TranscribeRequestConfig.serializeBinaryToWriter);
	}
	f = message.getMuteAudio();
	if (f) {
		writer.writeBool(4, f);
	}
};

/**
 * optional bytes audio_chunk = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ondewo.s2t.TranscribeStreamRequest.prototype.getAudioChunk = function () {
	return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * optional bytes audio_chunk = 1;
 * This is a type-conversion wrapper around `getAudioChunk()`
 * @return {string}
 */
proto.ondewo.s2t.TranscribeStreamRequest.prototype.getAudioChunk_asB64 = function () {
	return /** @type {string} */ (jspb.Message.bytesAsB64(this.getAudioChunk()));
};

/**
 * optional bytes audio_chunk = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAudioChunk()`
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.TranscribeStreamRequest.prototype.getAudioChunk_asU8 = function () {
	return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getAudioChunk()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ondewo.s2t.TranscribeStreamRequest} returns this
 */
proto.ondewo.s2t.TranscribeStreamRequest.prototype.setAudioChunk = function (value) {
	return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * optional bool end_of_stream = 2;
 * @return {boolean}
 */
proto.ondewo.s2t.TranscribeStreamRequest.prototype.getEndOfStream = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.s2t.TranscribeStreamRequest} returns this
 */
proto.ondewo.s2t.TranscribeStreamRequest.prototype.setEndOfStream = function (value) {
	return jspb.Message.setProto3BooleanField(this, 2, value);
};

/**
 * optional TranscribeRequestConfig config = 3;
 * @return {?proto.ondewo.s2t.TranscribeRequestConfig}
 */
proto.ondewo.s2t.TranscribeStreamRequest.prototype.getConfig = function () {
	return /** @type{?proto.ondewo.s2t.TranscribeRequestConfig} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.s2t.TranscribeRequestConfig, 3)
	);
};

/**
 * @param {?proto.ondewo.s2t.TranscribeRequestConfig|undefined} value
 * @return {!proto.ondewo.s2t.TranscribeStreamRequest} returns this
 */
proto.ondewo.s2t.TranscribeStreamRequest.prototype.setConfig = function (value) {
	return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.TranscribeStreamRequest} returns this
 */
proto.ondewo.s2t.TranscribeStreamRequest.prototype.clearConfig = function () {
	return this.setConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.TranscribeStreamRequest.prototype.hasConfig = function () {
	return jspb.Message.getField(this, 3) != null;
};

/**
 * optional bool mute_audio = 4;
 * @return {boolean}
 */
proto.ondewo.s2t.TranscribeStreamRequest.prototype.getMuteAudio = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.s2t.TranscribeStreamRequest} returns this
 */
proto.ondewo.s2t.TranscribeStreamRequest.prototype.setMuteAudio = function (value) {
	return jspb.Message.setProto3BooleanField(this, 4, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.Transcription.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.Transcription.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.Transcription} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.Transcription.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				transcription: jspb.Message.getFieldWithDefault(msg, 1, ''),
				confidenceScore: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.Transcription}
 */
proto.ondewo.s2t.Transcription.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.Transcription();
	return proto.ondewo.s2t.Transcription.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.Transcription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.Transcription}
 */
proto.ondewo.s2t.Transcription.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.setTranscription(value);
				break;
			case 2:
				var value = /** @type {number} */ (reader.readFloat());
				msg.setConfidenceScore(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.Transcription.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.Transcription.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.Transcription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.Transcription.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getTranscription();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getConfidenceScore();
	if (f !== 0.0) {
		writer.writeFloat(2, f);
	}
};

/**
 * optional string transcription = 1;
 * @return {string}
 */
proto.ondewo.s2t.Transcription.prototype.getTranscription = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.Transcription} returns this
 */
proto.ondewo.s2t.Transcription.prototype.setTranscription = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional float confidence_score = 2;
 * @return {number}
 */
proto.ondewo.s2t.Transcription.prototype.getConfidenceScore = function () {
	return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.s2t.Transcription} returns this
 */
proto.ondewo.s2t.Transcription.prototype.setConfidenceScore = function (value) {
	return jspb.Message.setProto3FloatField(this, 2, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.s2t.TranscribeStreamResponse.repeatedFields_ = [1];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ondewo.s2t.TranscribeStreamResponse.oneofGroups_ = [[8]];

/**
 * @enum {number}
 */
proto.ondewo.s2t.TranscribeStreamResponse.OneofConfigCase = {
	ONEOF_CONFIG_NOT_SET: 0,
	CONFIG: 8
};

/**
 * @return {proto.ondewo.s2t.TranscribeStreamResponse.OneofConfigCase}
 */
proto.ondewo.s2t.TranscribeStreamResponse.prototype.getOneofConfigCase = function () {
	return /** @type {proto.ondewo.s2t.TranscribeStreamResponse.OneofConfigCase} */ (
		jspb.Message.computeOneofCase(this, proto.ondewo.s2t.TranscribeStreamResponse.oneofGroups_[0])
	);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.TranscribeStreamResponse.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.TranscribeStreamResponse.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.TranscribeStreamResponse} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.TranscribeStreamResponse.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				transcriptionsList: jspb.Message.toObjectList(
					msg.getTranscriptionsList(),
					proto.ondewo.s2t.Transcription.toObject,
					includeInstance
				),
				time: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
				pb_final: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
				returnAudio: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
				audio: msg.getAudio_asB64(),
				utteranceStart: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
				audioUuid: jspb.Message.getFieldWithDefault(msg, 7, ''),
				config: (f = msg.getConfig()) && proto.ondewo.s2t.TranscribeRequestConfig.toObject(includeInstance, f)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.TranscribeStreamResponse}
 */
proto.ondewo.s2t.TranscribeStreamResponse.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.TranscribeStreamResponse();
	return proto.ondewo.s2t.TranscribeStreamResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.TranscribeStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.TranscribeStreamResponse}
 */
proto.ondewo.s2t.TranscribeStreamResponse.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = new proto.ondewo.s2t.Transcription();
				reader.readMessage(value, proto.ondewo.s2t.Transcription.deserializeBinaryFromReader);
				msg.addTranscriptions(value);
				break;
			case 2:
				var value = /** @type {number} */ (reader.readFloat());
				msg.setTime(value);
				break;
			case 3:
				var value = /** @type {boolean} */ (reader.readBool());
				msg.setFinal(value);
				break;
			case 4:
				var value = /** @type {boolean} */ (reader.readBool());
				msg.setReturnAudio(value);
				break;
			case 5:
				var value = /** @type {!Uint8Array} */ (reader.readBytes());
				msg.setAudio(value);
				break;
			case 6:
				var value = /** @type {boolean} */ (reader.readBool());
				msg.setUtteranceStart(value);
				break;
			case 7:
				var value = /** @type {string} */ (reader.readString());
				msg.setAudioUuid(value);
				break;
			case 8:
				var value = new proto.ondewo.s2t.TranscribeRequestConfig();
				reader.readMessage(value, proto.ondewo.s2t.TranscribeRequestConfig.deserializeBinaryFromReader);
				msg.setConfig(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.TranscribeStreamResponse.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.TranscribeStreamResponse.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.TranscribeStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.TranscribeStreamResponse.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getTranscriptionsList();
	if (f.length > 0) {
		writer.writeRepeatedMessage(1, f, proto.ondewo.s2t.Transcription.serializeBinaryToWriter);
	}
	f = message.getTime();
	if (f !== 0.0) {
		writer.writeFloat(2, f);
	}
	f = message.getFinal();
	if (f) {
		writer.writeBool(3, f);
	}
	f = message.getReturnAudio();
	if (f) {
		writer.writeBool(4, f);
	}
	f = message.getAudio_asU8();
	if (f.length > 0) {
		writer.writeBytes(5, f);
	}
	f = message.getUtteranceStart();
	if (f) {
		writer.writeBool(6, f);
	}
	f = message.getAudioUuid();
	if (f.length > 0) {
		writer.writeString(7, f);
	}
	f = message.getConfig();
	if (f != null) {
		writer.writeMessage(8, f, proto.ondewo.s2t.TranscribeRequestConfig.serializeBinaryToWriter);
	}
};

/**
 * repeated Transcription transcriptions = 1;
 * @return {!Array<!proto.ondewo.s2t.Transcription>}
 */
proto.ondewo.s2t.TranscribeStreamResponse.prototype.getTranscriptionsList = function () {
	return /** @type{!Array<!proto.ondewo.s2t.Transcription>} */ (
		jspb.Message.getRepeatedWrapperField(this, proto.ondewo.s2t.Transcription, 1)
	);
};

/**
 * @param {!Array<!proto.ondewo.s2t.Transcription>} value
 * @return {!proto.ondewo.s2t.TranscribeStreamResponse} returns this
 */
proto.ondewo.s2t.TranscribeStreamResponse.prototype.setTranscriptionsList = function (value) {
	return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.ondewo.s2t.Transcription=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.s2t.Transcription}
 */
proto.ondewo.s2t.TranscribeStreamResponse.prototype.addTranscriptions = function (opt_value, opt_index) {
	return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.s2t.Transcription, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.s2t.TranscribeStreamResponse} returns this
 */
proto.ondewo.s2t.TranscribeStreamResponse.prototype.clearTranscriptionsList = function () {
	return this.setTranscriptionsList([]);
};

/**
 * optional float time = 2;
 * @return {number}
 */
proto.ondewo.s2t.TranscribeStreamResponse.prototype.getTime = function () {
	return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.s2t.TranscribeStreamResponse} returns this
 */
proto.ondewo.s2t.TranscribeStreamResponse.prototype.setTime = function (value) {
	return jspb.Message.setProto3FloatField(this, 2, value);
};

/**
 * optional bool final = 3;
 * @return {boolean}
 */
proto.ondewo.s2t.TranscribeStreamResponse.prototype.getFinal = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.s2t.TranscribeStreamResponse} returns this
 */
proto.ondewo.s2t.TranscribeStreamResponse.prototype.setFinal = function (value) {
	return jspb.Message.setProto3BooleanField(this, 3, value);
};

/**
 * optional bool return_audio = 4;
 * @return {boolean}
 */
proto.ondewo.s2t.TranscribeStreamResponse.prototype.getReturnAudio = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.s2t.TranscribeStreamResponse} returns this
 */
proto.ondewo.s2t.TranscribeStreamResponse.prototype.setReturnAudio = function (value) {
	return jspb.Message.setProto3BooleanField(this, 4, value);
};

/**
 * optional bytes audio = 5;
 * @return {!(string|Uint8Array)}
 */
proto.ondewo.s2t.TranscribeStreamResponse.prototype.getAudio = function () {
	return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ''));
};

/**
 * optional bytes audio = 5;
 * This is a type-conversion wrapper around `getAudio()`
 * @return {string}
 */
proto.ondewo.s2t.TranscribeStreamResponse.prototype.getAudio_asB64 = function () {
	return /** @type {string} */ (jspb.Message.bytesAsB64(this.getAudio()));
};

/**
 * optional bytes audio = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAudio()`
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.TranscribeStreamResponse.prototype.getAudio_asU8 = function () {
	return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getAudio()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ondewo.s2t.TranscribeStreamResponse} returns this
 */
proto.ondewo.s2t.TranscribeStreamResponse.prototype.setAudio = function (value) {
	return jspb.Message.setProto3BytesField(this, 5, value);
};

/**
 * optional bool utterance_start = 6;
 * @return {boolean}
 */
proto.ondewo.s2t.TranscribeStreamResponse.prototype.getUtteranceStart = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.s2t.TranscribeStreamResponse} returns this
 */
proto.ondewo.s2t.TranscribeStreamResponse.prototype.setUtteranceStart = function (value) {
	return jspb.Message.setProto3BooleanField(this, 6, value);
};

/**
 * optional string audio_uuid = 7;
 * @return {string}
 */
proto.ondewo.s2t.TranscribeStreamResponse.prototype.getAudioUuid = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.TranscribeStreamResponse} returns this
 */
proto.ondewo.s2t.TranscribeStreamResponse.prototype.setAudioUuid = function (value) {
	return jspb.Message.setProto3StringField(this, 7, value);
};

/**
 * optional TranscribeRequestConfig config = 8;
 * @return {?proto.ondewo.s2t.TranscribeRequestConfig}
 */
proto.ondewo.s2t.TranscribeStreamResponse.prototype.getConfig = function () {
	return /** @type{?proto.ondewo.s2t.TranscribeRequestConfig} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.s2t.TranscribeRequestConfig, 8)
	);
};

/**
 * @param {?proto.ondewo.s2t.TranscribeRequestConfig|undefined} value
 * @return {!proto.ondewo.s2t.TranscribeStreamResponse} returns this
 */
proto.ondewo.s2t.TranscribeStreamResponse.prototype.setConfig = function (value) {
	return jspb.Message.setOneofWrapperField(this, 8, proto.ondewo.s2t.TranscribeStreamResponse.oneofGroups_[0], value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.TranscribeStreamResponse} returns this
 */
proto.ondewo.s2t.TranscribeStreamResponse.prototype.clearConfig = function () {
	return this.setConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.TranscribeStreamResponse.prototype.hasConfig = function () {
	return jspb.Message.getField(this, 8) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.TranscribeFileRequest.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.TranscribeFileRequest.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.TranscribeFileRequest} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.TranscribeFileRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				audioFile: msg.getAudioFile_asB64(),
				config: (f = msg.getConfig()) && proto.ondewo.s2t.TranscribeRequestConfig.toObject(includeInstance, f)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.TranscribeFileRequest}
 */
proto.ondewo.s2t.TranscribeFileRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.TranscribeFileRequest();
	return proto.ondewo.s2t.TranscribeFileRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.TranscribeFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.TranscribeFileRequest}
 */
proto.ondewo.s2t.TranscribeFileRequest.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {!Uint8Array} */ (reader.readBytes());
				msg.setAudioFile(value);
				break;
			case 2:
				var value = new proto.ondewo.s2t.TranscribeRequestConfig();
				reader.readMessage(value, proto.ondewo.s2t.TranscribeRequestConfig.deserializeBinaryFromReader);
				msg.setConfig(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.TranscribeFileRequest.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.TranscribeFileRequest.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.TranscribeFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.TranscribeFileRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getAudioFile_asU8();
	if (f.length > 0) {
		writer.writeBytes(1, f);
	}
	f = message.getConfig();
	if (f != null) {
		writer.writeMessage(2, f, proto.ondewo.s2t.TranscribeRequestConfig.serializeBinaryToWriter);
	}
};

/**
 * optional bytes audio_file = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ondewo.s2t.TranscribeFileRequest.prototype.getAudioFile = function () {
	return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * optional bytes audio_file = 1;
 * This is a type-conversion wrapper around `getAudioFile()`
 * @return {string}
 */
proto.ondewo.s2t.TranscribeFileRequest.prototype.getAudioFile_asB64 = function () {
	return /** @type {string} */ (jspb.Message.bytesAsB64(this.getAudioFile()));
};

/**
 * optional bytes audio_file = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAudioFile()`
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.TranscribeFileRequest.prototype.getAudioFile_asU8 = function () {
	return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getAudioFile()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ondewo.s2t.TranscribeFileRequest} returns this
 */
proto.ondewo.s2t.TranscribeFileRequest.prototype.setAudioFile = function (value) {
	return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * optional TranscribeRequestConfig config = 2;
 * @return {?proto.ondewo.s2t.TranscribeRequestConfig}
 */
proto.ondewo.s2t.TranscribeFileRequest.prototype.getConfig = function () {
	return /** @type{?proto.ondewo.s2t.TranscribeRequestConfig} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.s2t.TranscribeRequestConfig, 2)
	);
};

/**
 * @param {?proto.ondewo.s2t.TranscribeRequestConfig|undefined} value
 * @return {!proto.ondewo.s2t.TranscribeFileRequest} returns this
 */
proto.ondewo.s2t.TranscribeFileRequest.prototype.setConfig = function (value) {
	return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.TranscribeFileRequest} returns this
 */
proto.ondewo.s2t.TranscribeFileRequest.prototype.clearConfig = function () {
	return this.setConfig(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.TranscribeFileRequest.prototype.hasConfig = function () {
	return jspb.Message.getField(this, 2) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.s2t.TranscribeFileResponse.repeatedFields_ = [1, 3];

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.TranscribeFileResponse.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.TranscribeFileResponse.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.TranscribeFileResponse} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.TranscribeFileResponse.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				transcriptionsList: jspb.Message.toObjectList(
					msg.getTranscriptionsList(),
					proto.ondewo.s2t.Transcription.toObject,
					includeInstance
				),
				time: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
				wordTimingList: jspb.Message.toObjectList(
					msg.getWordTimingList(),
					proto.ondewo.s2t.WordTiming.toObject,
					includeInstance
				),
				audioUuid: jspb.Message.getFieldWithDefault(msg, 4, '')
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.TranscribeFileResponse}
 */
proto.ondewo.s2t.TranscribeFileResponse.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.TranscribeFileResponse();
	return proto.ondewo.s2t.TranscribeFileResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.TranscribeFileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.TranscribeFileResponse}
 */
proto.ondewo.s2t.TranscribeFileResponse.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = new proto.ondewo.s2t.Transcription();
				reader.readMessage(value, proto.ondewo.s2t.Transcription.deserializeBinaryFromReader);
				msg.addTranscriptions(value);
				break;
			case 2:
				var value = /** @type {number} */ (reader.readFloat());
				msg.setTime(value);
				break;
			case 3:
				var value = new proto.ondewo.s2t.WordTiming();
				reader.readMessage(value, proto.ondewo.s2t.WordTiming.deserializeBinaryFromReader);
				msg.addWordTiming(value);
				break;
			case 4:
				var value = /** @type {string} */ (reader.readString());
				msg.setAudioUuid(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.TranscribeFileResponse.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.TranscribeFileResponse.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.TranscribeFileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.TranscribeFileResponse.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getTranscriptionsList();
	if (f.length > 0) {
		writer.writeRepeatedMessage(1, f, proto.ondewo.s2t.Transcription.serializeBinaryToWriter);
	}
	f = message.getTime();
	if (f !== 0.0) {
		writer.writeFloat(2, f);
	}
	f = message.getWordTimingList();
	if (f.length > 0) {
		writer.writeRepeatedMessage(3, f, proto.ondewo.s2t.WordTiming.serializeBinaryToWriter);
	}
	f = message.getAudioUuid();
	if (f.length > 0) {
		writer.writeString(4, f);
	}
};

/**
 * repeated Transcription transcriptions = 1;
 * @return {!Array<!proto.ondewo.s2t.Transcription>}
 */
proto.ondewo.s2t.TranscribeFileResponse.prototype.getTranscriptionsList = function () {
	return /** @type{!Array<!proto.ondewo.s2t.Transcription>} */ (
		jspb.Message.getRepeatedWrapperField(this, proto.ondewo.s2t.Transcription, 1)
	);
};

/**
 * @param {!Array<!proto.ondewo.s2t.Transcription>} value
 * @return {!proto.ondewo.s2t.TranscribeFileResponse} returns this
 */
proto.ondewo.s2t.TranscribeFileResponse.prototype.setTranscriptionsList = function (value) {
	return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.ondewo.s2t.Transcription=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.s2t.Transcription}
 */
proto.ondewo.s2t.TranscribeFileResponse.prototype.addTranscriptions = function (opt_value, opt_index) {
	return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.s2t.Transcription, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.s2t.TranscribeFileResponse} returns this
 */
proto.ondewo.s2t.TranscribeFileResponse.prototype.clearTranscriptionsList = function () {
	return this.setTranscriptionsList([]);
};

/**
 * optional float time = 2;
 * @return {number}
 */
proto.ondewo.s2t.TranscribeFileResponse.prototype.getTime = function () {
	return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.s2t.TranscribeFileResponse} returns this
 */
proto.ondewo.s2t.TranscribeFileResponse.prototype.setTime = function (value) {
	return jspb.Message.setProto3FloatField(this, 2, value);
};

/**
 * repeated WordTiming word_timing = 3;
 * @return {!Array<!proto.ondewo.s2t.WordTiming>}
 */
proto.ondewo.s2t.TranscribeFileResponse.prototype.getWordTimingList = function () {
	return /** @type{!Array<!proto.ondewo.s2t.WordTiming>} */ (
		jspb.Message.getRepeatedWrapperField(this, proto.ondewo.s2t.WordTiming, 3)
	);
};

/**
 * @param {!Array<!proto.ondewo.s2t.WordTiming>} value
 * @return {!proto.ondewo.s2t.TranscribeFileResponse} returns this
 */
proto.ondewo.s2t.TranscribeFileResponse.prototype.setWordTimingList = function (value) {
	return jspb.Message.setRepeatedWrapperField(this, 3, value);
};

/**
 * @param {!proto.ondewo.s2t.WordTiming=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.s2t.WordTiming}
 */
proto.ondewo.s2t.TranscribeFileResponse.prototype.addWordTiming = function (opt_value, opt_index) {
	return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ondewo.s2t.WordTiming, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.s2t.TranscribeFileResponse} returns this
 */
proto.ondewo.s2t.TranscribeFileResponse.prototype.clearWordTimingList = function () {
	return this.setWordTimingList([]);
};

/**
 * optional string audio_uuid = 4;
 * @return {string}
 */
proto.ondewo.s2t.TranscribeFileResponse.prototype.getAudioUuid = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.TranscribeFileResponse} returns this
 */
proto.ondewo.s2t.TranscribeFileResponse.prototype.setAudioUuid = function (value) {
	return jspb.Message.setProto3StringField(this, 4, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.WordTiming.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.WordTiming.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.WordTiming} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.WordTiming.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				word: jspb.Message.getFieldWithDefault(msg, 1, ''),
				begin: jspb.Message.getFieldWithDefault(msg, 2, 0),
				end: jspb.Message.getFieldWithDefault(msg, 3, 0)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.WordTiming}
 */
proto.ondewo.s2t.WordTiming.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.WordTiming();
	return proto.ondewo.s2t.WordTiming.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.WordTiming} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.WordTiming}
 */
proto.ondewo.s2t.WordTiming.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.setWord(value);
				break;
			case 2:
				var value = /** @type {number} */ (reader.readInt32());
				msg.setBegin(value);
				break;
			case 3:
				var value = /** @type {number} */ (reader.readInt32());
				msg.setEnd(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.WordTiming.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.WordTiming.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.WordTiming} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.WordTiming.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getWord();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getBegin();
	if (f !== 0) {
		writer.writeInt32(2, f);
	}
	f = message.getEnd();
	if (f !== 0) {
		writer.writeInt32(3, f);
	}
};

/**
 * optional string word = 1;
 * @return {string}
 */
proto.ondewo.s2t.WordTiming.prototype.getWord = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.WordTiming} returns this
 */
proto.ondewo.s2t.WordTiming.prototype.setWord = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional int32 begin = 2;
 * @return {number}
 */
proto.ondewo.s2t.WordTiming.prototype.getBegin = function () {
	return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.s2t.WordTiming} returns this
 */
proto.ondewo.s2t.WordTiming.prototype.setBegin = function (value) {
	return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional int32 end = 3;
 * @return {number}
 */
proto.ondewo.s2t.WordTiming.prototype.getEnd = function () {
	return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.s2t.WordTiming} returns this
 */
proto.ondewo.s2t.WordTiming.prototype.setEnd = function (value) {
	return jspb.Message.setProto3IntField(this, 3, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.S2tPipelineId.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.S2tPipelineId.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.S2tPipelineId} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.S2tPipelineId.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				id: jspb.Message.getFieldWithDefault(msg, 1, '')
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.S2tPipelineId}
 */
proto.ondewo.s2t.S2tPipelineId.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.S2tPipelineId();
	return proto.ondewo.s2t.S2tPipelineId.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.S2tPipelineId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.S2tPipelineId}
 */
proto.ondewo.s2t.S2tPipelineId.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.setId(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.S2tPipelineId.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.S2tPipelineId.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.S2tPipelineId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.S2tPipelineId.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getId();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.ondewo.s2t.S2tPipelineId.prototype.getId = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.S2tPipelineId} returns this
 */
proto.ondewo.s2t.S2tPipelineId.prototype.setId = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.s2t.ListS2tPipelinesRequest.repeatedFields_ = [1, 2, 3];

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.ListS2tPipelinesRequest.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.ListS2tPipelinesRequest.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.ListS2tPipelinesRequest} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.ListS2tPipelinesRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				languagesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
				pipelineOwnersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
				domainsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
				registeredOnly: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.ListS2tPipelinesRequest}
 */
proto.ondewo.s2t.ListS2tPipelinesRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.ListS2tPipelinesRequest();
	return proto.ondewo.s2t.ListS2tPipelinesRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.ListS2tPipelinesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.ListS2tPipelinesRequest}
 */
proto.ondewo.s2t.ListS2tPipelinesRequest.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.addLanguages(value);
				break;
			case 2:
				var value = /** @type {string} */ (reader.readString());
				msg.addPipelineOwners(value);
				break;
			case 3:
				var value = /** @type {string} */ (reader.readString());
				msg.addDomains(value);
				break;
			case 4:
				var value = /** @type {boolean} */ (reader.readBool());
				msg.setRegisteredOnly(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.ListS2tPipelinesRequest.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.ListS2tPipelinesRequest.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.ListS2tPipelinesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.ListS2tPipelinesRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getLanguagesList();
	if (f.length > 0) {
		writer.writeRepeatedString(1, f);
	}
	f = message.getPipelineOwnersList();
	if (f.length > 0) {
		writer.writeRepeatedString(2, f);
	}
	f = message.getDomainsList();
	if (f.length > 0) {
		writer.writeRepeatedString(3, f);
	}
	f = message.getRegisteredOnly();
	if (f) {
		writer.writeBool(4, f);
	}
};

/**
 * repeated string languages = 1;
 * @return {!Array<string>}
 */
proto.ondewo.s2t.ListS2tPipelinesRequest.prototype.getLanguagesList = function () {
	return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.s2t.ListS2tPipelinesRequest} returns this
 */
proto.ondewo.s2t.ListS2tPipelinesRequest.prototype.setLanguagesList = function (value) {
	return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.s2t.ListS2tPipelinesRequest} returns this
 */
proto.ondewo.s2t.ListS2tPipelinesRequest.prototype.addLanguages = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.s2t.ListS2tPipelinesRequest} returns this
 */
proto.ondewo.s2t.ListS2tPipelinesRequest.prototype.clearLanguagesList = function () {
	return this.setLanguagesList([]);
};

/**
 * repeated string pipeline_owners = 2;
 * @return {!Array<string>}
 */
proto.ondewo.s2t.ListS2tPipelinesRequest.prototype.getPipelineOwnersList = function () {
	return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.s2t.ListS2tPipelinesRequest} returns this
 */
proto.ondewo.s2t.ListS2tPipelinesRequest.prototype.setPipelineOwnersList = function (value) {
	return jspb.Message.setField(this, 2, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.s2t.ListS2tPipelinesRequest} returns this
 */
proto.ondewo.s2t.ListS2tPipelinesRequest.prototype.addPipelineOwners = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.s2t.ListS2tPipelinesRequest} returns this
 */
proto.ondewo.s2t.ListS2tPipelinesRequest.prototype.clearPipelineOwnersList = function () {
	return this.setPipelineOwnersList([]);
};

/**
 * repeated string domains = 3;
 * @return {!Array<string>}
 */
proto.ondewo.s2t.ListS2tPipelinesRequest.prototype.getDomainsList = function () {
	return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.s2t.ListS2tPipelinesRequest} returns this
 */
proto.ondewo.s2t.ListS2tPipelinesRequest.prototype.setDomainsList = function (value) {
	return jspb.Message.setField(this, 3, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.s2t.ListS2tPipelinesRequest} returns this
 */
proto.ondewo.s2t.ListS2tPipelinesRequest.prototype.addDomains = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.s2t.ListS2tPipelinesRequest} returns this
 */
proto.ondewo.s2t.ListS2tPipelinesRequest.prototype.clearDomainsList = function () {
	return this.setDomainsList([]);
};

/**
 * optional bool registered_only = 4;
 * @return {boolean}
 */
proto.ondewo.s2t.ListS2tPipelinesRequest.prototype.getRegisteredOnly = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.s2t.ListS2tPipelinesRequest} returns this
 */
proto.ondewo.s2t.ListS2tPipelinesRequest.prototype.setRegisteredOnly = function (value) {
	return jspb.Message.setProto3BooleanField(this, 4, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.s2t.ListS2tPipelinesResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.ListS2tPipelinesResponse.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.ListS2tPipelinesResponse.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.ListS2tPipelinesResponse} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.ListS2tPipelinesResponse.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				pipelineConfigsList: jspb.Message.toObjectList(
					msg.getPipelineConfigsList(),
					proto.ondewo.s2t.Speech2TextConfig.toObject,
					includeInstance
				)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.ListS2tPipelinesResponse}
 */
proto.ondewo.s2t.ListS2tPipelinesResponse.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.ListS2tPipelinesResponse();
	return proto.ondewo.s2t.ListS2tPipelinesResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.ListS2tPipelinesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.ListS2tPipelinesResponse}
 */
proto.ondewo.s2t.ListS2tPipelinesResponse.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = new proto.ondewo.s2t.Speech2TextConfig();
				reader.readMessage(value, proto.ondewo.s2t.Speech2TextConfig.deserializeBinaryFromReader);
				msg.addPipelineConfigs(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.ListS2tPipelinesResponse.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.ListS2tPipelinesResponse.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.ListS2tPipelinesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.ListS2tPipelinesResponse.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getPipelineConfigsList();
	if (f.length > 0) {
		writer.writeRepeatedMessage(1, f, proto.ondewo.s2t.Speech2TextConfig.serializeBinaryToWriter);
	}
};

/**
 * repeated Speech2TextConfig pipeline_configs = 1;
 * @return {!Array<!proto.ondewo.s2t.Speech2TextConfig>}
 */
proto.ondewo.s2t.ListS2tPipelinesResponse.prototype.getPipelineConfigsList = function () {
	return /** @type{!Array<!proto.ondewo.s2t.Speech2TextConfig>} */ (
		jspb.Message.getRepeatedWrapperField(this, proto.ondewo.s2t.Speech2TextConfig, 1)
	);
};

/**
 * @param {!Array<!proto.ondewo.s2t.Speech2TextConfig>} value
 * @return {!proto.ondewo.s2t.ListS2tPipelinesResponse} returns this
 */
proto.ondewo.s2t.ListS2tPipelinesResponse.prototype.setPipelineConfigsList = function (value) {
	return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.ondewo.s2t.Speech2TextConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.s2t.Speech2TextConfig}
 */
proto.ondewo.s2t.ListS2tPipelinesResponse.prototype.addPipelineConfigs = function (opt_value, opt_index) {
	return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.s2t.Speech2TextConfig, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.s2t.ListS2tPipelinesResponse} returns this
 */
proto.ondewo.s2t.ListS2tPipelinesResponse.prototype.clearPipelineConfigsList = function () {
	return this.setPipelineConfigsList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.s2t.ListS2tLanguagesRequest.repeatedFields_ = [1, 2];

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.ListS2tLanguagesRequest.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.ListS2tLanguagesRequest.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.ListS2tLanguagesRequest} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.ListS2tLanguagesRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				domainsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
				pipelineOwnersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.ListS2tLanguagesRequest}
 */
proto.ondewo.s2t.ListS2tLanguagesRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.ListS2tLanguagesRequest();
	return proto.ondewo.s2t.ListS2tLanguagesRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.ListS2tLanguagesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.ListS2tLanguagesRequest}
 */
proto.ondewo.s2t.ListS2tLanguagesRequest.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.addDomains(value);
				break;
			case 2:
				var value = /** @type {string} */ (reader.readString());
				msg.addPipelineOwners(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.ListS2tLanguagesRequest.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.ListS2tLanguagesRequest.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.ListS2tLanguagesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.ListS2tLanguagesRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getDomainsList();
	if (f.length > 0) {
		writer.writeRepeatedString(1, f);
	}
	f = message.getPipelineOwnersList();
	if (f.length > 0) {
		writer.writeRepeatedString(2, f);
	}
};

/**
 * repeated string domains = 1;
 * @return {!Array<string>}
 */
proto.ondewo.s2t.ListS2tLanguagesRequest.prototype.getDomainsList = function () {
	return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.s2t.ListS2tLanguagesRequest} returns this
 */
proto.ondewo.s2t.ListS2tLanguagesRequest.prototype.setDomainsList = function (value) {
	return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.s2t.ListS2tLanguagesRequest} returns this
 */
proto.ondewo.s2t.ListS2tLanguagesRequest.prototype.addDomains = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.s2t.ListS2tLanguagesRequest} returns this
 */
proto.ondewo.s2t.ListS2tLanguagesRequest.prototype.clearDomainsList = function () {
	return this.setDomainsList([]);
};

/**
 * repeated string pipeline_owners = 2;
 * @return {!Array<string>}
 */
proto.ondewo.s2t.ListS2tLanguagesRequest.prototype.getPipelineOwnersList = function () {
	return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.s2t.ListS2tLanguagesRequest} returns this
 */
proto.ondewo.s2t.ListS2tLanguagesRequest.prototype.setPipelineOwnersList = function (value) {
	return jspb.Message.setField(this, 2, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.s2t.ListS2tLanguagesRequest} returns this
 */
proto.ondewo.s2t.ListS2tLanguagesRequest.prototype.addPipelineOwners = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.s2t.ListS2tLanguagesRequest} returns this
 */
proto.ondewo.s2t.ListS2tLanguagesRequest.prototype.clearPipelineOwnersList = function () {
	return this.setPipelineOwnersList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.s2t.ListS2tLanguagesResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.ListS2tLanguagesResponse.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.ListS2tLanguagesResponse.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.ListS2tLanguagesResponse} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.ListS2tLanguagesResponse.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				languagesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.ListS2tLanguagesResponse}
 */
proto.ondewo.s2t.ListS2tLanguagesResponse.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.ListS2tLanguagesResponse();
	return proto.ondewo.s2t.ListS2tLanguagesResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.ListS2tLanguagesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.ListS2tLanguagesResponse}
 */
proto.ondewo.s2t.ListS2tLanguagesResponse.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.addLanguages(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.ListS2tLanguagesResponse.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.ListS2tLanguagesResponse.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.ListS2tLanguagesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.ListS2tLanguagesResponse.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getLanguagesList();
	if (f.length > 0) {
		writer.writeRepeatedString(1, f);
	}
};

/**
 * repeated string languages = 1;
 * @return {!Array<string>}
 */
proto.ondewo.s2t.ListS2tLanguagesResponse.prototype.getLanguagesList = function () {
	return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.s2t.ListS2tLanguagesResponse} returns this
 */
proto.ondewo.s2t.ListS2tLanguagesResponse.prototype.setLanguagesList = function (value) {
	return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.s2t.ListS2tLanguagesResponse} returns this
 */
proto.ondewo.s2t.ListS2tLanguagesResponse.prototype.addLanguages = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.s2t.ListS2tLanguagesResponse} returns this
 */
proto.ondewo.s2t.ListS2tLanguagesResponse.prototype.clearLanguagesList = function () {
	return this.setLanguagesList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.s2t.ListS2tDomainsRequest.repeatedFields_ = [1, 2];

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.ListS2tDomainsRequest.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.ListS2tDomainsRequest.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.ListS2tDomainsRequest} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.ListS2tDomainsRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				languagesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
				pipelineOwnersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.ListS2tDomainsRequest}
 */
proto.ondewo.s2t.ListS2tDomainsRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.ListS2tDomainsRequest();
	return proto.ondewo.s2t.ListS2tDomainsRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.ListS2tDomainsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.ListS2tDomainsRequest}
 */
proto.ondewo.s2t.ListS2tDomainsRequest.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.addLanguages(value);
				break;
			case 2:
				var value = /** @type {string} */ (reader.readString());
				msg.addPipelineOwners(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.ListS2tDomainsRequest.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.ListS2tDomainsRequest.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.ListS2tDomainsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.ListS2tDomainsRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getLanguagesList();
	if (f.length > 0) {
		writer.writeRepeatedString(1, f);
	}
	f = message.getPipelineOwnersList();
	if (f.length > 0) {
		writer.writeRepeatedString(2, f);
	}
};

/**
 * repeated string languages = 1;
 * @return {!Array<string>}
 */
proto.ondewo.s2t.ListS2tDomainsRequest.prototype.getLanguagesList = function () {
	return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.s2t.ListS2tDomainsRequest} returns this
 */
proto.ondewo.s2t.ListS2tDomainsRequest.prototype.setLanguagesList = function (value) {
	return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.s2t.ListS2tDomainsRequest} returns this
 */
proto.ondewo.s2t.ListS2tDomainsRequest.prototype.addLanguages = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.s2t.ListS2tDomainsRequest} returns this
 */
proto.ondewo.s2t.ListS2tDomainsRequest.prototype.clearLanguagesList = function () {
	return this.setLanguagesList([]);
};

/**
 * repeated string pipeline_owners = 2;
 * @return {!Array<string>}
 */
proto.ondewo.s2t.ListS2tDomainsRequest.prototype.getPipelineOwnersList = function () {
	return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.s2t.ListS2tDomainsRequest} returns this
 */
proto.ondewo.s2t.ListS2tDomainsRequest.prototype.setPipelineOwnersList = function (value) {
	return jspb.Message.setField(this, 2, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.s2t.ListS2tDomainsRequest} returns this
 */
proto.ondewo.s2t.ListS2tDomainsRequest.prototype.addPipelineOwners = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.s2t.ListS2tDomainsRequest} returns this
 */
proto.ondewo.s2t.ListS2tDomainsRequest.prototype.clearPipelineOwnersList = function () {
	return this.setPipelineOwnersList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.s2t.ListS2tDomainsResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.ListS2tDomainsResponse.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.ListS2tDomainsResponse.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.ListS2tDomainsResponse} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.ListS2tDomainsResponse.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				domainsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.ListS2tDomainsResponse}
 */
proto.ondewo.s2t.ListS2tDomainsResponse.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.ListS2tDomainsResponse();
	return proto.ondewo.s2t.ListS2tDomainsResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.ListS2tDomainsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.ListS2tDomainsResponse}
 */
proto.ondewo.s2t.ListS2tDomainsResponse.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.addDomains(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.ListS2tDomainsResponse.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.ListS2tDomainsResponse.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.ListS2tDomainsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.ListS2tDomainsResponse.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getDomainsList();
	if (f.length > 0) {
		writer.writeRepeatedString(1, f);
	}
};

/**
 * repeated string domains = 1;
 * @return {!Array<string>}
 */
proto.ondewo.s2t.ListS2tDomainsResponse.prototype.getDomainsList = function () {
	return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.s2t.ListS2tDomainsResponse} returns this
 */
proto.ondewo.s2t.ListS2tDomainsResponse.prototype.setDomainsList = function (value) {
	return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.s2t.ListS2tDomainsResponse} returns this
 */
proto.ondewo.s2t.ListS2tDomainsResponse.prototype.addDomains = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.s2t.ListS2tDomainsResponse} returns this
 */
proto.ondewo.s2t.ListS2tDomainsResponse.prototype.clearDomainsList = function () {
	return this.setDomainsList([]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.S2TGetServiceInfoResponse.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.S2TGetServiceInfoResponse.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.S2TGetServiceInfoResponse} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.S2TGetServiceInfoResponse.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				version: jspb.Message.getFieldWithDefault(msg, 1, '')
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.S2TGetServiceInfoResponse}
 */
proto.ondewo.s2t.S2TGetServiceInfoResponse.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.S2TGetServiceInfoResponse();
	return proto.ondewo.s2t.S2TGetServiceInfoResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.S2TGetServiceInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.S2TGetServiceInfoResponse}
 */
proto.ondewo.s2t.S2TGetServiceInfoResponse.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.setVersion(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.S2TGetServiceInfoResponse.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.S2TGetServiceInfoResponse.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.S2TGetServiceInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.S2TGetServiceInfoResponse.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getVersion();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
};

/**
 * optional string version = 1;
 * @return {string}
 */
proto.ondewo.s2t.S2TGetServiceInfoResponse.prototype.getVersion = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.S2TGetServiceInfoResponse} returns this
 */
proto.ondewo.s2t.S2TGetServiceInfoResponse.prototype.setVersion = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.Speech2TextConfig.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.Speech2TextConfig.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.Speech2TextConfig} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.Speech2TextConfig.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				id: jspb.Message.getFieldWithDefault(msg, 1, ''),
				description: (f = msg.getDescription()) && proto.ondewo.s2t.S2TDescription.toObject(includeInstance, f),
				active: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
				inference: (f = msg.getInference()) && proto.ondewo.s2t.S2TInference.toObject(includeInstance, f),
				streamingServer:
					(f = msg.getStreamingServer()) && proto.ondewo.s2t.StreamingServer.toObject(includeInstance, f),
				voiceActivityDetection:
					(f = msg.getVoiceActivityDetection()) && proto.ondewo.s2t.VoiceActivityDetection.toObject(includeInstance, f),
				postProcessing: (f = msg.getPostProcessing()) && proto.ondewo.s2t.PostProcessing.toObject(includeInstance, f),
				logging: (f = msg.getLogging()) && proto.ondewo.s2t.Logging.toObject(includeInstance, f)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.Speech2TextConfig}
 */
proto.ondewo.s2t.Speech2TextConfig.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.Speech2TextConfig();
	return proto.ondewo.s2t.Speech2TextConfig.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.Speech2TextConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.Speech2TextConfig}
 */
proto.ondewo.s2t.Speech2TextConfig.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.setId(value);
				break;
			case 2:
				var value = new proto.ondewo.s2t.S2TDescription();
				reader.readMessage(value, proto.ondewo.s2t.S2TDescription.deserializeBinaryFromReader);
				msg.setDescription(value);
				break;
			case 3:
				var value = /** @type {boolean} */ (reader.readBool());
				msg.setActive(value);
				break;
			case 4:
				var value = new proto.ondewo.s2t.S2TInference();
				reader.readMessage(value, proto.ondewo.s2t.S2TInference.deserializeBinaryFromReader);
				msg.setInference(value);
				break;
			case 5:
				var value = new proto.ondewo.s2t.StreamingServer();
				reader.readMessage(value, proto.ondewo.s2t.StreamingServer.deserializeBinaryFromReader);
				msg.setStreamingServer(value);
				break;
			case 6:
				var value = new proto.ondewo.s2t.VoiceActivityDetection();
				reader.readMessage(value, proto.ondewo.s2t.VoiceActivityDetection.deserializeBinaryFromReader);
				msg.setVoiceActivityDetection(value);
				break;
			case 7:
				var value = new proto.ondewo.s2t.PostProcessing();
				reader.readMessage(value, proto.ondewo.s2t.PostProcessing.deserializeBinaryFromReader);
				msg.setPostProcessing(value);
				break;
			case 8:
				var value = new proto.ondewo.s2t.Logging();
				reader.readMessage(value, proto.ondewo.s2t.Logging.deserializeBinaryFromReader);
				msg.setLogging(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.Speech2TextConfig.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.Speech2TextConfig.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.Speech2TextConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.Speech2TextConfig.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getId();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getDescription();
	if (f != null) {
		writer.writeMessage(2, f, proto.ondewo.s2t.S2TDescription.serializeBinaryToWriter);
	}
	f = message.getActive();
	if (f) {
		writer.writeBool(3, f);
	}
	f = message.getInference();
	if (f != null) {
		writer.writeMessage(4, f, proto.ondewo.s2t.S2TInference.serializeBinaryToWriter);
	}
	f = message.getStreamingServer();
	if (f != null) {
		writer.writeMessage(5, f, proto.ondewo.s2t.StreamingServer.serializeBinaryToWriter);
	}
	f = message.getVoiceActivityDetection();
	if (f != null) {
		writer.writeMessage(6, f, proto.ondewo.s2t.VoiceActivityDetection.serializeBinaryToWriter);
	}
	f = message.getPostProcessing();
	if (f != null) {
		writer.writeMessage(7, f, proto.ondewo.s2t.PostProcessing.serializeBinaryToWriter);
	}
	f = message.getLogging();
	if (f != null) {
		writer.writeMessage(8, f, proto.ondewo.s2t.Logging.serializeBinaryToWriter);
	}
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.ondewo.s2t.Speech2TextConfig.prototype.getId = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.Speech2TextConfig} returns this
 */
proto.ondewo.s2t.Speech2TextConfig.prototype.setId = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional S2TDescription description = 2;
 * @return {?proto.ondewo.s2t.S2TDescription}
 */
proto.ondewo.s2t.Speech2TextConfig.prototype.getDescription = function () {
	return /** @type{?proto.ondewo.s2t.S2TDescription} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.s2t.S2TDescription, 2)
	);
};

/**
 * @param {?proto.ondewo.s2t.S2TDescription|undefined} value
 * @return {!proto.ondewo.s2t.Speech2TextConfig} returns this
 */
proto.ondewo.s2t.Speech2TextConfig.prototype.setDescription = function (value) {
	return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.Speech2TextConfig} returns this
 */
proto.ondewo.s2t.Speech2TextConfig.prototype.clearDescription = function () {
	return this.setDescription(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.Speech2TextConfig.prototype.hasDescription = function () {
	return jspb.Message.getField(this, 2) != null;
};

/**
 * optional bool active = 3;
 * @return {boolean}
 */
proto.ondewo.s2t.Speech2TextConfig.prototype.getActive = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.s2t.Speech2TextConfig} returns this
 */
proto.ondewo.s2t.Speech2TextConfig.prototype.setActive = function (value) {
	return jspb.Message.setProto3BooleanField(this, 3, value);
};

/**
 * optional S2TInference inference = 4;
 * @return {?proto.ondewo.s2t.S2TInference}
 */
proto.ondewo.s2t.Speech2TextConfig.prototype.getInference = function () {
	return /** @type{?proto.ondewo.s2t.S2TInference} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.s2t.S2TInference, 4)
	);
};

/**
 * @param {?proto.ondewo.s2t.S2TInference|undefined} value
 * @return {!proto.ondewo.s2t.Speech2TextConfig} returns this
 */
proto.ondewo.s2t.Speech2TextConfig.prototype.setInference = function (value) {
	return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.Speech2TextConfig} returns this
 */
proto.ondewo.s2t.Speech2TextConfig.prototype.clearInference = function () {
	return this.setInference(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.Speech2TextConfig.prototype.hasInference = function () {
	return jspb.Message.getField(this, 4) != null;
};

/**
 * optional StreamingServer streaming_server = 5;
 * @return {?proto.ondewo.s2t.StreamingServer}
 */
proto.ondewo.s2t.Speech2TextConfig.prototype.getStreamingServer = function () {
	return /** @type{?proto.ondewo.s2t.StreamingServer} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.s2t.StreamingServer, 5)
	);
};

/**
 * @param {?proto.ondewo.s2t.StreamingServer|undefined} value
 * @return {!proto.ondewo.s2t.Speech2TextConfig} returns this
 */
proto.ondewo.s2t.Speech2TextConfig.prototype.setStreamingServer = function (value) {
	return jspb.Message.setWrapperField(this, 5, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.Speech2TextConfig} returns this
 */
proto.ondewo.s2t.Speech2TextConfig.prototype.clearStreamingServer = function () {
	return this.setStreamingServer(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.Speech2TextConfig.prototype.hasStreamingServer = function () {
	return jspb.Message.getField(this, 5) != null;
};

/**
 * optional VoiceActivityDetection voice_activity_detection = 6;
 * @return {?proto.ondewo.s2t.VoiceActivityDetection}
 */
proto.ondewo.s2t.Speech2TextConfig.prototype.getVoiceActivityDetection = function () {
	return /** @type{?proto.ondewo.s2t.VoiceActivityDetection} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.s2t.VoiceActivityDetection, 6)
	);
};

/**
 * @param {?proto.ondewo.s2t.VoiceActivityDetection|undefined} value
 * @return {!proto.ondewo.s2t.Speech2TextConfig} returns this
 */
proto.ondewo.s2t.Speech2TextConfig.prototype.setVoiceActivityDetection = function (value) {
	return jspb.Message.setWrapperField(this, 6, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.Speech2TextConfig} returns this
 */
proto.ondewo.s2t.Speech2TextConfig.prototype.clearVoiceActivityDetection = function () {
	return this.setVoiceActivityDetection(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.Speech2TextConfig.prototype.hasVoiceActivityDetection = function () {
	return jspb.Message.getField(this, 6) != null;
};

/**
 * optional PostProcessing post_processing = 7;
 * @return {?proto.ondewo.s2t.PostProcessing}
 */
proto.ondewo.s2t.Speech2TextConfig.prototype.getPostProcessing = function () {
	return /** @type{?proto.ondewo.s2t.PostProcessing} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.s2t.PostProcessing, 7)
	);
};

/**
 * @param {?proto.ondewo.s2t.PostProcessing|undefined} value
 * @return {!proto.ondewo.s2t.Speech2TextConfig} returns this
 */
proto.ondewo.s2t.Speech2TextConfig.prototype.setPostProcessing = function (value) {
	return jspb.Message.setWrapperField(this, 7, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.Speech2TextConfig} returns this
 */
proto.ondewo.s2t.Speech2TextConfig.prototype.clearPostProcessing = function () {
	return this.setPostProcessing(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.Speech2TextConfig.prototype.hasPostProcessing = function () {
	return jspb.Message.getField(this, 7) != null;
};

/**
 * optional Logging logging = 8;
 * @return {?proto.ondewo.s2t.Logging}
 */
proto.ondewo.s2t.Speech2TextConfig.prototype.getLogging = function () {
	return /** @type{?proto.ondewo.s2t.Logging} */ (jspb.Message.getWrapperField(this, proto.ondewo.s2t.Logging, 8));
};

/**
 * @param {?proto.ondewo.s2t.Logging|undefined} value
 * @return {!proto.ondewo.s2t.Speech2TextConfig} returns this
 */
proto.ondewo.s2t.Speech2TextConfig.prototype.setLogging = function (value) {
	return jspb.Message.setWrapperField(this, 8, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.Speech2TextConfig} returns this
 */
proto.ondewo.s2t.Speech2TextConfig.prototype.clearLogging = function () {
	return this.setLogging(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.Speech2TextConfig.prototype.hasLogging = function () {
	return jspb.Message.getField(this, 8) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.S2TDescription.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.S2TDescription.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.S2TDescription} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.S2TDescription.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				language: jspb.Message.getFieldWithDefault(msg, 1, ''),
				pipelineOwner: jspb.Message.getFieldWithDefault(msg, 2, ''),
				domain: jspb.Message.getFieldWithDefault(msg, 3, ''),
				comments: jspb.Message.getFieldWithDefault(msg, 4, '')
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.S2TDescription}
 */
proto.ondewo.s2t.S2TDescription.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.S2TDescription();
	return proto.ondewo.s2t.S2TDescription.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.S2TDescription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.S2TDescription}
 */
proto.ondewo.s2t.S2TDescription.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.setLanguage(value);
				break;
			case 2:
				var value = /** @type {string} */ (reader.readString());
				msg.setPipelineOwner(value);
				break;
			case 3:
				var value = /** @type {string} */ (reader.readString());
				msg.setDomain(value);
				break;
			case 4:
				var value = /** @type {string} */ (reader.readString());
				msg.setComments(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.S2TDescription.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.S2TDescription.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.S2TDescription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.S2TDescription.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getLanguage();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getPipelineOwner();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
	f = message.getDomain();
	if (f.length > 0) {
		writer.writeString(3, f);
	}
	f = message.getComments();
	if (f.length > 0) {
		writer.writeString(4, f);
	}
};

/**
 * optional string language = 1;
 * @return {string}
 */
proto.ondewo.s2t.S2TDescription.prototype.getLanguage = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.S2TDescription} returns this
 */
proto.ondewo.s2t.S2TDescription.prototype.setLanguage = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string pipeline_owner = 2;
 * @return {string}
 */
proto.ondewo.s2t.S2TDescription.prototype.getPipelineOwner = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.S2TDescription} returns this
 */
proto.ondewo.s2t.S2TDescription.prototype.setPipelineOwner = function (value) {
	return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string domain = 3;
 * @return {string}
 */
proto.ondewo.s2t.S2TDescription.prototype.getDomain = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.S2TDescription} returns this
 */
proto.ondewo.s2t.S2TDescription.prototype.setDomain = function (value) {
	return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional string comments = 4;
 * @return {string}
 */
proto.ondewo.s2t.S2TDescription.prototype.getComments = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.S2TDescription} returns this
 */
proto.ondewo.s2t.S2TDescription.prototype.setComments = function (value) {
	return jspb.Message.setProto3StringField(this, 4, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.S2TInference.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.S2TInference.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.S2TInference} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.S2TInference.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				acousticModels: (f = msg.getAcousticModels()) && proto.ondewo.s2t.AcousticModels.toObject(includeInstance, f),
				languageModels: (f = msg.getLanguageModels()) && proto.ondewo.s2t.LanguageModels.toObject(includeInstance, f)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.S2TInference}
 */
proto.ondewo.s2t.S2TInference.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.S2TInference();
	return proto.ondewo.s2t.S2TInference.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.S2TInference} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.S2TInference}
 */
proto.ondewo.s2t.S2TInference.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = new proto.ondewo.s2t.AcousticModels();
				reader.readMessage(value, proto.ondewo.s2t.AcousticModels.deserializeBinaryFromReader);
				msg.setAcousticModels(value);
				break;
			case 2:
				var value = new proto.ondewo.s2t.LanguageModels();
				reader.readMessage(value, proto.ondewo.s2t.LanguageModels.deserializeBinaryFromReader);
				msg.setLanguageModels(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.S2TInference.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.S2TInference.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.S2TInference} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.S2TInference.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getAcousticModels();
	if (f != null) {
		writer.writeMessage(1, f, proto.ondewo.s2t.AcousticModels.serializeBinaryToWriter);
	}
	f = message.getLanguageModels();
	if (f != null) {
		writer.writeMessage(2, f, proto.ondewo.s2t.LanguageModels.serializeBinaryToWriter);
	}
};

/**
 * optional AcousticModels acoustic_models = 1;
 * @return {?proto.ondewo.s2t.AcousticModels}
 */
proto.ondewo.s2t.S2TInference.prototype.getAcousticModels = function () {
	return /** @type{?proto.ondewo.s2t.AcousticModels} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.s2t.AcousticModels, 1)
	);
};

/**
 * @param {?proto.ondewo.s2t.AcousticModels|undefined} value
 * @return {!proto.ondewo.s2t.S2TInference} returns this
 */
proto.ondewo.s2t.S2TInference.prototype.setAcousticModels = function (value) {
	return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.S2TInference} returns this
 */
proto.ondewo.s2t.S2TInference.prototype.clearAcousticModels = function () {
	return this.setAcousticModels(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.S2TInference.prototype.hasAcousticModels = function () {
	return jspb.Message.getField(this, 1) != null;
};

/**
 * optional LanguageModels language_models = 2;
 * @return {?proto.ondewo.s2t.LanguageModels}
 */
proto.ondewo.s2t.S2TInference.prototype.getLanguageModels = function () {
	return /** @type{?proto.ondewo.s2t.LanguageModels} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.s2t.LanguageModels, 2)
	);
};

/**
 * @param {?proto.ondewo.s2t.LanguageModels|undefined} value
 * @return {!proto.ondewo.s2t.S2TInference} returns this
 */
proto.ondewo.s2t.S2TInference.prototype.setLanguageModels = function (value) {
	return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.S2TInference} returns this
 */
proto.ondewo.s2t.S2TInference.prototype.clearLanguageModels = function () {
	return this.setLanguageModels(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.S2TInference.prototype.hasLanguageModels = function () {
	return jspb.Message.getField(this, 2) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.AcousticModels.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.AcousticModels.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.AcousticModels} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.AcousticModels.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				type: jspb.Message.getFieldWithDefault(msg, 1, ''),
				quartznet: (f = msg.getQuartznet()) && proto.ondewo.s2t.Quartznet.toObject(includeInstance, f),
				quartznetTriton:
					(f = msg.getQuartznetTriton()) && proto.ondewo.s2t.QuartznetTriton.toObject(includeInstance, f),
				wav2vec: (f = msg.getWav2vec()) && proto.ondewo.s2t.Wav2Vec.toObject(includeInstance, f),
				wav2vecTriton: (f = msg.getWav2vecTriton()) && proto.ondewo.s2t.Wav2VecTriton.toObject(includeInstance, f),
				whisper: (f = msg.getWhisper()) && proto.ondewo.s2t.Whisper.toObject(includeInstance, f),
				whisperTriton: (f = msg.getWhisperTriton()) && proto.ondewo.s2t.WhisperTriton.toObject(includeInstance, f)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.AcousticModels}
 */
proto.ondewo.s2t.AcousticModels.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.AcousticModels();
	return proto.ondewo.s2t.AcousticModels.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.AcousticModels} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.AcousticModels}
 */
proto.ondewo.s2t.AcousticModels.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.setType(value);
				break;
			case 2:
				var value = new proto.ondewo.s2t.Quartznet();
				reader.readMessage(value, proto.ondewo.s2t.Quartznet.deserializeBinaryFromReader);
				msg.setQuartznet(value);
				break;
			case 3:
				var value = new proto.ondewo.s2t.QuartznetTriton();
				reader.readMessage(value, proto.ondewo.s2t.QuartznetTriton.deserializeBinaryFromReader);
				msg.setQuartznetTriton(value);
				break;
			case 4:
				var value = new proto.ondewo.s2t.Wav2Vec();
				reader.readMessage(value, proto.ondewo.s2t.Wav2Vec.deserializeBinaryFromReader);
				msg.setWav2vec(value);
				break;
			case 5:
				var value = new proto.ondewo.s2t.Wav2VecTriton();
				reader.readMessage(value, proto.ondewo.s2t.Wav2VecTriton.deserializeBinaryFromReader);
				msg.setWav2vecTriton(value);
				break;
			case 6:
				var value = new proto.ondewo.s2t.Whisper();
				reader.readMessage(value, proto.ondewo.s2t.Whisper.deserializeBinaryFromReader);
				msg.setWhisper(value);
				break;
			case 7:
				var value = new proto.ondewo.s2t.WhisperTriton();
				reader.readMessage(value, proto.ondewo.s2t.WhisperTriton.deserializeBinaryFromReader);
				msg.setWhisperTriton(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.AcousticModels.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.AcousticModels.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.AcousticModels} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.AcousticModels.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getType();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getQuartznet();
	if (f != null) {
		writer.writeMessage(2, f, proto.ondewo.s2t.Quartznet.serializeBinaryToWriter);
	}
	f = message.getQuartznetTriton();
	if (f != null) {
		writer.writeMessage(3, f, proto.ondewo.s2t.QuartznetTriton.serializeBinaryToWriter);
	}
	f = message.getWav2vec();
	if (f != null) {
		writer.writeMessage(4, f, proto.ondewo.s2t.Wav2Vec.serializeBinaryToWriter);
	}
	f = message.getWav2vecTriton();
	if (f != null) {
		writer.writeMessage(5, f, proto.ondewo.s2t.Wav2VecTriton.serializeBinaryToWriter);
	}
	f = message.getWhisper();
	if (f != null) {
		writer.writeMessage(6, f, proto.ondewo.s2t.Whisper.serializeBinaryToWriter);
	}
	f = message.getWhisperTriton();
	if (f != null) {
		writer.writeMessage(7, f, proto.ondewo.s2t.WhisperTriton.serializeBinaryToWriter);
	}
};

/**
 * optional string type = 1;
 * @return {string}
 */
proto.ondewo.s2t.AcousticModels.prototype.getType = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.AcousticModels} returns this
 */
proto.ondewo.s2t.AcousticModels.prototype.setType = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional Quartznet quartznet = 2;
 * @return {?proto.ondewo.s2t.Quartznet}
 */
proto.ondewo.s2t.AcousticModels.prototype.getQuartznet = function () {
	return /** @type{?proto.ondewo.s2t.Quartznet} */ (jspb.Message.getWrapperField(this, proto.ondewo.s2t.Quartznet, 2));
};

/**
 * @param {?proto.ondewo.s2t.Quartznet|undefined} value
 * @return {!proto.ondewo.s2t.AcousticModels} returns this
 */
proto.ondewo.s2t.AcousticModels.prototype.setQuartznet = function (value) {
	return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.AcousticModels} returns this
 */
proto.ondewo.s2t.AcousticModels.prototype.clearQuartznet = function () {
	return this.setQuartznet(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.AcousticModels.prototype.hasQuartznet = function () {
	return jspb.Message.getField(this, 2) != null;
};

/**
 * optional QuartznetTriton quartznet_triton = 3;
 * @return {?proto.ondewo.s2t.QuartznetTriton}
 */
proto.ondewo.s2t.AcousticModels.prototype.getQuartznetTriton = function () {
	return /** @type{?proto.ondewo.s2t.QuartznetTriton} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.s2t.QuartznetTriton, 3)
	);
};

/**
 * @param {?proto.ondewo.s2t.QuartznetTriton|undefined} value
 * @return {!proto.ondewo.s2t.AcousticModels} returns this
 */
proto.ondewo.s2t.AcousticModels.prototype.setQuartznetTriton = function (value) {
	return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.AcousticModels} returns this
 */
proto.ondewo.s2t.AcousticModels.prototype.clearQuartznetTriton = function () {
	return this.setQuartznetTriton(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.AcousticModels.prototype.hasQuartznetTriton = function () {
	return jspb.Message.getField(this, 3) != null;
};

/**
 * optional Wav2Vec wav2vec = 4;
 * @return {?proto.ondewo.s2t.Wav2Vec}
 */
proto.ondewo.s2t.AcousticModels.prototype.getWav2vec = function () {
	return /** @type{?proto.ondewo.s2t.Wav2Vec} */ (jspb.Message.getWrapperField(this, proto.ondewo.s2t.Wav2Vec, 4));
};

/**
 * @param {?proto.ondewo.s2t.Wav2Vec|undefined} value
 * @return {!proto.ondewo.s2t.AcousticModels} returns this
 */
proto.ondewo.s2t.AcousticModels.prototype.setWav2vec = function (value) {
	return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.AcousticModels} returns this
 */
proto.ondewo.s2t.AcousticModels.prototype.clearWav2vec = function () {
	return this.setWav2vec(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.AcousticModels.prototype.hasWav2vec = function () {
	return jspb.Message.getField(this, 4) != null;
};

/**
 * optional Wav2VecTriton wav2vec_triton = 5;
 * @return {?proto.ondewo.s2t.Wav2VecTriton}
 */
proto.ondewo.s2t.AcousticModels.prototype.getWav2vecTriton = function () {
	return /** @type{?proto.ondewo.s2t.Wav2VecTriton} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.s2t.Wav2VecTriton, 5)
	);
};

/**
 * @param {?proto.ondewo.s2t.Wav2VecTriton|undefined} value
 * @return {!proto.ondewo.s2t.AcousticModels} returns this
 */
proto.ondewo.s2t.AcousticModels.prototype.setWav2vecTriton = function (value) {
	return jspb.Message.setWrapperField(this, 5, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.AcousticModels} returns this
 */
proto.ondewo.s2t.AcousticModels.prototype.clearWav2vecTriton = function () {
	return this.setWav2vecTriton(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.AcousticModels.prototype.hasWav2vecTriton = function () {
	return jspb.Message.getField(this, 5) != null;
};

/**
 * optional Whisper whisper = 6;
 * @return {?proto.ondewo.s2t.Whisper}
 */
proto.ondewo.s2t.AcousticModels.prototype.getWhisper = function () {
	return /** @type{?proto.ondewo.s2t.Whisper} */ (jspb.Message.getWrapperField(this, proto.ondewo.s2t.Whisper, 6));
};

/**
 * @param {?proto.ondewo.s2t.Whisper|undefined} value
 * @return {!proto.ondewo.s2t.AcousticModels} returns this
 */
proto.ondewo.s2t.AcousticModels.prototype.setWhisper = function (value) {
	return jspb.Message.setWrapperField(this, 6, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.AcousticModels} returns this
 */
proto.ondewo.s2t.AcousticModels.prototype.clearWhisper = function () {
	return this.setWhisper(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.AcousticModels.prototype.hasWhisper = function () {
	return jspb.Message.getField(this, 6) != null;
};

/**
 * optional WhisperTriton whisper_triton = 7;
 * @return {?proto.ondewo.s2t.WhisperTriton}
 */
proto.ondewo.s2t.AcousticModels.prototype.getWhisperTriton = function () {
	return /** @type{?proto.ondewo.s2t.WhisperTriton} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.s2t.WhisperTriton, 7)
	);
};

/**
 * @param {?proto.ondewo.s2t.WhisperTriton|undefined} value
 * @return {!proto.ondewo.s2t.AcousticModels} returns this
 */
proto.ondewo.s2t.AcousticModels.prototype.setWhisperTriton = function (value) {
	return jspb.Message.setWrapperField(this, 7, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.AcousticModels} returns this
 */
proto.ondewo.s2t.AcousticModels.prototype.clearWhisperTriton = function () {
	return this.setWhisperTriton(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.AcousticModels.prototype.hasWhisperTriton = function () {
	return jspb.Message.getField(this, 7) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.Whisper.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.Whisper.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.Whisper} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.Whisper.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				modelPath: jspb.Message.getFieldWithDefault(msg, 1, ''),
				useGpu: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
				language: jspb.Message.getFieldWithDefault(msg, 3, '')
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.Whisper}
 */
proto.ondewo.s2t.Whisper.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.Whisper();
	return proto.ondewo.s2t.Whisper.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.Whisper} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.Whisper}
 */
proto.ondewo.s2t.Whisper.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.setModelPath(value);
				break;
			case 2:
				var value = /** @type {boolean} */ (reader.readBool());
				msg.setUseGpu(value);
				break;
			case 3:
				var value = /** @type {string} */ (reader.readString());
				msg.setLanguage(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.Whisper.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.Whisper.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.Whisper} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.Whisper.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getModelPath();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getUseGpu();
	if (f) {
		writer.writeBool(2, f);
	}
	f = message.getLanguage();
	if (f.length > 0) {
		writer.writeString(3, f);
	}
};

/**
 * optional string model_path = 1;
 * @return {string}
 */
proto.ondewo.s2t.Whisper.prototype.getModelPath = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.Whisper} returns this
 */
proto.ondewo.s2t.Whisper.prototype.setModelPath = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional bool use_gpu = 2;
 * @return {boolean}
 */
proto.ondewo.s2t.Whisper.prototype.getUseGpu = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.s2t.Whisper} returns this
 */
proto.ondewo.s2t.Whisper.prototype.setUseGpu = function (value) {
	return jspb.Message.setProto3BooleanField(this, 2, value);
};

/**
 * optional string language = 3;
 * @return {string}
 */
proto.ondewo.s2t.Whisper.prototype.getLanguage = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.Whisper} returns this
 */
proto.ondewo.s2t.Whisper.prototype.setLanguage = function (value) {
	return jspb.Message.setProto3StringField(this, 3, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.WhisperTriton.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.WhisperTriton.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.WhisperTriton} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.WhisperTriton.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				processorPath: jspb.Message.getFieldWithDefault(msg, 1, ''),
				tritonModelName: jspb.Message.getFieldWithDefault(msg, 2, ''),
				tritonModelVersion: jspb.Message.getFieldWithDefault(msg, 3, ''),
				checkStatusTimeout: jspb.Message.getFieldWithDefault(msg, 4, 0)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.WhisperTriton}
 */
proto.ondewo.s2t.WhisperTriton.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.WhisperTriton();
	return proto.ondewo.s2t.WhisperTriton.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.WhisperTriton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.WhisperTriton}
 */
proto.ondewo.s2t.WhisperTriton.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.setProcessorPath(value);
				break;
			case 2:
				var value = /** @type {string} */ (reader.readString());
				msg.setTritonModelName(value);
				break;
			case 3:
				var value = /** @type {string} */ (reader.readString());
				msg.setTritonModelVersion(value);
				break;
			case 4:
				var value = /** @type {number} */ (reader.readInt64());
				msg.setCheckStatusTimeout(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.WhisperTriton.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.WhisperTriton.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.WhisperTriton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.WhisperTriton.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getProcessorPath();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getTritonModelName();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
	f = message.getTritonModelVersion();
	if (f.length > 0) {
		writer.writeString(3, f);
	}
	f = message.getCheckStatusTimeout();
	if (f !== 0) {
		writer.writeInt64(4, f);
	}
};

/**
 * optional string processor_path = 1;
 * @return {string}
 */
proto.ondewo.s2t.WhisperTriton.prototype.getProcessorPath = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.WhisperTriton} returns this
 */
proto.ondewo.s2t.WhisperTriton.prototype.setProcessorPath = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string triton_model_name = 2;
 * @return {string}
 */
proto.ondewo.s2t.WhisperTriton.prototype.getTritonModelName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.WhisperTriton} returns this
 */
proto.ondewo.s2t.WhisperTriton.prototype.setTritonModelName = function (value) {
	return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string triton_model_version = 3;
 * @return {string}
 */
proto.ondewo.s2t.WhisperTriton.prototype.getTritonModelVersion = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.WhisperTriton} returns this
 */
proto.ondewo.s2t.WhisperTriton.prototype.setTritonModelVersion = function (value) {
	return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional int64 check_status_timeout = 4;
 * @return {number}
 */
proto.ondewo.s2t.WhisperTriton.prototype.getCheckStatusTimeout = function () {
	return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.s2t.WhisperTriton} returns this
 */
proto.ondewo.s2t.WhisperTriton.prototype.setCheckStatusTimeout = function (value) {
	return jspb.Message.setProto3IntField(this, 4, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.Wav2Vec.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.Wav2Vec.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.Wav2Vec} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.Wav2Vec.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				modelPath: jspb.Message.getFieldWithDefault(msg, 1, ''),
				useGpu: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.Wav2Vec}
 */
proto.ondewo.s2t.Wav2Vec.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.Wav2Vec();
	return proto.ondewo.s2t.Wav2Vec.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.Wav2Vec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.Wav2Vec}
 */
proto.ondewo.s2t.Wav2Vec.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.setModelPath(value);
				break;
			case 2:
				var value = /** @type {boolean} */ (reader.readBool());
				msg.setUseGpu(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.Wav2Vec.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.Wav2Vec.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.Wav2Vec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.Wav2Vec.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getModelPath();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getUseGpu();
	if (f) {
		writer.writeBool(2, f);
	}
};

/**
 * optional string model_path = 1;
 * @return {string}
 */
proto.ondewo.s2t.Wav2Vec.prototype.getModelPath = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.Wav2Vec} returns this
 */
proto.ondewo.s2t.Wav2Vec.prototype.setModelPath = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional bool use_gpu = 2;
 * @return {boolean}
 */
proto.ondewo.s2t.Wav2Vec.prototype.getUseGpu = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.s2t.Wav2Vec} returns this
 */
proto.ondewo.s2t.Wav2Vec.prototype.setUseGpu = function (value) {
	return jspb.Message.setProto3BooleanField(this, 2, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.Wav2VecTriton.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.Wav2VecTriton.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.Wav2VecTriton} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.Wav2VecTriton.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				processorPath: jspb.Message.getFieldWithDefault(msg, 1, ''),
				tritonModelName: jspb.Message.getFieldWithDefault(msg, 2, ''),
				tritonModelVersion: jspb.Message.getFieldWithDefault(msg, 3, ''),
				checkStatusTimeout: jspb.Message.getFieldWithDefault(msg, 4, 0)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.Wav2VecTriton}
 */
proto.ondewo.s2t.Wav2VecTriton.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.Wav2VecTriton();
	return proto.ondewo.s2t.Wav2VecTriton.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.Wav2VecTriton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.Wav2VecTriton}
 */
proto.ondewo.s2t.Wav2VecTriton.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.setProcessorPath(value);
				break;
			case 2:
				var value = /** @type {string} */ (reader.readString());
				msg.setTritonModelName(value);
				break;
			case 3:
				var value = /** @type {string} */ (reader.readString());
				msg.setTritonModelVersion(value);
				break;
			case 4:
				var value = /** @type {number} */ (reader.readInt64());
				msg.setCheckStatusTimeout(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.Wav2VecTriton.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.Wav2VecTriton.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.Wav2VecTriton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.Wav2VecTriton.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getProcessorPath();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getTritonModelName();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
	f = message.getTritonModelVersion();
	if (f.length > 0) {
		writer.writeString(3, f);
	}
	f = message.getCheckStatusTimeout();
	if (f !== 0) {
		writer.writeInt64(4, f);
	}
};

/**
 * optional string processor_path = 1;
 * @return {string}
 */
proto.ondewo.s2t.Wav2VecTriton.prototype.getProcessorPath = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.Wav2VecTriton} returns this
 */
proto.ondewo.s2t.Wav2VecTriton.prototype.setProcessorPath = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string triton_model_name = 2;
 * @return {string}
 */
proto.ondewo.s2t.Wav2VecTriton.prototype.getTritonModelName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.Wav2VecTriton} returns this
 */
proto.ondewo.s2t.Wav2VecTriton.prototype.setTritonModelName = function (value) {
	return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string triton_model_version = 3;
 * @return {string}
 */
proto.ondewo.s2t.Wav2VecTriton.prototype.getTritonModelVersion = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.Wav2VecTriton} returns this
 */
proto.ondewo.s2t.Wav2VecTriton.prototype.setTritonModelVersion = function (value) {
	return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional int64 check_status_timeout = 4;
 * @return {number}
 */
proto.ondewo.s2t.Wav2VecTriton.prototype.getCheckStatusTimeout = function () {
	return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.s2t.Wav2VecTriton} returns this
 */
proto.ondewo.s2t.Wav2VecTriton.prototype.setCheckStatusTimeout = function (value) {
	return jspb.Message.setProto3IntField(this, 4, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.Quartznet.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.Quartznet.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.Quartznet} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.Quartznet.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				configPath: jspb.Message.getFieldWithDefault(msg, 1, ''),
				loadType: jspb.Message.getFieldWithDefault(msg, 2, ''),
				ptFiles: (f = msg.getPtFiles()) && proto.ondewo.s2t.PtFiles.toObject(includeInstance, f),
				ckptFile: (f = msg.getCkptFile()) && proto.ondewo.s2t.CkptFile.toObject(includeInstance, f),
				useGpu: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.Quartznet}
 */
proto.ondewo.s2t.Quartznet.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.Quartznet();
	return proto.ondewo.s2t.Quartznet.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.Quartznet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.Quartznet}
 */
proto.ondewo.s2t.Quartznet.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.setConfigPath(value);
				break;
			case 2:
				var value = /** @type {string} */ (reader.readString());
				msg.setLoadType(value);
				break;
			case 3:
				var value = new proto.ondewo.s2t.PtFiles();
				reader.readMessage(value, proto.ondewo.s2t.PtFiles.deserializeBinaryFromReader);
				msg.setPtFiles(value);
				break;
			case 4:
				var value = new proto.ondewo.s2t.CkptFile();
				reader.readMessage(value, proto.ondewo.s2t.CkptFile.deserializeBinaryFromReader);
				msg.setCkptFile(value);
				break;
			case 5:
				var value = /** @type {boolean} */ (reader.readBool());
				msg.setUseGpu(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.Quartznet.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.Quartznet.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.Quartznet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.Quartznet.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getConfigPath();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getLoadType();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
	f = message.getPtFiles();
	if (f != null) {
		writer.writeMessage(3, f, proto.ondewo.s2t.PtFiles.serializeBinaryToWriter);
	}
	f = message.getCkptFile();
	if (f != null) {
		writer.writeMessage(4, f, proto.ondewo.s2t.CkptFile.serializeBinaryToWriter);
	}
	f = message.getUseGpu();
	if (f) {
		writer.writeBool(5, f);
	}
};

/**
 * optional string config_path = 1;
 * @return {string}
 */
proto.ondewo.s2t.Quartznet.prototype.getConfigPath = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.Quartznet} returns this
 */
proto.ondewo.s2t.Quartznet.prototype.setConfigPath = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string load_type = 2;
 * @return {string}
 */
proto.ondewo.s2t.Quartznet.prototype.getLoadType = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.Quartznet} returns this
 */
proto.ondewo.s2t.Quartznet.prototype.setLoadType = function (value) {
	return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional PtFiles pt_files = 3;
 * @return {?proto.ondewo.s2t.PtFiles}
 */
proto.ondewo.s2t.Quartznet.prototype.getPtFiles = function () {
	return /** @type{?proto.ondewo.s2t.PtFiles} */ (jspb.Message.getWrapperField(this, proto.ondewo.s2t.PtFiles, 3));
};

/**
 * @param {?proto.ondewo.s2t.PtFiles|undefined} value
 * @return {!proto.ondewo.s2t.Quartznet} returns this
 */
proto.ondewo.s2t.Quartznet.prototype.setPtFiles = function (value) {
	return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.Quartznet} returns this
 */
proto.ondewo.s2t.Quartznet.prototype.clearPtFiles = function () {
	return this.setPtFiles(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.Quartznet.prototype.hasPtFiles = function () {
	return jspb.Message.getField(this, 3) != null;
};

/**
 * optional CkptFile ckpt_file = 4;
 * @return {?proto.ondewo.s2t.CkptFile}
 */
proto.ondewo.s2t.Quartznet.prototype.getCkptFile = function () {
	return /** @type{?proto.ondewo.s2t.CkptFile} */ (jspb.Message.getWrapperField(this, proto.ondewo.s2t.CkptFile, 4));
};

/**
 * @param {?proto.ondewo.s2t.CkptFile|undefined} value
 * @return {!proto.ondewo.s2t.Quartznet} returns this
 */
proto.ondewo.s2t.Quartznet.prototype.setCkptFile = function (value) {
	return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.Quartznet} returns this
 */
proto.ondewo.s2t.Quartznet.prototype.clearCkptFile = function () {
	return this.setCkptFile(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.Quartznet.prototype.hasCkptFile = function () {
	return jspb.Message.getField(this, 4) != null;
};

/**
 * optional bool use_gpu = 5;
 * @return {boolean}
 */
proto.ondewo.s2t.Quartznet.prototype.getUseGpu = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.s2t.Quartznet} returns this
 */
proto.ondewo.s2t.Quartznet.prototype.setUseGpu = function (value) {
	return jspb.Message.setProto3BooleanField(this, 5, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.PtFiles.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.PtFiles.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.PtFiles} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.PtFiles.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				path: jspb.Message.getFieldWithDefault(msg, 1, ''),
				step: jspb.Message.getFieldWithDefault(msg, 2, '')
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.PtFiles}
 */
proto.ondewo.s2t.PtFiles.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.PtFiles();
	return proto.ondewo.s2t.PtFiles.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.PtFiles} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.PtFiles}
 */
proto.ondewo.s2t.PtFiles.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.setPath(value);
				break;
			case 2:
				var value = /** @type {string} */ (reader.readString());
				msg.setStep(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.PtFiles.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.PtFiles.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.PtFiles} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.PtFiles.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getPath();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getStep();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
};

/**
 * optional string path = 1;
 * @return {string}
 */
proto.ondewo.s2t.PtFiles.prototype.getPath = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.PtFiles} returns this
 */
proto.ondewo.s2t.PtFiles.prototype.setPath = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string step = 2;
 * @return {string}
 */
proto.ondewo.s2t.PtFiles.prototype.getStep = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.PtFiles} returns this
 */
proto.ondewo.s2t.PtFiles.prototype.setStep = function (value) {
	return jspb.Message.setProto3StringField(this, 2, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.CkptFile.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.CkptFile.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.CkptFile} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.CkptFile.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				path: jspb.Message.getFieldWithDefault(msg, 1, '')
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.CkptFile}
 */
proto.ondewo.s2t.CkptFile.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.CkptFile();
	return proto.ondewo.s2t.CkptFile.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.CkptFile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.CkptFile}
 */
proto.ondewo.s2t.CkptFile.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.setPath(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.CkptFile.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.CkptFile.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.CkptFile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.CkptFile.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getPath();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
};

/**
 * optional string path = 1;
 * @return {string}
 */
proto.ondewo.s2t.CkptFile.prototype.getPath = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.CkptFile} returns this
 */
proto.ondewo.s2t.CkptFile.prototype.setPath = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.QuartznetTriton.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.QuartznetTriton.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.QuartznetTriton} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.QuartznetTriton.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				configPath: jspb.Message.getFieldWithDefault(msg, 1, ''),
				tritonUrl: jspb.Message.getFieldWithDefault(msg, 2, ''),
				tritonModel: jspb.Message.getFieldWithDefault(msg, 3, '')
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.QuartznetTriton}
 */
proto.ondewo.s2t.QuartznetTriton.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.QuartznetTriton();
	return proto.ondewo.s2t.QuartznetTriton.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.QuartznetTriton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.QuartznetTriton}
 */
proto.ondewo.s2t.QuartznetTriton.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.setConfigPath(value);
				break;
			case 2:
				var value = /** @type {string} */ (reader.readString());
				msg.setTritonUrl(value);
				break;
			case 3:
				var value = /** @type {string} */ (reader.readString());
				msg.setTritonModel(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.QuartznetTriton.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.QuartznetTriton.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.QuartznetTriton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.QuartznetTriton.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getConfigPath();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getTritonUrl();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
	f = message.getTritonModel();
	if (f.length > 0) {
		writer.writeString(3, f);
	}
};

/**
 * optional string config_path = 1;
 * @return {string}
 */
proto.ondewo.s2t.QuartznetTriton.prototype.getConfigPath = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.QuartznetTriton} returns this
 */
proto.ondewo.s2t.QuartznetTriton.prototype.setConfigPath = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string triton_url = 2;
 * @return {string}
 */
proto.ondewo.s2t.QuartznetTriton.prototype.getTritonUrl = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.QuartznetTriton} returns this
 */
proto.ondewo.s2t.QuartznetTriton.prototype.setTritonUrl = function (value) {
	return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string triton_model = 3;
 * @return {string}
 */
proto.ondewo.s2t.QuartznetTriton.prototype.getTritonModel = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.QuartznetTriton} returns this
 */
proto.ondewo.s2t.QuartznetTriton.prototype.setTritonModel = function (value) {
	return jspb.Message.setProto3StringField(this, 3, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.LanguageModels.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.LanguageModels.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.LanguageModels} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.LanguageModels.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				path: jspb.Message.getFieldWithDefault(msg, 1, ''),
				beamSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
				defaultLm: jspb.Message.getFieldWithDefault(msg, 3, ''),
				beamSearchScorerAlpha: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
				beamSearchScorerBeta: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.LanguageModels}
 */
proto.ondewo.s2t.LanguageModels.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.LanguageModels();
	return proto.ondewo.s2t.LanguageModels.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.LanguageModels} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.LanguageModels}
 */
proto.ondewo.s2t.LanguageModels.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.setPath(value);
				break;
			case 2:
				var value = /** @type {number} */ (reader.readInt64());
				msg.setBeamSize(value);
				break;
			case 3:
				var value = /** @type {string} */ (reader.readString());
				msg.setDefaultLm(value);
				break;
			case 4:
				var value = /** @type {number} */ (reader.readFloat());
				msg.setBeamSearchScorerAlpha(value);
				break;
			case 5:
				var value = /** @type {number} */ (reader.readFloat());
				msg.setBeamSearchScorerBeta(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.LanguageModels.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.LanguageModels.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.LanguageModels} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.LanguageModels.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getPath();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getBeamSize();
	if (f !== 0) {
		writer.writeInt64(2, f);
	}
	f = message.getDefaultLm();
	if (f.length > 0) {
		writer.writeString(3, f);
	}
	f = message.getBeamSearchScorerAlpha();
	if (f !== 0.0) {
		writer.writeFloat(4, f);
	}
	f = message.getBeamSearchScorerBeta();
	if (f !== 0.0) {
		writer.writeFloat(5, f);
	}
};

/**
 * optional string path = 1;
 * @return {string}
 */
proto.ondewo.s2t.LanguageModels.prototype.getPath = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.LanguageModels} returns this
 */
proto.ondewo.s2t.LanguageModels.prototype.setPath = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional int64 beam_size = 2;
 * @return {number}
 */
proto.ondewo.s2t.LanguageModels.prototype.getBeamSize = function () {
	return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.s2t.LanguageModels} returns this
 */
proto.ondewo.s2t.LanguageModels.prototype.setBeamSize = function (value) {
	return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional string default_lm = 3;
 * @return {string}
 */
proto.ondewo.s2t.LanguageModels.prototype.getDefaultLm = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.LanguageModels} returns this
 */
proto.ondewo.s2t.LanguageModels.prototype.setDefaultLm = function (value) {
	return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional float beam_search_scorer_alpha = 4;
 * @return {number}
 */
proto.ondewo.s2t.LanguageModels.prototype.getBeamSearchScorerAlpha = function () {
	return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.s2t.LanguageModels} returns this
 */
proto.ondewo.s2t.LanguageModels.prototype.setBeamSearchScorerAlpha = function (value) {
	return jspb.Message.setProto3FloatField(this, 4, value);
};

/**
 * optional float beam_search_scorer_beta = 5;
 * @return {number}
 */
proto.ondewo.s2t.LanguageModels.prototype.getBeamSearchScorerBeta = function () {
	return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.s2t.LanguageModels} returns this
 */
proto.ondewo.s2t.LanguageModels.prototype.setBeamSearchScorerBeta = function (value) {
	return jspb.Message.setProto3FloatField(this, 5, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.StreamingServer.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.StreamingServer.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.StreamingServer} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.StreamingServer.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				host: jspb.Message.getFieldWithDefault(msg, 1, ''),
				port: jspb.Message.getFieldWithDefault(msg, 2, 0),
				outputStyle: jspb.Message.getFieldWithDefault(msg, 3, ''),
				streamingSpeechRecognition:
					(f = msg.getStreamingSpeechRecognition()) &&
					proto.ondewo.s2t.StreamingSpeechRecognition.toObject(includeInstance, f)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.StreamingServer}
 */
proto.ondewo.s2t.StreamingServer.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.StreamingServer();
	return proto.ondewo.s2t.StreamingServer.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.StreamingServer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.StreamingServer}
 */
proto.ondewo.s2t.StreamingServer.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.setHost(value);
				break;
			case 2:
				var value = /** @type {number} */ (reader.readInt64());
				msg.setPort(value);
				break;
			case 3:
				var value = /** @type {string} */ (reader.readString());
				msg.setOutputStyle(value);
				break;
			case 4:
				var value = new proto.ondewo.s2t.StreamingSpeechRecognition();
				reader.readMessage(value, proto.ondewo.s2t.StreamingSpeechRecognition.deserializeBinaryFromReader);
				msg.setStreamingSpeechRecognition(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.StreamingServer.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.StreamingServer.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.StreamingServer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.StreamingServer.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getHost();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getPort();
	if (f !== 0) {
		writer.writeInt64(2, f);
	}
	f = message.getOutputStyle();
	if (f.length > 0) {
		writer.writeString(3, f);
	}
	f = message.getStreamingSpeechRecognition();
	if (f != null) {
		writer.writeMessage(4, f, proto.ondewo.s2t.StreamingSpeechRecognition.serializeBinaryToWriter);
	}
};

/**
 * optional string host = 1;
 * @return {string}
 */
proto.ondewo.s2t.StreamingServer.prototype.getHost = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.StreamingServer} returns this
 */
proto.ondewo.s2t.StreamingServer.prototype.setHost = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional int64 port = 2;
 * @return {number}
 */
proto.ondewo.s2t.StreamingServer.prototype.getPort = function () {
	return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.s2t.StreamingServer} returns this
 */
proto.ondewo.s2t.StreamingServer.prototype.setPort = function (value) {
	return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional string output_style = 3;
 * @return {string}
 */
proto.ondewo.s2t.StreamingServer.prototype.getOutputStyle = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.StreamingServer} returns this
 */
proto.ondewo.s2t.StreamingServer.prototype.setOutputStyle = function (value) {
	return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional StreamingSpeechRecognition streaming_speech_recognition = 4;
 * @return {?proto.ondewo.s2t.StreamingSpeechRecognition}
 */
proto.ondewo.s2t.StreamingServer.prototype.getStreamingSpeechRecognition = function () {
	return /** @type{?proto.ondewo.s2t.StreamingSpeechRecognition} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.s2t.StreamingSpeechRecognition, 4)
	);
};

/**
 * @param {?proto.ondewo.s2t.StreamingSpeechRecognition|undefined} value
 * @return {!proto.ondewo.s2t.StreamingServer} returns this
 */
proto.ondewo.s2t.StreamingServer.prototype.setStreamingSpeechRecognition = function (value) {
	return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.StreamingServer} returns this
 */
proto.ondewo.s2t.StreamingServer.prototype.clearStreamingSpeechRecognition = function () {
	return this.setStreamingSpeechRecognition(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.StreamingServer.prototype.hasStreamingSpeechRecognition = function () {
	return jspb.Message.getField(this, 4) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.StreamingSpeechRecognition.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.StreamingSpeechRecognition.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.StreamingSpeechRecognition} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.StreamingSpeechRecognition.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				transcribeNotFinal: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
				decodingMethod: jspb.Message.getFieldWithDefault(msg, 2, ''),
				samplingRate: jspb.Message.getFieldWithDefault(msg, 3, 0),
				minAudioChunkSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
				startOfUtteranceThreshold: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
				endOfUtteranceThreshold: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
				nextChunkTimeout: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.StreamingSpeechRecognition}
 */
proto.ondewo.s2t.StreamingSpeechRecognition.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.StreamingSpeechRecognition();
	return proto.ondewo.s2t.StreamingSpeechRecognition.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.StreamingSpeechRecognition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.StreamingSpeechRecognition}
 */
proto.ondewo.s2t.StreamingSpeechRecognition.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {boolean} */ (reader.readBool());
				msg.setTranscribeNotFinal(value);
				break;
			case 2:
				var value = /** @type {string} */ (reader.readString());
				msg.setDecodingMethod(value);
				break;
			case 3:
				var value = /** @type {number} */ (reader.readInt64());
				msg.setSamplingRate(value);
				break;
			case 4:
				var value = /** @type {number} */ (reader.readInt64());
				msg.setMinAudioChunkSize(value);
				break;
			case 5:
				var value = /** @type {number} */ (reader.readFloat());
				msg.setStartOfUtteranceThreshold(value);
				break;
			case 6:
				var value = /** @type {number} */ (reader.readFloat());
				msg.setEndOfUtteranceThreshold(value);
				break;
			case 7:
				var value = /** @type {number} */ (reader.readFloat());
				msg.setNextChunkTimeout(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.StreamingSpeechRecognition.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.StreamingSpeechRecognition.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.StreamingSpeechRecognition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.StreamingSpeechRecognition.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getTranscribeNotFinal();
	if (f) {
		writer.writeBool(1, f);
	}
	f = message.getDecodingMethod();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
	f = message.getSamplingRate();
	if (f !== 0) {
		writer.writeInt64(3, f);
	}
	f = message.getMinAudioChunkSize();
	if (f !== 0) {
		writer.writeInt64(4, f);
	}
	f = message.getStartOfUtteranceThreshold();
	if (f !== 0.0) {
		writer.writeFloat(5, f);
	}
	f = message.getEndOfUtteranceThreshold();
	if (f !== 0.0) {
		writer.writeFloat(6, f);
	}
	f = message.getNextChunkTimeout();
	if (f !== 0.0) {
		writer.writeFloat(7, f);
	}
};

/**
 * optional bool transcribe_not_final = 1;
 * @return {boolean}
 */
proto.ondewo.s2t.StreamingSpeechRecognition.prototype.getTranscribeNotFinal = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.s2t.StreamingSpeechRecognition} returns this
 */
proto.ondewo.s2t.StreamingSpeechRecognition.prototype.setTranscribeNotFinal = function (value) {
	return jspb.Message.setProto3BooleanField(this, 1, value);
};

/**
 * optional string decoding_method = 2;
 * @return {string}
 */
proto.ondewo.s2t.StreamingSpeechRecognition.prototype.getDecodingMethod = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.StreamingSpeechRecognition} returns this
 */
proto.ondewo.s2t.StreamingSpeechRecognition.prototype.setDecodingMethod = function (value) {
	return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional int64 sampling_rate = 3;
 * @return {number}
 */
proto.ondewo.s2t.StreamingSpeechRecognition.prototype.getSamplingRate = function () {
	return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.s2t.StreamingSpeechRecognition} returns this
 */
proto.ondewo.s2t.StreamingSpeechRecognition.prototype.setSamplingRate = function (value) {
	return jspb.Message.setProto3IntField(this, 3, value);
};

/**
 * optional int64 min_audio_chunk_size = 4;
 * @return {number}
 */
proto.ondewo.s2t.StreamingSpeechRecognition.prototype.getMinAudioChunkSize = function () {
	return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.s2t.StreamingSpeechRecognition} returns this
 */
proto.ondewo.s2t.StreamingSpeechRecognition.prototype.setMinAudioChunkSize = function (value) {
	return jspb.Message.setProto3IntField(this, 4, value);
};

/**
 * optional float start_of_utterance_threshold = 5;
 * @return {number}
 */
proto.ondewo.s2t.StreamingSpeechRecognition.prototype.getStartOfUtteranceThreshold = function () {
	return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.s2t.StreamingSpeechRecognition} returns this
 */
proto.ondewo.s2t.StreamingSpeechRecognition.prototype.setStartOfUtteranceThreshold = function (value) {
	return jspb.Message.setProto3FloatField(this, 5, value);
};

/**
 * optional float end_of_utterance_threshold = 6;
 * @return {number}
 */
proto.ondewo.s2t.StreamingSpeechRecognition.prototype.getEndOfUtteranceThreshold = function () {
	return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.s2t.StreamingSpeechRecognition} returns this
 */
proto.ondewo.s2t.StreamingSpeechRecognition.prototype.setEndOfUtteranceThreshold = function (value) {
	return jspb.Message.setProto3FloatField(this, 6, value);
};

/**
 * optional float next_chunk_timeout = 7;
 * @return {number}
 */
proto.ondewo.s2t.StreamingSpeechRecognition.prototype.getNextChunkTimeout = function () {
	return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.s2t.StreamingSpeechRecognition} returns this
 */
proto.ondewo.s2t.StreamingSpeechRecognition.prototype.setNextChunkTimeout = function (value) {
	return jspb.Message.setProto3FloatField(this, 7, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.VoiceActivityDetection.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.VoiceActivityDetection.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.VoiceActivityDetection} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.VoiceActivityDetection.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				active: jspb.Message.getFieldWithDefault(msg, 1, ''),
				samplingRate: jspb.Message.getFieldWithDefault(msg, 2, 0),
				pyannote: (f = msg.getPyannote()) && proto.ondewo.s2t.Pyannote.toObject(includeInstance, f),
				matchbox: (f = msg.getMatchbox()) && proto.ondewo.s2t.Matchbox.toObject(includeInstance, f)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.VoiceActivityDetection}
 */
proto.ondewo.s2t.VoiceActivityDetection.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.VoiceActivityDetection();
	return proto.ondewo.s2t.VoiceActivityDetection.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.VoiceActivityDetection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.VoiceActivityDetection}
 */
proto.ondewo.s2t.VoiceActivityDetection.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.setActive(value);
				break;
			case 2:
				var value = /** @type {number} */ (reader.readInt64());
				msg.setSamplingRate(value);
				break;
			case 3:
				var value = new proto.ondewo.s2t.Pyannote();
				reader.readMessage(value, proto.ondewo.s2t.Pyannote.deserializeBinaryFromReader);
				msg.setPyannote(value);
				break;
			case 4:
				var value = new proto.ondewo.s2t.Matchbox();
				reader.readMessage(value, proto.ondewo.s2t.Matchbox.deserializeBinaryFromReader);
				msg.setMatchbox(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.VoiceActivityDetection.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.VoiceActivityDetection.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.VoiceActivityDetection} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.VoiceActivityDetection.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getActive();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getSamplingRate();
	if (f !== 0) {
		writer.writeInt64(2, f);
	}
	f = message.getPyannote();
	if (f != null) {
		writer.writeMessage(3, f, proto.ondewo.s2t.Pyannote.serializeBinaryToWriter);
	}
	f = message.getMatchbox();
	if (f != null) {
		writer.writeMessage(4, f, proto.ondewo.s2t.Matchbox.serializeBinaryToWriter);
	}
};

/**
 * optional string active = 1;
 * @return {string}
 */
proto.ondewo.s2t.VoiceActivityDetection.prototype.getActive = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.VoiceActivityDetection} returns this
 */
proto.ondewo.s2t.VoiceActivityDetection.prototype.setActive = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional int64 sampling_rate = 2;
 * @return {number}
 */
proto.ondewo.s2t.VoiceActivityDetection.prototype.getSamplingRate = function () {
	return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.s2t.VoiceActivityDetection} returns this
 */
proto.ondewo.s2t.VoiceActivityDetection.prototype.setSamplingRate = function (value) {
	return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional Pyannote pyannote = 3;
 * @return {?proto.ondewo.s2t.Pyannote}
 */
proto.ondewo.s2t.VoiceActivityDetection.prototype.getPyannote = function () {
	return /** @type{?proto.ondewo.s2t.Pyannote} */ (jspb.Message.getWrapperField(this, proto.ondewo.s2t.Pyannote, 3));
};

/**
 * @param {?proto.ondewo.s2t.Pyannote|undefined} value
 * @return {!proto.ondewo.s2t.VoiceActivityDetection} returns this
 */
proto.ondewo.s2t.VoiceActivityDetection.prototype.setPyannote = function (value) {
	return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.VoiceActivityDetection} returns this
 */
proto.ondewo.s2t.VoiceActivityDetection.prototype.clearPyannote = function () {
	return this.setPyannote(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.VoiceActivityDetection.prototype.hasPyannote = function () {
	return jspb.Message.getField(this, 3) != null;
};

/**
 * optional Matchbox matchbox = 4;
 * @return {?proto.ondewo.s2t.Matchbox}
 */
proto.ondewo.s2t.VoiceActivityDetection.prototype.getMatchbox = function () {
	return /** @type{?proto.ondewo.s2t.Matchbox} */ (jspb.Message.getWrapperField(this, proto.ondewo.s2t.Matchbox, 4));
};

/**
 * @param {?proto.ondewo.s2t.Matchbox|undefined} value
 * @return {!proto.ondewo.s2t.VoiceActivityDetection} returns this
 */
proto.ondewo.s2t.VoiceActivityDetection.prototype.setMatchbox = function (value) {
	return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.VoiceActivityDetection} returns this
 */
proto.ondewo.s2t.VoiceActivityDetection.prototype.clearMatchbox = function () {
	return this.setMatchbox(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.VoiceActivityDetection.prototype.hasMatchbox = function () {
	return jspb.Message.getField(this, 4) != null;
};

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ondewo.s2t.Pyannote.oneofGroups_ = [[5]];

/**
 * @enum {number}
 */
proto.ondewo.s2t.Pyannote.OneofLogScaleCase = {
	ONEOF_LOG_SCALE_NOT_SET: 0,
	LOG_SCALE: 5
};

/**
 * @return {proto.ondewo.s2t.Pyannote.OneofLogScaleCase}
 */
proto.ondewo.s2t.Pyannote.prototype.getOneofLogScaleCase = function () {
	return /** @type {proto.ondewo.s2t.Pyannote.OneofLogScaleCase} */ (
		jspb.Message.computeOneofCase(this, proto.ondewo.s2t.Pyannote.oneofGroups_[0])
	);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.Pyannote.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.Pyannote.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.Pyannote} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.Pyannote.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				modelPath: jspb.Message.getFieldWithDefault(msg, 1, ''),
				minAudioSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
				offset: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
				onset: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
				logScale: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
				minDurationOff: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
				minDurationOn: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.Pyannote}
 */
proto.ondewo.s2t.Pyannote.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.Pyannote();
	return proto.ondewo.s2t.Pyannote.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.Pyannote} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.Pyannote}
 */
proto.ondewo.s2t.Pyannote.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.setModelPath(value);
				break;
			case 2:
				var value = /** @type {number} */ (reader.readInt64());
				msg.setMinAudioSize(value);
				break;
			case 3:
				var value = /** @type {number} */ (reader.readFloat());
				msg.setOffset(value);
				break;
			case 4:
				var value = /** @type {number} */ (reader.readFloat());
				msg.setOnset(value);
				break;
			case 5:
				var value = /** @type {boolean} */ (reader.readBool());
				msg.setLogScale(value);
				break;
			case 6:
				var value = /** @type {number} */ (reader.readFloat());
				msg.setMinDurationOff(value);
				break;
			case 7:
				var value = /** @type {number} */ (reader.readFloat());
				msg.setMinDurationOn(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.Pyannote.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.Pyannote.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.Pyannote} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.Pyannote.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getModelPath();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getMinAudioSize();
	if (f !== 0) {
		writer.writeInt64(2, f);
	}
	f = message.getOffset();
	if (f !== 0.0) {
		writer.writeFloat(3, f);
	}
	f = message.getOnset();
	if (f !== 0.0) {
		writer.writeFloat(4, f);
	}
	f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
	if (f != null) {
		writer.writeBool(5, f);
	}
	f = message.getMinDurationOff();
	if (f !== 0.0) {
		writer.writeFloat(6, f);
	}
	f = message.getMinDurationOn();
	if (f !== 0.0) {
		writer.writeFloat(7, f);
	}
};

/**
 * optional string model_path = 1;
 * @return {string}
 */
proto.ondewo.s2t.Pyannote.prototype.getModelPath = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.Pyannote} returns this
 */
proto.ondewo.s2t.Pyannote.prototype.setModelPath = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional int64 min_audio_size = 2;
 * @return {number}
 */
proto.ondewo.s2t.Pyannote.prototype.getMinAudioSize = function () {
	return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.s2t.Pyannote} returns this
 */
proto.ondewo.s2t.Pyannote.prototype.setMinAudioSize = function (value) {
	return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional float offset = 3;
 * @return {number}
 */
proto.ondewo.s2t.Pyannote.prototype.getOffset = function () {
	return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.s2t.Pyannote} returns this
 */
proto.ondewo.s2t.Pyannote.prototype.setOffset = function (value) {
	return jspb.Message.setProto3FloatField(this, 3, value);
};

/**
 * optional float onset = 4;
 * @return {number}
 */
proto.ondewo.s2t.Pyannote.prototype.getOnset = function () {
	return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.s2t.Pyannote} returns this
 */
proto.ondewo.s2t.Pyannote.prototype.setOnset = function (value) {
	return jspb.Message.setProto3FloatField(this, 4, value);
};

/**
 * optional bool log_scale = 5;
 * @return {boolean}
 */
proto.ondewo.s2t.Pyannote.prototype.getLogScale = function () {
	return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};

/**
 * @param {boolean} value
 * @return {!proto.ondewo.s2t.Pyannote} returns this
 */
proto.ondewo.s2t.Pyannote.prototype.setLogScale = function (value) {
	return jspb.Message.setOneofField(this, 5, proto.ondewo.s2t.Pyannote.oneofGroups_[0], value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.s2t.Pyannote} returns this
 */
proto.ondewo.s2t.Pyannote.prototype.clearLogScale = function () {
	return jspb.Message.setOneofField(this, 5, proto.ondewo.s2t.Pyannote.oneofGroups_[0], undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.Pyannote.prototype.hasLogScale = function () {
	return jspb.Message.getField(this, 5) != null;
};

/**
 * optional float min_duration_off = 6;
 * @return {number}
 */
proto.ondewo.s2t.Pyannote.prototype.getMinDurationOff = function () {
	return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.s2t.Pyannote} returns this
 */
proto.ondewo.s2t.Pyannote.prototype.setMinDurationOff = function (value) {
	return jspb.Message.setProto3FloatField(this, 6, value);
};

/**
 * optional float min_duration_on = 7;
 * @return {number}
 */
proto.ondewo.s2t.Pyannote.prototype.getMinDurationOn = function () {
	return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.s2t.Pyannote} returns this
 */
proto.ondewo.s2t.Pyannote.prototype.setMinDurationOn = function (value) {
	return jspb.Message.setProto3FloatField(this, 7, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.Matchbox.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.Matchbox.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.Matchbox} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.Matchbox.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				modelConfig: jspb.Message.getFieldWithDefault(msg, 1, ''),
				encoderPath: jspb.Message.getFieldWithDefault(msg, 2, ''),
				decoderPath: jspb.Message.getFieldWithDefault(msg, 3, '')
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.Matchbox}
 */
proto.ondewo.s2t.Matchbox.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.Matchbox();
	return proto.ondewo.s2t.Matchbox.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.Matchbox} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.Matchbox}
 */
proto.ondewo.s2t.Matchbox.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.setModelConfig(value);
				break;
			case 2:
				var value = /** @type {string} */ (reader.readString());
				msg.setEncoderPath(value);
				break;
			case 3:
				var value = /** @type {string} */ (reader.readString());
				msg.setDecoderPath(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.Matchbox.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.Matchbox.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.Matchbox} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.Matchbox.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getModelConfig();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getEncoderPath();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
	f = message.getDecoderPath();
	if (f.length > 0) {
		writer.writeString(3, f);
	}
};

/**
 * optional string model_config = 1;
 * @return {string}
 */
proto.ondewo.s2t.Matchbox.prototype.getModelConfig = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.Matchbox} returns this
 */
proto.ondewo.s2t.Matchbox.prototype.setModelConfig = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string encoder_path = 2;
 * @return {string}
 */
proto.ondewo.s2t.Matchbox.prototype.getEncoderPath = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.Matchbox} returns this
 */
proto.ondewo.s2t.Matchbox.prototype.setEncoderPath = function (value) {
	return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string decoder_path = 3;
 * @return {string}
 */
proto.ondewo.s2t.Matchbox.prototype.getDecoderPath = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.Matchbox} returns this
 */
proto.ondewo.s2t.Matchbox.prototype.setDecoderPath = function (value) {
	return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.s2t.PostProcessing.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.PostProcessing.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.PostProcessing.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.PostProcessing} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.PostProcessing.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				pipelineList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
				postProcessors: (f = msg.getPostProcessors()) && proto.ondewo.s2t.PostProcessors.toObject(includeInstance, f)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.PostProcessing}
 */
proto.ondewo.s2t.PostProcessing.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.PostProcessing();
	return proto.ondewo.s2t.PostProcessing.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.PostProcessing} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.PostProcessing}
 */
proto.ondewo.s2t.PostProcessing.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.addPipeline(value);
				break;
			case 2:
				var value = new proto.ondewo.s2t.PostProcessors();
				reader.readMessage(value, proto.ondewo.s2t.PostProcessors.deserializeBinaryFromReader);
				msg.setPostProcessors(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.PostProcessing.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.PostProcessing.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.PostProcessing} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.PostProcessing.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getPipelineList();
	if (f.length > 0) {
		writer.writeRepeatedString(1, f);
	}
	f = message.getPostProcessors();
	if (f != null) {
		writer.writeMessage(2, f, proto.ondewo.s2t.PostProcessors.serializeBinaryToWriter);
	}
};

/**
 * repeated string pipeline = 1;
 * @return {!Array<string>}
 */
proto.ondewo.s2t.PostProcessing.prototype.getPipelineList = function () {
	return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.s2t.PostProcessing} returns this
 */
proto.ondewo.s2t.PostProcessing.prototype.setPipelineList = function (value) {
	return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.s2t.PostProcessing} returns this
 */
proto.ondewo.s2t.PostProcessing.prototype.addPipeline = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.s2t.PostProcessing} returns this
 */
proto.ondewo.s2t.PostProcessing.prototype.clearPipelineList = function () {
	return this.setPipelineList([]);
};

/**
 * optional PostProcessors post_processors = 2;
 * @return {?proto.ondewo.s2t.PostProcessors}
 */
proto.ondewo.s2t.PostProcessing.prototype.getPostProcessors = function () {
	return /** @type{?proto.ondewo.s2t.PostProcessors} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.s2t.PostProcessors, 2)
	);
};

/**
 * @param {?proto.ondewo.s2t.PostProcessors|undefined} value
 * @return {!proto.ondewo.s2t.PostProcessing} returns this
 */
proto.ondewo.s2t.PostProcessing.prototype.setPostProcessors = function (value) {
	return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.PostProcessing} returns this
 */
proto.ondewo.s2t.PostProcessing.prototype.clearPostProcessors = function () {
	return this.setPostProcessors(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.PostProcessing.prototype.hasPostProcessors = function () {
	return jspb.Message.getField(this, 2) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.PostProcessors.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.PostProcessors.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.PostProcessors} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.PostProcessors.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				symSpell: (f = msg.getSymSpell()) && proto.ondewo.s2t.SymSpell.toObject(includeInstance, f),
				normalization: (f = msg.getNormalization()) && proto.ondewo.s2t.S2TNormalization.toObject(includeInstance, f)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.PostProcessors}
 */
proto.ondewo.s2t.PostProcessors.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.PostProcessors();
	return proto.ondewo.s2t.PostProcessors.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.PostProcessors} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.PostProcessors}
 */
proto.ondewo.s2t.PostProcessors.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = new proto.ondewo.s2t.SymSpell();
				reader.readMessage(value, proto.ondewo.s2t.SymSpell.deserializeBinaryFromReader);
				msg.setSymSpell(value);
				break;
			case 2:
				var value = new proto.ondewo.s2t.S2TNormalization();
				reader.readMessage(value, proto.ondewo.s2t.S2TNormalization.deserializeBinaryFromReader);
				msg.setNormalization(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.PostProcessors.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.PostProcessors.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.PostProcessors} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.PostProcessors.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getSymSpell();
	if (f != null) {
		writer.writeMessage(1, f, proto.ondewo.s2t.SymSpell.serializeBinaryToWriter);
	}
	f = message.getNormalization();
	if (f != null) {
		writer.writeMessage(2, f, proto.ondewo.s2t.S2TNormalization.serializeBinaryToWriter);
	}
};

/**
 * optional SymSpell sym_spell = 1;
 * @return {?proto.ondewo.s2t.SymSpell}
 */
proto.ondewo.s2t.PostProcessors.prototype.getSymSpell = function () {
	return /** @type{?proto.ondewo.s2t.SymSpell} */ (jspb.Message.getWrapperField(this, proto.ondewo.s2t.SymSpell, 1));
};

/**
 * @param {?proto.ondewo.s2t.SymSpell|undefined} value
 * @return {!proto.ondewo.s2t.PostProcessors} returns this
 */
proto.ondewo.s2t.PostProcessors.prototype.setSymSpell = function (value) {
	return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.PostProcessors} returns this
 */
proto.ondewo.s2t.PostProcessors.prototype.clearSymSpell = function () {
	return this.setSymSpell(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.PostProcessors.prototype.hasSymSpell = function () {
	return jspb.Message.getField(this, 1) != null;
};

/**
 * optional S2TNormalization normalization = 2;
 * @return {?proto.ondewo.s2t.S2TNormalization}
 */
proto.ondewo.s2t.PostProcessors.prototype.getNormalization = function () {
	return /** @type{?proto.ondewo.s2t.S2TNormalization} */ (
		jspb.Message.getWrapperField(this, proto.ondewo.s2t.S2TNormalization, 2)
	);
};

/**
 * @param {?proto.ondewo.s2t.S2TNormalization|undefined} value
 * @return {!proto.ondewo.s2t.PostProcessors} returns this
 */
proto.ondewo.s2t.PostProcessors.prototype.setNormalization = function (value) {
	return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.s2t.PostProcessors} returns this
 */
proto.ondewo.s2t.PostProcessors.prototype.clearNormalization = function () {
	return this.setNormalization(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.s2t.PostProcessors.prototype.hasNormalization = function () {
	return jspb.Message.getField(this, 2) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.SymSpell.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.SymSpell.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.SymSpell} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.SymSpell.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				dictPath: jspb.Message.getFieldWithDefault(msg, 1, ''),
				maxDictionaryEditDistance: jspb.Message.getFieldWithDefault(msg, 2, 0),
				prefixLength: jspb.Message.getFieldWithDefault(msg, 3, 0)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.SymSpell}
 */
proto.ondewo.s2t.SymSpell.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.SymSpell();
	return proto.ondewo.s2t.SymSpell.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.SymSpell} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.SymSpell}
 */
proto.ondewo.s2t.SymSpell.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.setDictPath(value);
				break;
			case 2:
				var value = /** @type {number} */ (reader.readInt64());
				msg.setMaxDictionaryEditDistance(value);
				break;
			case 3:
				var value = /** @type {number} */ (reader.readInt64());
				msg.setPrefixLength(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.SymSpell.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.SymSpell.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.SymSpell} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.SymSpell.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getDictPath();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getMaxDictionaryEditDistance();
	if (f !== 0) {
		writer.writeInt64(2, f);
	}
	f = message.getPrefixLength();
	if (f !== 0) {
		writer.writeInt64(3, f);
	}
};

/**
 * optional string dict_path = 1;
 * @return {string}
 */
proto.ondewo.s2t.SymSpell.prototype.getDictPath = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.SymSpell} returns this
 */
proto.ondewo.s2t.SymSpell.prototype.setDictPath = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional int64 max_dictionary_edit_distance = 2;
 * @return {number}
 */
proto.ondewo.s2t.SymSpell.prototype.getMaxDictionaryEditDistance = function () {
	return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.s2t.SymSpell} returns this
 */
proto.ondewo.s2t.SymSpell.prototype.setMaxDictionaryEditDistance = function (value) {
	return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional int64 prefix_length = 3;
 * @return {number}
 */
proto.ondewo.s2t.SymSpell.prototype.getPrefixLength = function () {
	return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.s2t.SymSpell} returns this
 */
proto.ondewo.s2t.SymSpell.prototype.setPrefixLength = function (value) {
	return jspb.Message.setProto3IntField(this, 3, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.S2TNormalization.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.S2TNormalization.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.S2TNormalization} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.S2TNormalization.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				language: jspb.Message.getFieldWithDefault(msg, 1, '')
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.S2TNormalization}
 */
proto.ondewo.s2t.S2TNormalization.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.S2TNormalization();
	return proto.ondewo.s2t.S2TNormalization.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.S2TNormalization} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.S2TNormalization}
 */
proto.ondewo.s2t.S2TNormalization.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.setLanguage(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.S2TNormalization.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.S2TNormalization.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.S2TNormalization} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.S2TNormalization.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getLanguage();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
};

/**
 * optional string language = 1;
 * @return {string}
 */
proto.ondewo.s2t.S2TNormalization.prototype.getLanguage = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.S2TNormalization} returns this
 */
proto.ondewo.s2t.S2TNormalization.prototype.setLanguage = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.Logging.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.Logging.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.Logging} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.Logging.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				type: jspb.Message.getFieldWithDefault(msg, 1, ''),
				path: jspb.Message.getFieldWithDefault(msg, 2, '')
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.Logging}
 */
proto.ondewo.s2t.Logging.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.Logging();
	return proto.ondewo.s2t.Logging.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.Logging} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.Logging}
 */
proto.ondewo.s2t.Logging.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.setType(value);
				break;
			case 2:
				var value = /** @type {string} */ (reader.readString());
				msg.setPath(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.Logging.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.Logging.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.Logging} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.Logging.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getType();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getPath();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
};

/**
 * optional string type = 1;
 * @return {string}
 */
proto.ondewo.s2t.Logging.prototype.getType = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.Logging} returns this
 */
proto.ondewo.s2t.Logging.prototype.setType = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string path = 2;
 * @return {string}
 */
proto.ondewo.s2t.Logging.prototype.getPath = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.Logging} returns this
 */
proto.ondewo.s2t.Logging.prototype.setPath = function (value) {
	return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.s2t.ListS2tLanguageModelsRequest.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.ListS2tLanguageModelsRequest.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.ListS2tLanguageModelsRequest.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.ListS2tLanguageModelsRequest} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.ListS2tLanguageModelsRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				idsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.ListS2tLanguageModelsRequest}
 */
proto.ondewo.s2t.ListS2tLanguageModelsRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.ListS2tLanguageModelsRequest();
	return proto.ondewo.s2t.ListS2tLanguageModelsRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.ListS2tLanguageModelsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.ListS2tLanguageModelsRequest}
 */
proto.ondewo.s2t.ListS2tLanguageModelsRequest.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.addIds(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.ListS2tLanguageModelsRequest.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.ListS2tLanguageModelsRequest.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.ListS2tLanguageModelsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.ListS2tLanguageModelsRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getIdsList();
	if (f.length > 0) {
		writer.writeRepeatedString(1, f);
	}
};

/**
 * repeated string ids = 1;
 * @return {!Array<string>}
 */
proto.ondewo.s2t.ListS2tLanguageModelsRequest.prototype.getIdsList = function () {
	return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.s2t.ListS2tLanguageModelsRequest} returns this
 */
proto.ondewo.s2t.ListS2tLanguageModelsRequest.prototype.setIdsList = function (value) {
	return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.s2t.ListS2tLanguageModelsRequest} returns this
 */
proto.ondewo.s2t.ListS2tLanguageModelsRequest.prototype.addIds = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.s2t.ListS2tLanguageModelsRequest} returns this
 */
proto.ondewo.s2t.ListS2tLanguageModelsRequest.prototype.clearIdsList = function () {
	return this.setIdsList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.s2t.LanguageModelPipelineId.repeatedFields_ = [2];

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.LanguageModelPipelineId.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.LanguageModelPipelineId.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.LanguageModelPipelineId} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.LanguageModelPipelineId.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				pipelineId: jspb.Message.getFieldWithDefault(msg, 1, ''),
				modelNamesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.LanguageModelPipelineId}
 */
proto.ondewo.s2t.LanguageModelPipelineId.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.LanguageModelPipelineId();
	return proto.ondewo.s2t.LanguageModelPipelineId.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.LanguageModelPipelineId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.LanguageModelPipelineId}
 */
proto.ondewo.s2t.LanguageModelPipelineId.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.setPipelineId(value);
				break;
			case 2:
				var value = /** @type {string} */ (reader.readString());
				msg.addModelNames(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.LanguageModelPipelineId.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.LanguageModelPipelineId.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.LanguageModelPipelineId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.LanguageModelPipelineId.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getPipelineId();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getModelNamesList();
	if (f.length > 0) {
		writer.writeRepeatedString(2, f);
	}
};

/**
 * optional string pipeline_id = 1;
 * @return {string}
 */
proto.ondewo.s2t.LanguageModelPipelineId.prototype.getPipelineId = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.LanguageModelPipelineId} returns this
 */
proto.ondewo.s2t.LanguageModelPipelineId.prototype.setPipelineId = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * repeated string model_names = 2;
 * @return {!Array<string>}
 */
proto.ondewo.s2t.LanguageModelPipelineId.prototype.getModelNamesList = function () {
	return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.s2t.LanguageModelPipelineId} returns this
 */
proto.ondewo.s2t.LanguageModelPipelineId.prototype.setModelNamesList = function (value) {
	return jspb.Message.setField(this, 2, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.s2t.LanguageModelPipelineId} returns this
 */
proto.ondewo.s2t.LanguageModelPipelineId.prototype.addModelNames = function (value, opt_index) {
	return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.s2t.LanguageModelPipelineId} returns this
 */
proto.ondewo.s2t.LanguageModelPipelineId.prototype.clearModelNamesList = function () {
	return this.setModelNamesList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.s2t.ListS2tLanguageModelsResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.ListS2tLanguageModelsResponse.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.ListS2tLanguageModelsResponse.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.ListS2tLanguageModelsResponse} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.ListS2tLanguageModelsResponse.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				lmPipelineIdsList: jspb.Message.toObjectList(
					msg.getLmPipelineIdsList(),
					proto.ondewo.s2t.LanguageModelPipelineId.toObject,
					includeInstance
				)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.ListS2tLanguageModelsResponse}
 */
proto.ondewo.s2t.ListS2tLanguageModelsResponse.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.ListS2tLanguageModelsResponse();
	return proto.ondewo.s2t.ListS2tLanguageModelsResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.ListS2tLanguageModelsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.ListS2tLanguageModelsResponse}
 */
proto.ondewo.s2t.ListS2tLanguageModelsResponse.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = new proto.ondewo.s2t.LanguageModelPipelineId();
				reader.readMessage(value, proto.ondewo.s2t.LanguageModelPipelineId.deserializeBinaryFromReader);
				msg.addLmPipelineIds(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.ListS2tLanguageModelsResponse.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.ListS2tLanguageModelsResponse.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.ListS2tLanguageModelsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.ListS2tLanguageModelsResponse.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getLmPipelineIdsList();
	if (f.length > 0) {
		writer.writeRepeatedMessage(1, f, proto.ondewo.s2t.LanguageModelPipelineId.serializeBinaryToWriter);
	}
};

/**
 * repeated LanguageModelPipelineId lm_pipeline_ids = 1;
 * @return {!Array<!proto.ondewo.s2t.LanguageModelPipelineId>}
 */
proto.ondewo.s2t.ListS2tLanguageModelsResponse.prototype.getLmPipelineIdsList = function () {
	return /** @type{!Array<!proto.ondewo.s2t.LanguageModelPipelineId>} */ (
		jspb.Message.getRepeatedWrapperField(this, proto.ondewo.s2t.LanguageModelPipelineId, 1)
	);
};

/**
 * @param {!Array<!proto.ondewo.s2t.LanguageModelPipelineId>} value
 * @return {!proto.ondewo.s2t.ListS2tLanguageModelsResponse} returns this
 */
proto.ondewo.s2t.ListS2tLanguageModelsResponse.prototype.setLmPipelineIdsList = function (value) {
	return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.ondewo.s2t.LanguageModelPipelineId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.s2t.LanguageModelPipelineId}
 */
proto.ondewo.s2t.ListS2tLanguageModelsResponse.prototype.addLmPipelineIds = function (opt_value, opt_index) {
	return jspb.Message.addToRepeatedWrapperField(
		this,
		1,
		opt_value,
		proto.ondewo.s2t.LanguageModelPipelineId,
		opt_index
	);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.s2t.ListS2tLanguageModelsResponse} returns this
 */
proto.ondewo.s2t.ListS2tLanguageModelsResponse.prototype.clearLmPipelineIdsList = function () {
	return this.setLmPipelineIdsList([]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.CreateUserLanguageModelRequest.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.CreateUserLanguageModelRequest.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.CreateUserLanguageModelRequest} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.CreateUserLanguageModelRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				languageModelName: jspb.Message.getFieldWithDefault(msg, 1, '')
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.CreateUserLanguageModelRequest}
 */
proto.ondewo.s2t.CreateUserLanguageModelRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.CreateUserLanguageModelRequest();
	return proto.ondewo.s2t.CreateUserLanguageModelRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.CreateUserLanguageModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.CreateUserLanguageModelRequest}
 */
proto.ondewo.s2t.CreateUserLanguageModelRequest.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.setLanguageModelName(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.CreateUserLanguageModelRequest.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.CreateUserLanguageModelRequest.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.CreateUserLanguageModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.CreateUserLanguageModelRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getLanguageModelName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
};

/**
 * optional string language_model_name = 1;
 * @return {string}
 */
proto.ondewo.s2t.CreateUserLanguageModelRequest.prototype.getLanguageModelName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.CreateUserLanguageModelRequest} returns this
 */
proto.ondewo.s2t.CreateUserLanguageModelRequest.prototype.setLanguageModelName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.DeleteUserLanguageModelRequest.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.DeleteUserLanguageModelRequest.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.DeleteUserLanguageModelRequest} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.DeleteUserLanguageModelRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				languageModelName: jspb.Message.getFieldWithDefault(msg, 1, '')
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.DeleteUserLanguageModelRequest}
 */
proto.ondewo.s2t.DeleteUserLanguageModelRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.DeleteUserLanguageModelRequest();
	return proto.ondewo.s2t.DeleteUserLanguageModelRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.DeleteUserLanguageModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.DeleteUserLanguageModelRequest}
 */
proto.ondewo.s2t.DeleteUserLanguageModelRequest.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.setLanguageModelName(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.DeleteUserLanguageModelRequest.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.DeleteUserLanguageModelRequest.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.DeleteUserLanguageModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.DeleteUserLanguageModelRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getLanguageModelName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
};

/**
 * optional string language_model_name = 1;
 * @return {string}
 */
proto.ondewo.s2t.DeleteUserLanguageModelRequest.prototype.getLanguageModelName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.DeleteUserLanguageModelRequest} returns this
 */
proto.ondewo.s2t.DeleteUserLanguageModelRequest.prototype.setLanguageModelName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.AddDataToUserLanguageModelRequest.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.AddDataToUserLanguageModelRequest.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.AddDataToUserLanguageModelRequest} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.AddDataToUserLanguageModelRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				languageModelName: jspb.Message.getFieldWithDefault(msg, 1, ''),
				zippedData: msg.getZippedData_asB64()
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.AddDataToUserLanguageModelRequest}
 */
proto.ondewo.s2t.AddDataToUserLanguageModelRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.AddDataToUserLanguageModelRequest();
	return proto.ondewo.s2t.AddDataToUserLanguageModelRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.AddDataToUserLanguageModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.AddDataToUserLanguageModelRequest}
 */
proto.ondewo.s2t.AddDataToUserLanguageModelRequest.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.setLanguageModelName(value);
				break;
			case 2:
				var value = /** @type {!Uint8Array} */ (reader.readBytes());
				msg.setZippedData(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.AddDataToUserLanguageModelRequest.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.AddDataToUserLanguageModelRequest.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.AddDataToUserLanguageModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.AddDataToUserLanguageModelRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getLanguageModelName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getZippedData_asU8();
	if (f.length > 0) {
		writer.writeBytes(2, f);
	}
};

/**
 * optional string language_model_name = 1;
 * @return {string}
 */
proto.ondewo.s2t.AddDataToUserLanguageModelRequest.prototype.getLanguageModelName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.AddDataToUserLanguageModelRequest} returns this
 */
proto.ondewo.s2t.AddDataToUserLanguageModelRequest.prototype.setLanguageModelName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional bytes zipped_data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.ondewo.s2t.AddDataToUserLanguageModelRequest.prototype.getZippedData = function () {
	return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * optional bytes zipped_data = 2;
 * This is a type-conversion wrapper around `getZippedData()`
 * @return {string}
 */
proto.ondewo.s2t.AddDataToUserLanguageModelRequest.prototype.getZippedData_asB64 = function () {
	return /** @type {string} */ (jspb.Message.bytesAsB64(this.getZippedData()));
};

/**
 * optional bytes zipped_data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getZippedData()`
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.AddDataToUserLanguageModelRequest.prototype.getZippedData_asU8 = function () {
	return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getZippedData()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ondewo.s2t.AddDataToUserLanguageModelRequest} returns this
 */
proto.ondewo.s2t.AddDataToUserLanguageModelRequest.prototype.setZippedData = function (value) {
	return jspb.Message.setProto3BytesField(this, 2, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
	/**
	 * Creates an object representation of this proto.
	 * Field names that are reserved in JavaScript and will be renamed to pb_name.
	 * Optional fields that are not set will be set to undefined.
	 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
	 * For the list of reserved names please see:
	 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
	 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
	 *     JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @return {!Object}
	 */
	proto.ondewo.s2t.TrainUserLanguageModelRequest.prototype.toObject = function (opt_includeInstance) {
		return proto.ondewo.s2t.TrainUserLanguageModelRequest.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.ondewo.s2t.TrainUserLanguageModelRequest} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.ondewo.s2t.TrainUserLanguageModelRequest.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				languageModelName: jspb.Message.getFieldWithDefault(msg, 1, ''),
				order: jspb.Message.getFieldWithDefault(msg, 2, 0)
			};

		if (includeInstance) {
			obj.$jspbMessageInstance = msg;
		}
		return obj;
	};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.s2t.TrainUserLanguageModelRequest}
 */
proto.ondewo.s2t.TrainUserLanguageModelRequest.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.ondewo.s2t.TrainUserLanguageModelRequest();
	return proto.ondewo.s2t.TrainUserLanguageModelRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.s2t.TrainUserLanguageModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.s2t.TrainUserLanguageModelRequest}
 */
proto.ondewo.s2t.TrainUserLanguageModelRequest.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {string} */ (reader.readString());
				msg.setLanguageModelName(value);
				break;
			case 2:
				var value = /** @type {number} */ (reader.readInt64());
				msg.setOrder(value);
				break;
			default:
				reader.skipField();
				break;
		}
	}
	return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.s2t.TrainUserLanguageModelRequest.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.ondewo.s2t.TrainUserLanguageModelRequest.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.s2t.TrainUserLanguageModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.s2t.TrainUserLanguageModelRequest.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getLanguageModelName();
	if (f.length > 0) {
		writer.writeString(1, f);
	}
	f = message.getOrder();
	if (f !== 0) {
		writer.writeInt64(2, f);
	}
};

/**
 * optional string language_model_name = 1;
 * @return {string}
 */
proto.ondewo.s2t.TrainUserLanguageModelRequest.prototype.getLanguageModelName = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.ondewo.s2t.TrainUserLanguageModelRequest} returns this
 */
proto.ondewo.s2t.TrainUserLanguageModelRequest.prototype.setLanguageModelName = function (value) {
	return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional int64 order = 2;
 * @return {number}
 */
proto.ondewo.s2t.TrainUserLanguageModelRequest.prototype.getOrder = function () {
	return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.ondewo.s2t.TrainUserLanguageModelRequest} returns this
 */
proto.ondewo.s2t.TrainUserLanguageModelRequest.prototype.setOrder = function (value) {
	return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * @enum {number}
 */
proto.ondewo.s2t.Decoding = {
	DEFAULT: 0,
	GREEDY: 1,
	BEAM_SEARCH_WITH_LM: 2,
	BEAM_SEARCH: 3
};

goog.object.extend(exports, proto.ondewo.s2t);
