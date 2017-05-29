module.exports = {
  'Demo test Yahoo! JAPAN' : function (client) {
    client
      .url('https://www.yahoo.co.jp/')
      .waitForElementVisible('body', 4000)
      .assert.title('Yahoo! JAPAN')
      .click('button.cl-noclick-log')
      .waitForElementVisible('body', 4000)
      .assert.title('Yahoo!検索')
      .end();
  }
};