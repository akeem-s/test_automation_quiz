var chai        = require('chai'),
    assert      = chai.assert,
    webdriverio = require('webdriverio'),
    expect      = require('chai').expect,
    should      = chai.should(),
    sinon       = require('sinon')
    ;


describe('suite one tests', function(){

    this.timeout(99999999);
    var client;

    before(function(){
            client = webdriverio.remote({ desiredCapabilities: {browserName: 'phantomjs'} });
            return client.init();
    });



    describe('test initial load of 1stdibs.com', function(){
      // beforeEach(function(done) {
      //   client = webdriverio.remote({ desiredCapabilities: {browserName: 'phantomjs'} });
      //   return client.init();
      // });
      //
      // afterEach(function(done) {
      //   return client.end()
      // });

      it('1stdibs.com loads as expected',function() {
        return client
        .url('https://www.1stdibs.com')
        .getTagName('#home').then(function(body) {
          assert.strictEqual(body, 'body')
        })
        .end()
      });

    })

    describe('nav bar tests', function(){
        it('Furniture navbar link loads proper page', function(){
          return client.init()
          .url('https://www.1stdibs.com')
          .setViewportSize({width: 1124, height: 850}, false)
          .click("a[href='https://www.1stdibs.com/furniture/']")
          .getText('.browse-header-title').then(function (header){
            assert.strictEqual(header, 'Furniture')
          })
          .end()
        })

        it('Fine Art navbar link loads proper page', function(){
          return client.init()
          .url('https://www.1stdibs.com')
          .setViewportSize({width: 1124, height: 850}, false)
          .click("a[href='https://www.1stdibs.com/art/']")
          .getText('.browse-header-title').then(function (header){
            assert.strictEqual(header, 'Fine Art')
          })
          .end()
        })

        it('Jewelry navbar link loads proper page', function(){
          return client.init()
          .url('https://www.1stdibs.com')
          .setViewportSize({width: 1124, height: 850}, false)
          .click("a[href='https://www.1stdibs.com/jewelry/']")
          .getText('.browse-header-title').then(function (header){
            assert.strictEqual(header, 'Jewelry & Watches')
          })
          .end()
        })

        it('Fashion navbar link loads proper page', function(){
          return client.init()
          .url('https://www.1stdibs.com')
          .setViewportSize({width: 1124, height: 850}, false)
          .click("a[href='https://www.1stdibs.com/fashion/']")
          .getText('.browse-header-title').then(function (header){
            assert.strictEqual(header, 'Fashion')
          })
          .end()
        })

      })

    after(function() {
        return client.end();
    });
});
