var chai = require("chai");
var assert = chai.assert;

// テストしたいjsファイルをモジュールとして登録
var source = require("../src/main.js");

describe("テストのテスト",function(){
    it("なんかやる",function(){
        assert;
        source;
    });

    // it("見せるテスト",function(){
    //     assert.equal(source.showInt(1),1);
    // });

    // it("1+1のテスト",function(){
    //     assert.equal(source.addInt(1,1),2);
    // });
});