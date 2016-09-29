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
    // return client.end()
    return client
    .url('https://www.1stdibs.com')
    .setViewportSize({width: 1124, height: 850}, false)
    .setValue('.search-box-input', 'Oak Wood Table')
    .submitForm('.search-box-form')
    .getText('.results-header-num-results').then(function(resultsHeader){
      assert.equal(resultsHeader, '2,540 results for')
    })
    .getText('.results-header-search-term').then(function(resultsHeader){
      assert.equal(resultsHeader, '"oak wood table"')
    })
    .end()
  })

  it('Cat Painting Search', function(){
    return client.init()
    .url('https://www.1stdibs.com')
    .setViewportSize({width: 1124, height: 850}, false)
    .setValue('.search-box-input', 'Cat Painting')
    .submitForm('.search-box-form')
    .getText('.results-header-num-results').then(function(resultsHeader){
      assert.equal(resultsHeader, '348 results for')
    })
    .getText('.results-header-search-term').then(function(resultsHeader){
      assert.equal(resultsHeader, '"cat painting"')
    })
    .end()
  })

  it('Gold Engagement Ring Search', function(){
    return client.init()
    .url('https://www.1stdibs.com')
    .setViewportSize({width: 1124, height: 850}, false)
    .setValue('.search-box-input', 'Gold Engagement Ring')
    .submitForm('.search-box-form')
    .getText('.results-header-num-results').then(function(resultsHeader){
      assert.equal(resultsHeader, '1,766 results for')
    })
    .getText('.results-header-search-term').then(function(resultsHeader){
      assert.equal(resultsHeader, '"gold engagement ring"')
    })
    .end()
  })

  it('Chanel Handbag Search', function(){
    return client.init()
    .url('https://www.1stdibs.com')
    .setViewportSize({width: 1124, height: 850}, false)
    .setValue('.search-box-input', 'Chanel Handbag')
    .submitForm('.search-box-form')
    .getText('.results-header-num-results').then(function(resultsHeader){
      assert.equal(resultsHeader, '1,505 results for')
    })
    .getText('.results-header-search-term').then(function(resultsHeader){
      assert.equal(resultsHeader, '"chanel handbag"')
    })
    .end()
  })

    after(function() {
      return client.end();
    });
});
