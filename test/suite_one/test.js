var chai        = require('chai'),
    assert      = chai.assert,
    webdriverio = require('webdriverio'),
    expect      = require('chai').expect,
    should      = chai.should(),
    sinon       = require('sinon');

describe('suite one tests', function(){
  this.timeout(99999999);
  var client;

  before(function(){
    client = webdriverio.remote({ desiredCapabilities: {browserName: 'phantomjs'} });
    console.log("BEFORE STATEMENT")
    // return client.init();
  });

  // beforeEach(function(done) {
  //   // console.log("BEFORE EACH")
  //   return client.init()
  // });
  //
  // afterEach(function(done) {
    // return client.end()
    // console.log("AFTER EACH")
  // });

  it('1stdibs.com loads as expected',function() {
    return client.init()
    .url('https://www.1stdibs.com')
    .getTagName('#home').then(function(body) {
      assert.strictEqual(body, 'body')
    })
    .end()
  });

  it('Furniture navbar link loads proper page', function(){
    return client.init()
    .url('https://www.1stdibs.com')
    .setViewportSize({width: 1124, height: 850}, false)
    .click("a[href='https://www.1stdibs.com/furniture/']")
    .getText('.browse-header-title').then(function (header){
      assert.equal(header, 'Furniture')
    })
    .end()
  })

  it('Fine Art navbar link loads proper page', function(){
    return client.init()
    .url('https://www.1stdibs.com')
    .setViewportSize({width: 1124, height: 850}, false)
    .click("a[href='https://www.1stdibs.com/art/']")
    .getText('.browse-header-title').then(function (header){
      assert.equal(header, 'Fine Art')
    })
    .end()
  })

  it('Jewelry navbar link loads proper page', function(){
    return client.init()
    .url('https://www.1stdibs.com')
    .setViewportSize({width: 1124, height: 850}, false)
    .click("a[href='https://www.1stdibs.com/jewelry/']")
    .getText('.browse-header-title').then(function (header){
      assert.equal(header, 'Jewelry & Watches')
    })
    .end()
  })

  it('Fashion navbar link loads proper page', function(){
    return client.init()
    .url('https://www.1stdibs.com')
    .setViewportSize({width: 1124, height: 850}, false)
    .click("a[href='https://www.1stdibs.com/fashion/']")
    .getText('.browse-header-title').then(function (header){
      assert.equal(header, 'Fashion')
    })
    .end()
  })

  after(function() {
    console.log("AFTER")
    return client.end();
  });
});
