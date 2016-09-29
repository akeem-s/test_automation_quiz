var chai        = require('chai'),
    assert      = chai.assert,
    webdriverio = require('webdriverio'),
    expect      = require('chai').expect,
    should      = chai.should(),
    sinon       = require('sinon')
    ;

describe('suite two tests', function(){
  this.timeout(99999999);
  var client;

  before(function(){
    client = webdriverio.remote({ desiredCapabilities: {browserName: 'phantomjs'} });
    return client.init();
  });

  it('Oak Wood Table Search', function(){
    return client.end()
    return client.init()
    .url('https://www.1stdibs.com')
    .setViewportSize({width: 1124, height: 850}, false)
    .setValue('.search-box-input', 'Oak Wood Table')
    .submitForm('.search-box-form')
    .getText('.results-header-search-term').then(function(resultsHeader){
      assert.strictEqual(resultsHeader, 'Oak Wood Table')
    })
    .getText('.results-header-num-results').then(function(resultsHeader){
      assert.strictEqual(resultsHeader, '2,543 results for ')
    })
    .end()
  })

    after(function() {
      return client.end();
    });
});
