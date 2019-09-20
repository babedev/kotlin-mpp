(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-coroutines-core', 'ktor-ktor-client-core', 'kotlinx-serialization-kotlinx-serialization-runtime'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-coroutines-core'), require('ktor-ktor-client-core'), require('kotlinx-serialization-kotlinx-serialization-runtime'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'app'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'app'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'app'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'app'.");
    }
    if (typeof this['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'app'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'app'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-runtime'] === 'undefined') {
      throw new Error("Error loading module 'app'. Its dependency 'kotlinx-serialization-kotlinx-serialization-runtime' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-runtime' is loaded prior to 'app'.");
    }
    root.app = factory(typeof app === 'undefined' ? {} : app, kotlin, this['kotlinx-coroutines-core'], this['ktor-ktor-client-core'], this['kotlinx-serialization-kotlinx-serialization-runtime']);
  }
}(this, function (_, Kotlin, $module$kotlinx_coroutines_core, $module$ktor_ktor_client_core, $module$kotlinx_serialization_kotlinx_serialization_runtime) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var url = $module$ktor_ktor_client_core.io.ktor.client.request.url_g8iu3v$;
  var Unit = Kotlin.kotlin.Unit;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var Json = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.json.Json;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var HttpClient = $module$ktor_ktor_client_core.io.ktor.client.HttpClient_f0veat$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var utils = $module$ktor_ktor_client_core.io.ktor.client.utils;
  var url_0 = $module$ktor_ktor_client_core.io.ktor.client.request.url_3rzbk2$;
  var HttpMethod = $module$ktor_ktor_client_core.$$importsForInline$$['ktor-ktor-http'].io.ktor.http.HttpMethod;
  var HttpRequestBuilder_init = $module$ktor_ktor_client_core.io.ktor.client.request.HttpRequestBuilder;
  var call = $module$ktor_ktor_client_core.io.ktor.client.call.call_30bfl5$;
  var throwCCE = Kotlin.throwCCE;
  var call_0 = $module$ktor_ktor_client_core.io.ktor.client.call;
  var TypeInfo_init = $module$ktor_ktor_client_core.io.ktor.client.call.TypeInfo;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var SerialClassDescImpl = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.SerialClassDescImpl;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.UnknownFieldException;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.GeneratedSerializer;
  var MissingFieldException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.MissingFieldException;
  var ArrayListSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.ArrayListSerializer;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function get$lambda($receiver) {
    return Unit;
  }
  function Api() {
    this.client_0 = HttpClient();
  }
  function Api$fetch$lambda$lambda($receiver) {
    url($receiver, 'https://www.eventpop.me/api/v1/collections');
    return Unit;
  }
  function Coroutine$Api$fetch$lambda(this$Api_0, closure$callback_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Api = this$Api_0;
    this.local$closure$callback = closure$callback_0;
  }
  Coroutine$Api$fetch$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Api$fetch$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Api$fetch$lambda.prototype.constructor = Coroutine$Api$fetch$lambda;
  Coroutine$Api$fetch$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.local$this$Api.client_0;
            var host;
            var body;
            host = 'localhost';
            body = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url_0($receiver_1, 'http', host, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body;
            Api$fetch$lambda$lambda($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(PrimitiveClasses$stringClass, call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = typeof (tmp$_0 = this.result_0) === 'string' ? tmp$_0 : throwCCE();
            this.result_0;
            var result = this.result_0;
            var collections = Json.Companion.nonstrict.parse_awif5v$(Collections$Companion_getInstance().serializer(), result);
            return this.local$closure$callback(collections);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Api$fetch$lambda(this$Api_0, closure$callback_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Api$fetch$lambda(this$Api_0, closure$callback_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Api.prototype.fetch_whrzt3$ = function (callback) {
    launch(coroutines.GlobalScope, applicationDispatcher, void 0, Api$fetch$lambda(this, callback));
  };
  Api.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Api',
    interfaces: []
  };
  function Collection(name, description) {
    Collection$Companion_getInstance();
    this.name = name;
    this.description = description;
  }
  function Collection$Companion() {
    Collection$Companion_instance = this;
  }
  Collection$Companion.prototype.serializer = function () {
    return Collection$$serializer_getInstance();
  };
  Collection$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Collection$Companion_instance = null;
  function Collection$Companion_getInstance() {
    if (Collection$Companion_instance === null) {
      new Collection$Companion();
    }
    return Collection$Companion_instance;
  }
  function Collection$$serializer() {
    this.descriptor_gob8dq$_0 = new SerialClassDescImpl('com.github.babedev.data.Collection', this);
    this.descriptor.addElement_ivxn3r$('name', false);
    this.descriptor.addElement_ivxn3r$('description', false);
    Collection$$serializer_instance = this;
  }
  Object.defineProperty(Collection$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_gob8dq$_0;
    }
  });
  Collection$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.name);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.description);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Collection$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Collection_init(bitMask0, local0, local1, null);
  };
  Collection$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer];
  };
  Collection$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Collection$$serializer_instance = null;
  function Collection$$serializer_getInstance() {
    if (Collection$$serializer_instance === null) {
      new Collection$$serializer();
    }
    return Collection$$serializer_instance;
  }
  function Collection_init(seen1, name, description, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Collection.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('name');
    else
      $this.name = name;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('description');
    else
      $this.description = description;
    return $this;
  }
  Collection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Collection',
    interfaces: []
  };
  Collection.prototype.component1 = function () {
    return this.name;
  };
  Collection.prototype.component2 = function () {
    return this.description;
  };
  Collection.prototype.copy_puj7f4$ = function (name, description) {
    return new Collection(name === void 0 ? this.name : name, description === void 0 ? this.description : description);
  };
  Collection.prototype.toString = function () {
    return 'Collection(name=' + Kotlin.toString(this.name) + (', description=' + Kotlin.toString(this.description)) + ')';
  };
  Collection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    return result;
  };
  Collection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.description, other.description)))));
  };
  function Collections(collections) {
    Collections$Companion_getInstance();
    this.collections = collections;
  }
  function Collections$Companion() {
    Collections$Companion_instance = this;
  }
  Collections$Companion.prototype.serializer = function () {
    return Collections$$serializer_getInstance();
  };
  Collections$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Collections$Companion_instance = null;
  function Collections$Companion_getInstance() {
    if (Collections$Companion_instance === null) {
      new Collections$Companion();
    }
    return Collections$Companion_instance;
  }
  function Collections$$serializer() {
    this.descriptor_ol6167$_0 = new SerialClassDescImpl('com.github.babedev.data.Collections', this);
    this.descriptor.addElement_ivxn3r$('collections', false);
    Collections$$serializer_instance = this;
  }
  Object.defineProperty(Collections$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_ol6167$_0;
    }
  });
  Collections$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, new ArrayListSerializer(Collection$$serializer_getInstance()), obj.collections);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Collections$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new ArrayListSerializer(Collection$$serializer_getInstance())) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new ArrayListSerializer(Collection$$serializer_getInstance()), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Collections_init(bitMask0, local0, null);
  };
  Collections$$serializer.prototype.childSerializers = function () {
    return [new ArrayListSerializer(Collection$$serializer_getInstance())];
  };
  Collections$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Collections$$serializer_instance = null;
  function Collections$$serializer_getInstance() {
    if (Collections$$serializer_instance === null) {
      new Collections$$serializer();
    }
    return Collections$$serializer_instance;
  }
  function Collections_init(seen1, collections, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Collections.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('collections');
    else
      $this.collections = collections;
    return $this;
  }
  Collections.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Collections',
    interfaces: []
  };
  Collections.prototype.component1 = function () {
    return this.collections;
  };
  Collections.prototype.copy_28gs6a$ = function (collections) {
    return new Collections(collections === void 0 ? this.collections : collections);
  };
  Collections.prototype.toString = function () {
    return 'Collections(collections=' + Kotlin.toString(this.collections) + ')';
  };
  Collections.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.collections) | 0;
    return result;
  };
  Collections.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.collections, other.collections))));
  };
  function hello() {
    return 'Hello from JS';
  }
  function Proxy() {
  }
  Proxy.prototype.proxyHello = function () {
    return hello();
  };
  Proxy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Proxy',
    interfaces: []
  };
  function main() {
    println(hello());
  }
  var applicationDispatcher;
  function Sample() {
  }
  Sample.prototype.checkMe = function () {
    return 8;
  };
  Sample.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sample',
    interfaces: []
  };
  function Platform() {
    Platform_instance = this;
    this.name = 'JS';
  }
  Platform.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Platform',
    interfaces: []
  };
  var Platform_instance = null;
  function Platform_getInstance() {
    if (Platform_instance === null) {
      new Platform();
    }
    return Platform_instance;
  }
  $$importsForInline$$['ktor-ktor-client-core'] = $module$ktor_ktor_client_core;
  var package$com = _.com || (_.com = {});
  var package$github = package$com.github || (package$com.github = {});
  var package$babedev = package$github.babedev || (package$github.babedev = {});
  var package$data = package$babedev.data || (package$babedev.data = {});
  package$data.Api = Api;
  Object.defineProperty(Collection, 'Companion', {
    get: Collection$Companion_getInstance
  });
  Object.defineProperty(Collection, '$serializer', {
    get: Collection$$serializer_getInstance
  });
  package$data.Collection_init_2u6d5w$ = Collection_init;
  package$data.Collection = Collection;
  Object.defineProperty(Collections, 'Companion', {
    get: Collections$Companion_getInstance
  });
  Object.defineProperty(Collections, '$serializer', {
    get: Collections$$serializer_getInstance
  });
  package$data.Collections_init_to2a5p$ = Collections_init;
  package$data.Collections = Collections;
  var package$sample = _.sample || (_.sample = {});
  package$sample.hello = hello;
  package$sample.Proxy = Proxy;
  package$sample.main = main;
  Object.defineProperty(package$data, 'applicationDispatcher_8be2vx$', {
    get: function () {
      return applicationDispatcher;
    }
  });
  package$sample.Sample = Sample;
  Object.defineProperty(package$sample, 'Platform', {
    get: Platform_getInstance
  });
  Collection$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  Collections$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  applicationDispatcher = coroutines.Dispatchers.Default;
  main();
  Kotlin.defineModule('app', _);
  return _;
}));

//# sourceMappingURL=app.js.map
