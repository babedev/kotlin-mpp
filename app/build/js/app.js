define(['exports', 'kotlin'], function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  function Api() {
  }
  Api.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Api',
    interfaces: []
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
  var package$com = _.com || (_.com = {});
  var package$github = package$com.github || (package$com.github = {});
  var package$babedev = package$github.babedev || (package$github.babedev = {});
  var package$data = package$babedev.data || (package$babedev.data = {});
  package$data.Api = Api;
  var package$sample = _.sample || (_.sample = {});
  package$sample.hello = hello;
  package$sample.Proxy = Proxy;
  package$sample.main = main;
  package$sample.Sample = Sample;
  Object.defineProperty(package$sample, 'Platform', {
    get: Platform_getInstance
  });
  main();
  Kotlin.defineModule('app', _);
  return _;
});

//# sourceMappingURL=app.js.map
