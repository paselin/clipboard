var chai = require("chai");
var assert = chai.assert;

// テストしたいjsファイルをモジュールとして登録
var source = require("../src/main.js");

describe("テストのテスト",function(){
    it("1+1のテスト",function(){
        assert.equal(source.addInt(1,1),2);
    });
});